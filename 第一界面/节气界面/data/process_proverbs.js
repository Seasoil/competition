const fs = require('fs');

// 读取原始数据
const rawData = JSON.parse(fs.readFileSync('./proverbs.json', 'utf8'));

// 用于存储谚语出现次数
const proverbCounts = new Map();
// 用于存储已处理的谚语
const processedProverbs = new Set();

// 统计谚语出现次数
function countProverbs(node) {
    if (!node) return;

    if (node.children) {
        node.children.forEach(child => countProverbs(child));
    } else if (node.name) {
        const proverbName = node.name.trim();
        proverbCounts.set(proverbName, (proverbCounts.get(proverbName) || 0) + 1);
    }
}

// 递归处理数据
function processNode(node) {
    if (!node) return null;

    if (node.children) {
        // 处理子节点
        const uniqueChildren = [];
        for (const child of node.children) {
            if (child.name && !child.children) {
                // 如果是谚语节点
                const proverbName = child.name.trim();
                if (!processedProverbs.has(proverbName)) {
                    processedProverbs.add(proverbName);
                    uniqueChildren.push(child);
                }
            } else {
                // 如果是分类节点
                const processedChild = processNode(child);
                if (processedChild) {
                    uniqueChildren.push(processedChild);
                }
            }
        }
        // 如果分类节点没有子节点，则不保留
        if (uniqueChildren.length > 0) {
            return {
                ...node,
                children: uniqueChildren
            };
        }
        return null;
    }
    return node;
}

// 统计所有谚语出现次数
rawData.forEach(node => countProverbs(node));

// 输出重复的谚语
console.log('重复的谚语及其出现次数：');
for (const [proverb, count] of proverbCounts.entries()) {
    if (count > 1) {
        console.log(`${proverb}: ${count}次`);
    }
}

// 处理数据
const processedData = [];
for (const node of rawData) {
    const processedNode = processNode(node);
    if (processedNode) {
        processedData.push(processedNode);
    }
}

// 写入处理后的数据
fs.writeFileSync('./proverbs_processed.json', JSON.stringify(processedData, null, 2));

console.log('\n处理完成！');
console.log(`原始谚语总数: ${proverbCounts.size}`);
console.log(`去重后谚语数量: ${processedProverbs.size}`); 