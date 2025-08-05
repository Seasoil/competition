-- 农学文化数据可视化项目数据库设计
-- 创建数据库
CREATE DATABASE IF NOT EXISTS agriculture_culture CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE agriculture_culture;

-- 1. 节气表
CREATE TABLE solar_terms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL COMMENT '节气名称',
    season ENUM('春', '夏', '秋', '冬') NOT NULL COMMENT '季节',
    date_range VARCHAR(20) NOT NULL COMMENT '日期范围',
    description TEXT NOT NULL COMMENT '农事描述',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_season (season),
    INDEX idx_name (name)
) COMMENT = '二十四节气表';

-- 2. 农谚分类表
CREATE TABLE proverb_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL COMMENT '分类名称',
    description TEXT COMMENT '分类描述',
    color VARCHAR(7) DEFAULT '#6DA65D' COMMENT '显示颜色',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) COMMENT = '农谚分类表';

-- 3. 农谚表
CREATE TABLE proverbs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    content TEXT NOT NULL COMMENT '农谚内容',
    description TEXT COMMENT '农谚解释',
    month INT NOT NULL COMMENT '月份 1-12',
    season ENUM('春', '夏', '秋', '冬') NOT NULL COMMENT '季节',
    tags JSON COMMENT '标签数组',
    value INT DEFAULT 1 COMMENT '权重值',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES proverb_categories(id) ON DELETE CASCADE,
    INDEX idx_month (month),
    INDEX idx_season (season),
    INDEX idx_category (category_id)
) COMMENT = '农谚表';

-- 4. 农学知识分类表
CREATE TABLE knowledge_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL COMMENT '分类名称',
    description TEXT COMMENT '分类描述',
    color VARCHAR(7) NOT NULL COMMENT '显示颜色',
    image_url VARCHAR(255) COMMENT '分类图片',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_name (name)
) COMMENT = '农学知识分类表';

-- 5. 农学知识节点表
CREATE TABLE knowledge_nodes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '节点名称',
    category_id INT NOT NULL,
    parent_id INT DEFAULT NULL COMMENT '父节点ID',
    level INT DEFAULT 0 COMMENT '层级深度',
    description TEXT COMMENT '详细描述',
    data JSON COMMENT '扩展数据(品种、方法等)',
    sort_order INT DEFAULT 0 COMMENT '排序',
    is_active BOOLEAN DEFAULT TRUE COMMENT '是否启用',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES knowledge_categories(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    INDEX idx_category (category_id),
    INDEX idx_parent (parent_id),
    INDEX idx_level (level),
    INDEX idx_name (name)
) COMMENT = '农学知识节点表';

-- 6. 节点关系表(用于力导向图)
CREATE TABLE node_relationships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    source_id INT NOT NULL COMMENT '源节点ID',
    target_id INT NOT NULL COMMENT '目标节点ID',
    relationship_type ENUM('parent-child', 'related', 'contains') DEFAULT 'parent-child',
    weight DECIMAL(3,2) DEFAULT 1.0 COMMENT '关系权重',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (source_id) REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    FOREIGN KEY (target_id) REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    UNIQUE KEY uk_relationship (source_id, target_id),
    INDEX idx_source (source_id),
    INDEX idx_target (target_id)
) COMMENT = '节点关系表';

-- 7. 用户表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    avatar_url VARCHAR(255),
    preferences JSON COMMENT '用户偏好设置',
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email)
) COMMENT = '用户表';

-- 8. 用户收藏表
CREATE TABLE user_favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    item_type ENUM('solar_term', 'proverb', 'knowledge_node') NOT NULL,
    item_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY uk_user_favorite (user_id, item_type, item_id),
    INDEX idx_user (user_id),
    INDEX idx_item (item_type, item_id)
) COMMENT = '用户收藏表';

-- 9. 访问统计表
CREATE TABLE visit_stats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT DEFAULT NULL,
    page_type VARCHAR(50) NOT NULL COMMENT '页面类型',
    item_id INT DEFAULT NULL COMMENT '查看的具体项目ID',
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_page_type (page_type),
    INDEX idx_visit_time (visit_time),
    INDEX idx_user (user_id)
) COMMENT = '访问统计表';

-- 10. 系统配置表
CREATE TABLE system_config (
    id INT PRIMARY KEY AUTO_INCREMENT,
    config_key VARCHAR(100) NOT NULL UNIQUE,
    config_value TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) COMMENT = '系统配置表';