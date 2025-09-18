var mapChart = echarts.init(document.getElementById("map"));
// 获取所有按月循环的数据
var bestSelling = dataOne().bestSelling;
var mapData = dataOne().mapD;
var pressRanking = dataOne().pressRanking;
var saleBL = dataOne().saleBL;
var stockBL = dataOne().stockBL;
var saleStockR = dataOne().saleStockR;
var allMData = dataOne().allMData;

// 获取各地区的经纬度
var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
// 散点数据 和 对应经纬度

var data = [
  { name: "双鸭山", value: 8 },
  { name: "七台河", value: 9 },
  { name: "海门", value: 9 },
  { name: "阿拉善", value: 10 },
  { name: "果洛", value: 11 },
  { name: "鄂尔多斯", value: 12 },
  { name: "招远", value: 12 },
  { name: "舟山", value: 12 },
  { name: "三沙", value: 13 },
  { name: "齐齐哈尔", value: 14 },
  { name: "日喀则", value: 15 },
  { name: "盐城", value: 15 },
  { name: "林芝", value: 16 },
  { name: "赤峰", value: 16 },
  { name: "那曲", value: 17 },
  { name: "乳山", value: 18 },
  { name: "青岛", value: 18 },
  { name: "阿里", value: 19 },
  { name: "金昌", value: 19 },
  { name: "泉州", value: 21 },
  { name: "莱西", value: 21 },
  { name: "日照", value: 21 },
  { name: "胶南", value: 22 },
  { name: "南通", value: 23 },
  { name: "拉萨", value: 24 },
  { name: "云浮", value: 24 },
  { name: "梅州", value: 25 },
  { name: "文登", value: 25 },
  { name: "上海市", value: 25 },
  { name: "攀枝花", value: 25 },
  { name: "威海", value: 25 },
  { name: "承德", value: 25 },
  { name: "厦门", value: 26 },
  { name: "汕尾", value: 26 },
  { name: "潮州", value: 26 },
  { name: "丹东", value: 27 },
  { name: "太仓", value: 27 },
  { name: "曲靖", value: 27 },
  { name: "烟台", value: 28 },
  { name: "福州", value: 29 },
  { name: "瓦房店", value: 30 },
  { name: "即墨", value: 30 },
  { name: "抚顺", value: 31 },
  { name: "玉溪", value: 31 },
  { name: "张家口", value: 31 },
  { name: "阳泉", value: 31 },
  { name: "莱州", value: 32 },
  { name: "湖州", value: 32 },
  { name: "汕头", value: 32 },
  { name: "昆山", value: 33 },
  { name: "宁波", value: 33 },
  { name: "湛江", value: 33 },
  { name: "揭阳", value: 34 },
  { name: "荣成", value: 34 },
  { name: "连云港", value: 35 },
  { name: "葫芦岛", value: 35 },
  { name: "常熟", value: 36 },
  { name: "东莞", value: 36 },
  { name: "河源", value: 36 },
  { name: "淮安", value: 36 },
  { name: "泰州", value: 36 },
  { name: "南宁", value: 37 },
  { name: "营口", value: 37 },
  { name: "惠州", value: 37 },
  { name: "江阴", value: 37 },
  { name: "蓬莱", value: 37 },
  { name: "韶关", value: 38 },
  { name: "嘉峪关", value: 38 },
  { name: "广州", value: 38 },
  { name: "延安", value: 38 },
  { name: "太原", value: 39 },
  { name: "清远", value: 39 },
  { name: "中山", value: 39 },
  { name: "昆明", value: 39 },
  { name: "寿光", value: 40 },
  { name: "盘锦", value: 40 },
  { name: "长治", value: 41 },
  { name: "深圳", value: 41 },
  { name: "珠海", value: 42 },
  { name: "宿迁", value: 43 },
  { name: "咸阳", value: 43 },
  { name: "铜川", value: 44 },
  { name: "平度", value: 44 },
  { name: "佛山", value: 44 },
  { name: "海口", value: 44 },
  { name: "江门", value: 45 },
  { name: "章丘", value: 45 },
  { name: "肇庆", value: 46 },
  { name: "大连", value: 47 },
  { name: "临汾", value: 47 },
  { name: "吴江", value: 47 },
  { name: "石嘴山", value: 49 },
  { name: "沈阳", value: 50 },
  { name: "苏州", value: 50 },
  { name: "茂名", value: 50 },
  { name: "嘉兴", value: 51 },
  { name: "长春", value: 51 },
  { name: "胶州", value: 52 },
  { name: "银川", value: 52 },
  { name: "张家港", value: 52 },
  { name: "三门峡", value: 53 },
  { name: "锦州", value: 54 },
  { name: "南昌", value: 54 },
  { name: "柳州", value: 54 },
  { name: "三亚", value: 54 },
  { name: "自贡", value: 56 },
  { name: "吉林省", value: 56 },
  { name: "阳江", value: 57 },
  { name: "泸州", value: 57 },
  { name: "西宁", value: 57 },
  { name: "宜宾", value: 58 },
  { name: "呼和浩特", value: 58 },
  { name: "成都", value: 58 },
  { name: "大同", value: 58 },
  { name: "镇江", value: 59 },
  { name: "桂林", value: 59 },
  { name: "张家界", value: 59 },
  { name: "宜兴", value: 59 },
  { name: "北海", value: 60 },
  { name: "西安", value: 61 },
  { name: "金坛", value: 62 },
  { name: "东营", value: 62 },
  { name: "牡丹江", value: 63 },
  { name: "遵义", value: 63 },
  { name: "绍兴", value: 63 },
  { name: "扬州", value: 64 },
  { name: "常州", value: 64 },
  { name: "潍坊", value: 65 },
  { name: "重庆市", value: 66 },
  { name: "台州", value: 67 },
  { name: "南京", value: 67 },
  { name: "滨州", value: 70 },
  { name: "贵阳", value: 71 },
  { name: "无锡", value: 71 },
  { name: "本溪", value: 71 },
  { name: "克拉玛依", value: 72 },
  { name: "渭南", value: 72 },
  { name: "马鞍山", value: 72 },
  { name: "宝鸡", value: 72 },
  { name: "焦作", value: 75 },
  { name: "句容", value: 75 },
  { name: "北京市", value: 79 },
  { name: "徐州", value: 79 },
  { name: "衡水", value: 80 },
  { name: "包头", value: 80 },
  { name: "绵阳", value: 80 },
  { name: "乌鲁木齐", value: 84 },
  { name: "枣庄", value: 84 },
  { name: "杭州", value: 84 },
  { name: "淄博", value: 85 },
  { name: "鞍山", value: 86 },
  { name: "溧阳", value: 86 },
  { name: "库尔勒", value: 86 },
  { name: "安阳", value: 90 },
  { name: "开封", value: 90 },
  { name: "济南", value: 92 },
  { name: "德阳", value: 93 },
  { name: "温州", value: 95 },
  { name: "九江", value: 96 },
  { name: "邯郸", value: 98 },
  { name: "临安", value: 99 },
  { name: "兰州", value: 99 },
  { name: "沧州", value: 100 },
  { name: "临沂", value: 103 },
  { name: "南充", value: 104 },
  { name: "天津市", value: 105 },
  { name: "富阳", value: 106 },
  { name: "泰安", value: 112 },
  { name: "诸暨", value: 112 },
  { name: "郑州", value: 113 },
  { name: "哈尔滨", value: 114 },
  { name: "聊城", value: 116 },
  { name: "芜湖", value: 117 },
  { name: "唐山", value: 119 },
  { name: "平顶山", value: 119 },
  { name: "邢台", value: 119 },
  { name: "德州", value: 120 },
  { name: "济宁", value: 120 },
  { name: "荆州", value: 127 },
  { name: "宜昌", value: 130 },
  { name: "义乌", value: 132 },
  { name: "丽水", value: 133 },
  { name: "洛阳", value: 134 },
  { name: "秦皇岛", value: 136 },
  { name: "株洲", value: 143 },
  { name: "石家庄", value: 147 },
  { name: "莱芜", value: 148 },
  { name: "常德", value: 152 },
  { name: "保定", value: 153 },
  { name: "湘潭", value: 154 },
  { name: "金华", value: 157 },
  { name: "岳阳", value: 169 },
  { name: "长沙", value: 175 },
  { name: "衢州", value: 177 },
  { name: "廊坊", value: 193 },
  { name: "菏泽", value: 194 },
  { name: "合肥", value: 229 },
  { name: "武汉", value: 273 },
  { name: "大庆", value: 279 }
];
var geoCoordMap = {
  海门: [121.15, 31.89],
  鄂尔多斯: [109.781327, 39.608266],
  招远: [120.38, 37.35],
  舟山: [122.207216, 29.985295],
  齐齐哈尔: [123.97, 47.33],
  盐城: [120.13, 33.38],
  赤峰: [118.87, 42.28],
  青岛: [120.33, 36.07],
  乳山: [121.52, 36.89],
  金昌: [102.188043, 38.520089],
  泉州: [118.58, 24.93],
  莱西: [120.53, 36.86],
  日照: [119.46, 35.42],
  胶南: [119.97, 35.88],
  南通: [121.05, 32.08],
  拉萨: [91.11, 29.97],
  云浮: [112.02, 22.93],
  梅州: [116.1, 24.55],
  文登: [122.05, 37.2],
  上海市: [121.48, 31.22],
  攀枝花: [101.718637, 26.582347],
  威海: [122.1, 37.5],
  承德: [117.93, 40.97],
  厦门: [118.1, 24.46],
  汕尾: [115.375279, 22.786211],
  潮州: [116.63, 23.68],
  丹东: [124.37, 40.13],
  太仓: [121.1, 31.45],
  曲靖: [103.79, 25.51],
  烟台: [121.39, 37.52],
  福州: [119.3, 26.08],
  瓦房店: [121.979603, 39.627114],
  即墨: [120.45, 36.38],
  抚顺: [123.97, 41.97],
  玉溪: [102.52, 24.35],
  张家口: [114.87, 40.82],
  阳泉: [113.57, 37.85],
  莱州: [119.942327, 37.177017],
  湖州: [120.1, 30.86],
  汕头: [116.69, 23.39],
  昆山: [120.95, 31.39],
  宁波: [121.56, 29.86],
  湛江: [110.359377, 21.270708],
  揭阳: [116.35, 23.55],
  荣成: [122.41, 37.16],
  连云港: [119.16, 34.59],
  葫芦岛: [120.836932, 40.711052],
  常熟: [120.74, 31.64],
  东莞: [113.75, 23.04],
  河源: [114.68, 23.73],
  淮安: [119.15, 33.5],
  泰州: [119.9, 32.49],
  南宁: [108.33, 22.84],
  营口: [122.18, 40.65],
  惠州: [114.4, 23.09],
  江阴: [120.26, 31.91],
  蓬莱: [120.75, 37.8],
  韶关: [113.62, 24.84],
  嘉峪关: [98.289152, 39.77313],
  广州: [113.23, 23.16],
  延安: [109.47, 36.6],
  太原: [112.53, 37.87],
  清远: [113.01, 23.7],
  中山: [113.38, 22.52],
  昆明: [102.73, 25.04],
  寿光: [118.73, 36.86],
  盘锦: [122.070714, 41.119997],
  长治: [113.08, 36.18],
  深圳: [114.07, 22.62],
  珠海: [113.52, 22.3],
  宿迁: [118.3, 33.96],
  咸阳: [108.72, 34.36],
  铜川: [109.11, 35.09],
  平度: [119.97, 36.77],
  佛山: [113.11, 23.05],
  海口: [110.35, 20.02],
  江门: [113.06, 22.61],
  章丘: [117.53, 36.72],
  肇庆: [112.44, 23.05],
  大连: [121.62, 38.92],
  临汾: [111.5, 36.08],
  吴江: [120.63, 31.16],
  石嘴山: [106.39, 39.04],
  沈阳: [123.38, 41.8],
  苏州: [120.62, 31.32],
  茂名: [110.88, 21.68],
  嘉兴: [120.76, 30.77],
  长春: [125.35, 43.88],
  胶州: [120.03336, 36.264622],
  银川: [106.27, 38.47],
  张家港: [120.555821, 31.875428],
  三门峡: [111.19, 34.76],
  锦州: [121.15, 41.13],
  南昌: [115.89, 28.68],
  柳州: [109.4, 24.33],
  三亚: [109.511909, 18.252847],
  自贡: [104.778442, 29.33903],
  吉林省: [126.57, 43.87],
  阳江: [111.95, 21.85],
  泸州: [105.39, 28.91],
  西宁: [101.74, 36.56],
  宜宾: [104.56, 29.77],
  呼和浩特: [111.65, 40.82],
  成都: [104.06, 30.67],
  大同: [113.3, 40.12],
  镇江: [119.44, 32.2],
  桂林: [110.28, 25.29],
  张家界: [110.479191, 29.117096],
  宜兴: [119.82, 31.36],
  北海: [109.12, 21.49],
  西安: [108.95, 34.27],
  金坛: [119.56, 31.74],
  东营: [118.49, 37.46],
  牡丹江: [129.58, 44.6],
  遵义: [106.9, 27.7],
  绍兴: [120.58, 30.01],
  扬州: [119.42, 32.39],
  常州: [119.95, 31.79],
  潍坊: [119.1, 36.62],
  重庆市: [106.54, 29.59],
  台州: [121.420757, 28.656386],
  南京: [118.78, 32.04],
  滨州: [118.03, 37.36],
  贵阳: [106.71, 26.57],
  无锡: [120.29, 31.59],
  本溪: [123.73, 41.3],
  克拉玛依: [84.77, 45.59],
  渭南: [109.5, 34.52],
  马鞍山: [118.48, 31.56],
  宝鸡: [107.15, 34.38],
  焦作: [113.21, 35.24],
  句容: [119.16, 31.95],
  北京市: [116.46, 39.92],
  徐州: [117.2, 34.26],
  衡水: [115.72, 37.72],
  包头: [110, 40.58],
  绵阳: [104.73, 31.48],
  乌鲁木齐: [87.68, 43.77],
  枣庄: [117.57, 34.86],
  杭州: [120.19, 30.26],
  淄博: [118.05, 36.78],
  鞍山: [122.85, 41.12],
  溧阳: [119.48, 31.43],
  库尔勒: [86.06, 41.68],
  安阳: [114.35, 36.1],
  开封: [114.35, 34.79],
  济南: [117, 36.65],
  德阳: [104.37, 31.13],
  温州: [120.65, 28.01],
  九江: [115.97, 29.71],
  邯郸: [114.47, 36.6],
  临安: [119.72, 30.23],
  兰州: [103.73, 36.03],
  沧州: [116.83, 38.33],
  临沂: [118.35, 35.05],
  南充: [106.110698, 30.837793],
  天津市: [117.2, 39.13],
  富阳: [119.95, 30.07],
  泰安: [117.13, 36.18],
  诸暨: [120.23, 29.71],
  郑州: [113.65, 34.76],
  哈尔滨: [126.63, 45.75],
  聊城: [115.97, 36.45],
  芜湖: [118.38, 31.33],
  唐山: [118.02, 39.63],
  平顶山: [113.29, 33.75],
  邢台: [114.48, 37.05],
  德州: [116.29, 37.45],
  济宁: [116.59, 35.38],
  荆州: [112.239741, 30.335165],
  宜昌: [111.3, 30.7],
  义乌: [120.06, 29.32],
  丽水: [119.92, 28.45],
  洛阳: [112.44, 34.7],
  秦皇岛: [119.57, 39.95],
  株洲: [113.16, 27.83],
  石家庄: [114.48, 38.03],
  莱芜: [117.67, 36.19],
  常德: [111.69, 29.05],
  保定: [115.48, 38.85],
  湘潭: [112.91, 27.87],
  金华: [119.64, 29.12],
  岳阳: [113.09, 29.37],
  长沙: [113, 28.21],
  衢州: [118.88, 28.97],
  廊坊: [116.7, 39.53],
  菏泽: [115.480656, 35.23375],
  合肥: [117.27, 31.86],
  武汉: [114.31, 30.52],
  大庆: [125.03, 46.58]
};

var Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
// 省份数据
var itemStyleD = [
    // === itemStyleD 部分（核心省份） ===
    {   
        name: '湖南省',
        uploadcnt: "丘陵、水田、湖区", 
        uploadpzs: "水稻、棉花、甘蔗",
        xsmy: "亚热带湿润气候，潮湿多雨",
        kcmy: "米饭、腊肉、鱼类",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '上海市',
        uploadcnt: "冲积平原、河网密布",
        uploadpzs: "水稻、棉花、蔬菜",
        xsmy: "亚热带季风气候，湿润温暖",
        kcmy: "米饭、小笼包、河鲜",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '云南省',
        uploadcnt: "高原、山地、河谷",
        uploadpzs: "水稻、玉米、烟草",
        xsmy: "高原山地气候，干湿分明",
        kcmy: "米线、野菜、腊肉",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '湖北省',
        uploadcnt: "湖泊、平原、水田",
        uploadpzs: "水稻、油菜、棉花",
        xsmy: "亚热带湿润气候，雨多湿热",
        kcmy: "米饭、鱼、藕汤",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '江苏省',
        uploadcnt: "冲积平原、水网密布",
        uploadpzs: "水稻、小麦、蚕桑",
        xsmy: "亚热带湿润季风气候，温暖多雨",
        kcmy: "米饭、面条、鱼虾",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '江西省',
        uploadcnt: "丘陵、湖泊、水田",
        uploadpzs: "水稻、甘蔗、棉花",
        xsmy: "亚热带湿润气候，四季分明",
        kcmy: "米饭、藜蒿、鸭肉",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '内蒙古自治区',
        uploadcnt: "草原、沙地、丘陵",
        uploadpzs: "燕麦、黍、马铃薯",
        xsmy: "温带草原气候，干冷风大",
        kcmy: "奶制品、牛羊肉、面食",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '四川省',
        uploadcnt: "盆地、山地、丘陵",
        uploadpzs: "水稻、小麦、油菜",
        xsmy: "亚热带湿润气候，炎热多雨",
        kcmy: "米饭、麻辣火锅、豆瓣酱",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
    {   
        name: '浙江省',
        uploadcnt: "丘陵、水田",
        uploadpzs: "水稻、茶叶、蚕桑",
        xsmy: "亚热带季风气候，温暖湿润",
        kcmy: "米饭、鱼干、蔬菜",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }        
    },
];

