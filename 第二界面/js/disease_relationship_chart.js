/**
 * 病害关系图可视化模块
 * 使用ECharts创建病害与植物的关系网络图
 */

class DiseaseRelationshipChart {
    constructor(containerId) {
        this.containerId = containerId;
        this.chart = null;
        this.data = null;
        this.init();
    }

    init() {
        // 等待数据加载完成
        document.addEventListener('diseaseDataLoaded', (event) => {
            this.onDataLoaded(event.detail);
        });
    }

    onDataLoaded(diseaseData) {
        this.data = diseaseData;
        this.initChart();
        this.renderChart();
    }

    initChart() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`找不到容器: ${this.containerId}`);
            return;
        }

        this.chart = echarts.init(container);
        
        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            this.chart.resize();
        });
    }

    renderChart() {
        if (!this.chart || !this.data) return;

        const relationshipData = this.generateChartData();
        
        const option = {
            title: {
                text: '农作物病害关系图',
                left: 'center',
                textStyle: {
                    color: '#0efcff',
                    fontSize: 18
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: (params) => {
                    if (params.dataType === 'node') {
                        return this.formatNodeTooltip(params.data);
                    } else if (params.dataType === 'edge') {
                        return this.formatEdgeTooltip(params.data);
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderColor: '#0efcff',
                textStyle: {
                    color: '#fff'
                }
            },
            legend: {
                data: ['病害', '植物'],
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '病害关系图',
                type: 'graph',
                layout: 'force',
                data: relationshipData.nodes,
                links: relationshipData.links,
                categories: [
                    { name: '病害', itemStyle: { color: '#ff6b6b' } },
                    { name: '植物', itemStyle: { color: '#4ecdc4' } }
                ],
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#fff',
                    fontSize: 12
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3,
                    opacity: 0.7
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 3
                    }
                },
                force: {
                    repulsion: 1000,
                    gravity: 0.1,
                    edgeLength: 150,
                    layoutAnimation: true
                }
            }]
        };

        this.chart.setOption(option);
        this.bindChartEvents();
    }

    generateChartData() {
        const nodes = [];
        const links = [];
        const nodeMap = new Map();

        // 添加病害节点
        this.data.diseases.forEach(disease => {
            const diseaseNode = {
                id: disease.id,
                name: disease.disease_name,
                category: 0, // 病害类别
                symbolSize: 40,
                value: disease.disease_category,
                itemStyle: {
                    color: this.getDiseaseColor(disease.disease_category)
                },
                diseaseData: disease
            };
            nodes.push(diseaseNode);
            nodeMap.set(disease.id, diseaseNode);

            // 添加受影响的植物节点
            disease.affected_plants.forEach(plant => {
                const plantId = `plant_${plant.plant_name}`;
                
                if (!nodeMap.has(plantId)) {
                    const plantNode = {
                        id: plantId,
                        name: plant.plant_name,
                        category: 1, // 植物类别
                        symbolSize: 30,
                        value: plant.plant_name,
                        itemStyle: {
                            color: '#4ecdc4'
                        },
                        plantData: plant
                    };
                    nodes.push(plantNode);
                    nodeMap.set(plantId, plantNode);
                }

                // 添加病害到植物的连接
                links.push({
                    source: disease.id,
                    target: plantId,
                    value: plant.severity_level,
                    lineStyle: {
                        width: this.getSeverityWidth(plant.severity_level),
                        color: this.getSeverityColor(plant.severity_level)
                    },
                    label: {
                        show: false,
                        formatter: plant.severity_level
                    }
                });
            });
        });

        return { nodes, links };
    }

    getDiseaseColor(category) {
        const colors = {
            '真菌病害': '#ff6b6b',
            '病毒病害': '#ffa726',
            '细菌病害': '#ab47bc',
            '生理病害': '#66bb6a'
        };
        return colors[category] || '#ff6b6b';
    }

    getSeverityWidth(severity) {
        const widths = {
            '低': 2,
            '中': 4,
            '高': 6,
            '极高': 8
        };
        return widths[severity] || 3;
    }

    getSeverityColor(severity) {
        const colors = {
            '低': '#4caf50',
            '中': '#ff9800',
            '高': '#f44336',
            '极高': '#d32f2f'
        };
        return colors[severity] || '#ff9800';
    }

    formatNodeTooltip(node) {
        if (node.category === 0) { // 病害节点
            const disease = node.diseaseData;
            return `
                <div style="padding: 10px;">
                    <h4 style="margin: 0; color: #0efcff;">${disease.disease_name}</h4>
                    <p style="margin: 5px 0;"><strong>类型：</strong>${disease.disease_category}</p>
                    <p style="margin: 5px 0;"><strong>主要症状：</strong></p>
                    <ul style="margin: 5px 0; padding-left: 20px;">
                        ${disease.symptoms.slice(0, 2).map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    <p style="margin: 5px 0; font-size: 12px; color: #ccc;">点击查看详细信息</p>
                </div>
            `;
        } else { // 植物节点
            return `
                <div style="padding: 10px;">
                    <h4 style="margin: 0; color: #4ecdc4;">${node.name}</h4>
                    <p style="margin: 5px 0;">受影响的作物</p>
                </div>
            `;
        }
    }

    formatEdgeTooltip(edge) {
        return `
            <div style="padding: 10px;">
                <p style="margin: 0;"><strong>危害程度：</strong>${edge.value}</p>
            </div>
        `;
    }

    bindChartEvents() {
        // 节点点击事件
        this.chart.on('click', (params) => {
            if (params.dataType === 'node' && params.data.category === 0) {
                // 点击病害节点，显示详细信息
                this.showDiseaseDetail(params.data.diseaseData);
            }
        });

        // 节点悬停事件
        this.chart.on('mouseover', (params) => {
            if (params.dataType === 'node') {
                this.highlightRelatedNodes(params.data.id);
            }
        });
    }

    showDiseaseDetail(disease) {
        // 调用搜索模块的详情显示功能
        if (window.diseaseSearch) {
            diseaseSearch.showDiseaseDetail(disease.id);
        }
    }

    highlightRelatedNodes(nodeId) {
        // 高亮相关节点的逻辑
        this.chart.dispatchAction({
            type: 'highlight',
            dataIndex: nodeId
        });
    }

    // 公共方法：更新图表数据
    updateChart() {
        if (this.chart && this.data) {
            this.renderChart();
        }
    }

    // 公共方法：调整图表大小
    resize() {
        if (this.chart) {
            this.chart.resize();
        }
    }

    // 公共方法：销毁图表
    dispose() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }
}

// 创建全局实例（如果页面有对应容器）
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('relationshipChart');
    if (container) {
        window.diseaseRelationshipChart = new DiseaseRelationshipChart('relationshipChart');
    }
});
