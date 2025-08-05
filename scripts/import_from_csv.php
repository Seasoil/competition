<?php
/**
 * 从CSV文件导入数据
 * 支持Excel导出的CSV格式
 */
require_once '../api/config/database.php';

$database = new Database();
$db = $database->getConnection();

/**
 * 从CSV文件导入农谚数据
 * CSV格式：content,description,month,season
 */
function importProverbsFromCSV($db, $csvFile) {
    if (!file_exists($csvFile)) {
        echo "CSV文件不存在: {$csvFile}\n";
        return;
    }
    
    $handle = fopen($csvFile, 'r');
    $header = fgetcsv($handle); // 跳过标题行
    $count = 0;
    
    $query = "INSERT INTO proverbs (category_id, content, description, month, season, tags, value) 
             VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $db->prepare($query);
    
    while (($row = fgetcsv($handle)) !== FALSE) {
        if (count($row) >= 4) {
            $stmt->execute([
                1, // 默认分类ID
                $row[0], // content
                $row[1], // description
                (int)$row[2], // month
                $row[3], // season
                json_encode([]), // 空标签
                1 // 默认权重
            ]);
            $count++;
        }
    }
    
    fclose($handle);
    echo "成功导入 {$count} 条农谚数据\n";
}

/**
 * 从CSV文件导入农学知识
 * CSV格式：name,category_name,description
 */
function importKnowledgeFromCSV($db, $csvFile) {
    if (!file_exists($csvFile)) {
        echo "CSV文件不存在: {$csvFile}\n";
        return;
    }
    
    // 获取分类映射
    $categoryQuery = "SELECT id, name FROM knowledge_categories";
    $categoryStmt = $db->prepare($categoryQuery);
    $categoryStmt->execute();
    $categories = $categoryStmt->fetchAll();
    $categoryMap = [];
    foreach($categories as $cat) {
        $categoryMap[$cat['name']] = $cat['id'];
    }
    
    $handle = fopen($csvFile, 'r');
    $header = fgetcsv($handle); // 跳过标题行
    $count = 0;
    
    $query = "INSERT INTO knowledge_nodes (name, category_id, description, level, sort_order) 
             VALUES (?, ?, ?, ?, ?)";
    $stmt = $db->prepare($query);
    
    while (($row = fgetcsv($handle)) !== FALSE) {
        if (count($row) >= 3) {
            $categoryId = $categoryMap[$row[1]] ?? 1; // 默认分类
            $stmt->execute([
                $row[0], // name
                $categoryId, // category_id
                $row[2], // description
                0, // level
                $count // sort_order
            ]);
            $count++;
        }
    }
    
    fclose($handle);
    echo "成功导入 {$count} 条知识数据\n";
}

// 使用示例
echo "CSV数据导入工具\n";
echo "请将CSV文件放在scripts目录下\n\n";

// 导入农谚数据
if (file_exists('proverbs.csv')) {
    echo "发现农谚CSV文件，开始导入...\n";
    importProverbsFromCSV($db, 'proverbs.csv');
}

// 导入知识数据
if (file_exists('knowledge.csv')) {
    echo "发现知识CSV文件，开始导入...\n";
    importKnowledgeFromCSV($db, 'knowledge.csv');
}

echo "\n导入完成！\n";
?>