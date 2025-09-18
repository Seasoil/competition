<?php
/**
 * 数据库连接测试
 */
require_once 'config/database.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

try {
    $database = new Database();
    $db = $database->getConnection();
    
    if ($db) {
        // 测试数据库连接
        $query = "SELECT 1 as test";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $result = $stmt->fetch();
        
        if ($result) {
            echo json_encode([
                'success' => true,
                'message' => '数据库连接成功',
                'test_result' => $result
            ], JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode([
                'success' => false,
                'message' => '数据库查询失败'
            ], JSON_UNESCAPED_UNICODE);
        }
    } else {
        echo json_encode([
            'success' => false,
            'message' => '数据库连接失败'
        ], JSON_UNESCAPED_UNICODE);
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => '错误: ' . $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?>