var noneData = [
    // === noneData 部分（其他省份） ===
    {
        name: '广东省', 
        uploadcnt: "丘陵、盆地、平原",
        uploadpzs: "水稻、甘蔗、香蕉",
        xsmy: "南亚热带季风气候，炎热多雨",
        kcmy: "米饭、粥、海鲜",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }       
        }
    },    
    {
        name: '甘肃省', 
        uploadcnt: "山地、沙地、绿洲",
        uploadpzs: "小麦、玉米、马铃薯",
        xsmy: "温带干旱半干旱气候，少雨多风",
        kcmy: "馍馍、牛羊肉、粉条",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }                    
    },
    {
        name: '河北省', 
        uploadcnt: "黄土平原、冲积平原",
        uploadpzs: "小麦、谷子、高粱",
        xsmy: "温带季风气候，冬季寒冷干燥",
        kcmy: "面食（饼、馒头）、杂粮粥",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }                                       
    },
    {
        name: '河南省', 
        uploadcnt: "黄土平原、河谷地",
        uploadpzs: "小麦、棉花、芝麻",
        xsmy: "温带季风气候，春暖夏热",
        kcmy: "馒头、杂粮粥、豆腐",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }                    
    },
    {
        name: '黑龙江省', 
        uploadcnt: "黑土平原、林地",
        uploadpzs: "大豆、小麦、马铃薯",
        xsmy: "寒温带气候，严寒漫长",
        kcmy: "大豆制品、牛羊肉、杂粮",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }                          
        }
    },
    {
        name: '山东省', 
        uploadcnt: "平原、丘陵、沿海",
        uploadpzs: "小麦、花生、高粱",
        xsmy: "温带季风气候，春旱夏雨",
        kcmy: "面食、地瓜、海鲜",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }       
        }
    },
    {
        name: '新疆维吾尔自治区', 
        uploadcnt: "盆地、山地、绿洲",
        uploadpzs: "小麦、棉花、葡萄",
        xsmy: "温带大陆性干旱气候，昼夜温差大",
        kcmy: "馕、抓饭、牛羊肉",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }       
        }
    },    
    {
        name: '宁夏回族自治区', 
        uploadcnt: "黄土台地、河套平原",
        uploadpzs: "小麦、水稻、枸杞",
        xsmy: "温带大陆性干旱气候",
        kcmy: "面食、羊肉、粥类",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }       
        }
    },
    {
        name: '海南省', 
        uploadcnt: "丘陵、盆地",
        uploadpzs: "水稻、甘蔗、椰子",
        xsmy: "热带季风气候，高温多雨",
        kcmy: "海鲜、热带水果、椰子",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '台湾省',  
        uploadcnt: "山地、平原、海岸",
        uploadpzs: "水稻、甘蔗、热带水果",
        xsmy: "热带和亚热带季风气候",
        kcmy: "米饭、海产、水果",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '香港',  
        uploadcnt: "丘陵、海港、填海地",
        uploadpzs: "蔬菜、甘蔗、水稻（少量）",
        xsmy: "亚热带季风气候，炎热潮湿",
        kcmy: "粥粉面饭、海鲜、点心",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '澳门', 
        uploadcnt: "海岛、丘陵",
        uploadpzs: "蔬菜、水稻（少量）",
        xsmy: "亚热带季风气候，温暖湿润",
        kcmy: "葡式米饭、点心、鱼虾",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '北京市', 
        uploadcnt: "山地、平原",
        uploadpzs: "小麦、玉米、豆类",
        xsmy: "温带季风气候，四季分明",
        kcmy: "面条、豆汁、驴打滚",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '天津市', 
        uploadcnt: "冲积平原、滨海湿地",
        uploadpzs: "小麦、玉米、蔬菜",
        xsmy: "温带季风气候，冬冷夏热",
        kcmy: "煎饼果子、面食、海鲜",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '重庆市', 
        uploadcnt: "丘陵、山地",
        uploadpzs: "水稻、甘蔗、蔬菜",
        xsmy: "亚热带湿润气候，闷热潮湿",
        kcmy: "米饭、火锅、小面",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }         
        }
    },      
    {
        name: '辽宁省', 
        uploadcnt: "山地、平原、丘陵",
        uploadpzs: "小麦、高粱、粟",
        xsmy: "温带季风气候，寒冷干燥",
        kcmy: "面食、杂粮粥、鱼类",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '安徽省', 
        uploadcnt: "山地、平原、湖泊",
        uploadpzs: "水稻、小麦、油菜",
        xsmy: "亚热带季风气候，雨量充沛",
        kcmy: "米饭、杂粮、鱼肉",                   
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },      
    {
        name: '广西壮族自治区', 
        uploadcnt: "山地、盆地、平原",
        uploadpzs: "水稻、甘蔗、香蕉",
        xsmy: "亚热带季风气候，温暖湿润",
        kcmy: "螺蛳粉、酸嘢、米粉",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },      
    {
        name: '山西省', 
        uploadcnt: "黄土高原",
        uploadpzs: "谷子、黍、高粱",
        xsmy: "温带大陆性气候，寒冷干燥",
        kcmy: "杂粮、窝头、豆类制品",                  
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '陕西省', 
        uploadcnt: "关中平原、黄土高原",
        uploadpzs: "小麦、玉米、棉花",
        xsmy: "温带大陆性气候，四季分明",
        kcmy: "面食、凉皮、杂粮",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '吉林省', 
        uploadcnt: "山地、丘陵、平原",
        uploadpzs: "大豆、粟、马铃薯",
        xsmy: "温带季风气候，严寒多雪",
        kcmy: "豆制品、粟米饭、野菜",                  
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '福建省', 
        uploadcnt: "山地、丘陵、水田",
        uploadpzs: "水稻、甘蔗、茶叶",
        xsmy: "亚热带季风气候，湿润多雨",
        kcmy: "米饭、番薯、海产",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '贵州省', 
        uploadcnt: "喀斯特高原、山地",
        uploadpzs: "玉米、马铃薯、稻谷",
        xsmy: "亚热带湿润气候，湿润凉爽",
        kcmy: "酸汤饭、腊肉、米豆腐",
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },      
    {
        name: '青海省', 
        uploadcnt: "高原、山地、草原",
        uploadpzs: "青稞、马铃薯、豆类",
        xsmy: "高原大陆性气候，寒冷干燥",
        kcmy: "糌粑、奶制品、牛羊肉",                  
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    },
    {
        name: '西藏自治区', 
        uploadcnt: "高原、山地",
        uploadpzs: "青稞、豌豆、马铃薯",
        xsmy: "高原气候，寒冷干燥",
        kcmy: "糌粑、酥油茶、牦牛肉",                  
        itemStyle: {
            normal: { areaColor: 'rgb(244, 163, 13)' },
            emphasis: { areaColor: "rgb(244, 71, 13)" }
        }
    }
];


