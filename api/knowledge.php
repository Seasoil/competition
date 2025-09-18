<?php
/**
 * 农学知识API接口
 */
require_once 'config/database.php';

// 设置响应头
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$database = new Database();
$db = $database->getConnection();

$method = $_SERVER['REQUEST_METHOD'];
$request = isset($_GET['action']) ? $_GET['action'] : '';

switch($method) {
    case 'GET':
        switch($request) {
            case 'categories':
                getCategories($db);
                break;
            case 'nodes':
                getNodes($db);
                break;
            case 'graph_data':
                getGraphData($db);
                break;
            case 'search':
                searchNodes($db);
                break;
            case 'node_detail':
                getNodeDetail($db);
                break;
            default:
                getGraphData($db);
        }
        break;
    case 'POST':
        if ($request === 'node') {
            addNode($db);
        } elseif ($request === 'category') {
            addCategory($db);
        }
        break;
    default:
        errorResponse('不支持的请求方法', 405);
}

/**
 * 获取所有分类
 */
function getCategories($db) {
    try {
        $query = "SELECT * FROM knowledge_categories ORDER BY id";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $categories = $stmt->fetchAll();
        
        successResponse($categories);
    } catch(Exception $e) {
        errorResponse('获取分类失败: ' . $e->getMessage());
    }
}

/**
 * 获取知识节点
 */
function getNodes($db) {
    $category_id = isset($_GET['category_id']) ? intval($_GET['category_id']) : 0;
    
    try {
        if ($category_id > 0) {
            $query = "SELECT n.*, c.name as category_name, c.color as category_color 
                     FROM knowledge_nodes n 
                     JOIN knowledge_categories c ON n.category_id = c.id 
                     WHERE n.category_id = ? AND n.is_active = 1 
                     ORDER BY n.level, n.sort_order";
            $stmt = $db->prepare($query);
            $stmt->execute([$category_id]);
        } else {
            $query = "SELECT n.*, c.name as category_name, c.color as category_color 
                     FROM knowledge_nodes n 
                     JOIN knowledge_categories c ON n.category_id = c.id 
                     WHERE n.is_active = 1 
                     ORDER BY n.category_id, n.level, n.sort_order";
            $stmt = $db->prepare($query);
            $stmt->execute();
        }
        
        $nodes = $stmt->fetchAll();
        successResponse($nodes);
    } catch(Exception $e) {
        errorResponse('获取节点失败: ' . $e->getMessage());
    }
}

/**
 * 获取力导向图数据
 */
function getGraphData($db) {
    try {
        // 获取分类信息
        $query_categories = "SELECT * FROM knowledge_categories ORDER BY id";
        $stmt = $db->prepare($query_categories);
        $stmt->execute();
        $categories = $stmt->fetchAll();
        
        // 获取节点信息
        $query_nodes = "SELECT n.*, c.color as category_color 
                       FROM knowledge_nodes n 
                       JOIN knowledge_categories c ON n.category_id = c.id 
                       WHERE n.is_active = 1 
                       ORDER BY n.id";
        $stmt = $db->prepare($query_nodes);
        $stmt->execute();
        $nodes = $stmt->fetchAll();
        
        // 获取关系信息
        $query_links = "SELECT source_id, target_id, weight FROM node_relationships";
        $stmt = $db->prepare($query_links);
        $stmt->execute();
        $relationships = $stmt->fetchAll();
        
        // 转换为ECharts格式
        $graph_nodes = [];
        $node_map = [];
        
        foreach($nodes as $index => $node) {
            $node_map[$node['id']] = $index;
            $graph_nodes[] = [
                'id' => $index,
                'name' => $node['name'],
                'category' => $node['category_id'] - 1, // ECharts分类从0开始
                'symbolSize' => max(8 - $node['level'] * 1.2, 3),
                'itemStyle' => [
                    'borderWidth' => 0,
                    'color' => $node['category_color'] . 'CC',
                    'opacity' => 0.9
                ],
                'data' => $node['data'] ? json_decode($node['data'], true) : null,
                'description' => $node['description'],
                'level' => $node['level']
            ];
        }
        
        // 转换关系
        $graph_links = [];
        foreach($relationships as $rel) {
            if (isset($node_map[$rel['source_id']]) && isset($node_map[$rel['target_id']])) {
                $graph_links[] = [
                    'source' => $node_map[$rel['source_id']],
                    'target' => $node_map[$rel['target_id']],
                    'value' => $rel['weight']
                ];
            }
        }
        
        $result = [
            'categories' => $categories,
            'nodes' => $graph_nodes,
            'links' => $graph_links
        ];
        
        successResponse($result);
    } catch(Exception $e) {
        errorResponse('获取图数据失败: ' . $e->getMessage());
    }
}

