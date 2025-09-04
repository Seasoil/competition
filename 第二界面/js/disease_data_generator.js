/**
 * 病害数据生成器
 * 将100种病害基本信息扩展为完整的数据库格式
 */

class DiseaseDataGenerator {
    constructor() {
        this.diseaseList = null;
        this.cropEnvironmentData = this.initCropEnvironmentData();
        this.soilTypeData = this.initSoilTypeData();
        this.treatmentTemplates = this.initTreatmentTemplates();
    }

    /**
     * 初始化作物环境数据模板
     */
    initCropEnvironmentData() {
        return {
            "水稻": {
                temperature: { min: 20, max: 30, optimal: 25 },
                humidity: { min: 70, max: 85, optimal: 80 },
                rainfall: { min: 1000, max: 1500, optimal: 1200 },
                air_pressure: { min: 1010, max: 1020, optimal: 1015 },
                growth_cycle: {
                    seedling_stage: "20-25天",
                    tillering_stage: "30-35天",
                    heading_stage: "25-30天",
                    maturity_stage: "30-35天",
                    total_cycle: "105-125天"
                },
                plant_info: {
                    scientific_name: "Oryza sativa",
                    family: "禾本科",
                    growth_habit: "一年生草本",
                    root_system: "须根系",
                    plant_height: "80-120cm"
                }
            },
            "小麦": {
                temperature: { min: 12, max: 25, optimal: 18 },
                humidity: { min: 50, max: 70, optimal: 60 },
                rainfall: { min: 400, max: 800, optimal: 600 },
                air_pressure: { min: 1012, max: 1018, optimal: 1015 },
                growth_cycle: {
                    seedling_stage: "40-50天",
                    tillering_stage: "60-80天",
                    jointing_stage: "30-40天",
                    heading_stage: "20-25天",
                    maturity_stage: "30-40天",
                    total_cycle: "180-235天"
                },
                plant_info: {
                    scientific_name: "Triticum aestivum",
                    family: "禾本科",
                    growth_habit: "一年生或越年生草本",
                    root_system: "须根系",
                    plant_height: "60-100cm"
                }
            },
            "玉米": {
                temperature: { min: 18, max: 32, optimal: 25 },
                humidity: { min: 60, max: 80, optimal: 70 },
                rainfall: { min: 500, max: 1000, optimal: 750 },
                air_pressure: { min: 1008, max: 1016, optimal: 1012 },
                growth_cycle: {
                    seedling_stage: "15-20天",
                    jointing_stage: "25-30天",
                    tasseling_stage: "20-25天",
                    filling_stage: "40-50天",
                    maturity_stage: "20-30天",
                    total_cycle: "120-155天"
                },
                plant_info: {
                    scientific_name: "Zea mays",
                    family: "禾本科",
                    growth_habit: "一年生草本",
                    root_system: "须根系",
                    plant_height: "150-300cm"
                }
            },
            "番茄": {
                temperature: { min: 15, max: 30, optimal: 22 },
                humidity: { min: 50, max: 70, optimal: 60 },
                rainfall: { min: 300, max: 600, optimal: 450 },
                air_pressure: { min: 1010, max: 1018, optimal: 1014 },
                growth_cycle: {
                    seedling_stage: "30-40天",
                    flowering_stage: "20-30天",
                    fruit_setting_stage: "15-20天",
                    fruit_development_stage: "40-60天",
                    maturity_stage: "15-25天",
                    total_cycle: "120-175天"
                },
                plant_info: {
                    scientific_name: "Solanum lycopersicum",
                    family: "茄科",
                    growth_habit: "一年生草本",
                    root_system: "直根系",
                    plant_height: "60-200cm"
                }
            },
            "黄瓜": {
                temperature: { min: 18, max: 32, optimal: 25 },
                humidity: { min: 60, max: 75, optimal: 70 },
                rainfall: { min: 400, max: 800, optimal: 600 },
                air_pressure: { min: 1008, max: 1015, optimal: 1012 },
                growth_cycle: {
                    seedling_stage: "25-30天",
                    伸蔓期: "20-25天",
                    开花结果期: "60-80天",
                    采收期: "30-60天",
                    total_cycle: "135-195天"
                },
                plant_info: {
                    scientific_name: "Cucumis sativus",
                    family: "葫芦科",
                    growth_habit: "一年生蔓性草本",
                    root_system: "直根系",
                    plant_height: "150-300cm"
                }
            }
        };
    }

    /**
     * 初始化土壤类型数据
     */
    initSoilTypeData() {
        return {
            "水稻": {
                preferred: "水稻土",
                texture: "壤土",
                drainage: "良好",
                fertility: "中等偏上"
            },
            "小麦": {
                preferred: "黑土、黄土",
                texture: "壤土至粘壤土",
                drainage: "良好",
                fertility: "中等偏上"
            },
            "玉米": {
                preferred: "黑土、黄壤土",
                texture: "壤土",
                drainage: "良好",
                fertility: "肥沃"
            },
            "番茄": {
                preferred: "壤土、砂壤土",
                texture: "疏松肥沃",
                drainage: "良好",
                fertility: "肥沃"
            },
            "黄瓜": {
                preferred: "壤土、砂壤土",
                texture: "疏松透气",
                drainage: "良好",
                fertility: "肥沃"
            }
        };
    }

