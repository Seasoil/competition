const data = {
  "categories": [
    { "name": "农事占候", "color": "#5470c6", "description": "研究天时、物候、气象等农事征兆的学问" },
    { "name": "农器", "color": "#91cc75", "description": "古代农业生产中使用的各类工具和器械" },
    { "name": "树艺", "color": "#fac858", "description": "种植和培育各类农作物的技术" },
    { "name": "木本植物", "color": "#ee6666", "description": "具有木质茎的多年生植物" },
    { "name": "牧养六畜", "color": "#73c0de", "description": "古代畜牧养殖的主要动物" },
    { "name": "救荒本草", "color": "#3ba272", "description": "荒年可食用的野生植物，来源于《农政全书》卷六十" },
    { "name": "境外作物", "color": "#fc8452", "description": "从国外引进或传入的农作物品种" }
  ],
  "nodes": [
    {
      "name": "一、农事占候",
      "description": "通过观察自然现象预测农事的传统方法",
      "children": [
        {
          "name": "时间",
          "description": "十二个月的农事规律",, "水桶"],
              "usage": "小规模灌溉",
            { "name": "正月", "description": "农历一年的开始，春耕准备时节" },
            { "name": "二月", "description": "春耕播种的重要时节" },
            { "name": "三月", "description": "春耕继续，作物生长期" },
            { "name": "四月", "description": "春夏之交，作物管理关键期" },
            { "name": "五月", "description": "夏季农事繁忙时期" },
            { "name": "六月", "description": "夏季管理和早稻收获期" },
            { "name": "七月", "description": "秋收准备和田间管理期" },
            { "name": "八月", "description": "秋收的主要时节" },
            { "name": "九月", "description": "秋收后期和冬种准备" },
            { "name": "十月", "description": "冬种和储藏准备时节" },
            { "name": "十一月", "description": "冬季农闲和储藏期" },
            { "name": "十二月", "description": "冬季农闲和来年准备" } "feature": "适合大量切割"
            },
            {
              "name": "打谷器",
          "name": "天象",
          "description": "观察天空现象预测天气",
              "usage": "脱粒",
            { "name": "日", "description": "太阳升落、光照变化的征兆" },
            { "name": "月", "description": "月相变化对农事的影响" },
            { "name": "星", "description": "星象变化的农事征兆" },
            { "name": "风", "description": "风向风力的天气预示" },
            { "name": "雨", "description": "降水的各种征兆" },
            { "name": "云", "description": "云层变化的天气预示" },
            { "name": "雾", "description": "雾气的天气征兆" },
            { "name": "霞", "description": "晚霞早霞的天气预示" },
            { "name": "虹", "description": "虹的出现与天气关系" },
            { "name": "雷", "description": "雷电的季节性预示" },
            { "name": "电", "description": "闪电的天气征兆" }
          ]
        },
        {
          "name": "自然现象",
          "description": "地面自然现象的征兆",
          "children": [
            { "name": "冰", "description": "结冰化冰的气温指示" },
            { "name": "霜", "description": "霜的农事影响" },
            { "name": "雪", "description": "降雪对农事的影响" },
            { "name": "潮", "description": "潮湿程度的指示" }
          ]
        },
        {
          "name": "地理",
          "description": "地理环境特征的影响",
          "children": [
            { "name": "山", "description": "山地地形的农事特点" },
            { "name": "地", "description": "土地状况的观察" },
            { "name": "水", "description": "水文条件的影响" },
            {
              "name": "小豆",
              "description": "豆类作物",
          "name": "动植物指征",
          "description": "动植物行为变化的预示","],
              "cultivation": "春季播种，夏季收获"
            { "name": "草", "description": "草木生长的季节性变化" },
            { "name": "花", "description": "花期的物候指示" },
            { "name": "木", "description": "树木生长的季节变化" },
            { "name": "飞禽走兽", "description": "动物行为的天气预示" },
            { "name": "龙鱼杂虫", "description": "水生动物和昆虫的征兆" }
          ]
        }
      ]
    },
    {
      "name": "二、农器",
      "description": "古代农业生产中使用的各类工具和器械",
      "children": [
        {
          "name": "耕作工具",
          "description": "用于耕地和整地的基本农具",
          "children": [
            {
              "name": "犁",
              "description": "翻土耕地的主要工具，由犁铧、犁壁、犁架、犁柄等组成",
              "variants": ["木犁", "铁犁", "牛犁", "曲辕犁", "蜈蚣犁", "双股犁"],
              "usage": "翻土、开垦",
              "material": ["木制", "铁制"],
              "power_source": "人力或畜力"
            },
            {
              "name": "耒",
              "description": "最早的手持翻土工具，形似锄头",
              "usage": "小块土地耕作",
              "material": "木制",
              "historical_value": "中国最早的农具之一"
            },
            {
              "name": "耜",
              "description": "类似锄头的翻土工具，用于浅层耕作",
              "usage": "浅层耕作",
              "material": ["木制", "铁制"],
              "feature": "轻便易用"
            },
            {
              "name": "耧",
              "description": "播种和耕地的复合工具",
              "variants": ["独轮耧", "脚踏耧", "手摇耧", "耧车", "耧耠车"],
              "usage": ["播种", "耕地"],
              "innovation": "提高播种效率的重要发明"
            },
          ]
        },
        {
          "name": "整地工具",
          "description": "用于平整土地和细化土壤的工具",
          "children": [
            {
            {
              "name": "锹",
              "description": "挖掘和铲土工具",
              "usage": ["挖掘", "铲土", "堆土"],
              "material": ["木柄铁头"],
              "feature": "效率高"
            },
            {
              "name": "铲",
              "description": "平整土地的专用工具",
              "usage": "平整土地",
              "material": ["木柄铁头"],
              "feature": "适合大面积平整"
            },
            {
              "name": "磙",
              "description": "圆柱形的平整土地工具",
              "usage": ["压实土地", "碾平土地"],
              "material": ["石制", "木制"],
              "power_source": "人力或畜力",
              "feature": "适合大面积压实"
            },
            {
              "name": "碌碡",
              "description": "石制或木制的圆柱形压土工具",
              "usage": "压实农田",
              "material": ["石制", "木制"],
              "feature": "适合大面积作业"
            },
            {
              "name": "耙",
              "description": "用于平整和耙地的工具",
              "variants": ["木耙", "铁齿耙", "牛脚耙"],
              "usage": ["平整土地", "耙地", "除草"],
              "material": ["木制", "铁齿"],
              "feature": "多功能农具"
            }
          ]
        },
        {
          "name": "灌溉工具",
          "description": "用于农田灌溉的各类工具",
          "children": [
            {
              "name": "翻车",
              "description": "重要的古代灌溉工具",
              "components": ["水轮", "天沟", "链条", "木桶"],
              "power_source": "人力或畜力",
              "usage": "提水灌溉",
              "feature": "效率高，适合大面积灌溉"
            },
            {
              "name": "筒车",
              "description": "简单结构的提水工具",
              "material": ["竹制", "木制"],
              "usage": "提水灌溉",
              "feature": "结构简单，易于制作"
            },
            {
              "name": "桔槔",
              "description": "杠杆原理的灌溉工具",
              "components": ["支点", "长杆", "水桶"],
              "usage": "小规模灌溉",
              "feature": "适合小块农田灌溉"
            },
            {
              "name": "踏车",
              "description": "脚踏式灌溉工具",
              "usage": "田间灌溉",
              "power_source": "人力",
              "feature": "江南水乡常见灌溉工具"
            }
          ]
        },
        {
          "name": "收割工具",
          "description": "用于收割农作物的各类工具",
          "children": [
            {
              "name": "镰刀",
              "description": "收割作物的主要工具",
              "variants": ["直镰", "弯镰", "锯齿镰"],
              "usage": ["收割", "割草"],
              "material": ["木柄铁头"],
              "feature": "轻便高效"
            },
            {
              "name": "铡刀",
              "description": "切割秸秆和草料的工具",
              "usage": ["切草", "切秸秆"],
              "material": ["木架铁刀"],
              "feature": "适合大量切割"
            },
            {
              "name": "打谷器",
              "description": "脱粒用的工具",
              "variants": ["连枷", "打谷板"],
              "usage": "脱粒",
              "material": ["木制", "竹制"],
              "feature": "传统脱粒工具"
            }
          ]
        },
        {
          "name": "运输工具",
          "description": "用于运输农产品的工具",
          "children": [
            {
              "name": "独轮车",
              "description": "单人操作的运输工具",
              "usage": ["运输", "搬运"],
              "material": ["木制", "铁制"],
              "feature": "适合狭窄道路"
            },
            {
              "name": "牛车",
              "description": "畜力牵引的运输工具",
              "usage": "大宗运输",
              "power_source": "畜力",
              "feature": "载重量大"
            },
            {
              "name": "扁担",
              "description": "肩挑运输工具",
              "usage": "小宗运输",
              "material": ["竹制", "木制"],
              "feature": "轻便灵活"
            }
          ]
        },
        {
          "name": "加工工具",
          "description": "用于农产品加工的各类工具",
          "children": [
            {
              "name": "石磨",
              "description": "磨制粮食的工具",
              "usage": ["磨面", "磨粉"],
              "material": "石制",
              "power_source": "人力或畜力",
              "feature": "传统加工工具"
            },
            {
              "name": "碾子",
              "description": "碾压谷物的工具",
              "usage": "去壳碾米",
              "material": "石制",
              "power_source": "人力或畜力",
              "feature": "适合大量加工"
            },
            {
              "name": "臼",
              "description": "捣碎粮食的工具",
              "usage": ["捣米", "捣药"],
              "material": ["石制", "木制"],
              "feature": "适合小量加工"
            }
          ]
        },
        {
          "name": "储藏工具",
          "description": "用于储存农产品的工具",
          "children": [
            {
              "name": "粮仓",
              "description": "储存粮食的建筑",
              "variants": ["木仓", "土仓", "砖仓"],
              "usage": "储存粮食",
              "material": ["木制", "土制", "砖制"],
              "feature": "防潮防虫"
            },
            {
              "name": "陶罐",
              "description": "储存粮食的容器",
              "usage": "储存粮食",
              "material": "陶制",
              "feature": "密封性好"
            },
            {
              "name": "竹篓",
              "description": "临时储存工具",
              "usage": "临时储存",
              "material": "竹制",
              "feature": "通风透气"
            }
          ]
        },
        {
          "name": "播种工具",
          "description": "用于播种的各类工具",
          "children": [
            {
              "name": "耧车",
              "description": "古代播种机",
              "variants": ["独脚耧", "两脚耧", "三脚耧"],
              "usage": "条播",
              "material": ["木制", "铁制"],
              "power_source": "畜力",
              "feature": "提高播种效率"
            },
            {
              "name": "点播器",
              "description": "点播种子的工具",
              "usage": "点播",
              "material": ["竹制", "木制"],
              "feature": "适合小粒种子"
            },
            {
              "name": "撒播器",
              "description": "撒播种子的工具",
              "usage": "撒播",
              "material": ["竹制", "木制"],
              "feature": "适合大面积播种"
            }
          ]
        },
        {
          "name": "施肥工具",
          "description": "用于施肥的各类工具",
          "children": [
            {
              "name": "粪箕",
              "description": "装运肥料的工具",
              "usage": "装运肥料",
              "material": ["竹制", "木制"],
              "feature": "轻便耐用"
            },
            {
              "name": "粪勺",
              "description": "舀取肥料的工具",
              "usage": "舀取肥料",
              "material": ["木制", "铁制"],
              "feature": "容量适中"
            },
            {
              "name": "粪桶",
              "description": "盛装肥料的容器",
              "usage": "盛装肥料",
              "material": ["木制", "竹制"],
              "feature": "密封性好"
            }
          ]
        },
        {
          "name": "除草工具",
          "description": "用于除草的各类工具",
          "children": [
            {
              "name": "锄头",
              "description": "除草松土的工具",
              "variants": ["平锄", "尖锄", "宽锄"],
              "usage": ["除草", "松土"],
              "material": ["木柄铁头"],
              "feature": "多功能农具"
            },
            {
              "name": "铲子",
              "description": "铲除杂草的工具",
              "usage": "铲草",
              "material": ["木柄铁头"],
              "feature": "适合硬质杂草"
            },
            {
              "name": "除草耙",
              "description": "耙除杂草的工具",
              "usage": "耙草",
              "material": ["木制", "铁齿"],
              "feature": "适合大面积除草"
            }
          ]
        },
        {
          "name": "病虫害防治工具",
          "description": "用于防治病虫害的各类工具",
          "children": [
            {
              "name": "喷雾器",
              "description": "喷洒药剂的工具",
              "variants": ["手压式", "背负式"],
              "usage": "喷洒药剂",
              "material": ["铁制", "塑料制"],
              "feature": "均匀喷洒"
            },
            {
              "name": "捕虫网",
              "description": "捕捉害虫的工具",
              "usage": "捕捉害虫",
              "material": ["竹制", "网布"],
              "feature": "适合小规模防治"
            },
            {
              "name": "诱虫灯",
              "description": "诱杀害虫的工具",
              "usage": "诱杀害虫",
              "material": ["竹制", "油灯"],
              "feature": "环保防治"
            }
          ]
        },
        {
          "name": "收获后处理工具",
          "description": "用于收获后处理的各类工具",
          "children": [
            {
              "name": "簸箕",
              "description": "筛选粮食的工具",
              "usage": ["筛选", "扬场"],
              "material": ["竹制", "木制"],
              "feature": "轻便实用"
            },
            {
              "name": "筛子",
              "description": "筛选粮食的工具",
              "variants": ["粗筛", "细筛"],
              "usage": "筛选粮食",
              "material": ["竹制", "铁制"],
              "feature": "分级筛选"
            },
            {
              "name": "风车",
              "description": "分离粮食的工具",
              "usage": "分离粮食",
              "material": ["木制"],
              "power_source": "人力",
              "feature": "高效分离"
            }
          ]
        },
        {
          "name": "农事记录工具",
          "description": "用于记录农事的各类工具",
          "children": [
            {
              "name": "农事历",
              "description": "记录农事的历书",
              "usage": "记录农事",
              "material": "纸质",
              "feature": "指导农事"
            },
            {
              "name": "农事簿",
              "description": "记录农事的簿册",
              "usage": "记录农事",
              "material": "纸质",
              "feature": "详细记录"
            },
            {
              "name": "农事图",
              "description": "记录农事的图画",
              "usage": "记录农事",
              "material": "纸质",
              "feature": "直观记录"
            }
          ]
        }
      ]
    },
    {
      "name": "三、树艺",
      "description": "种植和培育各类农作物的技术",
      "children": [
        {
          "name": "3.1 谷部上",
          "description": "主要粮食作物",
          "children": [
            {
              "description": "古代主要粮食作物",
        { "name": "3.1 谷部上", "children": ["粱", "黍", "梁", "术", "稷", "薥秫", "稻", "椑附"] },
        { "name": "3.2 谷部下", "children": ["大豆", "豌豆", "小豆", "豇豆", "菉豆", "藊豆", "赤豆", "刀豆", "蚕豆", "黎豆", "麦", "荞麦", "胡麻"] },
        { "name": "3.3 蓏部", "children": ["黄瓜", "茄子", "瓠", "王瓜", "芋", "丝瓜", "香芋", "西瓜", "莲", "菱", "芡", "乌芋", "慈姑", "菰", "山药", "甘", "萝菔", "胡萝菔"] },
              "feature": "耐旱作物",
          "name": "3.4 蔬部",，秋季收获"
            },
            { "name": "葵属", "children": ["乌松", "蜀葵", "夏松", "龙葵", "廿祘", "蔠葵"] },
            { "name": "辛菜类", "children": ["葱", "蔓菁", "韭", "薤", "姜", "芥"] },
            { "name": "香菜与其他", "children": ["蒝荽", "芸云", "萱室", "菠菜", "苋", "茼蒿", "甜菜", "芹", "蘧", "苜蓿", "紫苏", "蓼", "兰", "香蘘荷", "菌类"] }
              "name": "大豆",
              "description": "重要豆类作物",
              "feature": "耐旱作物",
          "name": "3.5 果部",秋季收获"
            },
            { "name": "核果与仁果", "children": ["束束梨", "桃", "栗", "李", "榛", "梅", "木示", "木口", "林檎", "柿", "椑柿", "君迁子", "安石榴"] },
            { "name": "热带与浆果类", "children": ["荔枝", "野葡萄", "龙眼", "橘", "杨梅", "枇杷", "柑", "葡萄", "银杏", "柚", "佛手柑", "金橘", "桑椹", "木瓜"] }
              "name": "黄瓜",
              "description": "瓜类蔬菜",
        { "name": "3.6 蚕桑类", "children": ["蚕桑类"] }
      ]
    },
    {
      "name": "四、木本植物",
      "children": [
        "榆", "桧", "梓", "椿", "松", "梧桐", "杉", "椒", "柏", "谷", "槐", "杨", "柳", "白杨", "女贞", "冬青", "水槿", "楮", "乌臼", "漆", "白十荚", "棕榈", "柞", "楝", "棠梨", "海红", "椰", "栀子", "楂",
        { "name": "杂项植物", "children": ["竹", "茶", "菊", "红花", "决明", "蓝", "黄精", "紫草", "百合", "枸杞", "薏苡", "茱萸", "芭蕉", "萱", "芥蓝", "莼", "苇", "蒲席草", "灯草"] }
      ]
    },
    {
      "name": "五、牧养六畜",
      "children": ["马", "牛", "羊", "猪", "鸡", "狗", "猫", "驴", "鹅", "鸭", "鱼", "蜜蜂"]
    },
    {
      "name": "六、救荒本草",
      "description": "《农政全书》卷六十记载的可食野生植物",
      "children": [
        {
          "name": "白鼓钉",
          "alias": "蒲公英",
          "description": "四季可采，极寒时较小。采来熟食。",
          "season": "四季",
          "method": "熟食",
          "poem": "白鼓钉！白鼓钉！丰年赛社，鼓不停；凶年罢社，鼓绝声。鼓绝声，社公恼，白鼓钉化为草救饥。"
        },
        {
          "name": "猪殃殃",
          "description": "春季采摘，需熟食。猪食之会生病，故得名。",
          "season": "春季",
          "method": "熟食",
          "warning": "猪食之有害",
          "poem": "猪殃殃，胡不祥？猪不食，遗道旁。我拾之，充糇粮。"
        },
        {
          "name": "丝荞麦",
          "description": "二三月采摘，四月结角后不可用。",
          "season": "二三月",
          "method": "熟食",
          "poem": "丝荞麦，如丝缕。昔为养蚕人，今作挑菜侣。"
        },
        {
          "name": "牛塘利",
          "description": "二三月采摘，可熟食或制齑。",
          "season": "二三月",
          "method": "熟食或制齑",
          "poem": "牛塘利，牛得济。种草有余青，蓄水有余味。"
        },
        {
          "name": "浮蔷",
          "description": "生长在水中，无根可托，有茎可食。",
          "habitat": "水生",
          "method": "食茎",
          "poem": "采采浮蔷，涉彼沧浪。无根可托，有茎可尝。"
        },
        {
          "name": "看麦娘",
          "description": "春季随麦生长在田陇上，因此得名。",
          "season": "春季",
          "method": "熟食",
          "poem": "看麦娘，来何早？麦未登，人未饱。"
        },
        {
          "name": "狗脚迹",
          "description": "霜降时生长，叶子像狗的脚印。",
          "season": "霜降",
          "method": "熟食",
          "poem": "狗脚迹何处寻？狡兔乱走妖孤吟。"
        },
        {
          "name": "破破衲",
          "description": "腊月至正二月采摘，三月变老不可食。",
          "season": "腊月至正二月",
          "method": "熟食",
          "poem": "破破衲，不堪补，寒且饥聊作脯，饱暖时不想汝。"
        },
        {
          "name": "斜蒿",
          "description": "三四月生长，小的整棵可用，大的取嫩头。",
          "season": "三四月",
          "method": "焯后晒干复泡，油盐拌食",
          "poem": "斜蒿复斜蒿，采采临春郊。"
        },
        {
          "name": "江荠",
          "description": "腊月生长，生熟皆可，开花时不可食。",
          "season": "腊月",
          "method": "生食或熟食，可制齑",
          "poem": "江荠青青江水绿。江边挑菜女儿哭。"
        },
        {
          "name": "燕子不来香",
          "description": "早春采摘可熟食，燕子来时就腥臭不能吃了，所以得名。",
          "season": "早春",
          "method": "熟食",
          "warning": "燕子来时不可食",
          "poem": "燕子不来香，燕子来时便不香。我愿今年燕不来，常与吾民充糇粮。"
        },
        {
          "name": "猢狲脚迹",
          "description": "三月采来熟食。",
          "season": "三月",
          "method": "熟食",
          "poem": "猢狲脚迹，宜尔泉石。胡不自安，犯我田宅。"
        },
        {
          "name": "眼子菜",
          "description": "六、七月采摘，生长在水泽中，叶子青色，背面紫色，茎柔软光滑且细，长可达数尺。",
          "season": "六七月",
          "method": "熟食",
          "habitat": "水泽",
          "poem": "眼子菜如张目。年年盼春听布谷，犹向秋来望时熟。"
        },
        {
          "name": "猫耳朵",
          "description": "正二月采摘，捣烂，和粉面做成饼蒸食。",
          "season": "正二月",
          "method": "捣烂和面蒸食",
          "poem": "猫耳朵，听我歌。今年水患伤田禾，仓廪空虚鼠弃窠，猫兮猫兮将奈何？"
        },
        {
          "name": "地踏菜",
          "alias": "地耳",
          "description": "形状像木耳，春夏在雨中生长，雨后采来熟食，见太阳就干枯消失了。",
          "season": "春夏雨后",
          "method": "熟食",
          "warning": "需及时采食，见阳即枯",
          "poem": "地踏菜生雨中，晴日一照郊原空。庄前阿婆呼阿翁，相携儿女去匆匆。"
        },
        {
          "name": "马齿苋",
          "description": "入夏采摘，用沸汤焯过，晒干。冬天随时取用也可以。楚地风俗元旦食用。",
          "season": "夏季",
          "method": "焯水晒干，冬季可用",
          "cultural": "楚地元旦时食",
          "poem": "马齿苋，风俗相传食元旦，何事年来采更频。终朝赖尔供飡饭。"
        },
        {
          "name": "雁肠子",
          "description": "二月生长如豆芽，做菜熟食，也可生食。",
          "season": "二月",
          "method": "生食或熟食",
          "poem": "雁肠子遗沟壑，应是今年绝饮啄。两翼低垂去不前，苦遭饿鹘相擒搏。"
        },
        {
          "name": "野落篱",
          "description": "正二月采摘，用头汤焯过可食。",
          "season": "正二月",
          "method": "焯水食用",
          "poem": "野落篱，旧遮护。昔为里正家，今作逃亡户。"
        },
        {
          "name": "茭儿菜",
          "description": "生长在水底，像芦芽，比菰米好吃。入夏生长在水泽中，就是茭芽。",
          "season": "入夏",
          "method": "生食或熟食",
          "habitat": "水生",
          "poem": "茭儿菜生长在水底，像芦芽，比菰米好吃。"
        },
        {
          "name": "雷声菌",
          "description": "夏秋雷雨过后，生长在茂草中，像麻菇，味道也相似。",
          "season": "夏秋雷雨后",
          "method": "熟食",
          "habitat": "茂草中",
          "poem": "雷声菌如卷耳，恐是蛰龙儿，雷声呼辄起。"
        },
        {
          "name": "乌英",
          "alias": "乌英花",
          "description": "入夏生长在水泽中，生熟都可食，六月就不能用了。",
          "season": "入夏至六月",
          "method": "生食或熟食",
          "habitat": "水泽",
          "poem": "乌英花，乌英菜。菜可茹兮花可爱。连朝摘菜不聊生，岂有心情摘花载。"
        },
        {
          "name": "抱娘蒿",
          "description": "二三月采来熟食，丛生所以得名。",
          "season": "二三月",
          "method": "熟食",
          "feature": "丛生",
          "poem": "抱娘蒿，结根牢，解不散如漆胶。君不见昨朝儿卖商船上，儿抱娘啼不肯放。"
        },
        {
          "name": "枸杞头",
          "description": "村人采来作为甜菜头。春夏采摘嫩头，秋季采摘果实，冬季采摘根。",
          "season": {
            "spring_summer": "采嫩头",
            "autumn": "采果实（枸杞子）",
            "winter": "采根（地骨皮）"
          },
          "method": "熟食",
          "poem": "枸杞头生高丘，实为药饵。来甘州二载，淮南谷不收。春采夏，还采秋，饥人饱食，如珍馐。"
        },
        {
          "name": "苦麻薹",
          "description": "三月采用，叶子捣烂，和面粉做饼，也可生食。",
          "season": "三月",
          "method": ["生食", "捣烂和面做饼"],
          "taste": "苦",
          "poem": "苦麻薹带苦，味虽逆口胜空肠。但愿收租了官府，不辞吃尽田家苦。"
        },
        {
          "name": "羊耳秃",
          "description": "二三月采来熟食。",
          "season": "二三月",
          "method": "熟食",
          "poem": "羊耳秃，短簇簇，穿藩篱如抵触。饥来进退无如何，前村后村荆棘多。"
        },
        {
          "name": "剪刀股",
          "description": "春季采来生食，也可做成齑。",
          "season": "春季",
          "method": ["生食", "制齑"],
          "poem": "剪刀股，剪何益，剪得今年地皮赤。东家罗绮西家绫，今年不闻剪刀声。"
        },
        {
          "name": "水马齿苋",
          "description": "采来熟食，生长在水中，与旱马齿苋相似。",
          "season": "夏季",
          "method": "熟食",
          "habitat": "水生",
          "feature": "似旱马齿苋",
          "poem": "水马齿苋何时落，食玉粒，衔金嚼。我民饿殍盈沟壑，惟皇震怒剔厥腭，化为野草充藜藿。"
        },
        {
          "name": "野苋菜",
          "description": "夏季采来熟食，类似家苋菜。",
          "season": "夏季",
          "method": "熟食",
          "feature": "似家苋菜",
          "poem": "野苋菜生何少，尽日采来充一饱。城中赤苋美且肥，一钱一束贱如草。"
        },
        {
          "name": "黄花儿",
          "description": "正二月采来熟食。",
          "season": "正二月",
          "method": "熟食",
          "poem": "黄花儿，郊外草，不爱尔花，爱尔充我饱。洛阳姚家深院深，一年一赏费千金。"
        },
        {
          "name": "野荸荠",
          "description": "四季采摘，生熟都可食。",
          "season": "四季",
          "method": ["生食", "熟食"],
          "poem": "野荸荠，生稻畦，苦薅不尽心力疲，造物有意防民饥。年来水患绝五谷，尔独结实何累累。"
        },
        {
          "name": "蒿柴荠",
          "description": "正二、三月采来熟食，又可做成齑。",
          "season": "正二、三月",
          "method": ["熟食", "制齑"],
          "poem": "蒿柴荠，我独怜，叶可食，楷可燃。连朝风雪拦村路，饥寒不能出门去。"
        },
        {
          "name": "蒌蒿",
          "description": "春季采苗、叶熟食。夏秋茎可做成齑，心可入茶。",
          "season": {
            "spring": "采苗叶",
            "summer_autumn": "采茎心"
          },
          "method": {
            "spring": "熟食",
            "summer_autumn": ["制齑", "入茶"]
          },
          "poem": "采蒌蒿，采枝采叶还采苗。我独采根卖城郭，城里人家半凋落。"
        },
        {
          "name": "扫帚荠",
          "description": "春季采来熟食。",
          "season": "春季",
          "method": "熟食",
          "poem": "扫帚荠，青簇簇。去年不收空倚屋。但愿今年收两熟，场头扫帚扫尽秃。"
        },
        {
          "name": "雀儿绵单",
          "description": "三月采摘可做成齑。此菜蔓延生长，铺地而生，所以得名。",
          "season": "三月",
          "method": "制齑",
          "feature": "蔓生铺地",
          "poem": "雀儿绵单，托彼终宿。如茵如衾，匪丝匪縠。年饥愿得充我餐。任穿我屋，蔽尔寒。"
        },
        {
          "name": "菱科",
          "description": "夏秋采来熟食。",
          "season": "夏秋",
          "method": "熟食",
          "poem": "采菱科，采菱科，小舟日日临清波。菱科采得余几何，竟无人唱采菱歌。"
        },
        {
          "name": "灯儿",
          "description": "二月采来熟食。今年刚出土，挑菜人不停采摘。如今已老得不能吃了，哪还能等到三月三开花。",
          "season": "二月",
          "method": "熟食",
          "warning": "老后不可食",
          "poem": "灯儿落满地，化作草青青。遭此饥荒岁，曾见当年绕绛纱。于会灯火几人家。"
        },
        {
          "name": "芽儿拳",
          "description": "正二月采来熟食。",
          "season": "正二月",
          "method": "熟食",
          "feature": "白如雪软似绵",
          "poem": "芽儿拳，生树边，白如雪软似绵，煮来不食泪如雨。昨朝儿卖他州府。"
        },
        {
          "name": "板荞麦",
          "description": "正二月和菱一起采来炊食，三四月结籽，老了就不能用了。",
          "season": "正二月",
          "method": "炊食",
          "warning": "三四月后不可食",
          "poem": "板荞麦兮吾不识，出无路兮入无室，将学道兮归空山，草为衣兮木为食。"
        },
        {
          "name": "碎米荠",
          "description": "三月采摘，只能做成齑。",
          "season": "三月",
          "method": "制齑",
          "poem": "碎米荠，如布谷，想为民饥天雨粟，官仓一月一开放，造物生生无尽藏。"
        },
        {
          "name": "天藕儿",
          "description": "根像藕但小，熟食，茎叶不能吃。",
          "season": "不限",
          "method": "熟食根部",
          "warning": "茎叶不可食",
          "feature": "根似藕而小",
          "poem": "天藕儿，降平陆，活生民如雨粟。昨日湖边闻野哭，忽忆当年采莲曲。"
        },
        {
          "name": "老鹳筋",
          "description": "二月采来，熟食，也可做成齑。",
          "season": "二月",
          "method": ["熟食", "制齑"],
          "poem": "老鹳筋，老鹳筋。去年水涸无织鳞，垤累累声不闻，老鹳何在筋独存。"
        },
        {
          "name": "鹅观草",
          "description": "正二月像麦一样青，炊食。",
          "season": "正二月",
          "method": "炊食",
          "feature": "似麦青",
          "poem": "鹅观草，满地青青鹅食饱。年来赤地不堪观，又被饥人分食了。"
        },
        {
          "name": "牛尾瘟",
          "description": "生长在深水中。叶子像头发，茎像藻，冬季和鱼一起煮食，夏秋也可食。",
          "season": ["冬季", "夏秋"],
          "method": "煮食",
          "habitat": "深水",
          "feature": ["叶似发", "茎似藻"],
          "poem": "牛尾瘟，不敢吞，疫气重，流远村。黄毛牸，乌毛犉，十庄九□无一存。"
        },
        {
          "name": "野萝卜",
          "description": "叶子像芦菔，所以得名，熟食。",
          "season": "不限",
          "method": "熟食",
          "feature": "叶似芦菔",
          "poem": "野萝卜，生平陆。匪蔓菁，若芦菔，求之不难，烹易熟。饥来获之，胜粱肉。"
        },
        {
          "name": "兔丝根",
          "alias": "兔丝苗",
          "description": "春季采叶苗，秋冬采根，蒸食，味甜。多吃会使人眩晕。",
          "season": {
            "spring": "采叶苗",
            "autumn_winter": "采根"
          },
          "method": "蒸食",
          "taste": "甜",
          "warning": "多食致眩",
          "poem": "兔丝根，美可尝，千万结如我肠。饥人得食不辍。"
        },
        {
          "name": "草鞋片",
          "description": "二三月采来熟食。",
          "season": "二三月",
          "method": "熟食",
          "poem": "草鞋片，甘贫贱。不踏软红尘，常行芳草茵。从教恶且敝，忍向泥涂弃。"
        },
        {
          "name": "撺撺儿",
          "description": "深秋采摘，晒干和谷物一起煮食，像苎麻，清香可爱。",
          "season": "深秋",
          "method": "晒干煮食",
          "feature": ["似苎麻", "清香"],
          "poem": "撺撺儿生水浊，却似瓦松初出时。须知可食不可弃，不能疗痒，能疗饥。"
        },
        {
          "name": "雀舌草",
          "description": "初生时采来熟食，因形状相似得名。",
          "season": "初生时",
          "method": "熟食",
          "feature": "似雀舌",
          "poem": "雀舌草，叶似茶。采之采之溪之涯，途中饥渴不能支，遍寻烟火无人家。"
        },
        {
          "name": "葛根",
          "alias": "鸡齐根",
          "description": "根部可食，春夏采摘。",
          "season": "春夏",
          "method": "食根",
          "usage": "药食两用",
          "poem": "葛根深扎地，枝蔓绕高树。春来嫩叶香，秋至花开素。"
        },
        {
          "name": "何首乌",
          "alias": "夜合",
          "description": "根部可食，秋季采挖。",
          "season": "秋季",
          "method": "食根",
          "usage": "药食两用",
          "poem": "何首乌，根如瓜。采之食之延年华，饥时充饥亦堪夸。"
        },
        {
          "name": "菊花",
          "alias": "节华",
          "description": "花可食用，重阳前后采摘。",
          "season": "重阳时节",
          "method": ["生食", "泡茶"],
          "usage": "药食两用",
          "poem": "菊花开，满园黄。采来佐酒香满堂，饥时充腹也芬芳。"
        },
        {
          "name": "金银花",
          "alias": "忍冬",
          "description": "花蕾可食，初夏采摘。",
          "season": "初夏",
          "method": ["生食", "泡茶"],
          "usage": "药食两用",
          "poem": "金银花，蕊如丝。清香沁人心脾，饥荒之年救人急。"
        },
        {
          "name": "水慈菰",
          "alias": "剪刀草",
          "description": "水生植物，春季采摘嫩茎。",
          "season": "春季",
          "method": "食嫩茎",
          "habitat": "水生",
          "poem": "水慈菰，生水中。春来嫩茎香，饥时可充饥。"
        },
        {
          "name": "茭笋",
          "alias": "菰根",
          "description": "水生植物，春季采挖根茎。",
          "season": "春季",
          "method": "食根茎",
          "habitat": "水生",
          "poem": "茭笋生，水底藏。挖来充饥肠，味美胜稻粱。"
        },
        {
          "name": "夜合树",
          "alias": "合欢",
          "description": "树芽可食，春季采摘。",
          "season": "春季",
          "method": "食芽",
          "usage": "药食两用",
          "poem": "夜合树，花如绵。春来新芽嫩，饥时可果腹。"
        },
        {
          "name": "木槿树",
          "description": "花可食，夏季采摘。",
          "season": "夏季",
          "method": "食花",
          "poem": "木槿花，朝荣夕落。采来充饥急，聊以度饥荒。"
        },
        {
          "name": "椿树芽",
          "description": "春季采摘嫩芽。",
          "season": "春季",
          "method": "食芽",
          "poem": "椿树芽，味微苦。春来采食之，饥时当蔬食。"
        },
        {
          "name": "槐树芽",
          "description": "春季采摘嫩芽和花。",
          "season": "春季",
          "method": ["食芽", "食花"],
          "poem": "槐花香，芽嫩黄。春来采食之，饥时解馋肠。"
        },
        {
          "name": "野豌豆",
          "description": "豆荚和嫩苗可食。",
          "season": ["春季采苗", "夏秋采豆"],
          "method": ["食苗", "食豆"],
          "poem": "野豌豆，生路旁。春食嫩叶香，秋收豆满筐。"
        },
        {
          "name": "山扁豆",
          "description": "豆可食，秋季采收。",
          "season": "秋季",
          "method": "食豆",
          "poem": "山扁豆，结实多。秋来采食之，饥时解饥饿。"
        },
        {
          "name": "荞麦苗",
          "description": "嫩苗可食。",
          "season": "春季",
          "method": "食苗",
          "poem": "荞麦苗，嫩又娇。采来充饥急，聊以度春宵。"
        },
        {
          "name": "芋苗",
          "alias": "芋头",
          "description": "根茎可食，秋季采挖。",
          "season": "秋季",
          "method": "食根茎",
          "poem": "芋苗青，根茎肥。秋来挖食之，饥时当美味。"
        },
        {
          "name": "莲藕",
          "description": "藕可食，秋季采挖。",
          "season": "秋季",
          "method": "食藕",
          "habitat": "水生",
          "poem": "莲藕白，味甘美。秋来采食之，饥时解饥困。"
        },
        {
          "name": "苋菜",
          "description": "全株可食，夏季采摘。",
          "season": "夏季",
          "method": "全株食用",
          "poem": "苋菜绿，叶柔嫩。夏日采食之，饥时当蔬菜。"
        },
        {
          "name": "苦苣菜",
          "alias": "天精菜",
          "description": "叶可食，春夏采摘。",
          "season": "春夏",
          "method": "食叶",
          "taste": "苦",
          "poem": "苦苣菜，味虽苦。春来采食之，饥时当美味。"
        },
        {
          "name": "马齿苋菜",
          "alias": "五行草",
          "description": "全株可食，夏季采摘。",
          "season": "夏季",
          "method": "全株食用",
          "poem": "马齿苋，生满地。夏日采食之，饥时解饥困。"
        },
        {
          "name": "冬葵菜",
          "description": "叶可食，冬季采摘。",
          "season": "冬季",
          "method": "食叶",
          "poem": "冬葵菜，耐寒霜。冬日采食之，饥时当蔬菜。"
        },
        {
          "name": "蓼芽菜",
          "description": "嫩芽可食，春季采摘。",
          "season": "春季",
          "method": "食芽",
          "taste": "辛",
          "poem": "蓼芽菜，味辛香。春来采食之，饥时解馋肠。"
        },
        {
          "name": "苜蓿",
          "description": "嫩苗可食，四季可采。",
          "season": "四季",
          "method": "食苗",
          "poem": "苜蓿青，四季生。采来充饥急，聊以度饥荒。"
        },
        {
          "name": "薄荷",
          "alias": "鸡苏",
          "description": "叶可食，夏季采摘。",
          "season": "夏季",
          "method": "食叶",
          "taste": "辛凉",
          "usage": "药食两用",
          "poem": "薄荷香，味清凉。夏日采食之，饥时解暑热。"
        },
        {
          "name": "荆芥",
          "alias": "假苏",
          "description": "嫩叶可食，春季采摘。",
          "season": "春季",
          "method": "食叶",
          "taste": "辛",
          "usage": "药食两用",
          "poem": "荆芥香，味微辛。春来采食之，饥时当佳蔬。"
        },
        {
          "name": "水蕲",
          "alias": "芹菜",
          "description": "全株可食，春季采摘。",
          "season": "春季",
          "method": "全株食用",
          "habitat": "水生",
          "poem": "水蕲青，生水边。春来采食之，饥时解饥馑。"
        }
      ]
    },
    {
      "name": "七、境外作物",
      "description": "从国外引进或传入的农作物品种",
      "children": [
        {
          "name": "稀见果蔬",
          "description": "较为罕见的境外果蔬品种",
          "children": [
            {
              "name": "郁",
              "description": "古代西域传入的水果",
              "origin": "西域",
              "feature": "果实香甜",
              "usage": "食用"
            },
            {
              "name": "芡",
              "description": "水生植物，果实可食",
              "origin": "东南亚",
              "feature": "水生植物",
              "usage": ["食用", "药用"]
            },
            {
              "name": "𫉄",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实多汁",
              "usage": "食用"
            },
            {
              "name": "薁",
              "description": "古代西域传入的水果",
              "origin": "西域",
              "feature": "果实酸甜",
              "usage": "食用"
            },
            {
              "name": "杨梅",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实酸甜",
              "usage": "食用"
            },
            {
              "name": "沙棠",
              "description": "古代西域传入的水果",
              "origin": "西域",
              "feature": "果实香甜",
              "usage": "食用"
            },
            {
              "name": "柤",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实多汁",
              "usage": "食用"
            },
            {
              "name": "椰",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实多用途",
              "usage": ["食用", "制油", "制糖"]
            },
            {
              "name": "槟榔",
              "description": "热带植物",
              "origin": "东南亚",
              "feature": "果实可嚼食",
              "usage": ["食用", "药用"]
            },
            {
              "name": "廉姜",
              "description": "热带香料植物",
              "origin": "东南亚",
              "feature": "根茎芳香",
              "usage": ["调味", "药用"]
            },
            {
              "name": "枸橼",
              "description": "柑橘类水果",
              "origin": "南亚",
              "feature": "果实芳香",
              "usage": ["食用", "药用"]
            },
            {
              "name": "鬼目",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实奇特",
              "usage": "食用"
            },
            {
              "name": "橄榄",
              "description": "热带水果",
              "origin": "地中海",
              "feature": "果实可食",
              "usage": ["食用", "制油"]
            },
            {
              "name": "龙眼",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实甜美",
              "usage": ["食用", "药用"]
            },
            {
              "name": "椹",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实多汁",
              "usage": "食用"
            }
          ]
        },
        {
          "name": "境外果蓏类",
          "description": "从国外引进的各类果蔬",
          "children": [
            {
              "name": "稻",
              "description": "主要粮食作物",
              "origin": "东南亚",
              "variants": ["籼稻", "粳稻", "糯稻"],
              "usage": "主食"
            },
            {
              "name": "禾",
              "description": "粮食作物",
              "origin": "西亚",
              "feature": "耐旱作物",
              "usage": "粮食"
            },
            {
              "name": "麦",
              "description": "主要粮食作物",
              "origin": "西亚",
              "variants": ["小麦", "大麦", "燕麦"],
              "usage": "粮食"
            },
            {
              "name": "豆",
              "description": "豆类作物",
              "origin": "美洲",
              "variants": ["大豆", "绿豆", "红豆"],
              "usage": ["粮食", "油料"]
            },
            {
              "name": "枣",
              "description": "果树",
              "origin": "西亚",
              "feature": "果实甜美",
              "usage": ["食用", "药用"]
            },
            {
              "name": "桃",
              "description": "果树",
              "origin": "中亚",
              "feature": "果实多汁",
              "usage": "食用"
            },
            {
              "name": "李",
              "description": "果树",
              "origin": "西亚",
              "feature": "果实酸甜",
              "usage": "食用"
            },
            {
              "name": "梨",
              "description": "果树",
              "origin": "中亚",
              "feature": "果实多汁",
              "usage": "食用"
            },
            {
              "name": "柰",
              "description": "果树",
              "origin": "西亚",
              "feature": "果实香甜",
              "usage": "食用"
            },
            {
              "name": "橙",
              "description": "柑橘类水果",
              "origin": "南亚",
              "feature": "果实酸甜",
              "usage": "食用"
            },
            {
              "name": "橘甘",
              "description": "柑橘类水果",
              "origin": "南亚",
              "feature": "果实甜美",
              "usage": "食用"
            },
            {
              "name": "柚",
              "description": "柑橘类水果",
              "origin": "南亚",
              "feature": "果实大而多汁",
              "usage": "食用"
            },
            {
              "name": "枷",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实奇特",
              "usage": "食用"
            },
            {
              "name": "栗",
              "description": "坚果类",
              "origin": "西亚",
              "feature": "果实可食",
              "usage": "食用"
            },
            {
              "name": "枇杷",
              "description": "果树",
              "origin": "东南亚",
              "feature": "果实甜美",
              "usage": "食用"
            },
            {
              "name": "椑",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实多汁",
              "usage": "食用"
            },
            {
              "name": "芡",
              "description": "水生植物",
              "origin": "东南亚",
              "feature": "水生植物",
              "usage": "食用"
            },
            {
              "name": "棪",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实香甜",
              "usage": "食用"
            },
            {
              "name": "益智",
              "description": "热带植物",
              "origin": "东南亚",
              "feature": "果实药用",
              "usage": "药用"
            },
            {
              "name": "桶",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实奇特",
              "usage": "食用"
            },
            {
              "name": "蒳子",
              "description": "热带植物",
              "origin": "东南亚",
              "feature": "果实芳香",
              "usage": ["食用", "药用"]
            },
            {
              "name": "豆蔻",
              "description": "热带香料植物",
              "origin": "东南亚",
              "feature": "果实芳香",
              "usage": ["调味", "药用"]
            },
            {
              "name": "榠",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实酸甜",
              "usage": "食用"
            },
            {
              "name": "余甘",
              "description": "热带水果",
              "origin": "东南亚",
              "feature": "果实酸甜",
              "usage": "食用"
            },
            {
              "name": "蒟子",
              "description": "热带植物",
              "origin": "东南亚",
              "feature": "果实可食",
              "usage": "食用"
            },
            {
              "name": "芭蕉",
              "description": "热带植物",
              "origin": "东南亚",
              "feature": "果实甜美",
              "usage": "食用"
            },
            {
              "name": "扶留",
              "description": "热带植物",
              "origin": "东南亚",
              "feature": "果实可食",
              "usage": "食用"
            }
          ]
        }
      ]
    }
  ]
}