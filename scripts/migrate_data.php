<?php
/**
 * 数据迁移脚本 - 将现有JSON数据导入数据库
 */
require_once '../api/config/database.php';

$database = new Database();
$db = $database->getConnection();

echo "开始数据迁移...\n\n";

try {
    // 1. 初始化农学知识分类
    echo "1. 初始化农学知识分类...\n";
    initializeKnowledgeCategories($db);
    
    // 2. 迁移农学知识数据
    echo "2. 迁移农学知识数据...\n";
    migrateKnowledgeData($db);
    
    // 3. 初始化节气数据
    echo "3. 初始化节气数据...\n";
    initializeSolarTerms($db);
    
    // 4. 迁移农谚数据
    echo "4. 迁移农谚数据...\n";
    migrateProverbsData($db);
    
    // 5. 创建管理员账户
    echo "5. 创建管理员账户...\n";
    createAdminUser($db);
    
    echo "\n数据迁移完成！\n";
    
} catch(Exception $e) {
    echo "迁移失败: " . $e->getMessage() . "\n";
}

/**
 * 初始化农学知识分类
 */
function initializeKnowledgeCategories($db) {
    $categories = [
        ['name' => '农事占候', 'description' => '研究天时、物候、气象等农事征兆的学问', 'color' => '#5470c6'],
        ['name' => '农器', 'description' => '古代农业生产中使用的各类工具和器械', 'color' => '#91cc75'],
        ['name' => '树艺', 'description' => '种植和培育各类农作物的技术', 'color' => '#fac858'],
        ['name' => '木本植物', 'description' => '具有木质茎的多年生植物', 'color' => '#ee6666'],
        ['name' => '牧养六畜', 'description' => '古代畜牧养殖的主要动物', 'color' => '#73c0de'],
        ['name' => '救荒本草', 'description' => '救荒时期可食用的野生植物', 'color' => '#3ba272'],
        ['name' => '境外作物', 'description' => '从境外引进的农作物品种', 'color' => '#fc8452']
    ];
    
    $query = "INSERT INTO knowledge_categories (name, description, color) VALUES (?, ?, ?) 
             ON DUPLICATE KEY UPDATE description = VALUES(description), color = VALUES(color)";
    $stmt = $db->prepare($query);
    
    foreach($categories as $category) {
        $stmt->execute([$category['name'], $category['description'], $category['color']]);
        echo "  - 添加分类: {$category['name']}\n";
    }
}

/**
 * 迁移农学知识数据
 */
function migrateKnowledgeData($db) {
    // 读取现有的JSON数据
    $json_file = '../第二界面/data/data.json';
    if (!file_exists($json_file)) {
        echo "  警告: 找不到农学数据文件\n";
        return;
    }
    
    $json_data = json_decode(file_get_contents($json_file), true);
    
    if (!$json_data || !isset($json_data['nodes'])) {
        echo "  警告: 农学数据格式不正确\n";
        return;
    }
    
    // 获取分类ID映射
    $query = "SELECT id, name FROM knowledge_categories";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $categories = $stmt->fetchAll();
    $category_map = [];
    foreach($categories as $cat) {
        $category_map[$cat['name']] = $cat['id'];
    }
    
    // 插入节点的递归函数
    function insertNodes($nodes, $db, $category_map, $parent_id = null, $level = 0) {
        $node_query = "INSERT INTO knowledge_nodes (name, category_id, parent_id, level, description, data, sort_order) 
                      VALUES (?, ?, ?, ?, ?, ?, ?)";
        $node_stmt = $db->prepare($node_query);
        
        $rel_query = "INSERT INTO node_relationships (source_id, target_id, relationship_type) VALUES (?, ?, ?)";
        $rel_stmt = $db->prepare($rel_query);
        
        foreach($nodes as $index => $node) {
            $node_name = $node['name'] ?? '';
            if (empty($node_name)) continue;
            
            // 确定分类ID
            $category_id = null;
            if ($level === 0) {
                // 顶级节点，查找对应分类
                foreach($category_map as $cat_name => $cat_id) {
                    if ($cat_name === $node_name) {
                        $category_id = $cat_id;
                        break;
                    }
                }
            } else {
                // 子节点，继承父节点分类
                $parent_query = "SELECT category_id FROM knowledge_nodes WHERE id = ?";
                $parent_stmt = $db->prepare($parent_query);
                $parent_stmt->execute([$parent_id]);
                $parent_data = $parent_stmt->fetch();
                $category_id = $parent_data['category_id'] ?? 1;
            }
            
            if (!$category_id) {
                $category_id = 1; // 默认分类
            }
            
            // 准备扩展数据
            $extended_data = [];
            foreach($node as $key => $value) {
                if (!in_array($key, ['name', 'children', 'description'])) {
                    $extended_data[$key] = $value;
                }
            }
            
            // 插入节点
            $node_stmt->execute([
                $node_name,
                $category_id,
                $parent_id,
                $level,
                $node['description'] ?? '',
                !empty($extended_data) ? json_encode($extended_data) : null,
                $index
            ]);
            
            $new_node_id = $db->lastInsertId();
            echo "  - 添加节点: {$node_name} (Level: {$level})\n";
            
            // 创建关系
            if ($parent_id) {
                $rel_stmt->execute([$parent_id, $new_node_id, 'parent-child']);
            }
            
            // 递归处理子节点
            if (isset($node['children'])) {
                if (is_array($node['children'])) {
                    insertNodes($node['children'], $db, $category_map, $new_node_id, $level + 1);
                } else {
                    // 单个子节点
                    insertNodes([$node['children']], $db, $category_map, $new_node_id, $level + 1);
                }
            }
        }
    }
    
    // 开始插入数据
    insertNodes($json_data['nodes'], $db, $category_map);
}

