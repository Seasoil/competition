# 农学文化数据可视化项目 - 后端数据库部署指南

## 📋 项目概述

本项目为农学文化数据可视化系统添加了完整的后端数据库支持，包括：

- MySQL 数据库设计
- PHP REST API 接口
- 数据迁移脚本
- 管理后台界面

## 🛠️ 环境要求

### 服务器环境

- **PHP**: 7.4+ (推荐 8.0+)
- **MySQL**: 5.7+ (推荐 8.0+)
- **Web 服务器**: Apache 2.4+ 或 Nginx 1.18+
- **扩展模块**: PDO, PDO_MySQL, JSON, mbstring

### 开发环境推荐

- **XAMPP** (Windows/macOS/Linux)
- **WAMP** (Windows)
- **MAMP** (macOS)
- **Docker** (所有平台)

## 🚀 快速部署

### 1. 数据库安装

#### 方法一：使用安装脚本（推荐）

```sql
-- 在MySQL命令行或phpMyAdmin中执行
SOURCE /path/to/database/install.sql;
```

#### 方法二：手动安装

```sql
-- 1. 创建数据库
CREATE DATABASE agriculture_culture CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. 导入表结构
SOURCE /path/to/database/schema.sql;

-- 3. 运行数据迁移
cd scripts/
php migrate_data.php
```

### 2. 配置数据库连接

编辑 `api/config/database.php`：

```php
private $host = 'localhost';        // 数据库主机
private $db_name = 'agriculture_culture';  // 数据库名
private $username = 'root';         // 数据库用户名
private $password = '';             // 数据库密码
```

### 3. 配置 Web 服务器

#### Apache 配置

确保 `.htaccess` 文件存在：

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^api/(.*)$ api/$1 [QSA,L]

# 允许跨域请求
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization"
```

#### Nginx 配置

```nginx
location /api/ {
    try_files $uri $uri/ /api/index.php?$query_string;

    # 允许跨域
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
    add_header Access-Control-Allow-Headers "Content-Type, Authorization";
}
```

### 4. 验证安装

访问以下 URL 测试 API：

```
http://你的域名/api/solar_terms.php?action=all
http://你的域名/api/knowledge.php?action=categories
```

## 📁 项目结构

```
agriculture-visualization/
├── api/                    # PHP API接口
│   ├── config/
│   │   └── database.php   # 数据库配置
│   ├── solar_terms.php    # 节气API
│   ├── knowledge.php      # 农学知识API
│   └── proverbs.php       # 农谚API
├── database/              # 数据库相关
│   ├── schema.sql         # 表结构
│   └── install.sql        # 安装脚本
├── scripts/               # 工具脚本
│   └── migrate_data.php   # 数据迁移
├── admin/                 # 管理后台
│   ├── index.html         # 后台首页
│   └── admin.js           # 后台逻辑
├── js/
│   └── api.js            # 前端API调用
└── 现有前端文件...
```

## 🔌 API 接口文档

### 节气 API (`solar_terms.php`)

#### 获取所有节气

```
GET /api/solar_terms.php?action=all
```

#### 按季节获取节气

```
GET /api/solar_terms.php?action=by_season&season=春
```

#### 添加新节气

```
POST /api/solar_terms.php
Content-Type: application/json

{
    "name": "小暑",
    "season": "夏",
    "date_range": "7月6-8日",
    "description": "早稻收割，晚稻移栽，玉米追肥"
}
```

### 农学知识 API (`knowledge.php`)

#### 获取知识分类

```
GET /api/knowledge.php?action=categories
```

#### 获取力导向图数据

```
GET /api/knowledge.php?action=graph_data
```

#### 搜索知识

```
GET /api/knowledge.php?action=search&keyword=水稻
```

### 农谚 API (`proverbs.php`)

#### 获取所有农谚

```
GET /api/proverbs.php?action=all
```

#### 按月份获取农谚

```
GET /api/proverbs.php?action=by_month&month=3
```

#### 获取词云数据

```
GET /api/proverbs.php?action=wordcloud_data
```

## 🎛️ 管理后台

访问 `http://你的域名/admin/` 进入管理后台

### 默认账户

- **用户名**: admin
- **密码**: admin123

### 功能特性

- ✅ 节气数据管理（增删改查）
- ✅ 农谚数据管理
- ✅ 农学知识管理
- ✅ 分类管理
- ✅ 数据统计概览
- ✅ 响应式设计

## 🔄 数据迁移

如果你有现有的 JSON 数据，可以运行迁移脚本：

```bash
cd scripts/
php migrate_data.php
```

脚本会自动：

1. 导入现有的节气数据
2. 转换农谚 JSON 为数据库记录
3. 迁移农学知识结构
4. 创建管理员账户

## 🐛 故障排除

### 常见问题

#### 1. 数据库连接失败

```
错误: 连接失败: SQLSTATE[HY000] [1045] Access denied
```

**解决**：检查数据库用户名、密码和权限

#### 2. API 返回 403 错误

```
错误: Forbidden
```

**解决**：检查 Web 服务器配置和文件权限

#### 3. 跨域请求被阻止

```
错误: CORS policy blocked
```

**解决**：配置服务器允许跨域请求

#### 4. 中文乱码

```
错误: 中文显示为问号
```

**解决**：确保数据库和连接都使用 UTF8 编码

### 日志调试

在 `api/config/database.php` 中启用调试模式：

```php
ini_set('display_errors', 1);
error_reporting(E_ALL);
```

## 📊 性能优化

### 数据库优化

```sql
-- 添加必要索引
CREATE INDEX idx_proverbs_search ON proverbs(content);
CREATE INDEX idx_knowledge_search ON knowledge_nodes(name, description);

-- 定期优化表
OPTIMIZE TABLE solar_terms, proverbs, knowledge_nodes;
```

### 缓存策略

- API 结果缓存（5 分钟）
- 静态资源 CDN
- 数据库查询优化

## 🔒 安全建议

1. **修改默认密码**

   ```sql
   UPDATE users SET password_hash = PASSWORD('your_new_password') WHERE username = 'admin';
   ```

2. **限制 API 访问**

   - 添加请求频率限制
   - 实施身份验证机制
   - 使用 HTTPS 协议

3. **数据库安全**
   - 使用专门的数据库用户
   - 限制数据库访问权限
   - 定期备份数据

## 📞 技术支持

如果遇到问题，请检查：

1. PHP 和 MySQL 版本兼容性
2. 必要的 PHP 扩展是否已安装
3. 文件和目录权限设置
4. Web 服务器配置

---

## 🎉 总结

通过这次升级，你的农学文化数据可视化项目现在具备了：

✅ **完整的数据库架构** - 支持复杂数据关系和查询
✅ **RESTful API 接口** - 标准化的数据访问方式
✅ **管理后台** - 便于内容管理和维护
✅ **数据缓存** - 提升性能和用户体验
✅ **扩展性** - 便于添加新功能和数据类型

你的项目现在已经从静态展示升级为完整的动态 Web 应用！🚀
