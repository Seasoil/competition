/**
 * 病害搜索功能模块
 * 提供病害搜索、结果展示和详情查看功能
 */

class DiseaseSearch {
    constructor() {
        this.searchInput = null;
        this.searchButton = null;
        this.resultsContainer = null;
        this.currentResults = [];
        this.init();
    }

    init() {
        // 等待DOM加载完成
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeElements();
            this.bindEvents();
        });

        // 等待病害数据加载完成
        document.addEventListener('diseaseDataLoaded', (event) => {
            console.log('病害搜索模块：数据加载完成');
            this.onDataLoaded(event.detail);
        });
    }

    initializeElements() {
        this.searchInput = document.getElementById('diseaseSearch');
        this.searchButton = document.querySelector('.search-btn');
        
        // 创建结果展示容器（如果不存在）
        this.resultsContainer = document.getElementById('searchResults');
        if (!this.resultsContainer) {
            this.createResultsContainer();
        }
    }

    createResultsContainer() {
        this.resultsContainer = document.createElement('div');
        this.resultsContainer.id = 'searchResults';
        this.resultsContainer.className = 'search-results';
        this.resultsContainer.style.cssText = `
            position: absolute;
            top: 100px;
            left: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            border: 1px solid #0efcff;
            border-radius: 8px;
            padding: 20px;
            max-height: 70vh;
            overflow-y: auto;
            z-index: 1000;
            display: none;
        `;
        document.body.appendChild(this.resultsContainer);
    }

    bindEvents() {
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => this.performSearch());
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });

            // 实时搜索建议
            this.searchInput.addEventListener('input', () => {
                this.showSearchSuggestions();
            });
        }

        // 点击外部关闭结果
        document.addEventListener('click', (e) => {
            if (!this.resultsContainer.contains(e.target) && 
                e.target !== this.searchInput && 
                e.target !== this.searchButton) {
                this.hideResults();
            }
        });
    }

    onDataLoaded(data) {
        console.log('搜索模块接收到数据:', data.metadata);
    }

    performSearch() {
        const query = this.searchInput?.value.trim();
        if (!query) {
            alert('请输入搜索关键词');
            return;
        }

        if (!diseaseDataHandler.isLoaded) {
            alert('数据正在加载中，请稍后再试');
            return;
        }

        // 执行多种搜索策略
        const diseaseResults = diseaseDataHandler.searchByDiseaseName(query);
        const plantResults = diseaseDataHandler.searchByPlantName(query);
        const symptomResults = diseaseDataHandler.searchBySymptoms(query);

        // 合并结果并去重
        const allResults = [...diseaseResults, ...plantResults, ...symptomResults];
        this.currentResults = this.removeDuplicates(allResults);

        this.displayResults(query);
    }

    removeDuplicates(results) {
        const seen = new Set();
        return results.filter(disease => {
            if (seen.has(disease.id)) {
                return false;
            }
            seen.add(disease.id);
            return true;
        });
    }

    displayResults(query) {
        if (this.currentResults.length === 0) {
            this.showNoResults(query);
            return;
        }

        let html = `
            <div class="search-header">
                <h3 style="color: #0efcff; margin-bottom: 15px;">
                    搜索结果 (${this.currentResults.length}条)
                </h3>
                <button class="close-btn" onclick="diseaseSearch.hideResults()" style="
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    color: #0efcff;
                    font-size: 20px;
                    cursor: pointer;
                ">×</button>
            </div>
            <div class="results-list">
        `;

        this.currentResults.forEach(disease => {
            html += this.createDiseaseCard(disease);
        });

        html += '</div>';
        this.resultsContainer.innerHTML = html;
        this.showResults();
    }

    createDiseaseCard(disease) {
        const plantsText = disease.affected_plants.map(p => p.plant_name).join('、');
        const symptomsText = disease.symptoms.slice(0, 3).join('；');
        
        return `
            <div class="disease-card" style="
                background: rgba(0, 239, 255, 0.05);
                border: 1px solid #0efcff;
                border-radius: 8px;
                padding: 15px;
                margin-bottom: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
            " onclick="diseaseSearch.showDiseaseDetail('${disease.id}')">
                <div class="disease-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="color: #0efcff; margin: 0;">${disease.disease_name}</h4>
                    <span style="color: #00ff88; font-size: 12px;">${disease.disease_category}</span>
                </div>
                <div class="disease-info" style="margin-top: 10px;">
                    <p style="color: #fff; margin: 5px 0; font-size: 14px;">
                        <strong>受害植物：</strong>${plantsText}
                    </p>
                    <p style="color: #ccc; margin: 5px 0; font-size: 13px;">
                        <strong>主要症状：</strong>${symptomsText}...
                    </p>
                </div>
            </div>
        `;
    }

    showDiseaseDetail(diseaseId) {
        const disease = diseaseDataHandler.getDiseaseById(diseaseId);
        if (!disease) return;

        const detailHtml = `
            <div class="disease-detail">
                <div class="detail-header">
                    <h3 style="color: #0efcff;">${disease.disease_name}</h3>
                    <button onclick="diseaseSearch.backToResults()" style="
                        background: #0efcff;
                        color: #000;
                        border: none;
                        padding: 5px 10px;
                        border-radius: 4px;
                        cursor: pointer;
                    ">返回列表</button>
                </div>
                
                <div class="detail-content" style="margin-top: 20px;">
                    <div class="detail-section">
                        <h4 style="color: #00ff88;">病害信息</h4>
                        <p><strong>病害类型：</strong>${disease.disease_category}</p>
                        <p><strong>受害植物：</strong>${disease.affected_plants.map(p => p.plant_name).join('、')}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4 style="color: #00ff88;">症状特征</h4>
                        <ul>
                            ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4 style="color: #00ff88;">防治建议</h4>
                        <ul>
                            ${disease.prevention_treatment.map(treatment => `<li>${treatment}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4 style="color: #00ff88;">适宜环境条件</h4>
                        <p><strong>温度：</strong>${disease.optimal_conditions.temperature.min}-${disease.optimal_conditions.temperature.max}°C</p>
                        <p><strong>湿度：</strong>${disease.optimal_conditions.humidity.min}-${disease.optimal_conditions.humidity.max}%</p>
                        <p><strong>降雨量：</strong>${disease.optimal_conditions.rainfall.min}-${disease.optimal_conditions.rainfall.max}mm/年</p>
                    </div>
                </div>
            </div>
        `;

        this.resultsContainer.innerHTML = detailHtml;
    }

    backToResults() {
        this.displayResults('');
    }

    showNoResults(query) {
        this.resultsContainer.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 40px;">
                <h3 style="color: #0efcff;">未找到相关结果</h3>
                <p style="color: #ccc;">没有找到与"${query}"相关的病害信息</p>
                <button onclick="diseaseSearch.hideResults()" style="
                    background: #0efcff;
                    color: #000;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 15px;
                ">关闭</button>
            </div>
        `;
        this.showResults();
    }

    showSearchSuggestions() {
        // 实现搜索建议功能
        const query = this.searchInput?.value.trim();
        if (query.length < 2) return;

        // 这里可以添加实时搜索建议的逻辑
    }

    showResults() {
        this.resultsContainer.style.display = 'block';
    }

    hideResults() {
        this.resultsContainer.style.display = 'none';
    }
}

// 创建全局搜索实例
const diseaseSearch = new DiseaseSearch();

// 全局搜索函数（供HTML调用）
function searchDisease() {
    diseaseSearch.performSearch();
}