for(key in mapData){
    mapData[key] = itemStyleD.concat(noneData);
}

var option = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    backgroundColor: 'transparent',
    borderWidth: 0,
    shadowBlur: 0,
    axisPointer: { type: 'none' },
    confine: true,
    enterable: true,
    alwaysShowContent: true,  // 添加此属性确保tooltip始终显示
    triggerOn: 'mousemove',
    className: 'echarts-tooltip-pointer-events-none',
    position: function (point, params, dom, rect, size) {
      // 如果是用户主动移动到省份，且不是在tooltip区域内，才切换回交互状态
      if (params && params.event && params.event.type === 'mousemove') {
        // 检查鼠标是否在tooltip区域内
        var mouseX = params.event.offsetX;
        var mouseY = params.event.offsetY;
        var tooltipRect = dom.getBoundingClientRect();
        var mapRect = document.getElementById('map').getBoundingClientRect();
        var tooltipX = tooltipRect.left - mapRect.left;
        var tooltipY = tooltipRect.top - mapRect.top;
        
        // 如果鼠标不在tooltip区域内，才切换状态
        if (!(mouseX >= tooltipX && mouseX <= tooltipX + tooltipRect.width &&
              mouseY >= tooltipY && mouseY <= tooltipY + tooltipRect.height)) {
          isRandomMode = false;
        }
      }

      // 保持tooltip对鼠标事件透明
      dom.style.pointerEvents = 'none';
      
      // 获取地图容器的尺寸
      var mapContainer = document.getElementById('map');
      var mapRect = mapContainer.getBoundingClientRect();
      
      // 获取提示框的尺寸
      var tipWidth = dom.offsetWidth;
      var tipHeight = dom.offsetHeight;
      
      // 在随机模式下使用固定位置
      if (isRandomMode) {
        return [
          mapRect.width / 2 + 100,
          mapRect.height / 2 - tipHeight / 2
        ];
      }
      
      // 非随机模式下的动态位置计算
      var safeDistance = 20;
      var mouseBuffer = 50;
      
      // 计算最佳位置
      var bestPosition;
      
      // 首选位置：鼠标右侧
      if (point[0] + mouseBuffer + tipWidth <= mapRect.width - safeDistance) {
        bestPosition = {
          x: point[0] + mouseBuffer,
          y: Math.min(Math.max(safeDistance, point[1] - tipHeight / 2), mapRect.height - tipHeight - safeDistance)
        };
      }
      // 次选位置：鼠标左侧
      else if (point[0] - mouseBuffer - tipWidth >= safeDistance) {
        bestPosition = {
          x: point[0] - mouseBuffer - tipWidth,
          y: Math.min(Math.max(safeDistance, point[1] - tipHeight / 2), mapRect.height - tipHeight - safeDistance)
        };
      }
      // 上方
      else if (point[1] - mouseBuffer - tipHeight >= safeDistance) {
        bestPosition = {
          x: Math.min(Math.max(safeDistance, point[0] - tipWidth / 2), mapRect.width - tipWidth - safeDistance),
          y: point[1] - mouseBuffer - tipHeight
        };
      }
      // 下方
      else {
        bestPosition = {
          x: Math.min(Math.max(safeDistance, point[0] - tipWidth / 2), mapRect.width - tipWidth - safeDistance),
          y: point[1] + mouseBuffer
        };
      }
      
      // 确保位置在地图范围内
      bestPosition.x = Math.min(Math.max(safeDistance, bestPosition.x), mapRect.width - tipWidth - safeDistance);
      bestPosition.y = Math.min(Math.max(safeDistance, bestPosition.y), mapRect.height - tipHeight - safeDistance);
      
      return [bestPosition.x, bestPosition.y];
    },
    formatter: function(params) {
      if (params.data) {
        // 处理省份名称换行
        var formatProvinceName = function(name) {
          // 需要换行的省份名称
          var longProvinces = {
            '新疆维吾尔自治区': '新疆维吾尔\n自治区',
            '宁夏回族自治区': '宁夏回族\n自治区',
            '广西壮族自治区': '广西壮族\n自治区',
            '内蒙古自治区': '内蒙古\n自治区',
            '西藏自治区': '西藏\n自治区'
          };
          return longProvinces[name] || name;
        };

        return '<div style="display: flex; align-items: center; min-width: 280px; background: transparent; position: relative;">' +
               '<div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: url(\'img/tip-bg.png\') no-repeat center center; background-size: contain; z-index: -1; pointer-events: none;"></div>' +
               '<div style="width: 200px; height: 240px; display: flex; align-items: center; justify-content: center; pointer-events: none;">' +
               '<span style="color: #fff; font-size: 28px; font-weight: bold; transform: translateX(-20px); text-align: center; white-space: pre-line; line-height: 1.2;">' + 
               formatProvinceName(params.name) + 
               '</span>' +
               '</div>' +
               '<div style="padding: 15px 40px 15px 0; height: 240px; display: flex; flex-direction: column; justify-content: center; pointer-events: none; transform: translateX(-30px);">' +
               '<div style="line-height: 22px; color: #fff; margin-bottom: 3px;">地形：' + (params.data.uploadcnt || '') + '</div>' +
               '<div style="line-height: 22px; color: #fff; margin-bottom: 3px;">作物：' + (params.data.uploadpzs || '') + '</div>' +
               '<div style="line-height: 22px; color: #fff; margin-bottom: 3px;">气候：' + (params.data.xsmy || '') + '</div>' +
               '<div style="line-height: 22px; color: #fff;">饮食：' + (params.data.kcmy || '') + '</div>' +
               '</div>' +
               '</div>';
      }
      return params.name;
    },
    extraCssText: 'border: none; outline: none; box-shadow: none; padding: 0; pointer-events: auto; min-width: 280px;'
  },
  series: [
    {
      name: "省份信息",
      type: "map",
      mapType: "china",
      roam: false,
      selectedMode: false,
      label: {
        normal: {
              show: false
                },
                emphasis: {
          show: true,
          textStyle: {
            color: '#fff'
                }
            }
        },
            itemStyle: {
                normal: {
          areaColor: 'rgb(244, 163, 13)',
          borderColor: '#0692a4'
                },
                emphasis: {
          areaColor: "rgb(244, 71, 13)",
          opacity: 0.8
        }
      },
      data: mapData["map"]
    }
  ]
};

