/**
 * 数据验证模块
 * 用于验证病害数据库的完整性和正确性
 */

class DataValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
    }

    /**
     * 验证整个数据库
     */
    validateDatabase(data) {
        this.errors = [];
        this.warnings = [];

        if (!data) {
            this.errors.push('数据库为空');
            return this.getValidationResult();
        }

        // 验证元数据
        this.validateMetadata(data.metadata);

        // 验证病害数据
        if (data.diseases && Array.isArray(data.diseases)) {
            data.diseases.forEach((disease, index) => {
                this.validateDisease(disease, index);
            });
        } else {
            this.errors.push('diseases 字段缺失或格式错误');
        }

        return this.getValidationResult();
    }

    /**
     * 验证元数据
     */
    validateMetadata(metadata) {
        if (!metadata) {
            this.errors.push('metadata 字段缺失');
            return;
        }

        const requiredFields = ['version', 'last_updated', 'total_diseases', 'data_source'];
        requiredFields.forEach(field => {
            if (!metadata[field]) {
                this.errors.push(`metadata.${field} 字段缺失`);
            }
        });
    }

    /**
     * 验证单个病害记录
     */
    validateDisease(disease, index) {
        const prefix = `diseases[${index}]`;

        // 验证必需字段
        const requiredFields = [
            'id', 'disease_name', 'disease_category', 'symptoms',
            'affected_plants', 'soil_data', 'prevention_treatment',
            'healthy_growth_cycle', 'plant_info', 'optimal_conditions',
            'soil_type', 'disease_images'
        ];

        requiredFields.forEach(field => {
            if (!disease[field]) {
                this.errors.push(`${prefix}.${field} 字段缺失`);
            }
        });

        // 验证ID唯一性
        this.validateUniqueId(disease.id, index);

        // 验证症状数组
        this.validateArray(disease.symptoms, `${prefix}.symptoms`, 'string');

        // 验证受影响植物
        this.validateAffectedPlants(disease.affected_plants, `${prefix}.affected_plants`);

        // 验证土壤数据
        this.validateSoilData(disease.soil_data, `${prefix}.soil_data`);

        // 验证防治建议
        this.validateArray(disease.prevention_treatment, `${prefix}.prevention_treatment`, 'string');

        // 验证生长周期
        this.validateGrowthCycle(disease.healthy_growth_cycle, `${prefix}.healthy_growth_cycle`);

        // 验证植物信息
        this.validatePlantInfo(disease.plant_info, `${prefix}.plant_info`);

        // 验证环境条件
        this.validateOptimalConditions(disease.optimal_conditions, `${prefix}.optimal_conditions`);

        // 验证土质信息
        this.validateSoilType(disease.soil_type, `${prefix}.soil_type`);

        // 验证图片数组
        this.validateArray(disease.disease_images, `${prefix}.disease_images`, 'string');
    }

    /**
     * 验证ID唯一性
     */
    validateUniqueId(id, currentIndex) {
        // 这里需要在更大的上下文中验证，暂时跳过
    }

    /**
     * 验证数组字段
     */
    validateArray(arr, fieldName, itemType = null) {
        if (!Array.isArray(arr)) {
            this.errors.push(`${fieldName} 应该是数组`);
            return;
        }

        if (arr.length === 0) {
            this.warnings.push(`${fieldName} 数组为空`);
        }

        if (itemType) {
            arr.forEach((item, index) => {
                if (typeof item !== itemType) {
                    this.errors.push(`${fieldName}[${index}] 应该是 ${itemType} 类型`);
                }
            });
        }
    }

    /**
     * 验证受影响植物
     */
    validateAffectedPlants(plants, fieldName) {
        if (!Array.isArray(plants)) {
            this.errors.push(`${fieldName} 应该是数组`);
            return;
        }

        plants.forEach((plant, index) => {
            const plantPrefix = `${fieldName}[${index}]`;
            
            if (!plant.plant_name) {
                this.errors.push(`${plantPrefix}.plant_name 字段缺失`);
            }

            if (!Array.isArray(plant.plant_images)) {
                this.errors.push(`${plantPrefix}.plant_images 应该是数组`);
            }

            const validSeverityLevels = ['低', '中', '高', '极高'];
            if (!validSeverityLevels.includes(plant.severity_level)) {
                this.errors.push(`${plantPrefix}.severity_level 值无效，应该是: ${validSeverityLevels.join(', ')}`);
            }
        });
    }

    /**
     * 验证土壤数据
     */
    validateSoilData(soilData, fieldName) {
        if (!soilData || typeof soilData !== 'object') {
            this.errors.push(`${fieldName} 应该是对象`);
            return;
        }

        const requiredFields = [
            'ph_range', 'organic_matter', 'nitrogen_content',
            'phosphorus_content', 'potassium_content', 'moisture_content'
        ];

        requiredFields.forEach(field => {
            if (!soilData[field]) {
                this.errors.push(`${fieldName}.${field} 字段缺失`);
            }
        });
    }

    /**
     * 验证生长周期
     */
    validateGrowthCycle(cycle, fieldName) {
        if (!cycle || typeof cycle !== 'object') {
            this.errors.push(`${fieldName} 应该是对象`);
            return;
        }

        if (!cycle.total_cycle) {
            this.errors.push(`${fieldName}.total_cycle 字段缺失`);
        }
    }

    /**
     * 验证植物信息
     */
    validatePlantInfo(plantInfo, fieldName) {
        if (!plantInfo || typeof plantInfo !== 'object') {
            this.errors.push(`${fieldName} 应该是对象`);
            return;
        }

        const requiredFields = ['scientific_name', 'family', 'growth_habit', 'root_system', 'plant_height'];
        requiredFields.forEach(field => {
            if (!plantInfo[field]) {
                this.errors.push(`${fieldName}.${field} 字段缺失`);
            }
        });
    }

    /**
     * 验证环境条件
     */
    validateOptimalConditions(conditions, fieldName) {
        if (!conditions || typeof conditions !== 'object') {
            this.errors.push(`${fieldName} 应该是对象`);
            return;
        }

        const requiredConditions = ['temperature', 'humidity', 'rainfall', 'air_pressure'];
        requiredConditions.forEach(condition => {
            if (!conditions[condition]) {
                this.errors.push(`${fieldName}.${condition} 字段缺失`);
                return;
            }

            const conditionData = conditions[condition];
            const requiredProps = ['min', 'max', 'optimal', 'unit'];
            requiredProps.forEach(prop => {
                if (conditionData[prop] === undefined) {
                    this.errors.push(`${fieldName}.${condition}.${prop} 字段缺失`);
                }
            });

            // 验证数值逻辑
            if (conditionData.min > conditionData.max) {
                this.errors.push(`${fieldName}.${condition}: min 值不能大于 max 值`);
            }

            if (conditionData.optimal < conditionData.min || conditionData.optimal > conditionData.max) {
                this.warnings.push(`${fieldName}.${condition}: optimal 值应该在 min 和 max 之间`);
            }
        });
    }

    /**
     * 验证土质信息
     */
    validateSoilType(soilType, fieldName) {
        if (!soilType || typeof soilType !== 'object') {
            this.errors.push(`${fieldName} 应该是对象`);
            return;
        }

        const requiredFields = ['preferred', 'texture', 'drainage', 'fertility'];
        requiredFields.forEach(field => {
            if (!soilType[field]) {
                this.errors.push(`${fieldName}.${field} 字段缺失`);
            }
        });
    }

    /**
     * 获取验证结果
     */
    getValidationResult() {
        return {
            isValid: this.errors.length === 0,
            errors: this.errors,
            warnings: this.warnings,
            summary: {
                errorCount: this.errors.length,
                warningCount: this.warnings.length
            }
        };
    }

    /**
     * 打印验证结果
     */
    printValidationResult(result) {
        console.log('=== 数据验证结果 ===');
        console.log(`状态: ${result.isValid ? '✅ 通过' : '❌ 失败'}`);
        console.log(`错误数量: ${result.summary.errorCount}`);
        console.log(`警告数量: ${result.summary.warningCount}`);

        if (result.errors.length > 0) {
            console.log('\n错误列表:');
            result.errors.forEach((error, index) => {
                console.log(`${index + 1}. ${error}`);
            });
        }

        if (result.warnings.length > 0) {
            console.log('\n警告列表:');
            result.warnings.forEach((warning, index) => {
                console.log(`${index + 1}. ${warning}`);
            });
        }
    }
}

// 自动验证数据（当数据加载完成时）
document.addEventListener('diseaseDataLoaded', (event) => {
    const validator = new DataValidator();
    const result = validator.validateDatabase(event.detail);
    validator.printValidationResult(result);
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataValidator;
}