/**
 * 搜索节点
 */
function searchNodes($db) {
    $keyword = isset($_GET['keyword']) ? trim($_GET['keyword']) : '';
    
    if (empty($keyword)) {
        errorResponse('请输入搜索关键词');
    }
    
    try {
        $query = "SELECT n.*, c.name as category_name 
                 FROM knowledge_nodes n 
                 JOIN knowledge_categories c ON n.category_id = c.id 
                 WHERE n.name LIKE ? OR n.description LIKE ? 
                 AND n.is_active = 1 
                 ORDER BY n.level 
                 LIMIT 20";
        
        $search_term = '%' . $keyword . '%';
        $stmt = $db->prepare($query);
        $stmt->execute([$search_term, $search_term]);
        $results = $stmt->fetchAll();
        
        successResponse($results);
    } catch(Exception $e) {
        errorResponse('搜索失败: ' . $e->getMessage());
    }
}

/**
 * 获取节点详情
 */
function getNodeDetail($db) {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    
    if ($id <= 0) {
        errorResponse('请指定有效的节点ID');
    }
    
    try {
        // 获取节点基本信息
        $query = "SELECT n.*, c.name as category_name, c.description as category_desc 
                 FROM knowledge_nodes n 
                 JOIN knowledge_categories c ON n.category_id = c.id 
                 WHERE n.id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $node = $stmt->fetch();
        
        if (!$node) {
            errorResponse('节点不存在', 404);
        }
        
        // 获取子节点
        $query_children = "SELECT * FROM knowledge_nodes WHERE parent_id = ? AND is_active = 1 ORDER BY sort_order";
        $stmt = $db->prepare($query_children);
        $stmt->execute([$id]);
        $children = $stmt->fetchAll();
        
        // 获取相关节点
        $query_related = "SELECT n2.id, n2.name, n2.description 
                         FROM node_relationships r 
                         JOIN knowledge_nodes n2 ON (r.target_id = n2.id OR r.source_id = n2.id)
                         WHERE (r.source_id = ? OR r.target_id = ?) 
                         AND n2.id != ? AND n2.is_active = 1 
                         LIMIT 10";
        $stmt = $db->prepare($query_related);
        $stmt->execute([$id, $id, $id]);
        $related = $stmt->fetchAll();
        
        $result = [
            'node' => $node,
            'children' => $children,
            'related' => $related
        ];
        
        successResponse($result);
    } catch(Exception $e) {
        errorResponse('获取节点详情失败: ' . $e->getMessage());
    }
}

/**
 * 添加新节点
 */
function addNode($db) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['name']) || !isset($input['category_id'])) {
        errorResponse('缺少必要参数');
    }
    
    try {
        $query = "INSERT INTO knowledge_nodes (name, category_id, parent_id, level, description, data, sort_order) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $db->prepare($query);
        $result = $stmt->execute([
            $input['name'],
            $input['category_id'],
            $input['parent_id'] ?? null,
            $input['level'] ?? 0,
            $input['description'] ?? '',
            isset($input['data']) ? json_encode($input['data']) : null,
            $input['sort_order'] ?? 0
        ]);
        
        if ($result) {
            $new_id = $db->lastInsertId();
            
            // 如果有父节点，创建关系
            if (!empty($input['parent_id'])) {
                $query_rel = "INSERT INTO node_relationships (source_id, target_id, relationship_type) VALUES (?, ?, 'parent-child')";
                $stmt_rel = $db->prepare($query_rel);
                $stmt_rel->execute([$input['parent_id'], $new_id]);
            }
            
            successResponse(['id' => $new_id], '节点添加成功');
        } else {
            errorResponse('节点添加失败');
        }
    } catch(Exception $e) {
        errorResponse('添加节点失败: ' . $e->getMessage());
    }
}

/**
 * 添加新分类
 */
function addCategory($db) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['name']) || !isset($input['color'])) {
        errorResponse('缺少必要参数');
    }
    
    try {
        $query = "INSERT INTO knowledge_categories (name, description, color, image_url) VALUES (?, ?, ?, ?)";
        $stmt = $db->prepare($query);
        $result = $stmt->execute([
            $input['name'],
            $input['description'] ?? '',
            $input['color'],
            $input['image_url'] ?? ''
        ]);
        
        if ($result) {
            $new_id = $db->lastInsertId();
            successResponse(['id' => $new_id], '分类添加成功');
        } else {
            errorResponse('分类添加失败');
        }
    } catch(Exception $e) {
        errorResponse('添加分类失败: ' . $e->getMessage());
    }
}
?>