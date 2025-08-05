<?php
/**
 * 农谚API接口
 */
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];
$request = isset($_GET['action']) ? $_GET['action'] : '';

switch($method) {
    case 'GET':
        switch($request) {
            case 'all':
                getAllProverbs($db);
                break;
            case 'by_season':
                getProverbsBySeason($db);
                break;
            case 'by_month':
                getProverbsByMonth($db);
                break;
            case 'wordcloud_data':
                getWordCloudData($db);
                break;
            case 'tree_data':
                getTreeData($db);
                break;
            default:
                getAllProverbs($db);
        }
        break;
    case 'POST':
        addProverb($db);
        break;
    default:
        errorResponse('不支持的请求方法', 405);
}

/**
 * 获取所有农谚
 */
function getAllProverbs($db) {
    try {
        $query = "SELECT p.*, pc.name as category_name, pc.color 
                 FROM proverbs p 
                 JOIN proverb_categories pc ON p.category_id = pc.id 
                 ORDER BY p.month, p.id";
        
        $stmt = $db->prepare($query);
        $stmt->execute();
        $proverbs = $stmt->fetchAll();
        
        successResponse($proverbs);
    } catch(Exception $e) {
        errorResponse('获取农谚失败: ' . $e->getMessage());
    }
}

/**
 * 按季节获取农谚
 */
function getProverbsBySeason($db) {
    $season = isset($_GET['season']) ? $_GET['season'] : '';
    
    if (empty($season)) {
        errorResponse('请指定季节参数');
    }
    
    try {
        $query = "SELECT p.*, pc.name as category_name, pc.color 
                 FROM proverbs p 
                 JOIN proverb_categories pc ON p.category_id = pc.id 
                 WHERE p.season = ? 
                 ORDER BY p.month, p.id";
        
        $stmt = $db->prepare($query);
        $stmt->execute([$season]);
        $proverbs = $stmt->fetchAll();
        
        successResponse($proverbs);
    } catch(Exception $e) {
        errorResponse('获取季节农谚失败: ' . $e->getMessage());
    }
}

/**
 * 按月份获取农谚
 */
function getProverbsByMonth($db) {
    $month = isset($_GET['month']) ? intval($_GET['month']) : 0;
    
    if ($month < 1 || $month > 12) {
        errorResponse('请指定有效的月份(1-12)');
    }
    
    try {
        $query = "SELECT p.*, pc.name as category_name, pc.color 
                 FROM proverbs p 
                 JOIN proverb_categories pc ON p.category_id = pc.id 
                 WHERE p.month = ? 
                 ORDER BY p.id";
        
        $stmt = $db->prepare($query);
        $stmt->execute([$month]);
        $proverbs = $stmt->fetchAll();
        
        successResponse($proverbs);
    } catch(Exception $e) {
        errorResponse('获取月份农谚失败: ' . $e->getMessage());
    }
}

/**
 * 获取词云数据
 */
function getWordCloudData($db) {
    try {
        // 获取农谚内容进行词频统计
        $query = "SELECT content FROM proverbs";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $proverbs = $stmt->fetchAll(PDO::FETCH_COLUMN);
        
        // 简单的词频统计（这里可以使用更复杂的中文分词）
        $word_count = [];
        $common_words = ['的', '了', '在', '是', '我', '有', '和', '就', '不', '人', '都', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        
        foreach($proverbs as $proverb) {
            // 移除标点符号
            $text = preg_replace('/[，。；！？、]/u', ' ', $proverb);
            // 按字符分割（简单处理）
            $chars = mb_str_split($text);
            
            foreach($chars as $char) {
                $char = trim($char);
                if (!empty($char) && !in_array($char, $common_words) && mb_strlen($char) > 0) {
                    $word_count[$char] = ($word_count[$char] ?? 0) + 1;
                }
            }
        }
        
        // 转换为词云格式
        arsort($word_count);
        $wordcloud_data = [];
        $count = 0;
        foreach($word_count as $word => $freq) {
            if ($count++ > 100) break; // 限制词汇数量
            if ($freq > 2) { // 只显示出现频率大于2的词
                $wordcloud_data[] = [
                    'name' => $word,
                    'value' => $freq
                ];
            }
        }
        
        successResponse($wordcloud_data);
    } catch(Exception $e) {
        errorResponse('生成词云数据失败: ' . $e->getMessage());
    }
}

/**
 * 获取树状图数据
 */
function getTreeData($db) {
    try {
        // 按季节和月份组织农谚数据
        $query = "SELECT p.*, pc.name as category_name, pc.color 
                 FROM proverbs p 
                 JOIN proverb_categories pc ON p.category_id = pc.id 
                 ORDER BY 
                 CASE p.season 
                     WHEN '春' THEN 1 
                     WHEN '夏' THEN 2 
                     WHEN '秋' THEN 3 
                     WHEN '冬' THEN 4 
                 END, p.month, p.id";
        
        $stmt = $db->prepare($query);
        $stmt->execute();
        $proverbs = $stmt->fetchAll();
        
        // 构建树状结构
        $tree_data = [];
        $seasons = ['春', '夏', '秋', '冬'];
        $season_colors = [
            '春' => '#6DA65D',
            '夏' => '#FFB74D', 
            '秋' => '#F44336',
            '冬' => '#2196F3'
        ];
        
        foreach($seasons as $season) {
            $season_node = [
                'name' => $season,
                'itemStyle' => ['color' => $season_colors[$season]],
                'children' => []
            ];
            
            // 按月份分组
            $months = [];
            foreach($proverbs as $proverb) {
                if ($proverb['season'] === $season) {
                    $month_key = $proverb['month'] . '月';
                    if (!isset($months[$month_key])) {
                        $months[$month_key] = [
                            'name' => $month_key,
                            'itemStyle' => ['color' => $season_colors[$season] . '80'],
                            'children' => []
                        ];
                    }
                    
                    $months[$month_key]['children'][] = [
                        'name' => mb_substr($proverb['content'], 0, 20) . (mb_strlen($proverb['content']) > 20 ? '...' : ''),
                        'desc' => $proverb['description'],
                        'value' => $proverb['value'],
                        'tags' => json_decode($proverb['tags']) ?? []
                    ];
                }
            }
            
            $season_node['children'] = array_values($months);
            $tree_data[] = $season_node;
        }
        
        successResponse($tree_data);
    } catch(Exception $e) {
        errorResponse('获取树状数据失败: ' . $e->getMessage());
    }
}

/**
 * 添加新农谚
 */
function addProverb($db) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['content']) || !isset($input['category_id']) || !isset($input['month']) || !isset($input['season'])) {
        errorResponse('缺少必要参数');
    }
    
    try {
        $query = "INSERT INTO proverbs (category_id, content, description, month, season, tags, value) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($query);
        $result = $stmt->execute([
            $input['category_id'],
            $input['content'],
            $input['description'] ?? '',
            $input['month'],
            $input['season'],
            json_encode($input['tags'] ?? []),
            $input['value'] ?? 1
        ]);
        
        if ($result) {
            $new_id = $db->lastInsertId();
            successResponse(['id' => $new_id], '农谚添加成功');
        } else {
            errorResponse('农谚添加失败');
        }
    } catch(Exception $e) {
        errorResponse('添加农谚失败: ' . $e->getMessage());
    }
}
?>