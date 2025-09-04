/**
 * 病害数据处理模块
 * 用于加载、查询和处理病害关系数据
 */

class DiseaseDataHandler {
    constructor() {
        this.diseaseData = null;
        this.isLoaded = false;
    }

    /**
     * 加载病害数据
     */
    async loadDiseaseData() {
        try {
            const response = await fetch('./data/complete_disease_database.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.diseaseData = await response.json();
            this.isLoaded = true;
            console.log('病害数据加载成功:', this.diseaseData.metadata);
            return this.diseaseData;
        } catch (error) {
            console.error('加载病害数据失败:', error);
            throw error;
        }
    }

    /**
     * 根据病害名称搜索
     */
    searchByDiseaseName(name) {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return null;
        }

        const searchTerm = name.toLowerCase();
        return this.diseaseData.diseases.filter(disease => 
            disease.disease_name.toLowerCase().includes(searchTerm) ||
            disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm))
        );
    }

    /**
     * 根据植物名称搜索相关病害
     */
    searchByPlantName(plantName) {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return null;
        }

        const searchTerm = plantName.toLowerCase();
        return this.diseaseData.diseases.filter(disease =>
            disease.affected_plants.some(plant =>
                plant.plant_name.toLowerCase().includes(searchTerm)
            )
        );
    }

    /**
     * 根据症状搜索病害
     */
    searchBySymptoms(symptoms) {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return null;
        }

        const searchTerms = symptoms.toLowerCase().split(/[,，\s]+/);
        return this.diseaseData.diseases.filter(disease =>
            searchTerms.some(term =>
                disease.symptoms.some(symptom =>
                    symptom.toLowerCase().includes(term)
                )
            )
        );
    }

    /**
     * 获取病害详细信息
     */
    getDiseaseById(id) {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return null;
        }

        return this.diseaseData.diseases.find(disease => disease.id === id);
    }

    /**
     * 获取所有病害列表
     */
    getAllDiseases() {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return [];
        }

        return this.diseaseData.diseases;
    }

    /**
     * 获取病害分类统计
     */
    getDiseaseCategories() {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return {};
        }

        const categories = {};
        this.diseaseData.diseases.forEach(disease => {
            const category = disease.disease_category;
            categories[category] = (categories[category] || 0) + 1;
        });

        return categories;
    }

    /**
     * 获取受影响植物统计
     */
    getAffectedPlantsStats() {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return {};
        }

        const plants = {};
        this.diseaseData.diseases.forEach(disease => {
            disease.affected_plants.forEach(plant => {
                const plantName = plant.plant_name;
                if (!plants[plantName]) {
                    plants[plantName] = {
                        count: 0,
                        diseases: [],
                        severity_levels: []
                    };
                }
                plants[plantName].count++;
                plants[plantName].diseases.push(disease.disease_name);
                plants[plantName].severity_levels.push(plant.severity_level);
            });
        });

        return plants;
    }

    /**
     * 根据环境条件推荐适宜的作物
     */
    recommendCropsByConditions(temperature, humidity, rainfall) {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return [];
        }

        return this.diseaseData.diseases.filter(disease => {
            const conditions = disease.optimal_conditions;
            return (
                temperature >= conditions.temperature.min &&
                temperature <= conditions.temperature.max &&
                humidity >= conditions.humidity.min &&
                humidity <= conditions.humidity.max &&
                rainfall >= conditions.rainfall.min &&
                rainfall <= conditions.rainfall.max
            );
        }).map(disease => ({
            disease_name: disease.disease_name,
            affected_plants: disease.affected_plants,
            optimal_conditions: disease.optimal_conditions
        }));
    }

    /**
     * 生成病害关系图数据
     */
    generateRelationshipData() {
        if (!this.isLoaded) {
            console.warn('数据尚未加载');
            return null;
        }

        const nodes = [];
        const links = [];

        // 添加病害节点
        this.diseaseData.diseases.forEach(disease => {
            nodes.push({
                id: disease.id,
                name: disease.disease_name,
                type: 'disease',
                category: disease.disease_category,
                symbolSize: 30
            });

            // 添加植物节点和连接
            disease.affected_plants.forEach(plant => {
                const plantId = `plant_${plant.plant_name}`;
                
                // 检查植物节点是否已存在
                if (!nodes.find(node => node.id === plantId)) {
                    nodes.push({
                        id: plantId,
                        name: plant.plant_name,
                        type: 'plant',
                        symbolSize: 20
                    });
                }

                // 添加病害到植物的连接
                links.push({
                    source: disease.id,
                    target: plantId,
                    relation: 'affects',
                    severity: plant.severity_level
                });
            });
        });

        return { nodes, links };
    }
}

// 创建全局实例
const diseaseDataHandler = new DiseaseDataHandler();

// 页面加载时自动加载数据
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await diseaseDataHandler.loadDiseaseData();
        console.log('病害数据已准备就绪');
        
        // 触发数据加载完成事件
        const event = new CustomEvent('diseaseDataLoaded', {
            detail: diseaseDataHandler.diseaseData
        });
        document.dispatchEvent(event);
    } catch (error) {
        console.error('初始化病害数据失败:', error);
    }
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DiseaseDataHandler;
}
