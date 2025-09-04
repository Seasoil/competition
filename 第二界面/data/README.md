# 农作物病害关系数据库系统

## 概述

这是一个完整的农作物病害关系数据库系统，包含病害信息、植物关联、环境条件、防治建议等多维度数据。

## 文件结构

```
第二界面/
├── data/
│   ├── disease_database.json     # 主数据库文件
│   └── README.md                # 本说明文件
├── js/
│   ├── disease_data_handler.js   # 数据处理模块
│   ├── disease_search.js         # 搜索功能模块
│   └── disease_relationship_chart.js # 关系图可视化模块
└── images/
    ├── diseases/                 # 受害植株图片
    ├── disease_types/           # 病害类型图片
    └── README.md               # 图片说明文件
```

## 数据结构说明

### 主要字段

每个病害记录包含以下信息：

- **基本信息**
  - `id`: 唯一标识符
  - `disease_name`: 病害名称
  - `disease_category`: 病害类型（真菌、病毒、细菌、生理）

- **症状特征**
  - `symptoms`: 病状特征数组

- **受影响植物**
  - `affected_plants`: 植物信息数组
    - `plant_name`: 植物名称
    - `plant_images`: 植物图片路径数组
    - `severity_level`: 危害程度（低/中/高/极高）

- **土壤数据**
  - `soil_data`: 害病土壤数据
    - `ph_range`: pH值范围
    - `organic_matter`: 有机质含量
    - `nitrogen_content`: 氮含量
    - `phosphorus_content`: 磷含量
    - `potassium_content`: 钾含量
    - `moisture_content`: 水分含量

- **防治建议**
  - `prevention_treatment`: 防治建议数组

- **生长周期**
  - `healthy_growth_cycle`: 健康生长周期
    - 各个生长阶段的时间

- **植被信息**
  - `plant_info`: 植物基本信息
    - `scientific_name`: 学名
    - `family`: 科属
    - `growth_habit`: 生长习性
    - `root_system`: 根系类型
    - `plant_height`: 植株高度

- **环境条件**
  - `optimal_conditions`: 适宜环境条件
    - `temperature`: 适宜温度
    - `humidity`: 适宜湿度
    - `rainfall`: 适宜降雨
    - `air_pressure`: 适宜气压

- **土质信息**
  - `soil_type`: 土质要求
    - `preferred`: 偏好土壤类型
    - `texture`: 土壤质地
    - `drainage`: 排水要求
    - `fertility`: 肥力要求

- **图片资源**
  - `disease_images`: 病类图片路径数组

## 使用方法

### 1. 数据加载

```javascript
// 自动加载（页面加载时）
document.addEventListener('diseaseDataLoaded', (event) => {
    console.log('数据已加载:', event.detail);
});

// 手动加载
const handler = new DiseaseDataHandler();
await handler.loadDiseaseData();
```

### 2. 数据查询

```javascript
// 按病害名称搜索
const results = diseaseDataHandler.searchByDiseaseName('稻瘟病');

// 按植物名称搜索
const results = diseaseDataHandler.searchByPlantName('水稻');

// 按症状搜索
const results = diseaseDataHandler.searchBySymptoms('叶片病斑');

// 获取病害详情
const disease = diseaseDataHandler.getDiseaseById('001');
```

### 3. 搜索功能

```javascript
// 执行搜索（自动调用）
searchDisease();

// 显示搜索结果
diseaseSearch.displayResults('搜索关键词');

// 显示病害详情
diseaseSearch.showDiseaseDetail('001');
```

### 4. 关系图可视化

```javascript
// 创建关系图
const chart = new DiseaseRelationshipChart('chartContainer');

// 更新图表
chart.updateChart();

// 调整大小
chart.resize();
```

## API 接口

### DiseaseDataHandler 类

- `loadDiseaseData()`: 加载数据
- `searchByDiseaseName(name)`: 按病害名称搜索
- `searchByPlantName(plantName)`: 按植物名称搜索
- `searchBySymptoms(symptoms)`: 按症状搜索
- `getDiseaseById(id)`: 获取病害详情
- `getAllDiseases()`: 获取所有病害
- `getDiseaseCategories()`: 获取病害分类统计
- `getAffectedPlantsStats()`: 获取受影响植物统计
- `recommendCropsByConditions(temp, humidity, rainfall)`: 环境条件推荐
- `generateRelationshipData()`: 生成关系图数据

### DiseaseSearch 类

- `performSearch()`: 执行搜索
- `displayResults(query)`: 显示搜索结果
- `showDiseaseDetail(diseaseId)`: 显示病害详情
- `hideResults()`: 隐藏搜索结果

### DiseaseRelationshipChart 类

- `renderChart()`: 渲染关系图
- `updateChart()`: 更新图表
- `resize()`: 调整图表大小
- `dispose()`: 销毁图表

## 数据扩展

### 添加新病害

1. 在 `disease_database.json` 中添加新的病害记录
2. 按照现有数据结构填写所有必要字段
3. 更新 `metadata.total_diseases` 计数
4. 添加对应的图片文件

### 图片管理

1. 将病害图片放入 `images/disease_types/` 文件夹
2. 将受害植株图片放入 `images/diseases/` 文件夹
3. 按照命名规范命名文件
4. 在数据库中更新对应的图片路径

## 注意事项

1. 所有图片路径都是相对于 `第二界面/` 目录的相对路径
2. 数据库文件使用 UTF-8 编码
3. 图片建议使用 JPG 格式，大小控制在 2MB 以内
4. 新增数据时请保持数据结构的一致性
5. 修改数据后需要刷新页面重新加载

## 版本信息

- 当前版本：1.0
- 最后更新：2024-01-15
- 数据条目：5个病害记录
- 支持植物：水稻、小麦、玉米、番茄、马铃薯、黄瓜、甜瓜