mapChart.setOption(option);

// 移除之前添加的鼠标悬停事件监听
mapChart.off('mouseover');
mapChart.off('mouseout');

// 添加用户悬停状态变量
var userHovering = false;

// 添加鼠标悬停事件监听
mapChart.on('mouseover', function(params) {
  if (params.seriesIndex === 0) {
    userHovering = true;
  }
});

// 添加鼠标移出事件监听
mapChart.on('mouseout', function(params) {
  if (params.seriesIndex === 0) {
    userHovering = false;
  }
});

// 渲染全国四种数据1月份
$('#book-data').text(allMData["book"][0]);
$('#varity-data').text(allMData["variety"][0]);
$('#sales-data').text(allMData["sales"][0]);
$('#stock-data').text(allMData["stock"][0]);
mapChart.currentIndex = -1;

var monthIndex = 0;
var bNum = 0;
var startN = 0;
var timer = null;
setVal();


//   畅销书排行
var ranktUl = $('.aside-left .top ul');
var bookLiLen = ranktUl.eq(0).children().length; 
var conH = $('.aside-left .top .con-wrap').height(); 
var bookNum = 0;
var timer01 = null;
var overWrapEle = $('.aside-left .top .con-wrap .over-wrap');

var booktimerFn = function(bNum){
    clearTimeout(timer01);

    timer01 = setInterval(function(){
      
        bookNum++; 
        ranktUl.eq(bNum).children().removeClass('active');
        ranktUl.eq(bNum).children().eq(bookNum).addClass('active');

        if(bookNum == (bookLiLen-1)){       
            clearInterval(timer01);
            bookNum = 0;
        }
    },3000);
        
}
// 监听过渡动画回调函数
var ListenTr = function(bNum){
    // 过渡动画回调，执行定时切换
    var e = overWrapEle[0];

    function whichTransitionEvent(){
    var t,
        el = document.createElement('surface'),
        transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        }
    
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    }
    
    var transitionEvent = whichTransitionEvent();
    transitionEvent && e.addEventListener(transitionEvent, function() {
        booktimerFn(bNum);
        e. removeEventListener(transitionEvent,arguments.callee,false);//销毁事件
                                    
    });
}
var numGoFn = function(monthIndex){
    //   将月份填入
    var curTime = '数据(1911年以前)';
    $('.month-tip').text(curTime);
    //   全国数据关联月份
    var newBData,oldBData,newVData,oldVData,newMData,oldMData,newSData,oldSData;

        newBData = allMData["book"][monthIndex];
        oldBData = monthIndex == 0? allMData["book"][11]: allMData["book"][monthIndex -1];
        
        newVData = allMData["variety"][monthIndex];
        oldVData = monthIndex == 0? allMData["variety"][11]: allMData["variety"][monthIndex -1];
        
        newMData = allMData["sales"][monthIndex];
        oldMData = monthIndex == 0? allMData["sales"][11]: allMData["sales"][monthIndex -1];        

        newSData = allMData["stock"][monthIndex];
        oldSData = monthIndex == 0? allMData["stock"][11]: allMData["stock"][monthIndex -1];

    // 数据滚动效果
    var options = {
      useEasing: true, 
      useGrouping: true, 
      separator: ',', 
      decimal: '.', 
    };

    var demoB = new CountUp('book-data', oldBData, newBData, 0, 2.5, options);
    if (!demoB.error) {
      demoB.start();
    } else {
      console.error(demoB.error);
    }

    var demoV = new CountUp('varity-data', oldVData, newVData, 0, 2.5, options);
    if (!demoV.error) {
      demoV.start();
    } else {
      console.error(demoV.error);
    }

    var demoM = new CountUp('sales-data', oldMData, newMData, 0, 2.5, options);
    if (!demoM.error) {
      demoM.start();
    } else {
      console.error(demoM.error);
    }

    var demoS = new CountUp('stock-data', oldSData, newSData, 0, 2.5, options);
    if (!demoS.error) {
      demoS.start();
    } else {
      console.error(demoS.error);
    } 
}