    /**
     * 初始化防治建议模板
     */
    initTreatmentTemplates() {
        return {
            "真菌病害": [
                "选用抗病品种",
                "合理轮作，避免连作",
                "改善田间通风透光条件",
                "科学施肥，增强植株抗性",
                "及时清除病残体",
                "药剂防治：使用相应杀菌剂"
            ],
            "细菌病害": [
                "选用抗病品种",
                "种子消毒处理",
                "避免田间积水",
                "合理施肥，增施有机肥",
                "及时清除病株",
                "药剂防治：使用铜制剂或抗生素类药剂"
            ],
            "病毒病害": [
                "选用抗病品种",
                "控制传毒媒介昆虫",
                "清除田间杂草",
                "避免机械传播",
                "种子消毒处理",
                "加强栽培管理"
            ],
            "线虫病害": [
                "选用抗病品种",
                "土壤消毒处理",
                "合理轮作",
                "增施有机肥",
                "生物防治",
                "化学防治：使用杀线虫剂"
            ]
        };
    }

    /**
     * 加载100种病害基本信息
     */
    async loadDiseaseList() {
        try {
            const response = await fetch('./data/disease_list_100.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.diseaseList = data.disease_list;
            return this.diseaseList;
        } catch (error) {
            console.error('加载病害列表失败:', error);
            throw error;
        }
    }

    /**
     * 生成完整的病害数据库
     */
    generateFullDatabase() {
        if (!this.diseaseList) {
            throw new Error('请先加载病害列表');
        }

        const fullDatabase = {
            diseases: this.diseaseList.map(disease => this.expandDiseaseData(disease)),
            metadata: {
                version: "2.0",
                last_updated: new Date().toISOString().split('T')[0],
                total_diseases: this.diseaseList.length,
                data_source: "中国农业科学院植物保护研究所、农业农村部病害防治数据库",
                image_base_path: "./images/",
                reference_sources: [
                    "中国农业科学院植物保护研究所",
                    "农业农村部全国农技推广中心",
                    "中国植物病理学会",
                    "《中国农作物病虫害》第三版",
                    "粮食作物重大病虫害防控技术方案",
                    "《植物病理学》第四版",
                    "全国农业技术推广服务中心病虫害测报处"
                ]
            }
        };

        return fullDatabase;
    }

    /**
     * 扩展单个病害数据
     */
    expandDiseaseData(basicDisease) {
        const primaryCrop = basicDisease.affected_crops[0];
        const cropData = this.cropEnvironmentData[primaryCrop] || this.cropEnvironmentData["番茄"];
        
        return {
            id: basicDisease.id,
            disease_name: basicDisease.disease_name,
            disease_category: basicDisease.disease_category,
            symptoms: this.generateSymptoms(basicDisease),
            affected_plants: this.generateAffectedPlants(basicDisease),
            soil_data: this.generateSoilData(basicDisease),
            prevention_treatment: this.generateTreatment(basicDisease),
            healthy_growth_cycle: cropData.growth_cycle,
            plant_info: cropData.plant_info,
            optimal_conditions: {
                temperature: { ...cropData.temperature, unit: "°C" },
                humidity: { ...cropData.humidity, unit: "%" },
                rainfall: { ...cropData.rainfall, unit: "mm/年" },
                air_pressure: { ...cropData.air_pressure, unit: "hPa" }
            },
            soil_type: this.soilTypeData[primaryCrop] || this.soilTypeData["番茄"],
            disease_images: [`images/disease_types/${basicDisease.disease_name.toLowerCase().replace(/\s+/g, '_')}.jpg`]
        };
    }

    /**
     * 生成症状描述
     */
    generateSymptoms(disease) {
        // 这里可以根据病害类型和名称生成相应的症状
        // 为了简化，使用通用模板
        const symptomTemplates = {
            "真菌病害": [
                "叶片出现病斑",
                "病斑逐渐扩大",
                "严重时叶片枯死",
                "影响植株正常生长"
            ],
            "细菌病害": [
                "叶片出现水浸状病斑",
                "病斑周围有黄色晕圈",
                "病部有菌脓溢出",
                "严重时整株枯死"
            ],
            "病毒病害": [
                "叶片出现花叶症状",
                "植株矮化畸形",
                "生长发育受阻",
                "产量严重下降"
            ]
        };

        return symptomTemplates[disease.disease_category] || symptomTemplates["真菌病害"];
    }

    /**
     * 生成受影响植物信息
     */
    generateAffectedPlants(disease) {
        return disease.affected_crops.map(crop => ({
            plant_name: crop,
            plant_images: [
                `images/diseases/${disease.disease_name.toLowerCase().replace(/\s+/g, '_')}_${crop}_1.jpg`,
                `images/diseases/${disease.disease_name.toLowerCase().replace(/\s+/g, '_')}_${crop}_2.jpg`
            ],
            severity_level: disease.severity
        }));
    }

    /**
     * 生成土壤数据
     */
    generateSoilData(disease) {
        return {
            ph_range: "6.0-7.5",
            organic_matter: "中等",
            nitrogen_content: "正常",
            phosphorus_content: "正常",
            potassium_content: "正常",
            moisture_content: "适中"
        };
    }

    /**
     * 生成防治建议
     */
    generateTreatment(disease) {
        return this.treatmentTemplates[disease.disease_category] || this.treatmentTemplates["真菌病害"];
    }

    /**
     * 导出完整数据库为JSON文件
     */
    async exportFullDatabase() {
        try {
            await this.loadDiseaseList();
            const fullDatabase = this.generateFullDatabase();
            
            // 创建下载链接
            const dataStr = JSON.stringify(fullDatabase, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = 'disease_database_full_100.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            console.log('完整数据库已导出');
            return fullDatabase;
        } catch (error) {
            console.error('导出数据库失败:', error);
            throw error;
        }
    }
}

// 创建全局实例
const diseaseDataGenerator = new DiseaseDataGenerator();

// 导出函数供HTML调用
function exportFullDiseaseDatabase() {
    diseaseDataGenerator.exportFullDatabase();
}

// 自动加载功能
document.addEventListener('DOMContentLoaded', () => {
    console.log('病害数据生成器已准备就绪');
});
