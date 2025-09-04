# 病害图片文件夹结构说明

## 文件夹结构

```
images/
├── diseases/           # 受害植株图片
│   ├── rice_blast_1.jpg
│   ├── rice_blast_2.jpg
│   ├── rice_blast_3.jpg
│   ├── wheat_stripe_1.jpg
│   ├── wheat_stripe_2.jpg
│   ├── corn_blight_1.jpg
│   ├── corn_blight_2.jpg
│   ├── corn_blight_3.jpg
│   ├── tomato_blight_1.jpg
│   ├── tomato_blight_2.jpg
│   ├── tomato_blight_3.jpg
│   ├── potato_blight_1.jpg
│   ├── potato_blight_2.jpg
│   ├── cucumber_downy_1.jpg
│   ├── cucumber_downy_2.jpg
│   └── melon_downy_1.jpg
└── disease_types/      # 病害类型图片
    ├── rice_blast_disease.jpg
    ├── wheat_stripe_mosaic.jpg
    ├── corn_northern_blight.jpg
    ├── tomato_late_blight.jpg
    └── cucumber_downy_mildew.jpg
```

## 图片命名规范

### 受害植株图片 (diseases/)
- 格式：`{植物名}_{病害简称}_{序号}.jpg`
- 示例：`rice_blast_1.jpg` (水稻稻瘟病第1张图片)

### 病害类型图片 (disease_types/)
- 格式：`{病害英文名}.jpg`
- 示例：`rice_blast_disease.jpg` (稻瘟病病害图片)

## 图片要求

1. **分辨率**：建议 800x600 像素以上
2. **格式**：JPG 或 PNG
3. **大小**：单张图片不超过 2MB
4. **内容**：清晰显示病害特征，便于识别

## 使用说明

这些图片将用于：
- 病害识别界面的展示
- 关系图中的病害可视化
- 用户查询结果的图片展示
- 病害防治指导的参考图片