//   出版社排行
var pressNum = 0;
var timerNum = null;

var presstimerFn = function(monthIndex){

    clearTimeout(timerNum);

    // 先灌数据
    $('.aside-left .bottom .con li').each(function(){
        var cur = $(this).index();
        var pressTxt = $(this).find('.short').text(pressRanking[Month[monthIndex]][cur]["pressName"]);
        var hotTxt = $(this).find('.hot').text(pressRanking[Month[monthIndex]][cur]["hotVal"]);
        
    });
    var rankbUl = $('.aside-left .bottom ul');
    var rankbLen = rankbUl.children().length;
    timerNum = setInterval(function(){
        
        var curLi = rankbUl.children().eq(pressNum);
        curLi.children('.book-rank').addClass('pressRotate');
        curLi.siblings().children('.book-rank').removeClass('pressRotate');
        pressNum++;

        if(pressNum > rankbLen){
          pressNum = 0;
          clearTimeout(timerNum);
        }
      },1000);
}
presstimerFn(0);

// 销售码洋排行

var html = '';

var stockRankFn = function(monthIndex){
    var len = saleStockR[Month[monthIndex]].length;
    $('.aside-right .area-rank ul').html('');
    html = '';
    for(var i = 0; i < len; i++){
        var pro = saleStockR[Month[monthIndex]][i]["name"];
        var val = saleStockR[Month[monthIndex]][i]["value"];

        html += '<li>' + 
                    '<span class="num">' + (i+1) + '</span>' +     
                    '<span class="city-name">' + pro + '</span>' +
                    '<span class="bar">' +
                        '<b class="bar-in" style="width: ' + (val / 12) + '%"></b>' +
                    '</span>' +
                    '<span class="rank-value">' +(i+1)+'' + '</span>' +
                '</li>'

    }
    $('.aside-right .area-rank ul').html(html)
}  

