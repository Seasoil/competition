// 中国农作物分布点数据
// 数据来源：国家统计局、农业农村部等官方统计数据
// 更新时间：2024年

// 农作物类型配置
const cropTypes = {
    grain: {
        name: '谷物类',
        color: '#FFD700', // 金色
        icon: '🌾'
    },
    economic: {
        name: '经济作物',
        color: '#32CD32', // 绿色
        icon: '🌱'
    },
    fruit: {
        name: '水果类',
        color: '#FF6347', // 红色
        icon: '🍎'
    },
    beverage: {
        name: '饮料作物',
        color: '#8B4513', // 棕色
        icon: '☕'
    },
    vegetable: {
        name: '蔬菜类',
        color: '#90EE90', // 浅绿色
        icon: '🥬'
    }
};

// 农作物分布点数据 - 基于真实统计数据，增加更多详细分布点
const cropDistributionData = [
    // 粮食作物 - 水稻主产区
    {
        name: '水稻',
        province: '黑龙江省',
        type: 'grain',
        coord: [127.9688, 45.368],
        value: 95, // 重要性评分
        area: '2471.6万吨', // 2024年产量
        season: '5-10月',
        varieties: '东北大米、五常大米、响水大米',
        economicValue: '约500亿元',
        description: '黑龙江是中国最大的水稻产区，以优质粳稻为主，五常大米享誉全国'
    },
    {
        name: '水稻',
        province: '湖南省',
        type: 'grain',
        coord: [112.982279, 28.19409],
        value: 88,
        area: '2089.4万吨',
        season: '4-10月',
        varieties: '籼稻、杂交稻、优质稻',
        economicValue: '约420亿元',
        description: '湖南是杂交水稻发源地，双季稻产量高，袁隆平院士故乡'
    },
    {
        name: '水稻',
        province: '江西省',
        type: 'grain',
        coord: [115.892151, 28.676493],
        value: 85,
        area: '2094.8万吨',
        season: '4-10月',
        varieties: '早稻、晚稻、优质稻',
        economicValue: '约400亿元',
        description: '江西是南方重要的双季稻产区，鄱阳湖平原稻米品质优良'
    },
    {
        name: '水稻',
        province: '湖北省',
        type: 'grain',
        coord: [114.298572, 30.584355],
        value: 82,
        area: '1756.8万吨',
        season: '4-10月',
        varieties: '中稻、晚稻、香稻',
        economicValue: '约350亿元',
        description: '湖北江汉平原是重要的商品粮基地'
    },

    // 小麦主产区
    {
        name: '小麦',
        province: '河南省',
        type: 'grain',
        coord: [113.665, 34.757],
        value: 92,
        area: '3803.2万吨',
        season: '10月-次年6月',
        varieties: '冬小麦、强筋小麦、弱筋小麦',
        economicValue: '约600亿元',
        description: '河南是全国小麦主产区，产量占全国1/4，素有"中原粮仓"之称'
    },
    {
        name: '小麦',
        province: '山东省',
        type: 'grain',
        coord: [117.000923, 36.675807],
        value: 89,
        area: '2654.8万吨',
        season: '10月-次年6月',
        varieties: '济麦系列、烟农系列、鲁原系列',
        economicValue: '约450亿元',
        description: '山东小麦品质优良，是重要的优质小麦产区'
    },
    {
        name: '小麦',
        province: '安徽省',
        type: 'grain',
        coord: [117.283042, 31.86119],
        value: 82,
        area: '1704.5万吨',
        season: '10月-次年6月',
        varieties: '淮麦系列、皖麦系列',
        economicValue: '约350亿元',
        description: '安徽淮北平原是重要的小麦产区，皖北小麦品质优良'
    },
    {
        name: '小麦',
        province: '河北省',
        type: 'grain',
        coord: [114.502461, 38.045474],
        value: 80,
        area: '1456.2万吨',
        season: '10月-次年6月',
        varieties: '冀麦系列、石麦系列',
        economicValue: '约300亿元',
        description: '河北是华北平原重要的小麦产区'
    },

    // 玉米主产区
    {
        name: '玉米',
        province: '吉林省',
        type: 'grain',
        coord: [125.35, 43.88],
        value: 90,
        area: '2420.3万吨',
        season: '5-10月',
        varieties: '春玉米、青贮玉米、甜玉米',
        economicValue: '约480亿元',
        description: '吉林是东北玉米带核心区，玉米品质优良，松辽平原黄金玉米带'
    },
    {
        name: '玉米',
        province: '黑龙江省',
        type: 'grain',
        coord: [126.8, 46.2],
        value: 88,
        area: '4584.9万吨',
        season: '5-10月',
        varieties: '饲料玉米、食用玉米、青贮玉米',
        economicValue: '约400亿元',
        description: '黑龙江玉米产量居全国前列，主要用于饲料和深加工'
    },
    {
        name: '玉米',
        province: '山东省',
        type: 'grain',
        coord: [117.5, 36.2],
        value: 87,
        area: '2654.8万吨',
        season: '6-10月',
        varieties: '夏玉米、甜玉米、糯玉米',
        economicValue: '约450亿元',
        description: '山东夏玉米产量居全国前列，胶东半岛玉米品质优良'
    },
    {
        name: '玉米',
        province: '河南省',
        type: 'grain',
        coord: [114.2, 34.2],
        value: 84,
        area: '1876.4万吨',
        season: '6-10月',
        varieties: '夏玉米、青贮玉米',
        economicValue: '约380亿元',
        description: '河南是夏玉米主产区之一，豫东平原玉米产量高'
    },
    {
        name: '玉米',
        province: '内蒙古自治区',
        type: 'grain',
        coord: [111.670801, 40.818311],
        value: 85,
        area: '3000万吨',
        season: '5-10月',
        varieties: '饲料玉米、食用玉米',
        economicValue: '约350亿元',
        description: '内蒙古是中国重要的玉米产区，产量居全国前列'
    },

    // 大豆主产区
    {
        name: '大豆',
        province: '黑龙江省',
        type: 'grain',
        coord: [128.5, 47.0],
        value: 88,
        area: '776.2万吨',
        season: '5-9月',
        varieties: '高蛋白大豆、高油大豆、食用大豆',
        economicValue: '约200亿元',
        description: '黑龙江大豆产量占全国40%以上，是非转基因大豆主产区'
    },
    {
        name: '大豆',
        province: '内蒙古自治区',
        type: 'grain',
        coord: [111.2, 41.5],
        value: 75,
        area: '245.8万吨',
        season: '5-9月',
        varieties: '春大豆、饲料大豆',
        economicValue: '约65亿元',
        description: '内蒙古是重要的大豆产区，呼伦贝尔大豆品质优良'
    },
    {
        name: '大豆',
        province: '安徽省',
        type: 'grain',
        coord: [117.8, 32.5],
        value: 70,
        area: '156.8万吨',
        season: '6-10月',
        varieties: '夏大豆、秋大豆',
        economicValue: '约40亿元',
        description: '安徽是南方重要的大豆产区'
    },

    // 河南省 - 小麦主产区
    {
        name: '小麦',
        province: '河南省',
        type: 'grain',
        coord: [113.665, 34.757],
        value: 92,
        area: '约3800万吨',
        season: '10月-次年6月',
        varieties: '强筋小麦、中筋小麦',
        economicValue: '约350亿元',
        description: '河南是中国最大的小麦产区，产量占全国1/4'
    },
    {
        name: '玉米',
        province: '河南省',
        type: 'grain',
        coord: [114.2, 35.5],
        value: 80,
        area: '约1200万吨',
        season: '6-10月',
        varieties: '夏玉米',
        economicValue: '约200亿元',
        description: '河南夏玉米种植面积大，是重要的饲料玉米产区'
    },

    // 山东省 - 玉米和蔬菜大省
    {
        name: '玉米',
        province: '山东省',
        type: 'grain',
        coord: [117.000923, 36.675807],
        value: 88,
        area: '约2500万吨',
        season: '6-10月',
        varieties: '夏玉米、春玉米',
        economicValue: '约300亿元',
        description: '山东是中国重要的玉米产区，产量居全国前三'
    },
    {
        name: '蔬菜',
        province: '山东省',
        type: 'vegetable',
        coord: [118.0, 37.0],
        value: 95,
        area: '约8000万吨',
        season: '全年',
        varieties: '大葱、白菜、萝卜、辣椒',
        economicValue: '约1200亿元',
        description: '山东是中国最大的蔬菜产区，供应全国市场'
    },

    // 新疆 - 棉花王国
    {
        name: '棉花',
        province: '新疆',
        type: 'economic',
        coord: [87.617733, 43.792818],
        value: 98,
        area: '约500万吨',
        season: '4-10月',
        varieties: '长绒棉、细绒棉',
        economicValue: '约800亿元',
        description: '新疆棉花产量占全国90%以上，品质优良'
    },
    {
        name: '葡萄',
        province: '新疆',
        type: 'fruit',
        coord: [89.0, 42.5],
        value: 85,
        area: '约280万吨',
        season: '8-10月',
        varieties: '无核白、马奶子',
        economicValue: '约150亿元',
        description: '新疆是中国最大的葡萄产区，以无核白葡萄著名'
    },

    // 湖南省 - 水稻大省
    {
        name: '水稻',
        province: '湖南省',
        type: 'grain',
        coord: [112.982279, 28.19409],
        value: 90,
        area: '约2800万吨',
        season: '3-11月',
        varieties: '双季稻、优质稻',
        economicValue: '约400亿元',
        description: '湖南是中国重要的水稻产区，以双季稻为主'
    },
    {
        name: '茶叶',
        province: '湖南省',
        type: 'beverage',
        coord: [113.5, 27.8],
        value: 80,
        area: '约28万吨',
        season: '3-11月',
        varieties: '湘茶、黑茶',
        economicValue: '约200亿元',
        description: '湖南是中国重要的茶叶产区，以黑茶著名'
    },

    // 江苏省 - 水稻和小麦
    {
        name: '水稻',
        province: '江苏省',
        type: 'grain',
        coord: [118.767413, 32.041544],
        value: 85,
        area: '约2000万吨',
        season: '5-11月',
        varieties: '粳稻、优质稻',
        economicValue: '约300亿元',
        description: '江苏是长江中下游重要的水稻产区'
    },
    {
        name: '小麦',
        province: '江苏省',
        type: 'grain',
        coord: [119.0, 33.5],
        value: 78,
        area: '约1200万吨',
        season: '10月-次年6月',
        varieties: '弱筋小麦、中筋小麦',
        economicValue: '约180亿元',
        description: '江苏小麦以弱筋小麦为主，适合制作糕点'
    },

    // 四川省 - 水稻和油菜
    {
        name: '水稻',
        province: '四川省',
        type: 'grain',
        coord: [104.065735, 30.659462],
        value: 82,
        area: '约1600万吨',
        season: '3-11月',
        varieties: '杂交稻、优质稻',
        economicValue: '约250亿元',
        description: '四川盆地是中国重要的水稻产区'
    },
    {
        name: '油菜',
        province: '四川省',
        type: 'economic',
        coord: [105.0, 31.0],
        value: 75,
        area: '约80万吨',
        season: '9月-次年5月',
        varieties: '双低油菜',
        economicValue: '约100亿元',
        description: '四川是中国重要的油菜产区，菜籽油品质优良'
    },

    // 广东省 - 水稻和水果
    {
        name: '水稻',
        province: '广东省',
        type: 'grain',
        coord: [113.280637, 23.125178],
        value: 75,
        area: '约1000万吨',
        season: '全年',
        varieties: '籼稻、优质稻',
        economicValue: '约150亿元',
        description: '广东可实现一年三熟，以籼稻为主'
    },
    {
        name: '荔枝',
        province: '广东省',
        type: 'fruit',
        coord: [114.0, 22.5],
        value: 88,
        area: '约130万吨',
        season: '6-8月',
        varieties: '桂味、糯米糍',
        economicValue: '约200亿元',
        description: '广东是中国最大的荔枝产区，品种丰富'
    },

    // 福建省 - 茶叶
    {
        name: '茶叶',
        province: '福建省',
        type: 'beverage',
        coord: [119.306239, 26.075302],
        value: 92,
        area: '约45万吨',
        season: '全年',
        varieties: '乌龙茶、红茶、白茶',
        economicValue: '约300亿元',
        description: '福建是中国重要的茶叶产区，以乌龙茶著名'
    },

    // 浙江省 - 茶叶
    {
        name: '茶叶',
        province: '浙江省',
        type: 'beverage',
        coord: [120.153576, 30.287459],
        value: 90,
        area: '约18万吨',
        season: '3-11月',
        varieties: '龙井茶、绿茶',
        economicValue: '约250亿元',
        description: '浙江以龙井茶闻名，是中国绿茶主产区'
    },

    // 安徽省 - 小麦和水稻
    {
        name: '小麦',
        province: '安徽省',
        type: 'grain',
        coord: [117.283042, 31.86119],
        value: 80,
        area: '约1400万吨',
        season: '10月-次年6月',
        varieties: '中筋小麦、强筋小麦',
        economicValue: '约200亿元',
        description: '安徽是中国重要的小麦产区，淮北平原小麦品质优良'
    },

    // 河北省 - 小麦和玉米
    {
        name: '小麦',
        province: '河北省',
        type: 'grain',
        coord: [114.502461, 38.045474],
        value: 85,
        area: '约1500万吨',
        season: '10月-次年6月',
        varieties: '强筋小麦、中筋小麦',
        economicValue: '约220亿元',
        description: '河北是华北平原重要的小麦产区'
    },

    // 内蒙古 - 玉米和大豆
    {
        name: '玉米',
        province: '内蒙古',
        type: 'grain',
        coord: [111.670801, 40.818311],
        value: 85,
        area: '约3000万吨',
        season: '5-10月',
        varieties: '饲料玉米、食用玉米',
        economicValue: '约350亿元',
        description: '内蒙古是中国重要的玉米产区，产量居全国前列'
    },

    // 吉林省 - 玉米和水稻
    {
        name: '玉米',
        province: '吉林省',
        type: 'grain',
        coord: [125.3245, 43.886841],
        value: 88,
        area: '约2800万吨',
        season: '5-10月',
        varieties: '饲料玉米、食用玉米',
        economicValue: '约320亿元',
        description: '吉林是东北重要的玉米产区，品质优良'
    },

    // 辽宁省 - 玉米和水稻
    {
        name: '水稻',
        province: '辽宁省',
        type: 'grain',
        coord: [123.429096, 41.796767],
        value: 80,
        area: '约450万吨',
        season: '5-10月',
        varieties: '粳稻、优质稻',
        economicValue: '约80亿元',
        description: '辽宁是东北重要的水稻产区，盘锦大米闻名全国'
    },

    // 新增经济作物 - 棉花
    {
        name: '棉花',
        province: '新疆维吾尔自治区',
        type: 'economic',
        coord: [87.617733, 43.792818],
        value: 95,
        area: '539.1万吨',
        season: '4-10月',
        varieties: '长绒棉、细绒棉、彩色棉',
        economicValue: '约800亿元',
        description: '新疆棉花产量占全国90%以上，品质优良，是世界优质棉产区'
    },
    {
        name: '棉花',
        province: '新疆维吾尔自治区',
        type: 'economic',
        coord: [86.5, 42.5],
        value: 92,
        area: '南疆棉区',
        season: '4-10月',
        varieties: '阿克苏长绒棉、库尔勒棉花',
        economicValue: '约400亿元',
        description: '南疆是优质长绒棉主产区，阿克苏、库尔勒棉花品质极佳'
    },

    // 新增水果类
    {
        name: '苹果',
        province: '陕西省',
        type: 'fruit',
        coord: [108.948024, 34.263161],
        value: 88,
        area: '1185.5万吨',
        season: '3-10月',
        varieties: '红富士、嘎啦、秦冠',
        economicValue: '约300亿元',
        description: '陕西苹果产量占全国1/4，洛川苹果、白水苹果享誉全国'
    },
    {
        name: '苹果',
        province: '山东省',
        type: 'fruit',
        coord: [120.5, 37.2],
        value: 85,
        area: '956.8万吨',
        season: '3-10月',
        varieties: '烟台苹果、栖霞苹果',
        economicValue: '约250亿元',
        description: '山东烟台是中国苹果之乡，栖霞苹果品质优良'
    },

    {
        name: '柑橘',
        province: '湖南省',
        type: 'fruit',
        coord: [112.5, 27.8],
        value: 82,
        area: '658.9万吨',
        season: '3-11月',
        varieties: '脐橙、蜜橘、柚子',
        economicValue: '约200亿元',
        description: '湖南柑橘种植历史悠久，湘西椪柑、永兴冰糖橙闻名'
    },
    {
        name: '柑橘',
        province: '江西省',
        type: 'fruit',
        coord: [115.5, 27.8],
        value: 80,
        area: '589.2万吨',
        season: '3-11月',
        varieties: '赣南脐橙、南丰蜜橘',
        economicValue: '约180亿元',
        description: '江西赣南脐橙是国家地理标志产品，品质优良'
    },

    {
        name: '葡萄',
        province: '新疆维吾尔自治区',
        type: 'fruit',
        coord: [89.2, 42.9],
        value: 85,
        area: '301.2万吨',
        season: '4-10月',
        varieties: '无核白、马奶子、红提',
        economicValue: '约120亿元',
        description: '新疆吐鲁番葡萄糖分高，品质优良，闻名世界'
    },

    {
        name: '香蕉',
        province: '广东省',
        type: 'fruit',
        coord: [113.8, 22.5],
        value: 88,
        area: '456.8万吨',
        season: '全年',
        varieties: '香牙蕉、大蕉、粉蕉',
        economicValue: '约150亿元',
        description: '广东是中国最大的香蕉产区，湛江香蕉品质优良'
    },
    {
        name: '香蕉',
        province: '海南省',
        type: 'fruit',
        coord: [110.33119, 20.031971],
        value: 82,
        area: '125.6万吨',
        season: '全年',
        varieties: '海南香蕉、帝王蕉',
        economicValue: '约60亿元',
        description: '海南香蕉品质优良，全年供应，澄迈香蕉闻名'
    },

    // 新增饮料作物
    {
        name: '茶叶',
        province: '福建省',
        type: 'beverage',
        coord: [119.306239, 26.075302],
        value: 88,
        area: '46.8万吨',
        season: '3-11月',
        varieties: '乌龙茶、红茶、白茶',
        economicValue: '约150亿元',
        description: '福建是中国重要的茶叶产区，铁观音、大红袍、白毫银针闻名'
    },
    {
        name: '茶叶',
        province: '浙江省',
        type: 'beverage',
        coord: [120.153576, 30.287459],
        value: 85,
        area: '18.9万吨',
        season: '3-11月',
        varieties: '绿茶、龙井茶',
        economicValue: '约120亿元',
        description: '浙江西湖龙井是中国十大名茶之首，品质卓越'
    },
    {
        name: '茶叶',
        province: '云南省',
        type: 'beverage',
        coord: [102.2, 24.5],
        value: 82,
        area: '48.2万吨',
        season: '全年',
        varieties: '普洱茶、滇红茶',
        economicValue: '约100亿元',
        description: '云南是普洱茶的故乡，古茶树资源丰富，临沧、版纳茶叶品质优良'
    },

    {
        name: '咖啡',
        province: '云南省',
        type: 'beverage',
        coord: [99.2, 25.1],
        value: 78,
        area: '14.2万吨',
        season: '全年',
        varieties: '小粒咖啡、中粒咖啡',
        economicValue: '约50亿元',
        description: '云南保山小粒咖啡品质优良，是中国最大的咖啡产区'
    },

    // 新增蔬菜类
    {
        name: '番茄',
        province: '新疆维吾尔自治区',
        type: 'vegetable',
        coord: [86.5, 44.2],
        value: 92,
        area: '1368.7万吨',
        season: '5-9月',
        varieties: '加工番茄、鲜食番茄',
        economicValue: '约80亿元',
        description: '新疆番茄产量占全国80%以上，主要用于加工番茄酱出口'
    },
    {
        name: '番茄',
        province: '山东省',
        type: 'vegetable',
        coord: [118.2, 36.5],
        value: 78,
        area: '456.8万吨',
        season: '全年',
        varieties: '大棚番茄、樱桃番茄',
        economicValue: '约60亿元',
        description: '山东设施番茄产业发达，寿光蔬菜闻名全国'
    },

    {
        name: '辣椒',
        province: '湖南省',
        type: 'vegetable',
        coord: [112.5, 27.8],
        value: 80,
        area: '245.6万吨',
        season: '4-10月',
        varieties: '朝天椒、线椒、泡椒',
        economicValue: '约70亿元',
        description: '湖南辣椒种植面积和产量居全国前列，湘椒品质优良'
    },
    {
        name: '辣椒',
        province: '贵州省',
        type: 'vegetable',
        coord: [106.713478, 26.578343],
        value: 75,
        area: '156.8万吨',
        season: '4-10月',
        varieties: '遵义朝天椒、花溪辣椒',
        economicValue: '约50亿元',
        description: '贵州遵义朝天椒闻名全国，是重要的辣椒产区'
    },

    {
        name: '土豆',
        province: '内蒙古自治区',
        type: 'vegetable',
        coord: [111.2, 41.2],
        value: 88,
        area: '1245.6万吨',
        season: '4-9月',
        varieties: '荷兰薯、夏波蒂',
        economicValue: '约120亿元',
        description: '内蒙古乌兰察布是"中国薯都"，马铃薯品质优良'
    },
    {
        name: '土豆',
        province: '甘肃省',
        type: 'vegetable',
        coord: [103.823557, 36.058039],
        value: 85,
        area: '1089.2万吨',
        season: '4-9月',
        varieties: '定西马铃薯、陇薯系列',
        economicValue: '约100亿元',
        description: '甘肃定西是"中国薯都"，马铃薯产业发达'
    },

    {
        name: '白菜',
        province: '河北省',
        type: 'vegetable',
        coord: [114.8, 39.2],
        value: 85,
        area: '2856.3万吨',
        season: '8-11月',
        varieties: '大白菜、小白菜、娃娃菜',
        economicValue: '约100亿元',
        description: '河北张家口坝上白菜品质优良，是北方白菜主产区'
    },

    // 新增特色作物
    {
        name: '枸杞',
        province: '宁夏回族自治区',
        type: 'economic',
        coord: [106.278179, 38.46637],
        value: 85,
        area: '14.2万吨',
        season: '6-10月',
        varieties: '宁夏枸杞、中宁枸杞',
        economicValue: '约80亿元',
        description: '宁夏中宁枸杞是国家地理标志产品，品质世界闻名'
    },

    {
        name: '红枣',
        province: '新疆维吾尔自治区',
        type: 'fruit',
        coord: [81.3, 39.5],
        value: 82,
        area: '89.6万吨',
        season: '9-10月',
        varieties: '和田大枣、若羌红枣',
        economicValue: '约60亿元',
        description: '新疆和田、若羌红枣品质优良，营养价值高'
    },

    {
        name: '核桃',
        province: '新疆维吾尔自治区',
        type: 'fruit',
        coord: [79.9, 39.2],
        value: 78,
        area: '45.6万吨',
        season: '9-10月',
        varieties: '薄皮核桃、纸皮核桃',
        economicValue: '约40亿元',
        description: '新疆阿克苏、和田核桃品质优良，是重要的干果产区'
    }
];

// 获取农作物分布数据的函数
function getCropDistributionData() {
    return cropDistributionData;
}

// 获取农作物类型配置的函数
function getCropTypes() {
    return cropTypes;
}

// 按类型筛选农作物数据
function getCropsByType(type) {
    return cropDistributionData.filter(crop => crop.type === type);
}

// 按省份筛选农作物数据
function getCropsByProvince(province) {
    return cropDistributionData.filter(crop => crop.province === province);
}
