/**
 * 管理后台JavaScript
 */

// 全局变量
let currentTab = "solar-terms";
let solarTermsData = [];
let proverbsData = [];
let knowledgeData = [];
let categoriesData = [];

// 页面初始化
document.addEventListener("DOMContentLoaded", function () {
  console.log("管理后台初始化...");

  // 绑定表单提交事件
  bindFormEvents();

  // 加载初始数据
  loadAllData();
});

/**
 * 切换标签页
 */
function switchTab(tabName) {
  // 更新导航状态
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  document
    .querySelector(`.nav-tab[onclick="switchTab('${tabName}')"]`)
    .classList.add("active");

  // 更新内容显示
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.getElementById(`${tabName}-tab`).classList.add("active");

  currentTab = tabName;

  // 加载对应数据
  switch (tabName) {
    case "solar-terms":
      loadSolarTerms();
      break;
    case "proverbs":
      loadProverbs();
      break;
    case "knowledge":
      loadKnowledge();
      loadCategories(); // 加载分类用于下拉选择
      break;
    case "categories":
      loadCategories();
      break;
  }
}

/**
 * 绑定表单事件
 */
function bindFormEvents() {
  // 节气表单
  document
    .getElementById("solar-terms-form")
    .addEventListener("submit", handleSolarTermSubmit);

  // 农谚表单
  document
    .getElementById("proverbs-form")
    .addEventListener("submit", handleProverbSubmit);

  // 知识表单
  document
    .getElementById("knowledge-form")
    .addEventListener("submit", handleKnowledgeSubmit);

  // 分类表单
  document
    .getElementById("categories-form")
    .addEventListener("submit", handleCategorySubmit);
}

/**
 * 加载所有数据
 */
async function loadAllData() {
  try {
    await Promise.all([
      loadSolarTerms(),
      loadProverbs(),
      loadKnowledge(),
      loadCategories(),
    ]);

    updateStats();
  } catch (error) {
    console.error("加载数据失败:", error);
  }
}

/**
 * 更新统计数据
 */
function updateStats() {
  document.getElementById("solar-terms-count").textContent =
    solarTermsData.length;
  document.getElementById("proverbs-count").textContent = proverbsData.length;
  document.getElementById("knowledge-nodes-count").textContent =
    knowledgeData.length;
  document.getElementById("categories-count").textContent =
    categoriesData.length;
}

/**
 * 显示消息
 */
function showMessage(containerId, message, type = "success") {
  const container = document.getElementById(containerId);
  const messageDiv = document.createElement("div");
  messageDiv.className =
    type === "success" ? "success-message" : "error-message";
  messageDiv.textContent = message;

  container.innerHTML = "";
  container.appendChild(messageDiv);

  // 3秒后自动隐藏
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

/**
 * 重置表单
 */
function resetForm(formId) {
  document.getElementById(formId).reset();
}

// ==================== 节气管理 ====================

/**
 * 加载节气数据
 */
async function loadSolarTerms() {
  const loading = document.getElementById("solar-terms-loading");
  const table = document.getElementById("solar-terms-table");

  try {
    loading.style.display = "block";
    table.style.display = "none";

    const response = await window.agricultureAPI.getAllSolarTerms();
    solarTermsData = response.data || [];

    renderSolarTermsTable();

    loading.style.display = "none";
    table.style.display = "table";
  } catch (error) {
    console.error("加载节气数据失败:", error);
    loading.textContent = "加载失败，请刷新重试";
    showMessage(
      "solar-terms-messages",
      "加载节气数据失败: " + error.message,
      "error"
    );
  }
}

/**
 * 渲染节气表格
 */
function renderSolarTermsTable() {
  const tbody = document.getElementById("solar-terms-tbody");
  tbody.innerHTML = "";

  solarTermsData.forEach((term) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${term.name}</td>
            <td>${term.season}</td>
            <td>${term.date}</td>
            <td>${term.desc.substring(0, 50)}${
      term.desc.length > 50 ? "..." : ""
    }</td>
            <td>
                <button class="btn btn-secondary" onclick="editSolarTerm(${
                  term.id
                })">编辑</button>
                <button class="btn btn-danger" onclick="deleteSolarTerm(${
                  term.id
                })">删除</button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

/**
 * 处理节气表单提交
 */
async function handleSolarTermSubmit(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("term-name").value,
    season: document.getElementById("term-season").value,
    date_range: document.getElementById("term-date").value,
    description: document.getElementById("term-description").value,
  };

  try {
    const response = await window.agricultureAPI.addSolarTerm(formData);

    if (response.success) {
      showMessage("solar-terms-messages", "节气添加成功！");
      resetForm("solar-terms-form");
      await loadSolarTerms();
      updateStats();
    } else {
      showMessage("solar-terms-messages", response.message, "error");
    }
  } catch (error) {
    console.error("添加节气失败:", error);
    showMessage("solar-terms-messages", "添加失败: " + error.message, "error");
  }
}

/**
 * 删除节气
 */