stockRankFn(0);

//   // 饼图
try {
  var pie1 = echarts.init(document.getElementById('pie1'),'macarons');
  var pie2 = echarts.init(document.getElementById('pie2'),'macarons');

  if (!pie1 || !pie2) {
    throw new Error('饼图初始化失败');
  }
} catch (error) {
  console.error('饼图初始化错误:', error);
}

var pieRich = {
    big: {
        fontSize: 24,
        lineHeight: 40,
        fontFamily: 'Rubik'
    },
    small: {
        fontSize: 16
    },

}
var pieOption1 = {
  legend: {
      x: 'left',
      data:[],
      top: '68%',
      left: 'center',
      itemWidth: 15,
      itemHeight: 8,
      textStyle: {
          color: 'rgb(244, 239, 238) '
      }
  },
  series: [
      {
          name:'销售占比',
          type:'pie',
          radius: ['55%', '65%'],
          hoverOffset: 5,
          center: ['50%','35%'],
          avoidLabelOverlap: false,
          color: ['rgb(182, 244, 13)', 'rgb(82, 244, 13)', 'rgb(10, 164, 36)', 'rgb(13, 244, 109)', 'rgb(10, 118, 50)','rgb(24, 82, 46)'],
          label: {
              normal: {
                  show: false,
                  position: 'center'
              }
              ,
              emphasis: {
                  show: true,  
                  color: 'rgb(250, 245, 244)',                
                  formatter: function(params, ticket, callback) {
                    // console.log
                      return '{big|' + params.value + '}{small|%}\n{small|' + params.name + '}';
                  },
                  // '{a|这段文本采用样式a}'
                  rich: pieRich
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[]
      }
  ]
};
var pieOption2 = {
  legend: {
      x: 'left',
      data:[],
      top: '68%',
      left: 'center',
      itemWidth: 15,
      itemHeight: 8,
      textStyle: {
          color: '#fff'
      }
  },
  series: [
      {
          name:'库存占比',
          type:'pie',
          radius: ['55%', '65%'],
          hoverOffset: 5,
          avoidLabelOverlap: false,
          color: ['rgb(244, 209, 13)', 'rgb(182, 191, 18)', 'rgb(196, 137, 9)', 'rgb(184, 145, 27)b', 'rgb(113, 91, 9)','rgb(242, 113, 70)'],
          center: ['50%','35%'],
          label: {
              normal: {
                  show: false,
                  position: 'center'
              }
              ,
              emphasis: {
                  show: true,  
                  color: '#fff',                
                  formatter: function(params, ticket, callback) {

                      return '{big|' + params.value + '}{small|%}\n{small|' + params.name + '}';
                  },
                  // '{a|这段文本采用样式a}'
                  rich: pieRich
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[]
      }
  ]
};
pie1.currentIndex = -1;
pie1.setOption(pieOption1);
setInterval(function () {
    var dataLen = pieOption1.series[0].data.length;
    // 取消之前高亮的图形
    pie1.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: pie1.currentIndex
    });
    pie1.currentIndex = (pie1.currentIndex + 1) % dataLen;
    // 高亮当前图形
    pie1.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: pie1.currentIndex
    });
}, 1000);
pie2.currentIndex = -1;
pie2.setOption(pieOption2);
setInterval(function () {
    var dataLen = pieOption2.series[0].data.length;
    // 取消之前高亮的图形
    pie2.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: pie2.currentIndex
    });
    pie2.currentIndex = (pie2.currentIndex + 1) % dataLen;
    // 高亮当前图形
    pie2.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: pie2.currentIndex
    });
}, 1000);

