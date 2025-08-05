<?php
/**
 * 生产环境数据库配置文件
 * 请根据你的服务器配置修改以下信息
 */

class Database {
    // 修改为你的数据库信息
    private $host = 'localhost';              // 数据库主机 (通常是localhost)
    private $db_name = 'huhuha_agriculture';  // 数据库名称 (需要先创建)
    private $username = 'huhuha_user';        // 数据库用户名
    private $password = 'your_password';      // 数据库密码
    private $charset = 'utf8mb4';
    public $pdo;

    public function getConnection() {
        $this->pdo = null;
        
        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=" . $this->charset;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            $this->pdo = new PDO($dsn, $this->username, $this->password, $options);
        } catch(PDOException $exception) {
            echo "连接失败: " . $exception->getMessage();
        }
        
        return $this->pdo;
    }
}

/**
 * 通用响应函数
 */
function jsonResponse($data, $status_code = 200) {
    http_response_code($status_code);
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit(0);
    }
    
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * 错误响应
 */
function errorResponse($message, $status_code = 400) {
    jsonResponse([
        'success' => false,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s')
    ], $status_code);
}

/**
 * 成功响应
 */
function successResponse($data, $message = '操作成功') {
    jsonResponse([
        'success' => true,
        'message' => $message,
        'data' => $data,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
}
?>