async function deleteSolarTerm(id) {
  if (!confirm("确定要删除这个节气吗？")) {
    return;
  }

  try {
    const response = await window.agricultureAPI.delete(
      `solar_terms.php?id=${id}`
    );

    if (response.success) {
      showMessage("solar-terms-messages", "节气删除成功！");
      await loadSolarTerms();
      updateStats();
    } else {
      showMessage("solar-terms-messages", response.message, "error");
    }
  } catch (error) {
    console.error("删除节气失败:", error);
    showMessage("solar-terms-messages", "删除失败: " + error.message, "error");
  }
}

// ==================== 农谚管理 ====================

/**
 * 加载农谚数据
 */
async function loadProverbs() {
  const loading = document.getElementById("proverbs-loading");
  const table = document.getElementById("proverbs-table");

  try {
    loading.style.display = "block";
    table.style.display = "none";

    const response = await window.agricultureAPI.getAllProverbs();
    proverbsData = response.data || [];

    renderProverbsTable();

    loading.style.display = "none";
    table.style.display = "table";
  } catch (error) {
    console.error("加载农谚数据失败:", error);
    loading.textContent = "加载失败，请刷新重试";
    showMessage(
      "proverbs-messages",
      "加载农谚数据失败: " + error.message,
      "error"
    );
  }
}

/**
 * 渲染农谚表格
 */
function renderProverbsTable() {
  const tbody = document.getElementById("proverbs-tbody");
  tbody.innerHTML = "";

  proverbsData.slice(0, 50).forEach((proverb) => {
    // 只显示前50条
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${proverb.content.substring(0, 30)}${
      proverb.content.length > 30 ? "..." : ""
    }</td>
            <td>${proverb.month}月</td>
            <td>${proverb.season}</td>
            <td>${(proverb.description || "").substring(0, 40)}${
      (proverb.description || "").length > 40 ? "..." : ""
    }</td>
            <td>
                <button class="btn btn-secondary" onclick="editProverb(${
                  proverb.id
                })">编辑</button>
                <button class="btn btn-danger" onclick="deleteProverb(${
                  proverb.id
                })">删除</button>
            </td>
        `;
    tbody.appendChild(row);
  });

  if (proverbsData.length > 50) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="5" style="text-align: center; color: #718096;">显示前50条记录，共${proverbsData.length}条</td>`;
    tbody.appendChild(row);
  }
}

/**
 * 处理农谚表单提交
 */
async function handleProverbSubmit(e) {
  e.preventDefault();

  const formData = {
    category_id: 1, // 默认分类
    content: document.getElementById("proverb-content").value,
    description: document.getElementById("proverb-description").value,
    month: parseInt(document.getElementById("proverb-month").value),
    season: document.getElementById("proverb-season").value,
    tags: [],
    value: 1,
  };

  try {
    const response = await window.agricultureAPI.addProverb(formData);

    if (response.success) {
      showMessage("proverbs-messages", "农谚添加成功！");
      resetForm("proverbs-form");
      await loadProverbs();
      updateStats();
    } else {
      showMessage("proverbs-messages", response.message, "error");
    }
  } catch (error) {
    console.error("添加农谚失败:", error);
    showMessage("proverbs-messages", "添加失败: " + error.message, "error");
  }
}

/**
 * 删除农谚
 */
async function deleteProverb(id) {
  if (!confirm("确定要删除这条农谚吗？")) {
    return;
  }

  try {
    const response = await window.agricultureAPI.delete(
      `proverbs.php?id=${id}`
    );

    if (response.success) {
      showMessage("proverbs-messages", "农谚删除成功！");
      await loadProverbs();
      updateStats();
    } else {
      showMessage("proverbs-messages", response.message, "error");
    }
  } catch (error) {
    console.error("删除农谚失败:", error);
    showMessage("proverbs-messages", "删除失败: " + error.message, "error");
  }
}

// ==================== 知识管理 ====================

/**
 * 加载知识数据
 */
async function loadKnowledge() {
  const loading = document.getElementById("knowledge-loading");
  const table = document.getElementById("knowledge-table");

  try {
    loading.style.display = "block";
    table.style.display = "none";

    const response = await window.agricultureAPI.getKnowledgeNodes();
    knowledgeData = response.data || [];

    renderKnowledgeTable();

    loading.style.display = "none";
    table.style.display = "table";
  } catch (error) {
    console.error("加载知识数据失败:", error);
    loading.textContent = "加载失败，请刷新重试";
    showMessage(
      "knowledge-messages",
      "加载知识数据失败: " + error.message,
      "error"
    );
  }
}

/**
 * 渲染知识表格
 */
function renderKnowledgeTable() {
  const tbody = document.getElementById("knowledge-tbody");
  tbody.innerHTML = "";

  knowledgeData.slice(0, 50).forEach((node) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${node.name}</td>
            <td>${node.category_name || "未知"}</td>
            <td>${node.level}</td>
            <td>${(node.description || "").substring(0, 40)}${
      (node.description || "").length > 40 ? "..." : ""
    }</td>
            <td>
                <button class="btn btn-secondary" onclick="editKnowledge(${
                  node.id
                })">编辑</button>
                <button class="btn btn-danger" onclick="deleteKnowledge(${
                  node.id
                })">删除</button>
            </td>
        `;
    tbody.appendChild(row);
  });

  if (knowledgeData.length > 50) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="5" style="text-align: center; color: #718096;">显示前50条记录，共${knowledgeData.length}条</td>`;
    tbody.appendChild(row);
  }
}