var pieDataFn = function(monthIndex){
    var curD1 = saleBL[Month[monthIndex]];
    var curD2 = stockBL[Month[monthIndex]];
    var len = curD1.length;

    for(var i=0; i< len; i++ ){
      pieOption1["legend"]["data"].push(curD1[i]["name"]);
      pieOption2["legend"]["data"].push(curD2[i]["name"]);   
    }
    pieOption1.series[0].data = curD1;
    pieOption2.series[0].data = curD2;
    pie1.setOption(pieOption1);
    pie2.setOption(pieOption2);
}
pieDataFn(0);
function setVal() {
  clearTimeout(timer);
  
  // 创建一个包含所有省份索引的数组，用于确保每个省份都能被随机到
  var allProvinceIndices = [];
  for (var i = 0; i < mapData["Jan"].length; i++) {
    allProvinceIndices.push(i);
  }
  // 打乱数组顺序，实现随机但不重复
  shuffleArray(allProvinceIndices);
  // 当前展示的省份在打乱后数组中的位置
  var currentProvinceIndexPosition = 0;

  timer = setInterval(function() {
    // 如果用户正在悬停某个省份，则不进行随机切换
    if (userHovering) {
      return;
    }
    
    if (mapChart.currentIndex == -1 && monthIndex == 0) {
        
      option.series[0].data = mapData[Month[0]];


      mapChart.setOption(option);
      pieDataFn(monthIndex);

      presstimerFn(monthIndex);
      stockRankFn(monthIndex);

      if(startN == 0){
          booktimerFn(bNum);
      }
      startN++;
    }

    var dataLen = mapData["Jan"].length;
    // 取消之前高亮的图形
    mapChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: mapChart.currentIndex
    });
    
    // 使用打乱后的数组来选择下一个省份，确保所有省份都有机会被高亮
    mapChart.currentIndex = allProvinceIndices[currentProvinceIndexPosition];
    currentProvinceIndexPosition = (currentProvinceIndexPosition + 1) % allProvinceIndices.length;
    
    // 记录当前被系统高亮的省份索引
    var currentSystemHighlightIndex = mapChart.currentIndex;
    
    // 高亮当前图形（使用蓝色）
    var tempData = JSON.parse(JSON.stringify(mapData["Jan"][currentSystemHighlightIndex]));
    if (!tempData.itemStyle) {
      tempData.itemStyle = {};
    }
    if (!tempData.itemStyle.emphasis) {
      tempData.itemStyle.emphasis = {};
    }
    tempData.itemStyle.emphasis.areaColor = "rgb(30, 144, 255)";
    
    // 临时修改数据，并应用高亮
    mapData["Jan"][currentSystemHighlightIndex] = tempData;
    mapChart.setOption({
      series: [{
        data: mapData["Jan"]
      }]
    });
    mapChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentSystemHighlightIndex
    });
    
    // 为随机高亮的省份显示tooltip弹窗
    mapChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentSystemHighlightIndex
    });
    
    // 还原数据，这样鼠标悬停时仍然是深橙色
    setTimeout(function() {
      mapData["Jan"][currentSystemHighlightIndex].itemStyle.emphasis.areaColor = "rgb(244, 71, 13)";
    }, 100);
    
    // 移除自动隐藏tooltip的定时器
    clearTimeout(window.tooltipHideTimer);
    // 注释掉或删除以前的tooltip定时隐藏代码
    /*
    window.tooltipHideTimer = setTimeout(function() {
      // 只有在用户不悬停的情况下才隐藏tooltip
      if (!userHovering) {
        mapChart.dispatchAction({
          type: 'hideTip'
        });
      }
    }, 1500); // tooltip显示1.5秒
    */

    if (mapChart.currentIndex === hasData[monthIndex]) {
        mapChart.currentIndex = -1;
        monthIndex++;
        
        if(monthIndex > 11){
            monthIndex = monthIndex%12;
        }

        option.series[0].data = mapData[Month[monthIndex]];
      
        mapChart.setOption(option);

        // transition过渡动画
        bNum++;
        overWrapEle.addClass('go');
        // debugger
        if(bNum > 12){
            bNum = 1;
            overWrapEle.css('top',0);
            overWrapEle.removeClass('go');

            for(var i = 0; i < ranktUl.length; i++){
        
                ranktUl.eq(i).children().removeClass('active');                
                ranktUl.eq(i).children().eq(0).addClass('active');

            }
        }
       
        if(bNum == 1){
            overWrapEle.removeClass('top'+ 12);
        }else{
            overWrapEle.removeClass('top'+ (bNum -1 ));        
        }
        overWrapEle.addClass('top'+ bNum); 
        ListenTr(bNum);        
        pieDataFn(monthIndex);

        presstimerFn(monthIndex);
        stockRankFn(monthIndex);
        numGoFn(monthIndex);
        
    }
    
  }, 3000); // 将时间从2000毫秒改为3000毫秒，增加1秒
}

var chinaEchartsObj = echarts.getMap('china');
var geoJSONChina = chinaEchartsObj.geoJson;
var allDefProvince = geoJSONChina.features;

for(var i = 0, len = allDefProvince.length; i < len; i++){
   var sglProvinceProperties = allDefProvince[i].properties;
   var sglProvinceName = sglProvinceProperties.name;
   switch(sglProvinceName){
        case '湖北省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;
        case '湖南省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '江西省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '甘肃省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '新疆维吾尔自治区':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '上海市':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '江苏省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '云南省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '广东省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '浙江省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '河北省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '山东省':            
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '河南省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '四川省':
            sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;        
        case '内蒙古自治区':
 sglProvinceProperties.cp[0] = 128.642464;
			sglProvinceProperties.cp[1] = 34.756967;
            break;
    }
}

// 随机打乱数组的辅助函数
function shuffleArray(array) {
    // 确保输入是数组且不为空
    if (!Array.isArray(array) || array.length === 0) {
        return array;
    }
    
    // 只获取有效的省份数据（有name属性的）
    var validProvinces = array.filter(function(item) {
        return item && item.name;
    });
    
    if (validProvinces.length === 0) {
        return array;
    }

    var currentIndex = validProvinces.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = validProvinces[currentIndex];
        validProvinces[currentIndex] = validProvinces[randomIndex];
        validProvinces[randomIndex] = temporaryValue;
    }

    // 确保至少选中一个省份
    if (validProvinces.length > 0) {
        validProvinces[0].selected = true;
    }

    return validProvinces;
}

// 在地图数据初始化时使用
var option = {
    // ... 其他配置 ...
    series: [{
        type: 'map',
        map: 'china',
        data: shuffleArray(itemStyleD),
        // ... 其他系列配置 ...
    }]
};

var isRandomMode = false; // 添加随机模式标志

function setRandomProvince() {
    isRandomMode = true;
    // ... existing code ...
}

// 在随机结束时重置标志
function stopRandom() {
    isRandomMode = false;
    // ... existing code ...
}


