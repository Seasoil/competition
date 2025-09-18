/**
 * API调用封装
 */

class AgricultureAPI {
  constructor(baseUrl = "./api/") {
    this.baseUrl = baseUrl;
  }

  /**
   * 通用请求方法
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "请求失败");
      }

      return data;
    } catch (error) {
      console.error("API请求错误:", error);
      throw error;
    }
  }

  /**
   * GET请求
   */
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url);
  }

  /**
   * POST请求
   */
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT请求
   */
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE请求
   */
  async delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE",
    });
  }

  // ====== 节气相关API ======

  /**
   * 获取所有节气
   */
  async getAllSolarTerms() {
    return this.get("solar_terms.php", { action: "all" });
  }

  /**
   * 按季节获取节气
   */
  async getSolarTermsBySeason(season) {
    return this.get("solar_terms.php", { action: "by_season", season });
  }

  /**
   * 获取节气详情
   */
  async getSolarTermDetail(id) {
    return this.get("solar_terms.php", { action: "detail", id });
  }

  /**
   * 添加新节气
   */
  async addSolarTerm(termData) {
    return this.post("solar_terms.php", termData);
  }

  // ====== 农学知识相关API ======

  /**
   * 获取知识分类
   */
  async getKnowledgeCategories() {
    return this.get("knowledge.php", { action: "categories" });
  }

  /**
   * 获取知识节点
   */
  async getKnowledgeNodes(categoryId = null) {
    const params = { action: "nodes" };
    if (categoryId) params.category_id = categoryId;
    return this.get("knowledge.php", params);
  }

  /**
   * 获取力导向图数据
   */
  async getGraphData() {
    return this.get("knowledge.php", { action: "graph_data" });
  }

  /**
   * 搜索知识节点
   */
  async searchKnowledge(keyword) {
    return this.get("knowledge.php", { action: "search", keyword });
  }

  /**
   * 获取节点详情
   */
  async getNodeDetail(id) {
    return this.get("knowledge.php", { action: "node_detail", id });
  }

  /**
   * 添加新节点
   */
  async addKnowledgeNode(nodeData) {
    return this.post("knowledge.php?action=node", nodeData);
  }

  // ====== 农谚相关API ======

  /**
   * 获取所有农谚
   */
  async getAllProverbs() {
    return this.get("proverbs.php", { action: "all" });
  }

  /**
   * 按季节获取农谚
   */
  async getProverbsBySeason(season) {
    return this.get("proverbs.php", { action: "by_season", season });
  }

  /**
   * 按月份获取农谚
   */
  async getProverbsByMonth(month) {
    return this.get("proverbs.php", { action: "by_month", month });
  }

  /**
   * 获取词云数据
   */
  async getWordCloudData() {
    return this.get("proverbs.php", { action: "wordcloud_data" });
  }

  /**
   * 获取树状图数据
   */
  async getTreeData() {
    return this.get("proverbs.php", { action: "tree_data" });
  }

  /**
   * 添加新农谚
   */
  async addProverb(proverbData) {
    return this.post("proverbs.php", proverbData);
  }
}

// 创建全局API实例
window.agricultureAPI = new AgricultureAPI();

/**
 * 数据缓存管理
 */
class DataCache {
  constructor() {
    this.cache = new Map();
    this.expireTime = 5 * 60 * 1000; // 5分钟过期
  }

  set(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > this.expireTime) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear() {
    this.cache.clear();
  }
}

// 创建全局缓存实例
window.dataCache = new DataCache();

/**
 * 带缓存的API调用封装
 */
async function getCachedData(cacheKey, apiCall) {
  // 先尝试从缓存获取
  let data = window.dataCache.get(cacheKey);
  if (data) {
    console.log(`从缓存获取数据: ${cacheKey}`);
    return data;
  }

  // 缓存中没有，调用API
  try {
    console.log(`从API获取数据: ${cacheKey}`);
    const response = await apiCall();
    data = response.data;

    // 存入缓存
    window.dataCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`获取数据失败 (${cacheKey}):`, error);
    throw error;
  }
}

/**
 * 显示加载状态
 */
function showLoading(element) {
  if (typeof element === "string") {
    element = document.getElementById(element);
  }
  if (element) {
    element.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 200px;">
                <div style="text-align: center;">
                    <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
                    <p style="color: #666;">加载中...</p>
                </div>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
  }
}

/**
 * 显示错误信息
 */
function showError(element, message) {
  if (typeof element === "string") {
    element = document.getElementById(element);
  }
  if (element) {
    element.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 200px;">
                <div style="text-align: center; color: #e74c3c;">
                    <div style="font-size: 48px; margin-bottom: 10px;">⚠️</div>
                    <p>加载失败: ${message}</p>
                    <button onclick="location.reload()" style="margin-top: 10px; padding: 8px 16px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        重新加载
                    </button>
                </div>
            </div>
        `;
  }
}

/**
 * 页面初始化时的数据加载
 */
window.addEventListener("DOMContentLoaded", function () {
  console.log("农学文化数据可视化系统已启动");
  console.log("API基础地址:", window.agricultureAPI.baseUrl);

  // 只有在明确需要时才预加载数据
  // preloadBasicData();
});

/**
 * 预加载基础数据
 */
async function preloadBasicData() {
  try {
    // 检查是否有PHP服务器运行
    const testResponse = await fetch('./api/test_db.php', {
      method: 'GET',
      timeout: 2000
    });

    const contentType = testResponse.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      // 预加载分类数据
      await getCachedData("knowledge_categories", () =>
        window.agricultureAPI.getKnowledgeCategories()
      );
      console.log("基础数据预加载完成");
    } else {
      console.log("PHP服务器未运行，跳过预加载");
    }
  } catch (error) {
    console.log("API不可用，跳过预加载:", error.message);
  }
}