/**
 * 处理知识表单提交
 */
async function handleKnowledgeSubmit(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("node-name").value,
    category_id: parseInt(document.getElementById("node-category").value),
    description: document.getElementById("node-description").value,
    level: 0,
    sort_order: 0,
  };

  try {
    const response = await window.agricultureAPI.addKnowledgeNode(formData);

    if (response.success) {
      showMessage("knowledge-messages", "知识点添加成功！");
      resetForm("knowledge-form");
      await loadKnowledge();
      updateStats();
    } else {
      showMessage("knowledge-messages", response.message, "error");
    }
  } catch (error) {
    console.error("添加知识点失败:", error);
    showMessage("knowledge-messages", "添加失败: " + error.message, "error");
  }
}

/**
 * 删除知识点
 */
async function deleteKnowledge(id) {
  if (!confirm("确定要删除这个知识点吗？")) {
    return;
  }

  try {
    const response = await window.agricultureAPI.delete(
      `knowledge.php?id=${id}`
    );

    if (response.success) {
      showMessage("knowledge-messages", "知识点删除成功！");
      await loadKnowledge();
      updateStats();
    } else {
      showMessage("knowledge-messages", response.message, "error");
    }
  } catch (error) {
    console.error("删除知识点失败:", error);
    showMessage("knowledge-messages", "删除失败: " + error.message, "error");
  }
}

// ==================== 分类管理 ====================

/**
 * 加载分类数据
 */
async function loadCategories() {
  const loading = document.getElementById("categories-loading");
  const table = document.getElementById("categories-table");

  try {
    loading.style.display = "block";
    table.style.display = "none";

    const response = await window.agricultureAPI.getKnowledgeCategories();
    categoriesData = response.data || [];

    renderCategoriesTable();
    updateCategorySelect();

    loading.style.display = "none";
    table.style.display = "table";
  } catch (error) {
    console.error("加载分类数据失败:", error);
    loading.textContent = "加载失败，请刷新重试";
    showMessage(
      "categories-messages",
      "加载分类数据失败: " + error.message,
      "error"
    );
  }
}

/**
 * 渲染分类表格
 */
function renderCategoriesTable() {
  const tbody = document.getElementById("categories-tbody");
  tbody.innerHTML = "";

  categoriesData.forEach((category) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${category.name}</td>
            <td>
                <div style="width: 20px; height: 20px; background: ${
                  category.color
                }; border-radius: 3px; display: inline-block;"></div>
                ${category.color}
            </td>
            <td>${(category.description || "").substring(0, 50)}${
      (category.description || "").length > 50 ? "..." : ""
    }</td>
            <td>${new Date(category.created_at).toLocaleDateString()}</td>
            <td>
                <button class="btn btn-secondary" onclick="editCategory(${
                  category.id
                })">编辑</button>
                <button class="btn btn-danger" onclick="deleteCategory(${
                  category.id
                })">删除</button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

/**
 * 更新分类下拉选择
 */
function updateCategorySelect() {
  const select = document.getElementById("node-category");
  select.innerHTML = '<option value="">请选择分类</option>';

  categoriesData.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    select.appendChild(option);
  });
}

/**
 * 处理分类表单提交
 */
async function handleCategorySubmit(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("category-name").value,
    color: document.getElementById("category-color").value,
    description: document.getElementById("category-description").value,
  };

  try {
    const response = await window.agricultureAPI.post(
      "knowledge.php?action=category",
      formData
    );

    if (response.success) {
      showMessage("categories-messages", "分类添加成功！");
      resetForm("categories-form");
      await loadCategories();
      updateStats();
    } else {
      showMessage("categories-messages", response.message, "error");
    }
  } catch (error) {
    console.error("添加分类失败:", error);
    showMessage("categories-messages", "添加失败: " + error.message, "error");
  }
}

/**
 * 删除分类
 */
async function deleteCategory(id) {
  if (
    !confirm("确定要删除这个分类吗？删除后该分类下的所有知识点也会被删除！")
  ) {
    return;
  }

  try {
    const response = await window.agricultureAPI.delete(
      `knowledge.php?action=category&id=${id}`
    );

    if (response.success) {
      showMessage("categories-messages", "分类删除成功！");
      await loadCategories();
      await loadKnowledge(); // 重新加载知识数据
      updateStats();
    } else {
      showMessage("categories-messages", response.message, "error");
    }
  } catch (error) {
    console.error("删除分类失败:", error);
    showMessage("categories-messages", "删除失败: " + error.message, "error");
  }
}

// ==================== 编辑功能（简化版） ====================

function editSolarTerm(id) {
  alert("编辑功能开发中...");
}

function editProverb(id) {
  alert("编辑功能开发中...");
}

function editKnowledge(id) {
  alert("编辑功能开发中...");
}

function editCategory(id) {
  alert("编辑功能开发中...");
}
