<?php
/**
 * 节气API接口
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
                getAllSolarTerms($db);
                break;
            case 'by_season':
                getSolarTermsBySeason($db);
                break;
            case 'detail':
                getSolarTermDetail($db);
                break;
            default:
                getAllSolarTerms($db);
        }
        break;
    case 'POST':
        addSolarTerm($db);
        break;
    case 'PUT':
        updateSolarTerm($db);
        break;
    case 'DELETE':
        deleteSolarTerm($db);
        break;
    default:
        errorResponse('不支持的请求方法', 405);
}

/**
 * 获取所有节气
 */
function getAllSolarTerms($db) {
    try {
        $query = "SELECT * FROM solar_terms ORDER BY 
                 CASE season 
                     WHEN '春' THEN 1 
                     WHEN '夏' THEN 2 
                     WHEN '秋' THEN 3 
                     WHEN '冬' THEN 4 
                 END, id";
        
        $stmt = $db->prepare($query);
        $stmt->execute();
        $solar_terms = $stmt->fetchAll();
        
        // 转换为前端ECharts需要的格式
        $formatted_data = array_map(function($term) {
            return [
                'name' => $term['name'],
                'season' => $term['season'],
                'date' => $term['date_range'],
                'desc' => $term['description'],
                'id' => $term['id']
            ];
        }, $solar_terms);
        
        successResponse($formatted_data);
    } catch(Exception $e) {
        errorResponse('获取节气数据失败: ' . $e->getMessage());
    }
}

/**
 * 按季节获取节气
 */
function getSolarTermsBySeason($db) {
    $season = isset($_GET['season']) ? $_GET['season'] : '';
    
    if (empty($season)) {
        errorResponse('请指定季节参数');
    }
    
    try {
        $query = "SELECT * FROM solar_terms WHERE season = ? ORDER BY id";
        $stmt = $db->prepare($query);
        $stmt->execute([$season]);
        $solar_terms = $stmt->fetchAll();
        
        successResponse($solar_terms);
    } catch(Exception $e) {
        errorResponse('获取季节节气失败: ' . $e->getMessage());
    }
}

/**
 * 获取节气详情
 */
function getSolarTermDetail($db) {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    
    if ($id <= 0) {
        errorResponse('请指定有效的节气ID');
    }
    
    try {
        $query = "SELECT * FROM solar_terms WHERE id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $solar_term = $stmt->fetch();
        
        if (!$solar_term) {
            errorResponse('节气不存在', 404);
        }
        
        successResponse($solar_term);
    } catch(Exception $e) {
        errorResponse('获取节气详情失败: ' . $e->getMessage());
    }
}

/**
 * 添加新节气
 */
function addSolarTerm($db) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['name']) || !isset($input['season']) || !isset($input['date_range']) || !isset($input['description'])) {
        errorResponse('缺少必要参数');
    }
    
    try {
        $query = "INSERT INTO solar_terms (name, season, date_range, description) VALUES (?, ?, ?, ?)";
        $stmt = $db->prepare($query);
        $result = $stmt->execute([
            $input['name'],
            $input['season'],
            $input['date_range'],
            $input['description']
        ]);
        
        if ($result) {
            $new_id = $db->lastInsertId();
            successResponse(['id' => $new_id], '节气添加成功');
        } else {
            errorResponse('节气添加失败');
        }
    } catch(Exception $e) {
        errorResponse('添加节气失败: ' . $e->getMessage());
    }
}

/**
 * 更新节气
 */
function updateSolarTerm($db) {
    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    
    if ($id <= 0) {
        errorResponse('请指定有效的节气ID');
    }
    
    try {
        $fields = [];
        $values = [];
        
        if (isset($input['name'])) {
            $fields[] = "name = ?";
            $values[] = $input['name'];
        }
        if (isset($input['season'])) {
            $fields[] = "season = ?";
            $values[] = $input['season'];
        }
        if (isset($input['date_range'])) {
            $fields[] = "date_range = ?";
            $values[] = $input['date_range'];
        }
        if (isset($input['description'])) {
            $fields[] = "description = ?";
            $values[] = $input['description'];
        }
        
        if (empty($fields)) {
            errorResponse('没有需要更新的字段');
        }
        
        $values[] = $id;
        $query = "UPDATE solar_terms SET " . implode(', ', $fields) . " WHERE id = ?";
        $stmt = $db->prepare($query);
        $result = $stmt->execute($values);
        
        if ($result) {
            successResponse([], '节气更新成功');
        } else {
            errorResponse('节气更新失败');
        }
    } catch(Exception $e) {
        errorResponse('更新节气失败: ' . $e->getMessage());
    }
}

/**
 * 删除节气
 */
function deleteSolarTerm($db) {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    
    if ($id <= 0) {
        errorResponse('请指定有效的节气ID');
    }
    
    try {
        $query = "DELETE FROM solar_terms WHERE id = ?";
        $stmt = $db->prepare($query);
        $result = $stmt->execute([$id]);
        
        if ($result) {
            successResponse([], '节气删除成功');
        } else {
            errorResponse('节气删除失败');
        }
    } catch(Exception $e) {
        errorResponse('删除节气失败: ' . $e->getMessage());
    }
}
?>