/**
 * 初始化节气数据
 */
function initializeSolarTerms($db) {
    $solar_terms = [
        ['name' => '立春', 'season' => '春', 'date_range' => '2月3-5日', 'desc' => '春耕备耕开始，检查农具，准备早稻育秧'],
        ['name' => '雨水', 'season' => '春', 'date_range' => '2月18-20日', 'desc' => '冬小麦开始返青，江南地区油菜追肥'],
        ['name' => '惊蛰', 'season' => '春', 'date_range' => '3月5-7日', 'desc' => '春耕全面展开，防治越冬害虫，果树修剪'],
        ['name' => '春分', 'season' => '春', 'date_range' => '3月20-22日', 'desc' => '春播作物播种关键期，小麦进入拔节期'],
        ['name' => '清明', 'season' => '春', 'date_range' => '4月4-6日', 'desc' => '早稻插秧，玉米播种，茶园春管关键期'],
        ['name' => '谷雨', 'season' => '春', 'date_range' => '4月19-21日', 'desc' => '水稻移栽，棉花播种，防治小麦赤霉病'],
        
        ['name' => '立夏', 'season' => '夏', 'date_range' => '5月5-7日', 'desc' => '夏收作物灌浆关键期，早稻分蘖肥施用'],
        ['name' => '小满', 'season' => '夏', 'date_range' => '5月20-22日', 'desc' => '小麦籽粒饱满，油菜收获，水稻晒田控蘖'],
        ['name' => '芒种', 'season' => '夏', 'date_range' => '6月5-7日', 'desc' => '夏收夏种关键期，抢收小麦，播种晚稻'],
        ['name' => '夏至', 'season' => '夏', 'date_range' => '6月21-22日', 'desc' => '中稻追肥，棉花整枝，防治水稻纹枯病'],
        ['name' => '小暑', 'season' => '夏', 'date_range' => '7月6-8日', 'desc' => '早稻收割，晚稻移栽，玉米追肥'],
        ['name' => '大暑', 'season' => '夏', 'date_range' => '7月22-24日', 'desc' => '双季稻区抢收抢种，抗旱保苗关键期'],
        
        ['name' => '立秋', 'season' => '秋', 'date_range' => '8月7-9日', 'desc' => '水稻孕穗期管理，玉米授粉期，棉花打顶'],
        ['name' => '处暑', 'season' => '秋', 'date_range' => '8月22-24日', 'desc' => '水稻防早衰，玉米灌浆期管理，果园施肥'],
        ['name' => '白露', 'season' => '秋', 'date_range' => '9月7-9日', 'desc' => '晚稻抽穗扬花期，冬小麦备耕，采摘秋茶'],
        ['name' => '秋分', 'season' => '秋', 'date_range' => '9月22-24日', 'desc' => '秋收秋种关键期，收获中稻，播种冬小麦'],
        ['name' => '寒露', 'season' => '秋', 'date_range' => '10月8-9日', 'desc' => '收获晚稻，播种油菜，果树秋季修剪'],
        ['name' => '霜降', 'season' => '秋', 'date_range' => '10月23-24日', 'desc' => '冬小麦出苗管理，蔬菜大棚防寒准备'],
        
        ['name' => '立冬', 'season' => '冬', 'date_range' => '11月7-8日', 'desc' => '农田水利建设，油菜越冬管理，果树培土'],
        ['name' => '小雪', 'season' => '冬', 'date_range' => '11月22-23日', 'desc' => '冬小麦冬灌，蔬菜储藏，果园清园消毒'],
        ['name' => '大雪', 'season' => '冬', 'date_range' => '12月6-8日', 'desc' => '农田休耕养地，温室大棚温度调控'],
        ['name' => '冬至', 'season' => '冬', 'date_range' => '12月21-23日', 'desc' => '积肥造肥，果树防冻，冬季修剪'],
        ['name' => '小寒', 'season' => '冬', 'date_range' => '1月5-7日', 'desc' => '越冬作物防冻害，温室作物光照管理'],
        ['name' => '大寒', 'season' => '冬', 'date_range' => '1月20-21日', 'desc' => '农业机械保养，春耕物资准备，土壤改良']
    ];
    
    $query = "INSERT INTO solar_terms (name, season, date_range, description) VALUES (?, ?, ?, ?) 
             ON DUPLICATE KEY UPDATE description = VALUES(description)";
    $stmt = $db->prepare($query);
    
    foreach($solar_terms as $term) {
        $stmt->execute([$term['name'], $term['season'], $term['date_range'], $term['desc']]);
        echo "  - 添加节气: {$term['name']}\n";
    }
}

