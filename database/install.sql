-- 农学文化数据可视化项目数据库安装脚本
-- 执行顺序：
-- 1. 创建数据库
-- 2. 创建表结构
-- 3. 插入初始数据

-- 创建数据库
CREATE DATABASE IF NOT EXISTS agriculture_culture CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE agriculture_culture;

-- 执行建表脚本
SOURCE schema.sql;

-- 插入初始分类数据
INSERT INTO knowledge_categories (name, description, color) VALUES
('农事占候', '研究天时、物候、气象等农事征兆的学问', '#5470c6'),
('农器', '古代农业生产中使用的各类工具和器械', '#91cc75'),
('树艺', '种植和培育各类农作物的技术', '#fac858'),
('木本植物', '具有木质茎的多年生植物', '#ee6666'),
('牧养六畜', '古代畜牧养殖的主要动物', '#73c0de'),
('救荒本草', '救荒时期可食用的野生植物', '#3ba272'),
('境外作物', '从境外引进的农作物品种', '#fc8452');

-- 插入初始节气数据
INSERT INTO solar_terms (name, season, date_range, description) VALUES
('立春', '春', '2月3-5日', '春耕备耕开始，检查农具，准备早稻育秧'),
('雨水', '春', '2月18-20日', '冬小麦开始返青，江南地区油菜追肥'),
('惊蛰', '春', '3月5-7日', '春耕全面展开，防治越冬害虫，果树修剪'),
('春分', '春', '3月20-22日', '春播作物播种关键期，小麦进入拔节期'),
('清明', '春', '4月4-6日', '早稻插秧，玉米播种，茶园春管关键期'),
('谷雨', '春', '4月19-21日', '水稻移栽，棉花播种，防治小麦赤霉病'),
('立夏', '夏', '5月5-7日', '夏收作物灌浆关键期，早稻分蘖肥施用'),
('小满', '夏', '5月20-22日', '小麦籽粒饱满，油菜收获，水稻晒田控蘖'),
('芒种', '夏', '6月5-7日', '夏收夏种关键期，抢收小麦，播种晚稻'),
('夏至', '夏', '6月21-22日', '中稻追肥，棉花整枝，防治水稻纹枯病'),
('小暑', '夏', '7月6-8日', '早稻收割，晚稻移栽，玉米追肥'),
('大暑', '夏', '7月22-24日', '双季稻区抢收抢种，抗旱保苗关键期'),
('立秋', '秋', '8月7-9日', '水稻孕穗期管理，玉米授粉期，棉花打顶'),
('处暑', '秋', '8月22-24日', '水稻防早衰，玉米灌浆期管理，果园施肥'),
('白露', '秋', '9月7-9日', '晚稻抽穗扬花期，冬小麦备耕，采摘秋茶'),
('秋分', '秋', '9月22-24日', '秋收秋种关键期，收获中稻，播种冬小麦'),
('寒露', '秋', '10月8-9日', '收获晚稻，播种油菜，果树秋季修剪'),
('霜降', '秋', '10月23-24日', '冬小麦出苗管理，蔬菜大棚防寒准备'),
('立冬', '冬', '11月7-8日', '农田水利建设，油菜越冬管理，果树培土'),
('小雪', '冬', '11月22-23日', '冬小麦冬灌，蔬菜储藏，果园清园消毒'),
('大雪', '冬', '12月6-8日', '农田休耕养地，温室大棚温度调控'),
('冬至', '冬', '12月21-23日', '积肥造肥，果树防冻，冬季修剪'),
('小寒', '冬', '1月5-7日', '越冬作物防冻害，温室作物光照管理'),
('大寒', '冬', '1月20-21日', '农业机械保养，春耕物资准备，土壤改良');

-- 插入农谚分类
INSERT INTO proverb_categories (name, description, color) VALUES
('春季农谚', '关于春季农事的谚语', '#6DA65D'),
('夏季农谚', '关于夏季农事的谚语', '#FFB74D'),
('秋季农谚', '关于秋季农事的谚语', '#F44336'),
('冬季农谚', '关于冬季农事的谚语', '#2196F3');

-- 创建管理员账户
INSERT INTO users (username, email, password_hash, role) VALUES
('admin', 'admin@agriculture.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');
-- 密码是: admin123

-- 插入系统配置
INSERT INTO system_config (config_key, config_value, description) VALUES
('site_name', '农学文化数据可视化系统', '网站名称'),
('site_description', '展示中华传统农学文化的数据可视化平台', '网站描述'),
('admin_email', 'admin@agriculture.com', '管理员邮箱'),
('data_version', '1.0.0', '数据版本号'),
('last_backup', NOW(), '最后备份时间');

-- 创建索引以提高查询性能
CREATE INDEX idx_solar_terms_season ON solar_terms(season);
CREATE INDEX idx_proverbs_month_season ON proverbs(month, season);
CREATE INDEX idx_knowledge_nodes_category_level ON knowledge_nodes(category_id, level);
CREATE INDEX idx_node_relationships_source_target ON node_relationships(source_id, target_id);
CREATE INDEX idx_visit_stats_page_time ON visit_stats(page_type, visit_time);

-- 显示安装完成信息
SELECT 'Database installation completed successfully!' as status;
SELECT COUNT(*) as solar_terms_count FROM solar_terms;
SELECT COUNT(*) as categories_count FROM knowledge_categories;
SELECT 'Default admin user: admin / admin123' as admin_info;