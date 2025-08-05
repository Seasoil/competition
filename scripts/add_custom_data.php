<?php
/**
 * 自定义数据添加脚本
 * 用于批量添加或更新数据
 */
require_once '../api/config/database.php';

$database = new Database();
$db = $database->getConnection();

echo "开始添加自定义数据...\n\n";

try {
    // 1. 添加新的节气数据
    echo "1. 添加新节气数据...\n";
    addCustomSolarTerms($db);
    
    // 2. 添加新的农谚数据
    echo "2. 添加新农谚数据...\n";
    addCustomProverbs($db);
    
    // 3. 添加新的知识分类
    echo "3. 添加新知识分类...\n";
    addCustomCategories($db);
    
    // 4. 添加新的知识节点
    echo "4. 添加新知识节点...\n";
    addCustomKnowledge($db);
    
    echo "\n自定义数据添加完成！\n";
    
} catch(Exception $e) {
    echo "添加失败: " . $e->getMessage() . "\n";
}

/**
 * 添加自定义节气数据
 */
function addCustomSolarTerms($db) {
    // 示例：添加额外的节气信息或修正现有数据
    $customTerms = [
        // 如果要添加新的节气变体或地方节气
        ['name' => '春龙节', 'season' => '春', 'date_range' => '2月2日', 'desc' => '民间传统节日，春耕开始的象征'],
        ['name' => '三伏天', 'season' => '夏', 'date_range' => '7月中旬-8月中旬', 'desc' => '一年中最热的时期，需加强田间管理'],
    ];
    
    $query = "INSERT INTO solar_terms (name, season, date_range, description) VALUES (?, ?, ?, ?) 
             ON DUPLICATE KEY UPDATE description = VALUES(description)";
    $stmt = $db->prepare($query);
    
    foreach($customTerms as $term) {
        $stmt->execute([$term['name'], $term['season'], $term['date_range'], $term['desc']]);
        echo "  - 添加节气: {$term['name']}\n";
    }
}

/**
 * 添加自定义农谚数据
 */
function addCustomProverbs($db) {
    // 获取分类ID
    $query = "SELECT id, name FROM proverb_categories WHERE name LIKE '%春季%'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $springCategory = $stmt->fetch();
    $categoryId = $springCategory['id'] ?? 1;
    
    // 新的农谚数据
    $customProverbs = [
        [
            'content' => '立春一日，百草回芽',
            'description' => '立春之后，万物开始复苏，农事活动要及时跟上',
            'month' => 2,
            'season' => '春',
            'tags' => ['立春', '复苏', '农事']
        ],
        [
            'content' => '夏至不过不热，冬至不过不冷',
            'description' => '气候变化的规律，指导农业生产安排',
            'month' => 6,
            'season' => '夏',
            'tags' => ['夏至', '气候', '规律']
        ],
        [
            'content' => '秋分早，霜降迟，寒露种麦正当时',
            'description' => '播种冬小麦的最佳时机选择',
            'month' => 10,
            'season' => '秋',
            'tags' => ['寒露', '小麦', '播种']
        ]
    ];
    
    $query = "INSERT INTO proverbs (category_id, content, description, month, season, tags, value) 
             VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $db->prepare($query);
    
    foreach($customProverbs as $proverb) {
        $stmt->execute([
            $categoryId,
            $proverb['content'],
            $proverb['description'],
            $proverb['month'],
            $proverb['season'],
            json_encode($proverb['tags']),
            1
        ]);
        echo "  - 添加农谚: {$proverb['content']}\n";
    }
}

/**
 * 添加自定义知识分类
 */
function addCustomCategories($db) {
    $customCategories = [
        ['name' => '现代农业技术', 'description' => '现代化农业生产技术和设备', 'color' => '#e74c3c'],
        ['name' => '有机农业', 'description' => '有机农业生产方法和认证', 'color' => '#27ae60'],
        ['name' => '智慧农业', 'description' => '物联网、AI等技术在农业中的应用', 'color' => '#3498db'],
        ['name' => '地方特色农业', 'description' => '各地区特色农产品和种植方法', 'color' => '#f39c12']
    ];
    
    $query = "INSERT INTO knowledge_categories (name, description, color) VALUES (?, ?, ?) 
             ON DUPLICATE KEY UPDATE description = VALUES(description), color = VALUES(color)";
    $stmt = $db->prepare($query);
    
    foreach($customCategories as $category) {
        $stmt->execute([$category['name'], $category['description'], $category['color']]);
        echo "  - 添加分类: {$category['name']}\n";
    }
}

/**
 * 添加自定义知识节点
 */
function addCustomKnowledge($db) {
    // 获取现代农业技术分类ID
    $query = "SELECT id FROM knowledge_categories WHERE name = '现代农业技术'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $category = $stmt->fetch();
    $categoryId = $category['id'] ?? 1;
    
    $customKnowledge = [
        [
            'name' => '无土栽培',
            'description' => '不使用土壤，用营养液栽培植物的技术',
            'data' => json_encode([
                'advantages' => ['节水', '高产', '无污染', '可控环境'],
                'applications' => ['蔬菜生产', '花卉栽培', '科研实验'],
                'types' => ['水培', '雾培', '基质培']
            ])
        ],
        [
            'name' => '精准农业',
            'description' => '利用GPS、传感器等技术进行精确农业管理',
            'data' => json_encode([
                'technologies' => ['GPS定位', '传感器监测', '变量施肥', '自动灌溉'],
                'benefits' => ['提高效率', '降低成本', '减少污染', '增加产量']
            ])
        ]
    ];
    
    $query = "INSERT INTO knowledge_nodes (name, category_id, description, data, level, sort_order) 
             VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $db->prepare($query);
    
    foreach($customKnowledge as $index => $knowledge) {
        $stmt->execute([
            $knowledge['name'],
            $categoryId,
            $knowledge['description'],
            $knowledge['data'],
            0,
            $index
        ]);
        echo "  - 添加知识点: {$knowledge['name']}\n";
    }
}
?>