/**
 * 迁移农谚数据
 */
function migrateProverbsData($db) {
    // 先创建农谚分类
    $categories = [
        ['name' => '春季农谚', 'description' => '关于春季农事的谚语', 'color' => '#6DA65D'],
        ['name' => '夏季农谚', 'description' => '关于夏季农事的谚语', 'color' => '#FFB74D'],
        ['name' => '秋季农谚', 'description' => '关于秋季农事的谚语', 'color' => '#F44336'],
        ['name' => '冬季农谚', 'description' => '关于冬季农事的谚语', 'color' => '#2196F3']
    ];
    
    $cat_query = "INSERT INTO proverb_categories (name, description, color) VALUES (?, ?, ?) 
                  ON DUPLICATE KEY UPDATE description = VALUES(description)";
    $cat_stmt = $db->prepare($cat_query);
    
    foreach($categories as $category) {
        $cat_stmt->execute([$category['name'], $category['description'], $category['color']]);
        echo "  - 添加农谚分类: {$category['name']}\n";
    }
    
    // 读取农谚JSON数据
    $proverbs_file = '../第一界面/节气界面/data/proverbs.json';
    if (!file_exists($proverbs_file)) {
        echo "  警告: 找不到农谚数据文件\n";
        return;
    }
    
    $proverbs_data = json_decode(file_get_contents($proverbs_file), true);
    if (!$proverbs_data) {
        echo "  警告: 农谚数据格式不正确\n";
        return;
    }
    
    // 获取分类ID映射
    $query = "SELECT id, name FROM proverb_categories";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $categories = $stmt->fetchAll();
    $category_map = [];
    foreach($categories as $cat) {
        if (strpos($cat['name'], '春季') !== false) $category_map['春'] = $cat['id'];
        if (strpos($cat['name'], '夏季') !== false) $category_map['夏'] = $cat['id'];
        if (strpos($cat['name'], '秋季') !== false) $category_map['秋'] = $cat['id'];
        if (strpos($cat['name'], '冬季') !== false) $category_map['冬'] = $cat['id'];
    }
    
    // 插入农谚数据
    $proverb_query = "INSERT INTO proverbs (category_id, content, description, month, season, tags, value) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)";
    $proverb_stmt = $db->prepare($proverb_query);
    
    $count = 0;
    foreach($proverbs_data as $season_data) {
        $season = $season_data['name'];
        $category_id = $category_map[$season] ?? 1;
        
        if (isset($season_data['children'])) {
            foreach($season_data['children'] as $month_data) {
                $month_name = $month_data['name'];
                $month = (int)str_replace('月', '', $month_name);
                
                if (isset($month_data['children'])) {
                    foreach($month_data['children'] as $proverb) {
                        $proverb_stmt->execute([
                            $category_id,
                            $proverb['name'],
                            $proverb['desc'] ?? '',
                            $month,
                            $season,
                            json_encode($proverb['tags'] ?? []),
                            $proverb['value'] ?? 1
                        ]);
                        $count++;
                    }
                }
            }
        }
    }
    
    echo "  - 成功导入 {$count} 条农谚\n";
}

/**
 * 创建管理员账户
 */
function createAdminUser($db) {
    $query = "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?) 
             ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)";
    $stmt = $db->prepare($query);
    
    $admin_password = password_hash('admin123', PASSWORD_DEFAULT);
    $stmt->execute(['admin', 'admin@agriculture.com', $admin_password, 'admin']);
    
    echo "  - 创建管理员账户: admin / admin123\n";
}
?>