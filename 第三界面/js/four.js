
$(function () {
  var hasIndex, index;
  hasIndex = window.location.href.split("?").length > 1;
  index = hasIndex ? window.location.href.split("?")[1].split("=")[1] : 0;


  var data = [
    // 第一本书（已修复similarBook结构）
    {
    BookInformation: {
      bookName: "齐民要术",
      author: "贾思勰",
      era: "北魏",
      press: "北魏",
      year: "六世纪中叶",
      Binding: "卷轴本",
      folio: "十卷九十二篇",
      ISBN: "1",
      imgUrl: "img/齐民要术.png",
      authorIntro: "北魏高阳太守，三任郡守期间考察黄河中下游农耕技术，历时十载著成此书。",
      bookLabel: ['农政', '耕作技术', '北魏农学'],
      themaWords: ['耕田法', '作物轮作', '酿造工艺'],
      contentSummary: '圣人忧民，以勤为本；神农制耒，尧舜教农；禹治水田，重农务本。仓实知礼，衣足知耻；力勤胜贫，谨慎避祸。惰者饥寒，勤者温饱。明君贵谷贱金，食为政本。',
      catalogues: ['序', '耕田第一', '收种第二', '种谷第三', '栽桑第四']
    },
    similarBook: [
      { 
        bookName: "氾胜之书",
        author: "氾胜之",
        press: "西汉司农寺",
        year: "公元前一世纪",
        ISBN: "6",
        imgUrl: "img/氾胜之书.png"
      },
      {
        bookName: "四民月令",
        author: "崔寔",
        press: "东汉太学府",
        year: "二世纪中叶",
        ISBN: "5",
        imgUrl: "img/四民月令.png"
      },
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "王祯农书",
        author: "王祯",
        press: "元代司农司",
        year: "皇庆二年",
        ISBN: "7",
        imgUrl: "img/王祯农书.png"
      },
      {
        bookName: "农桑辑要",
        author: "司农司",
        press: "元代官刻本",
        year: "至元十年",
        ISBN: "13",
        imgUrl: "img/农桑辑要.png"
      }
    ],
    PurchaseRe: [{ libraryName: "敦煌藏经洞", address: "甘肃敦煌莫高窟第17窟" }],
    borrowRe: [],
      comment: [{ userName: "耕作制度", con: "详载春耕秋收、轮作换茬之法，强调因地制宜、顺时播种" },
        { userName: "作物栽培", con: "记述粟、麦、稻、豆、麻等数十种农作物的品种、种植方法与病虫防治" },
        { userName: "园艺果蔬", con: "载有百余种蔬菜、果木的培育方法，如种瓜艺豆、嫁接梨枣，体现古代园艺技术之成熟" },
        { userName: "养殖畜牧", con: "介绍牛、马、猪、羊、鸡等饲养管理" },
        { userName: "贮藏加工", con: "论粮食储藏、防潮防虫之术" },
      { userName: "农家生活与经验总结", con: "多援引乡村经验，兼载医药、节令、蚕桑等内容，务实接地气" }
    ]
  },

  // 2. 吕氏春秋·上农四篇（战国）
  {
    BookInformation: {
      bookName: "吕氏春秋·上农四篇",
      author: "吕不韦",
      era: "战国",
      press: "秦国相府刊行",
      year: "公元前239年",
      Binding: "竹简本",
      folio: "四篇",
      ISBN: "2",
      imgUrl: "img/吕氏春秋.png",
      authorIntro: "秦国丞相，组织门客编纂综合著作，含重农抑商政策论述",
      bookLabel: ['农本思想', '月令体系', '战国农政'],
      themaWords: ['上农理论', '耕战政策', '土宜辨正'],
      contentSummary: '上农任地辨土审时四篇确立以农为本国策',
      catalogues: ['上农篇·重农政策', '任地篇·土地利用', '辨土篇·土壤改良', '审时篇·农时把握']
    },
    similarBook: [
      {
        bookName: "礼记·月令",
        author: "戴圣",
        press: "西汉太常寺",
        year: "公元前一世纪",
        ISBN: "17",
        imgUrl: "img/礼记月令.png"
      },
      {
        bookName: "夏小正",
        author: "佚名",
        press: "西周王室",
        year: "约公元前十世纪",
        ISBN: "10",
        imgUrl: "img/夏小正.png"
      },
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "陈旉农书",
        author: "陈旉",
        press: "南宋临安书铺",
        year: "绍兴十九年",
        ISBN: "12",
        imgUrl: "img/陈旉农书.png"
      },
      {
        bookName: "知本提纲·农则",
        author: "杨屾",
        press: "清代关中书院",
        year: "乾隆十二年",
        ISBN: "24",
        imgUrl: "img/知本提纲农则.png"
      }
    ],
    PurchaseRe: [],
    borrowRe: [{ libraryName: "云梦秦简库", address: "湖北云梦睡虎地" }],
    comment: [{ userName: "农政", con: "农政为立国之根基" },
      { userName: "农时节令", con: "“因天时而作务”，谓“四时失序，五谷不成”" },
      { userName: "农具农艺", con:"“神农作耒耜以利天下” "},
      { userName: "农业与社会", con: "仓廪实而知礼节，衣食足而知荣辱" },
      { userName: "贤农尚勤", con: "“惰者不食”“四体不勤，五谷不分，孰为夫子？”" },
    ]
  },

  // 3. 农政全书（明代）
  {
    BookInformation: {
      bookName: "农政全书",
      author: "徐光启",
      era: "明代",
      press: "明代司农监",
      year: "崇祯年间",
      Binding: "线装本",
      folio: "六十卷",
      ISBN: "3",
      imgUrl: "img/农政全书.png",
      authorIntro: "明代科学家，官至礼部尚书，融合中西农业科技，倡导水利与荒政改革。",
      bookLabel: ["农政", "水利工程", "明代农学"],
      themaWords: ["农本论", "田制规划", "农器图谱"],
      contentSummary: "涵盖农本、田制、水利、荒政等十二门类，收录古代农学精华与明代农业创新。",
      catalogues: ["农本卷", "田制卷", "水利卷", "荒政卷"]
    },
    similarBook: [
      {
        bookName: "王祯农书",
        author: "王祯",
        press: "元代司农司",
        year: "皇庆二年",
        ISBN: "7",
        imgUrl: "img/王祯农书.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "天工开物",
        author: "宋应星",
        press: "明代书林堂",
        year: "崇祯十年",
        ISBN: "14",
        imgUrl: "img/天工开物.png"
      },
      {
        bookName: "群芳谱及广群芳谱",
        author: "王象晋/汪灏",
        press: "明代文林阁/清代武英殿",
        year: "1621年/1708年",
        ISBN: "8",
        imgUrl: "img/群芳谱.png"
      },
      {
        bookName: "农桑辑要",
        author: "司农司",
        press: "元代官刻本",
        year: "至元十年",
        ISBN: "13",
        imgUrl: "img/农桑辑要.png"
      }
    ],
    PurchaseRe: [{ libraryName: "天一阁", address: "浙江宁波" }],
    borrowRe: [],
    comment: [{ userName: "农政思想", con: "“农为政首”“本本之业”" },
      { userName: "农时与气候", con: "天时不顺需辅以人力弥补" },
      { userName: "农艺与作物", con: "涵盖五谷（稻、麦、黍、豆、麻）、经济作物（棉花、甘蔗等），包括播种、育苗、田间管理、收获储藏等全流程" },
      { userName: "水利与农具", con: "主张“因地制宜”，提出合理轮作与地力恢复方案，详列肥料种类（人畜粪、草木灰、绿肥等）及其施用方法" },
      { userName: "农政社会", con: "以农立国，安农则安天下" }
    ]
  },

  // 4. 授时通考（清代）
  {
    BookInformation: {
      bookName: "授时通考",
      author: "鄂尔泰",
      era: "清代",
      press: "清代武英殿",
      year: "乾隆七年",
      Binding: "殿版精装本",
      folio: "七十八卷",
      ISBN: "4",
      imgUrl: "img/授时通考.png",
      authorIntro: "清代名臣，主持编纂官修农书，整合历代农学与天文历法成果。",
      bookLabel: ["官修农书", "历法农时", "清代农政"],
      themaWords: ["节气耕作", "授时历", "农事占验"],
      contentSummary: "汇通天文历法与农事经验，系统梳理清代农耕技术与节气规范。",
      catalogues: ["天时卷", "土宜卷", "谷种卷", "功作卷"]
    },
    similarBook: [
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "月令七十二候集解",
        author: "吴澄",
        press: "元代钦天监",
        year: "至治元年",
        ISBN: "9",
        imgUrl: "img/月令七十二候集解.png"
      },
      {
        bookName: "农桑衣食撮要",
        author: "鲁明善",
        press: "元代畏兀儿文坊",
        year: "延祐元年",
        ISBN: "20",
        imgUrl: "img/农桑衣食撮要.png"
      },
      {
        bookName: "田家五行",
        author: "娄元礼",
        press: "元代江浙书坊",
        year: "至正年间",
        ISBN: "21",
        imgUrl: "img/田家五行.png"
      },
      {
        bookName: "农候杂占",
        author: "梁章钜",
        press: "明代福建书坊",
        year: "万历四十年",
        ISBN: "22",
        imgUrl: "img/农候杂占.png"
      }
    ],
    PurchaseRe: [{ libraryName: "文渊阁", address: "北京故宫" }],
    borrowRe: [],
    comment: [{ userName: "农时制度化", con: "将农时与精密历法相结合" },
      { userName: "授时系统", con: "设27座观测台，如大都、登封、杭州等地" },
      { userName: "历法", con: "主张“岁首应合节气”,改“旧历”以助农耕" },
      { userName: "校准经验农学", con: "统一农书时间基准" }
    ]
  },

  // 5. 四民月令（东汉）
  {
    BookInformation: {
      bookName: "四民月令",
      author: "崔寔",
      era: "东汉",
      press: "东汉太学府",
      year: "二世纪中叶",
      Binding: "帛书本",
      folio: "12卷",
      ISBN: "5",
      imgUrl: "img/四民月令.png",
      authorIntro: "东汉农学家，曾任五原太守，推广纺织与农耕技术。",
      bookLabel: ["月令体", "家庭经济", "东汉农事"],
      themaWords: ["四时安排", "田庄管理", "纺织技术"],
      contentSummary: "按月记载汉代田庄的农业生产、手工业与商业活动，反映庄园经济运作。",
      catalogues: ["正月令", "三月令", "六月令", "九月令"]
    },
    similarBook: [
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "农桑衣食撮要",
        author: "鲁明善",
        press: "元代畏兀儿文坊",
        year: "延祐元年",
        ISBN: "20",
        imgUrl: "img/农桑衣食撮要.png"
      },
      {
        bookName: "岁时广记",
        author: "陈元靓",
        press: "南宋建阳书坊",
        year: "宝祐四年",
        ISBN: "15",
        imgUrl: "img/岁时广记.png"
      },
      {
        bookName: "月令广义",
        author: "冯应京",
        press: "明代民间书坊",
        year: "万历三十年",
        ISBN: "11",
        imgUrl: "img/月令广义.png"
      },
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      }
    ],
    PurchaseRe: [{ libraryName: "居延汉简库", address: "内蒙古额济纳旗" }],
    borrowRe: [],
    comment: [
  { userName: "田庄管理", con: "详载汉代田庄的作物布局、劳力分配与收益核算，展现庄园经济运作模式" },
  { userName: "纺织技术", con: "记录养蚕缫丝、麻布织造等家庭手工业流程，反映东汉纺织技术进步" },
  { userName: "农时安排", con: "按月规划农事：正月修农具，三月种粳稻，八月收芜菁，体现精细农时管理" },
  { userName: "家庭经济", con: "兼记粜籴买卖、酿酒制酱等经营活动，呈现自给自足的经济形态" },
  { userName: "节气民俗", con: "载有社日祭祀、冬至腊祭等农事相关礼仪，体现农耕文化传统" }
]
  },

  // 6. 氾胜之书（西汉）
  {
    BookInformation: {
      bookName: "氾胜之书",
      author: "氾胜之",
      era: "西汉",
      press: "西汉司农寺",
      year: "公元前一世纪",
      Binding: "木牍本",
      folio: "18篇",
      ISBN: "6",
      imgUrl: "img/氾胜之书.png",
      authorIntro: "西汉农学家，创区田法，总结黄河流域旱作农业技术。",
      bookLabel: ["区田法", "旱作农业", "西汉农学"],
      themaWords: ["趋时耕作", "和土法", "务粪泽"],
      contentSummary: "现存最早农学专著，提出耕作三原则，详述区田法与溲种技术。",
      catalogues: ["耕田篇", "种谷篇", "区田篇", "溲种篇"]
    },
    similarBook: [
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "吕氏春秋·上农四篇",
        author: "吕不韦",
        press: "秦国相府刊行",
        year: "公元前239年",
        ISBN: "2",
        imgUrl: "img/吕氏春秋.png"
      },
      {
        bookName: "王祯农书",
        author: "王祯",
        press: "元代司农司",
        year: "皇庆二年",
        ISBN: "7",
        imgUrl: "img/王祯农书.png"
      },
      {
        bookName: "农丹",
        author: "张标",
        press: "清代民间刻本",
        year: "康熙三年",
        ISBN: "23",
        imgUrl: "img/农丹.png"
      },
      {
        bookName: "马首农言",
        author: "祁寯藻",
        press: "清代山西刻本",
        year: "道光十六年",
        ISBN: "26",
        imgUrl: "img/马首农言.png"
      }
    ],
    PurchaseRe: [{ libraryName: "武威汉墓", address: "甘肃武威" }],
    borrowRe: [],
    comment: [
  { userName: "区田法", con: "首创代田区种，深挖作沟，集中施肥，旱作保墒的典范" },
  { userName: "溲种技术", con: "以骨汁粪汁浸种，增强抗病抗旱能力，早期种子处理技术代表" },
  { userName: "耕作三原则", con: "'趋时、和土、务粪泽'理论奠定传统农学基础" },
  { userName: "麦作技术", con: "详述冬麦播种量、行距及田间管理，反映黄河中游麦作体系成熟" },
  { userName: "嫁接创新", con: "记载瓠苗嫁接增产法，开创我国园艺嫁接技术先河" }
]
  },

  // 7. 王祯农书（元代）
  {
    BookInformation: {
      bookName: "王祯农书",
      author: "王祯",
      era: "元代",
      press: "元代司农司",
      year: "皇庆二年",
      Binding: "木刻版",
      folio: "22卷",
      ISBN: "7",
      imgUrl: "img/王祯农书.png",
      authorIntro: "元代农学家，首创农器图谱，系统记录南北农具与灌溉机械。",
      bookLabel: ["农器图谱", "南北农技", "元代农学"],
      themaWords: ["水转翻车", "木棉纺车", "梯田法"],
      contentSummary: "兼论南北农业技术，以图文并茂形式收录农具百余种。",
      catalogues: ["农桑通诀", "百谷谱", "农器图谱"]
    },
    similarBook: [
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "天工开物",
        author: "宋应星",
        press: "明代书林堂",
        year: "崇祯十年",
        ISBN: "14",
        imgUrl: "img/天工开物.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "农桑辑要",
        author: "司农司",
        press: "元代官刻本",
        year: "至元十年",
        ISBN: "13",
        imgUrl: "img/农桑辑要.png"
      },
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      }
    ],
    PurchaseRe: [{ libraryName: "永乐大典残卷库", address: "中国国家图书馆" }],
    borrowRe: [],
    comment: [
  { userName: "农器革命", con: "图释水转大纺车、木棉搅车等机械，展现元代纺织器具重大革新" },
  { userName: "南北融合", con: "比较北方旱作与江南稻作技术，首倡全国性农业技术整合" },
  { userName: "梯田开发", con: "系统总结'叠石相次包土成田'的山地开发模式" },
  { userName: "灌溉体系", con: "设计水闸、连筒、架槽等水利设施，完善农田灌溉网络" },
  { userName: "木活字创新", con: "附载造活字印书法，体现农书与印刷技术的跨界融合" }
]
  },

  // 8. 群芳谱及广群芳谱（明/清）
  {
    BookInformation: {
      bookName: "群芳谱及广群芳谱",
      author: "王象晋/汪灏",
      era: "明/清",
      press: "明代文林阁/清代武英殿",
      year: "1621年/1708年",
      Binding: "明版线装/清殿版",
      folio: "30卷/100卷",
      ISBN: "8",
      imgUrl: "img/群芳谱.png",
      authorIntro: "王象晋：明代文学家；汪灏：清代学者，奉敕增补群芳谱。",
      bookLabel: ["植物学", "园艺", "明清博物"],
      themaWords: ["花卉栽培", "药用植物", "果树嫁接"],
      contentSummary: "记载植物栽培与利用方法，涵盖花卉、果树、药材等类目。",
      catalogues: ["花谱卷", "果谱卷", "药谱卷", "木谱卷"]
    },
    similarBook: [
      {
        bookName: "天工开物",
        author: "宋应星",
        press: "明代书林堂",
        year: "崇祯十年",
        ISBN: "14",
        imgUrl: "img/天工开物.png"
      },
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "月令广义",
        author: "冯应京",
        press: "明代民间书坊",
        year: "万历三十年",
        ISBN: "11",
        imgUrl: "img/月令广义.png"
      },
      {
        bookName: "农圃便览",
        author: "丁宜曾",
        press: "清代山东刻本",
        year: "乾隆二十年",
        ISBN: "25",
        imgUrl: "img/农圃便览.png"
      }
    ],
    PurchaseRe: [{ libraryName: "四库全书阁", address: "北京、杭州等地" }],
    borrowRe: [],
    comment: [
  { userName: "植物分类", con: "将花卉分为牡丹、芍药等12谱，建立园艺植物分类体系" },
  { userName: "栽培技艺", con: "详述熏花促开、曲枝造形等观赏植物培育技术" },
  { userName: "引种记录", con: "记载番薯、玉米等美洲作物在明代的引种推广过程" },
  { userName: "药用植物", con: "收录三七、曼陀罗等药材种植法，兼具医药学价值" },
  { userName: "园林美学", con: "提倡'借景、对景'等造园手法，反映明清园林艺术理念" }
]
  },

  // 9. 月令七十二候集解（元代）
  {
    BookInformation: {
      bookName: "月令七十二候集解",
      author: "吴澄",
      era: "元代",
      press: "元代钦天监",
      year: "至治元年",
      Binding: "绢本彩绘",
      folio: "24卷",
      ISBN: "9",
      imgUrl: "img/月令七十二候集解.png",
      authorIntro: "元代理学家，精研历法，重构月令体系以指导农事。",
      bookLabel: ["节气历法", "物候学", "元代农时"],
      themaWords: ["七十二候", "阴阳五行", "农事占候"],
      contentSummary: "系统解释节气与物候对应关系，结合阴阳学说指导农耕时序。",
      catalogues: ["立春解", "惊蛰解", "芒种解", "霜降解"]
    },
    similarBook: [
      {
        bookName: "礼记·月令",
        author: "戴圣",
        press: "西汉太常寺",
        year: "公元前一世纪",
        ISBN: "17",
        imgUrl: "img/礼记月令.png"
      },
      {
        bookName: "夏小正",
        author: "佚名",
        press: "西周王室",
        year: "约公元前十世纪",
        ISBN: "10",
        imgUrl: "img/夏小正.png"
      },
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "农候杂占",
        author: "梁章钜",
        press: "明代福建书坊",
        year: "万历四十年",
        ISBN: "22",
        imgUrl: "img/农候杂占.png"
      }
    ],
    PurchaseRe: [{ libraryName: "元代天文台遗址", address: "河南登封" }],
    borrowRe: [],
    comment: [
  { userName: "物候体系", con: "将每节气分为三候，形成全年72候的精细物候观测系统" },
  { userName: "农事占验", con: "'冬至晴年必旱，重阳无雨一冬晴'等农谚的科学性总结" },
  { userName: "天文对应", con: "结合二十八宿运行规律，建立星象与农时的关联体系" },
  { userName: "阴阳调和", con: "阐释'春生夏长秋收冬藏'的阴阳消长规律对农耕时序的影响" },
  { userName: "民俗整合", con: "系统整理立春鞭土牛、清明插柳等节气民俗的农业内涵" }
]
  },

  // 10. 夏小正（先秦）
  {
    BookInformation: {
      bookName: "夏小正",
      author: "佚名",
      era: "先秦",
      press: "西周王室",
      year: "约公元前十世纪",
      Binding: "甲骨文/青铜器铭文",
      folio: "1卷",
      ISBN: "10",
      imgUrl: "img/夏小正.png",
      authorIntro: "传为夏代历法遗存，经孔子整理收录于大戴礼记。",
      bookLabel: ["物候历", "先秦历法", "夏文化"],
      themaWords: ["星象观测", "物候变化", "祭祀农事"],
      contentSummary: "中国最早物候历书，记录星象、物候与农事活动的对应关系。",
      catalogues: ["正月", "二月", "三月", "四月"]
    },
    similarBook: [
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "礼记·月令",
        author: "戴圣",
        press: "西汉太常寺",
        year: "公元前一世纪",
        ISBN: "17",
        imgUrl: "img/礼记月令.png"
      },
      {
        bookName: "吕氏春秋·上农四篇",
        author: "吕不韦",
        press: "秦国相府刊行",
        year: "公元前239年",
        ISBN: "2",
        imgUrl: "img/吕氏春秋.png"
      },
      {
        bookName: "月令广义",
        author: "冯应京",
        press: "明代民间书坊",
        year: "万历三十年",
        ISBN: "11",
        imgUrl: "img/月令广义.png"
      },
      {
        bookName: "农候杂占",
        author: "梁章钜",
        press: "明代福建书坊",
        year: "万历四十年",
        ISBN: "22",
        imgUrl: "img/农候杂占.png"
      }
    ],
    PurchaseRe: [{ libraryName: "安阳殷墟", address: "河南安阳" }],
    borrowRe: [],
    comment: [
  { userName: "星象物候", con: "'正月启蛰雁北乡'体现夏代星象与物候对应观测水平" },
  { userName: "祭祀农事", con: "'二月往耰黍墠'反映原始宗教与农业生产的紧密结合" },
  { userName: "历法雏形", con: "十月太阳历遗存，每月36日的特殊纪日法研究" },
  { userName: "畜牧记载", con: "'四月执驹攻特'包含早期马匹驯养技术记录" },
  { userName: "文化密码", con: "'五月煮梅为豆实'揭示先民食物加工与储藏智慧" }
]
  },

// 11.月令广义（明代）
{
    BookInformation: {
      bookName: "月令广义",
      author: "冯应京",
      era: "明代",
      press: "明代民间书坊",
      year: "万历三十年",
      Binding: "木刻线装",
      folio: "二十五卷",
      ISBN: "11",
      imgUrl: "img/月令广义.png",
      authorIntro: "明代学者，融合月令传统与地方民俗，重构农事指导体系。",
      bookLabel: ["节气民俗", "地方农事", "明代月令"],
      themaWords: ["迎春仪式", "占岁习俗", "田家杂占"],
      contentSummary: "整合节气规范与地方农俗，详述立春鞭牛等耕作启动仪式。",
      catalogues: ["春令卷", "夏令卷", "秋令卷", "冬令卷"]
    },
    similarBook: [
      {
        bookName: "岁时广记",
        author: "陈元靓",
        press: "南宋建阳书坊",
        year: "宝祐四年",
        ISBN: "15",
        imgUrl: "img/岁时广记.png"
      },
      {
        bookName: "四民月令",
        author: "崔寔",
        press: "东汉太学府",
        year: "二世纪中叶",
        ISBN: "5",
        imgUrl: "img/四民月令.png"
      },
      {
        bookName: "夏小正",
        author: "佚名",
        press: "西周王室",
        year: "约公元前十世纪",
        ISBN: "10",
        imgUrl: "img/夏小正.png"
      },
      {
        bookName: "农桑衣食撮要",
        author: "鲁明善",
        press: "元代畏兀儿文坊",
        year: "延祐元年",
        ISBN: "20",
        imgUrl: "img/农桑衣食撮要.png"
      },
      {
        bookName: "知本提纲·农则",
        author: "杨屾",
        press: "清代关中书院",
        year: "乾隆十二年",
        ISBN: "24",
        imgUrl: "img/知本提纲农则.png"
      }
    ],
    PurchaseRe: [{ libraryName: "宁波天一阁", address: "浙江宁波" }],
    borrowRe: [],
    comment: [
  { userName: "节气民俗", con: "详细图解立春迎气、东郊鞭春等官方劝农仪典" },
  { userName: "地方农俗", con: "收录江南'浸稻种'、岭南'烧畲'等特色耕作习俗" },
  { userName: "占岁文化", con: "系统整理'元旦观风云，立春看八风'等年景预测方法" },
  { userName: "农具改良", con: "记载明代代耕架、风力水车等新式农具应用情况" },
  { userName: "饮食养生", con: "按节气推荐食疗方案，如清明饮明前茶除湿" }
]
  },

  // 12. 陈旉农书（宋代）
  {
    BookInformation: {
      bookName: "陈旉农书",
      author: "陈旉",
      era: "宋代",
      press: "南宋临安书铺",
      year: "绍兴十九年",
      Binding: "蝴蝶装",
      folio: "三卷",
      ISBN: "12",
      imgUrl: "img/陈旉农书.png",
      authorIntro: "南宋隐士，隐居扬州务农，总结南方水田耕作技术。",
      bookLabel: ["江南农事", "土壤改良", "宋代农学"],
      themaWords: ["地力常新", "耕耨之法", "六种之宜"],
      contentSummary: "首部南方农书，强调因地制宜，提出地力常新壮理论。",
      catalogues: ["天时之宜篇", "地势之宜篇", "耕耨之宜篇"]
    },
    similarBook: [
      {
        bookName: "沈氏农书",
        author: "沈氏",
        press: "明末江南书坊",
        year: "崇祯末年",
        ISBN: "18",
        imgUrl: "img/沈氏农书.png"
      },
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "农桑辑要",
        author: "司农司",
        press: "元代官刻本",
        year: "至元十年",
        ISBN: "13",
        imgUrl: "img/农桑辑要.png"
      },
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      },
      {
        bookName: "农圃便览",
        author: "丁宜曾",
        press: "清代山东刻本",
        year: "乾隆二十年",
        ISBN: "25",
        imgUrl: "img/农圃便览.png"
      }
    ],
    PurchaseRe: [{ libraryName: "临安府库残卷", address: "浙江杭州" }],
    borrowRe: [],
    comment: [
  { userName: "地力理论", con: "'地力常新壮'说突破地方渐衰论，提出施肥养地方案" },
  { userName: "耕耨之法", con: "强调'早田刈获才毕，随即耕治晒暴'的整地要诀" },
  { userName: "水稻育秧", con: "首创烤田技术，'湿种水耕，曝根拔节'培育壮秧" },
  { userName: "六种之宜", con: "根据地形高低安排作物，建立立体农业模式" },
  { userName: "牛力运用", con: "提出'农器牛力皆须及时调习'的畜力管理思想" }
]
  },

  // 13. 农桑辑要（元代）
  {
    BookInformation: {
      bookName: "农桑辑要",
      author: "司农司",
      era: "元代",
      press: "元代官刻本",
      year: "至元十年",
      Binding: "官版线装",
      folio: "七卷",
      ISBN: "13",
      imgUrl: "img/农桑辑要.png",
      authorIntro: "元代官方农书，由司农司编纂，强调农桑为立国之本。",
      bookLabel: ["官修农书", "蚕桑技术", "元代农政"],
      themaWords: ["栽桑法", "养蚕术", "棉麻种植"],
      contentSummary: "辑录历代农书精华，推广北方蚕桑与棉麻种植技术。",
      catalogues: ["典训卷", "耕垦卷", "栽桑卷", "养蚕卷"]
    },
    similarBook: [
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "王祯农书",
        author: "王祯",
        press: "元代司农司",
        year: "皇庆二年",
        ISBN: "7",
        imgUrl: "img/王祯农书.png"
      },
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "农桑衣食撮要",
        author: "鲁明善",
        press: "元代畏兀儿文坊",
        year: "延祐元年",
        ISBN: "20",
        imgUrl: "img/农桑衣食撮要.png"
      }
    ],
    PurchaseRe: [{ libraryName: "元代大都档案库", address: "北京" }],
    borrowRe: [],
    comment: [
  { userName: "政策导向", con: "元政府'重北轻南'政策下推广北方蚕桑的技术指南" },
  { userName: "纺织革新", con: "系统总结'择茧、缫丝、络纬、织造'全套工艺标准" },
  { userName: "棉业先驱", con: "最早官方记载木棉栽培技术的农书，推动元代棉纺革命" },
  { userName: "救荒作物", con: "大力推广蔓菁、苜蓿等耐旱作物的种植技术" },
  { userName: "编译特色", con: "畏兀儿文与汉文对照版本促进多民族农业交流" }
]
  },

  // 14. 天工开物（明代）
  {
    BookInformation: {
      bookName: "天工开物",
      author: "宋应星",
      era: "明代",
      press: "明代书林堂",
      year: "崇祯十年",
      Binding: "竹纸刻本",
      folio: "十八卷",
      ISBN: "14",
      imgUrl: "img/天工开物.png",
      authorIntro: "明代科学家，记录手工业与农业技术，被誉为技术的百科全书。",
      bookLabel: ["手工业", "农业技术", "明代科技"],
      themaWords: ["乃粒篇", "粹精篇", "陶埏篇"],
      contentSummary: "涵盖农业、手工业各领域，详细记载作物栽培、纺织、冶炼等技术。",
      catalogues: ["乃粒卷", "乃服卷", "彰施卷", "陶埏卷"]
    },
    similarBook: [
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "王祯农书",
        author: "王祯",
        press: "元代司农司",
        year: "皇庆二年",
        ISBN: "7",
        imgUrl: "img/王祯农书.png"
      },
      {
        bookName: "群芳谱及广群芳谱",
        author: "王象晋/汪灏",
        press: "明代文林阁/清代武英殿",
        year: "1621年/1708年",
        ISBN: "8",
        imgUrl: "img/群芳谱.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "农桑辑要",
        author: "司农司",
        press: "元代官刻本",
        year: "至元十年",
        ISBN: "13",
        imgUrl: "img/农桑辑要.png"
      }
    ],
    PurchaseRe: [{ libraryName: "涂本初刻本", address: "江西奉新" }],
    borrowRe: [],
    comment: [
  { userName: "农业革命", con: "'乃粒'篇详述水稻杂交、麦类移栽等突破性技术" },
  { userName: "纺织图谱", con: "图释花机、腰机等复杂织机结构，保留明代纺织机械细节" },
  { userName: "冶炼技术", con: "记载灌钢法、锌冶炼等冶金工艺的世界领先成就" },
  { userName: "陶瓷工艺", con: "从采土到烧窑完整记录景德镇制瓷技术体系" },
  { userName: "海舟制造", con: "详述福船水密隔舱设计与抗沉性能技术关键" }
]
  },

  // 15. 岁时广记（宋代）
  {
    BookInformation: {
      bookName: "岁时广记",
      author: "陈元靓",
      era: "宋代",
      press: "南宋建阳书坊",
      year: "宝祐四年",
      Binding: "册页本",
      folio: "四十二卷",
      ISBN: "15",
      imgUrl: "img/岁时广记.png",
      authorIntro: "宋代民俗学家，广泛采集民间岁时节令资料。",
      bookLabel: ["节气民俗", "宋代节庆", "农事占候"],
      themaWords: ["立春鞭牛", "社日祭神", "冬至数九"],
      contentSummary: "辑录宋代节气习俗与农事占验，反映民间时间观与农业信仰。",
      catalogues: ["元旦卷", "立春卷", "社日卷", "冬至卷"]
    },
    similarBook: [
      {
        bookName: "月令广义",
        author: "冯应京",
        press: "明代民间书坊",
        year: "万历三十年",
        ISBN: "11",
        imgUrl: "img/月令广义.png"
      },
      {
        bookName: "四民月令",
        author: "崔寔",
        press: "东汉太学府",
        year: "二世纪中叶",
        ISBN: "5",
        imgUrl: "img/四民月令.png"
      },
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "农候杂占",
        author: "梁章钜",
        press: "明代福建书坊",
        year: "万历四十年",
        ISBN: "22",
        imgUrl: "img/农候杂占.png"
      },
      {
        bookName: "田家五行",
        author: "娄元礼",
        press: "元代江浙书坊",
        year: "至正年间",
        ISBN: "21",
        imgUrl: "img/田家五行.png"
      }
    ],
    PurchaseRe: [{ libraryName: "宋代闽刻本", address: "福建建阳" }],
    borrowRe: [],
    comment: [
  { userName: "节气溯源", con: "考证寒食禁火、端午竞渡等习俗的农业起源" },
  { userName: "占验体系", con: "系统整理'春甲子雨，赤地千里'等天气预测经验" },
  { userName: "饮食文化", con: "记录冬至馄饨、腊八粥等节气饮食的养生智慧" },
  { userName: "农具演进", con: "图解宋代踏犁、秧马等新式农具使用场景" },
  { userName: "市井百业", con: "载有立春卖春牛图、清明卖稠饧等农业相关商业活动" }
]
  },

  // 16. 淮南子·时则训（西汉）
  {
    BookInformation: {
      bookName: "淮南子·时则训",
      author: "刘安",
      era: "西汉",
      press: "西汉淮南王府",
      year: "公元前二世纪",
      Binding: "帛书卷轴",
      folio: "一篇",
      ISBN: "16",
      imgUrl: "img/淮南子时则训.png",
      authorIntro: "淮南王刘安主持编纂，融合道家思想与月令体系。",
      bookLabel: ["月令体系", "西汉哲学", "农时政令"],
      themaWords: ["五行配时", "天文历法", "刑德理论"],
      contentSummary: "以阴阳五行学说阐释农时规范，构建天人相应的耕作时序。",
      catalogues: ["孟春纪", "仲夏纪", "季秋纪", "孟冬纪"]
    },
    similarBook: [
      {
        bookName: "吕氏春秋·上农四篇",
        author: "吕不韦",
        press: "秦国相府刊行",
        year: "公元前239年",
        ISBN: "2",
        imgUrl: "img/吕氏春秋.png"
      },
      {
        bookName: "礼记·月令",
        author: "戴圣",
        press: "西汉太常寺",
        year: "公元前一世纪",
        ISBN: "17",
        imgUrl: "img/礼记月令.png"
      },
      {
        bookName: "夏小正",
        author: "佚名",
        press: "西周王室",
        year: "约公元前十世纪",
        ISBN: "10",
        imgUrl: "img/夏小正.png"
      },
      {
        bookName: "月令七十二候集解",
        author: "吴澄",
        press: "元代钦天监",
        year: "至治元年",
        ISBN: "9",
        imgUrl: "img/月令七十二候集解.png"
      },
      {
        bookName: "知本提纲·农则",
        author: "杨屾",
        press: "清代关中书院",
        year: "乾隆十二年",
        ISBN: "24",
        imgUrl: "img/知本提纲农则.png"
      }
    ],
    PurchaseRe: [{ libraryName: "马王堆汉墓帛书库", address: "湖南长沙" }],
    borrowRe: [],
    comment: [
  { userName: "宇宙观", con: "'五位六合'空间体系与农耕时序的哲学对应" },
  { userName: "政令时序", con: "规定孟春'禁伐木'、季夏'令渔师伐蛟'等生态法令" },
  { userName: "阴阳配位", con: "东方春木、南方夏火等方位与农事活动的对应关系" },
  { userName: "灾害预防", con: "'仲冬行秋令则天时雨汁，瓜瓠不成'的灾异理论" },
  { userName: "技术伦理", con: "'不涸泽而渔'体现可持续发展思想萌芽" }
]
  },

  // 17. 礼记·月令（西汉）
  {
    BookInformation: {
      bookName: "礼记·月令",
      author: "戴圣",
      era: "西汉",
      press: "西汉太常寺",
      year: "公元前一世纪",
      Binding: "简牍本",
      folio: "一篇",
      ISBN: "17",
      imgUrl: "img/礼记月令.png",
      authorIntro: "戴圣编订礼记，整合先秦礼仪文献，确立月令经典地位。",
      bookLabel: ["经典月令", "礼制农时", "西汉经学"],
      themaWords: ["天子迎春", "土牛劝耕", "禁忌月令"],
      contentSummary: "规范天子与百姓的农事活动，将农耕纳入礼制框架。",
      catalogues: ["孟春之月", "仲夏之月", "季秋之月", "孟冬之月"]
    },
    similarBook: [
      {
        bookName: "夏小正",
        author: "佚名",
        press: "西周王室",
        year: "约公元前十世纪",
        ISBN: "10",
        imgUrl: "img/夏小正.png"
      },
      {
        bookName: "吕氏春秋·上农四篇",
        author: "吕不韦",
        press: "秦国相府刊行",
        year: "公元前239年",
        ISBN: "2",
        imgUrl: "img/吕氏春秋.png"
      },
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "月令七十二候集解",
        author: "吴澄",
        press: "元代钦天监",
        year: "至治元年",
        ISBN: "9",
        imgUrl: "img/月令七十二候集解.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      }
    ],
    PurchaseRe: [{ libraryName: "武威汉简库", address: "甘肃武威" }],
    borrowRe: [],
    comment: [
  { userName: "礼制规范", con: "天子'躬耕帝籍'的仪式程序与象征意义" },
  { userName: "政令时序", con: "仲春'安萌芽，养幼少，存诸孤'的社会救济制度" },
  { userName: "生态禁忌", con: "季春'毋竭川泽，毋漉陂池'的资源保护法令" },
  { userName: "建筑规制", con: "孟秋'完堤防，谨壅塞'的水利工程时间表" },
  { userName: "军事农事", con: "立秋'天子乃帅三公九卿巡狩'的武装护农制度" }
]
  },

  // 18. 沈氏农书（明代）
  {
    BookInformation: {
      bookName: "沈氏农书",
      author: "沈氏",
      era: "明代",
      press: "明末江南书坊",
      year: "崇祯末年",
      Binding: "稿本",
      folio: "一卷",
      ISBN: "18",
      imgUrl: "img/沈氏农书.png",
      authorIntro: "明末湖州沈氏，总结江南地区水稻种植与桑蚕技术。",
      bookLabel: ["江南农技", "水稻种植", "明代蚕桑"],
      themaWords: ["看苗施肥", "桑园管理", "织造工艺"],
      contentSummary: "详述江南水田耕作细节，提出精细化田间管理方法。",
      catalogues: ["运田地法", "蚕务卷", "家常日用"]
    },
    similarBook: [
      {
        bookName: "陈旉农书",
        author: "陈旉",
        press: "南宋临安书铺",
        year: "绍兴十九年",
        ISBN: "12",
        imgUrl: "img/陈旉农书.png"
      },
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      },
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      },
      {
        bookName: "农圃便览",
        author: "丁宜曾",
        press: "清代山东刻本",
        year: "乾隆二十年",
        ISBN: "25",
        imgUrl: "img/农圃便览.png"
      },
      {
        bookName: "马首农言",
        author: "祁寯藻",
        press: "清代山西刻本",
        year: "道光十六年",
        ISBN: "26",
        imgUrl: "img/马首农言.png"
      }
    ],
    PurchaseRe: [{ libraryName: "湖州民间藏书", address: "浙江湖州" }],
    borrowRe: [],
    comment: [
  { userName: "精耕细作", con: "提出'宁可少而精密，不可多而草率'的集约经营理念" },
  { userName: "看苗施肥", con: "根据叶色深浅判断水稻需肥量的经验法则" },
  { userName: "成本核算", con: "详细计算长工饮食、农具损耗等生产成本" },
  { userName: "桑基鱼塘", con: "记载湖州'塘基种桑，塘中养鱼'的生态农业模式" },
  { userName: "纺织副业", con: "从栽桑到缫丝的全流程管理，提高家庭副业收益" }
]
  },

  // 19. 三农纪（清代）
  {
    BookInformation: {
      bookName: "三农纪",
      author: "张宗法",
      era: "清代",
      press: "清代四川刻本",
      year: "乾隆二十五年",
      Binding: "木刻本",
      folio: "二十四卷",
      ISBN: "19",
      imgUrl: "img/三农纪.png",
      authorIntro: "清代四川农学家，结合巴蜀地理特点编写综合性农书。",
      bookLabel: ["山区农业", "巴蜀农技", "清代农学"],
      themaWords: ["梯田开垦", "山地灌溉", "杂粮轮作"],
      contentSummary: "针对西南山区农业特点，系统记载旱作、水利与畜牧技术。",
      catalogues: ["天时卷", "地利卷", "耕获卷", "畜牧卷"]
    },
    similarBook: [
      {
        bookName: "农圃便览",
        author: "丁宜曾",
        press: "清代山东刻本",
        year: "乾隆二十年",
        ISBN: "25",
        imgUrl: "img/农圃便览.png"
      },
      {
        bookName: "四民月令",
        author: "崔寔",
        press: "东汉太学府",
        year: "二世纪中叶",
        ISBN: "5",
        imgUrl: "img/四民月令.png"
      },
      {
        bookName: "陈旉农书",
        author: "陈旉",
        press: "南宋临安书铺",
        year: "绍兴十九年",
        ISBN: "12",
        imgUrl: "img/陈旉农书.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "马首农言",
        author: "祁寯藻",
        press: "清代山西刻本",
        year: "道光十六年",
        ISBN: "26",
        imgUrl: "img/马首农言.png"
      }
    ],
    PurchaseRe: [{ libraryName: "四川民间藏书楼", address: "四川成都" }],
    borrowRe: [],
    comment: [
  { userName: "山地开发", con: "'层蹬作梯，包石成田'的梯田修筑技术规范" },
  { userName: "杂粮种植", con: "详述荞麦、燕麦等耐寒作物在川陕山区的栽培要诀" },
  { userName: "林粮间作", con: "推广桐粮间作'三年桐子五年桐，桐下种粟两不误'" },
  { userName: "水利创新", con: "竹笕分水、连筒过山等山区灌溉技术集锦" },
  { userName: "灾害防御", con: "总结防雹、驱兽等山区特殊灾害应对措施" }
]
  },

  // 20. 农桑衣食撮要（元代）
  {
    BookInformation: {
      bookName: "农桑衣食撮要",
      author: "鲁明善",
      era: "元代",
      press: "元代畏兀儿文坊",
      year: "延祐元年",
      Binding: "册页本",
      folio: "二卷",
      ISBN: "20",
      imgUrl: "img/农桑衣食撮要.png",
      authorIntro: "元代畏兀儿农学家，任寿春郡监时编撰月令体农书。",
      bookLabel: ["月令体", "民族农学", "元代技术"],
      themaWords: ["按月农事", "果蔬贮藏", "家庭副业"],
      contentSummary: "按月编排农事活动，涵盖耕作、蚕桑、食品加工等实用技术。",
      catalogues: ["正月事宜", "四月事宜", "七月事宜", "十月事宜"]
    },
    similarBook: [
      {
        bookName: "四民月令",
        author: "崔寔",
        press: "东汉太学府",
        year: "二世纪中叶",
        ISBN: "5",
        imgUrl: "img/四民月令.png"
      },
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "岁时广记",
        author: "陈元靓",
        press: "南宋建阳书坊",
        year: "宝祐四年",
        ISBN: "15",
        imgUrl: "img/岁时广记.png"
      },
      {
        bookName: "月令广义",
        author: "冯应京",
        press: "明代民间书坊",
        year: "万历三十年",
        ISBN: "11",
        imgUrl: "img/月令广义.png"
      },
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      }
    ],
    PurchaseRe: [{ libraryName: "西域文献库", address: "新疆吐鲁番" }],
    borrowRe: [],
    comment: [
  { userName: "月令体系", con: "按月编排'正月种芋，二月种茄'等农事操作指南" },
  { userName: "食品加工", con: "详录造酪、作酱、腌菜等家庭食品贮藏技术" },
  { userName: "家庭副业", con: "传授养蜂取蜜、种药制药等增收技艺" },
  { userName: "节气养生", con: "按季节推荐'四月饮菊苗粥，六月制紫苏饮'等食疗方" },
  { userName: "多民族智慧", con: "融合畏兀儿等少数民族的农业经验" }
]
  },

{
    BookInformation: {
      bookName: "田家五行",
      author: "娄元礼",
      era: "元代",
      press: "元代江浙书坊",
      year: "至正年间",
      Binding: "木刻本",
      folio: "三卷",
      ISBN: "21",
      imgUrl: "img/田家五行.png",
      authorIntro: "元代气象学家，长期观测太湖流域天气与农事关系。",
      bookLabel: ["气象农谚", "占候术", "元代江南"],
      themaWords: ["看云识雨", "观星测晴", "动物兆候"],
      contentSummary: "收录五百余条农谚，系统总结天气预测与农事占验经验。",
      catalogues: ["天文类", "地理类", "草木类", "鸟兽类"]
    },
    similarBook: [
      {
        bookName: "农候杂占",
        author: "梁章钜",
        press: "明代福建书坊",
        year: "万历四十年",
        ISBN: "22",
        imgUrl: "img/农候杂占.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "夏小正",
        author: "佚名",
        press: "西周王室",
        year: "约公元前十世纪",
        ISBN: "10",
        imgUrl: "img/夏小正.png"
      },
      {
        bookName: "月令七十二候集解",
        author: "吴澄",
        press: "元代钦天监",
        year: "至治元年",
        ISBN: "9",
        imgUrl: "img/月令七十二候集解.png"
      },
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      }
    ],
    PurchaseRe: [{ libraryName: "太湖民间藏书", address: "江苏苏州" }],
    borrowRe: [],
    comment: [
  { userName: "气象观测", con: "'云行东，车马通；云行西，雨凄凄'等数百条观天经验" },
  { userName: "物候预测", con: "'鸦浴风，鹊浴雨'等动物行为与天气的关联研究" },
  { userName: "农谚体系", con: "系统整理'稻秀雨浇，麦秀风摇'等作物管理谚语" },
  { userName: "灾害预警", con: "'虹挂东，有雨一场空'等特殊天象解读" },
  { userName: "地方知识", con: "专记太湖流域'夏至西南风，必定收稻翁'等地域性经验" }
]
  },

  // 22. 农候杂占（明代）
  {
    BookInformation: {
      bookName: "农候杂占",
      author: "梁章钜",
      era: "明代",
      press: "明代福建书坊",
      year: "万历四十年",
      Binding: "线装本",
      folio: "四卷",
      ISBN: "22",
      imgUrl: "img/农候杂占.png",
      authorIntro: "明代农学家，专研农事占候，结合地方经验编撰此书。",
      bookLabel: ["占候术", "农事预测", "明代农谚"],
      themaWords: ["立春占验", "梅雨预测", "霜期推算"],
      contentSummary: "系统分析节气与农事关系，提出基于物候的耕作时序理论。",
      catalogues: ["卷一·天部", "卷二·地部", "卷三·人部", "卷四·物部"]
    },
    similarBook: [
      {
        bookName: "田家五行",
        author: "娄元礼",
        press: "元代江浙书坊",
        year: "至正年间",
        ISBN: "21",
        imgUrl: "img/田家五行.png"
      },
      {
        bookName: "授时通考",
        author: "鄂尔泰",
        press: "清代武英殿",
        year: "乾隆七年",
        ISBN: "4",
        imgUrl: "img/授时通考.png"
      },
      {
        bookName: "月令广义",
        author: "冯应京",
        press: "明代民间书坊",
        year: "万历三十年",
        ISBN: "11",
        imgUrl: "img/月令广义.png"
      },
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "农丹",
        author: "张标",
        press: "清代民间刻本",
        year: "康熙三年",
        ISBN: "23",
        imgUrl: "img/农丹.png"
      }
    ],
    PurchaseRe: [{ libraryName: "福建土楼藏书", address: "福建龙岩" }],
    borrowRe: [],
    comment: [
  { userName: "节气预测", con: "立春'西北风主歉收，东南风主丰稔'的长期预报" },
  { userName: "云图识别", con: "分类'钩云、鱼鳞云、炮车云'等二十余种云形" },
  { userName: "物候序列", con: "建立'桐始华-田鼠化鴽-虹始见'的物候演进链条" },
  { userName: "农事禁忌", con: "'雷打惊蛰前，高山好种田'等特殊气候应对策略" },
  { userName: "占卜科学化", con: "剔除迷信成分，强化观测实证的天气预测体系" }
]
  },

  // 23. 农丹（清代）
  {
    BookInformation: {
      bookName: "农丹",
      author: "张标",
      era: "清代",
      press: "清代民间刻本",
      year: "康熙三年",
      Binding: "稿本",
      folio: "六卷",
      ISBN: "23",
      imgUrl: "img/农丹.png",
      authorIntro: "清代农学家，提出地气说，倡导春耕与地温的精准配合。",
      bookLabel: ["地气理论", "春耕技术", "清代农学"],
      themaWords: ["立春验土", "地气升降", "耕层深浅"],
      contentSummary: "融合传统农学与地学知识，构建以地温为核心的耕作体系。",
      catalogues: ["地气卷", "春耕卷", "施肥卷", "灌溉卷"]
    },
    similarBook: [
      {
        bookName: "农圃便览",
        author: "丁宜曾",
        press: "清代山东刻本",
        year: "乾隆二十年",
        ISBN: "25",
        imgUrl: "img/农圃便览.png"
      },
      {
        bookName: "氾胜之书",
        author: "氾胜之",
        press: "西汉司农寺",
        year: "公元前一世纪",
        ISBN: "6",
        imgUrl: "img/氾胜之书.png"
      },
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "知本提纲·农则",
        author: "杨屾",
        press: "清代关中书院",
        year: "乾隆十二年",
        ISBN: "24",
        imgUrl: "img/知本提纲农则.png"
      },
      {
        bookName: "农政全书",
        author: "徐光启",
        press: "明代司农监",
        year: "崇祯年间",
        ISBN: "3",
        imgUrl: "img/农政全书.png"
      }
    ],
    PurchaseRe: [{ libraryName: "清代民间手稿", address: "河北保定" }],
    borrowRe: [],
    comment: [
  { userName: "地气学说", con: "'地气通乎天时'，建立土壤温度与耕作时机关联理论" },
  { userName: "春耕技术", con: "立春后'土膏脉动'时深耕曝晒的整地方法" },
  { userName: "施肥体系", con: "提出'寒热相济，骨革相配'的肥料搭配原则" },
  { userName: "灌溉时序", con: "按地温确定'春灌午前，冬灌向晚'的浇水法则" },
  { userName: "农学哲学", con: "将'阴阳燮理'思想应用于田间管理实践" }
]
  },

  // 24. 知本提纲·农则（清代）
  {
    BookInformation: {
      bookName: "知本提纲·农则",
      author: "杨屾",
      era: "清代",
      press: "清代关中书院",
      year: "乾隆十二年",
      Binding: "书院刻本",
      folio: "五卷",
      ISBN: "24",
      imgUrl: "img/知本提纲农则.png",
      authorIntro: "清代关中学者，将理学思想融入农学研究，强调知本务农。",
      bookLabel: ["理学农学", "关中农技", "清代哲学"],
      themaWords: ["打春仪式", "耕读传家", "天地人三才"],
      contentSummary: "以理学框架阐释农耕原理，记载关中地区立春耕作仪式。",
      catalogues: ["农则卷", "天则卷", "地则卷", "人则卷"]
    },
    similarBook: [
      {
        bookName: "郡县农政",
        author: "包世臣",
        press: "清代安吴四种本",
        year: "嘉庆五年",
        ISBN: "978-7-古代-0028",
        imgUrl: "img/郡县农政.png"
      },
      {
        bookName: "吕氏春秋·上农四篇",
        author: "吕不韦",
        press: "秦国相府刊行",
        year: "公元前239年",
        ISBN: "2",
        imgUrl: "img/吕氏春秋.png"
      },
      {
        bookName: "淮南子·时则训",
        author: "刘安",
        press: "西汉淮南王府",
        year: "公元前二世纪",
        ISBN: "16",
        imgUrl: "img/淮南子时则训.png"
      },
      {
        bookName: "农丹",
        author: "张标",
        press: "清代民间刻本",
        year: "康熙三年",
        ISBN: "23",
        imgUrl: "img/农丹.png"
      },
      {
        bookName: "马首农言",
        author: "祁寯藻",
        press: "清代山西刻本",
        year: "道光十六年",
        ISBN: "26",
        imgUrl: "img/马首农言.png"
      }
    ],
    PurchaseRe: [{ libraryName: "关中书院文库", address: "陕西西安" }],
    borrowRe: [],
    comment: [
  { userName: "农政哲学", con: "'天功人其代之'的天人合一农学思想体系" },
  { userName: "耕作仪式", con: "图解关中'打春牛、祭先农'等立春劝农仪典" },
  { userName: "生态伦理", con: "'五谷不宜连种，三田必须轮休'的可持续耕作观" },
  { userName: "技术规范", con: "规定'耕深三寸，耙必四遍'的精细作业标准" },
  { userName: "教育理念", con: "主张'村塾课农书，田畯授稼法'的农技普及体系" }
]
  },

  // 25. 农圃便览（清代）
  {
    BookInformation: {
      bookName: "农圃便览",
      author: "丁宜曾",
      era: "清代",
      press: "清代山东刻本",
      year: "乾隆二十年",
      Binding: "线装本",
      folio: "八卷",
      ISBN: "25",
      imgUrl: "img/农圃便览.png",
      authorIntro: "山东农学家，结合鲁中地理特点编写实用性农书。",
      bookLabel: ["山东农技", "土壤分类", "清代月令"],
      themaWords: ["沙地耕作", "黏土改良", "农具选用"],
      contentSummary: "针对山东不同土质提出耕作建议，强调立春后因地制宜。",
      catalogues: ["土宜卷", "谷类卷", "蔬果卷", "杂植卷"]
    },
    similarBook: [
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      },
      {
        bookName: "陈旉农书",
        author: "陈旉",
        press: "南宋临安书铺",
        year: "绍兴十九年",
        ISBN: "12",
        imgUrl: "img/陈旉农书.png"
      },
      {
        bookName: "氾胜之书",
        author: "氾胜之",
        press: "西汉司农寺",
        year: "公元前一世纪",
        ISBN: "6",
        imgUrl: "img/氾胜之书.png"
      },
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "农丹",
        author: "张标",
        press: "清代民间刻本",
        year: "康熙三年",
        ISBN: "23",
        imgUrl: "img/农丹.png"
      }
    ],
    PurchaseRe: [{ libraryName: "山东民间藏书", address: "山东潍坊" }],
    borrowRe: [],
    comment: [
  { userName: "土壤分类", con: "将鲁中土壤分为沙、淤、碱等八类并制定改良方案" },
  { userName: "轮作体系", con: "设计'谷-豆-麻-菜'四年轮作防地方衰退" },
  { userName: "沙地农业", con: "总结'沙地宜花生，碱地宜苜蓿'的适地种植原则" },
  { userName: "农具选配", con: "针对不同土质推荐'沙地用漏锄，淤地用板锨'" },
  { userName: "节气农谚", con: "辑录'立春三日，百草排芽'等山东地方农谚" }
]
  },

  // 26. 马首农言（清代）
  {
    BookInformation: {
      bookName: "马首农言",
      author: "祁寯藻",
      era: "清代",
      press: "清代山西刻本",
      year: "道光十六年",
      Binding: "木刻本",
      folio: "四卷",
      ISBN: "26",
      imgUrl: "img/马首农言.png",
      authorIntro: "清代山西巡抚，主持编写反映晋中农业的地方农书。",
      bookLabel: ["山西农技", "烧荒法", "清代农政"],
      themaWords: ["立春烧荒", "谷豆轮作", "农谚辑录"],
      contentSummary: "记载晋中旱作农业技术，详述立春烧荒整地与传统农谚。",
      catalogues: ["地势卷", "种植卷", "农谚卷", "畜牧卷"]
    },
    similarBook: [
      {
        bookName: "三农纪",
        author: "张宗法",
        press: "清代四川刻本",
        year: "乾隆二十五年",
        ISBN: "19",
        imgUrl: "img/三农纪.png"
      },
      {
        bookName: "氾胜之书",
        author: "氾胜之",
        press: "西汉司农寺",
        year: "公元前一世纪",
        ISBN: "6",
        imgUrl: "img/氾胜之书.png"
      },
      {
        bookName: "齐民要术",
        author: "贾思勰",
        press: "北魏",
        year: "六世纪中叶",
        ISBN: "1",
        imgUrl: "img/齐民要术.png"
      },
      {
        bookName: "知本提纲·农则",
        author: "杨屾",
        press: "清代关中书院",
        year: "乾隆十二年",
        ISBN: "24",
        imgUrl: "img/知本提纲农则.png"
      },
      {
        bookName: "农圃便览",
        author: "丁宜曾",
        press: "清代山东刻本",
        year: "乾隆二十年",
        ISBN: "25",
        imgUrl: "img/农圃便览.png"
      }
    ],
    PurchaseRe: [{ libraryName: "晋商藏书楼", address: "山西平遥" }],
    borrowRe: [],
    comment: [
  { userName: "烧荒技术", con: "'立春烧荒，惊蛰耙地'的晋中旱作整地体系" },
  { userName: "杂粮种植", con: "详述莜麦、荞麦等耐寒作物栽培管理要点" },
  { userName: "畜牧经验", con: "总结'春放阳坡夏放梁，秋放山洼冬放沟'放牧规律" },
  { userName: "农谚集成", con: "'谷雨前后，安瓜点豆'等晋中农谚系统性整理" },
  { userName: "灾害应对", con: "防霜'薰烟法'、抗旱'积雪法'等地方智慧结晶" }
]
  }
  ];
  //同类书籍
  var renderSimilarBook = function(index) {
    var smailarLen = data[index].similarBook.length;
    var html = "";
    var imgUrl;

    for (let i = 0; i < smailarLen; i++) {
      imgUrl = data[index].similarBook[i].imgUrl;
      imgUrl = imgUrl === './fourImg/20000.jpg' ? './fourImg/404.svg' : imgUrl;

      html +=
        "<li>" +
        '<img class="fl" src="' +
        imgUrl +
        '" alt="">' +
        '<dl class="fl">' +
        "<dt>" +
        data[index].similarBook[i].bookName +
        "</dt>" +
        "<dd>" +
        "<p>作者: " +
        data[index].similarBook[i].author +
        "</p>" +
        "<p>出版社: " +
        data[index].similarBook[i].press +
        "</p>" +
        "<p>出版年: " +
        data[index].similarBook[i].year +
        "</p>" +
        "<p>ISBN: " +
        data[index].similarBook[i].ISBN +
        "</p>" +
        "</dd>" +
        "</dl>" +
        "</li>";
    }
    $(".aside-left ul").html(html);
  };

  // 书的信息
  var renderBookInfo = function(index) {
    var html =
      '<img class="fl" src="' +
      data[index].BookInformation.imgUrl +
      '" alt="">' +
      '<dl class="fl">' +
      "<dt>" +
      data[index].BookInformation.bookName +
      "</dt>" +
      "<dd>" +
      "<p>作者: " +
      data[index].BookInformation.author +
      "</p>" +
      "<p>出版社: " +
      data[index].BookInformation.press +
      "</p>" +
      "<p>出版年: " +
      data[index].BookInformation.year +
      "</p>" +
      "<p>定价: " +
      data[index].BookInformation.price +
      "元</p>" +
      "<p>装帧: " +
      data[index].BookInformation.Binding +
      "</p>" +
      "<p>开本: " +
      data[index].BookInformation.folio +
      "开</p>" +
      "<p>ISBN: " +
      data[index].BookInformation.ISBN +
      "</p>" +
      "</dd>" +
      "</dl>";

    $(".middle_con .middle_top .con_left").html(html);
  };

  //图书标签
  var renderBookLabel = function(index) {
    var html = "";

    var bookLabelLen = data[index].BookInformation.bookLabel.length;

    for (let i = 0; i < bookLabelLen; i++) {
      html += " <li>" + data[index].BookInformation.bookLabel[i] + "</li>";
    }

    $(".middle_con .middle_top .con_right .bookLabel").html(html);
  };

  //主题推荐
  var renderBookSubject = function(index) {
    var themLen = data[index].BookInformation.themaWords.length;
    var html = "";

    for (let i = 0; i < themLen; i++) {
      html += "<li>" + data[index].BookInformation.themaWords[i] + "</li>";
    }

    $(".middle_con .middle_top .con_right .themaWords").html(html);
  };

  // 内容提要
  var renderContentSummary = function(index) {
    $(".middle_con .middle_top .con_link .link_con").text(
      data[index].BookInformation.contentSummary
    );
  };

  //本书目录、作者
  var renderBookCatalog = function(index) {
    var len, html;
    len = data[index].BookInformation.catalogues.length;
    html = "";

    for (let i = 0; i < len; i++) {
      html += " <li>" + data[index].BookInformation.catalogues[i] + "</li>";
    }
    $(".middle_con .middle_top .con_link .link_ul").html(html);
    /* 本书作者 */
    $(".middle_con .middle_top .con_link .link_author").html(
      data[index].BookInformation.authorIntro
    );
  };

  // 购买推荐
  var renderRecommend = function(index) {
    var len, html;
    len = data[index].PurchaseRe.length;
    html = "";

    for (let i = 0; i < len; i++) {
      html +=
        '<dl class="clearfix">' +
        "<dt >" +
        '<span class="number">' +
        (i + 1) +
        ":" +
        "</span>" +
        '<span class="title">' +
        data[index].PurchaseRe[i].libraryName +
        "</span>" +
        "</dt>" +
        "<dd>地址: " +
        data[index].PurchaseRe[i].address +
        "</dd>" +
        "</dl>";
    }
    $(".middle_button .button_left .button_con .purchase").html(html);
  };

  //借阅推荐
  var renderBorrowRecommend = function(index) {
    var len, html;
    len = data[index].borrowRe.length;
    html = "";

    for (let i = 0; i < len; i++) {
      html +=
        '<dl class="clearfix">' +
        "<dt >" +
        '<span class="number">' +
        (i + 1) +
        ":" +
        "</span>" +
        '<span class="title">' +
        data[index].borrowRe[i].libraryName +
        "</span>" +
        "</dt>" +
        "<dd>地址: " +
        data[index].borrowRe[i].address +
        "</dd>" +
        "</dl>";
    }
    $(".middle_button .button_right .button_con .jieyue").html(html);
  };

  // 图书评论
  var renderBookComment = function(index) {
    var len, html;
    len = data[index].comment.length;
    html = "";

    for (let i = 0; i < len; i++) {
      html +=
        '<dl class="clearfix">' +
        '<dt class="clearfix">' +
        '<div class="fl user">' +
        "<p>" +
        data[index].comment[i].userName +
        "</p>" +
        '<p class="time">' +
        data[index].comment[i].time +
        "</p>" +
        "</div>" +
        '<div class="fr comment">' +
        '<span class="comment_one iconfont icon-pinglun">' +
        data[index].comment[i].bad +
        "</span>" +
        '<span class="iconfont icon-xin">' +
        data[index].comment[i].good +
        "</span>" +
        "</div>" +
        "</dt>" +
        '<dd class="clearfix">' +
        data[index].comment[i].con +
        "</dd>" +
        "</dl>";
    }
    $(".aside-right .aside_con").html(html);
  };

  /* 渲染页面 */
  var renderBookDetail = function(index) {
    renderSimilarBook(index);
    renderBookInfo(index);
    renderBookLabel(index);
    renderBookSubject(index);
    renderContentSummary(index);
    renderBookCatalog(index);
    renderRecommend(index);
    renderBorrowRecommend(index);
    renderBookComment(index);
  };
  renderBookDetail(index);
  var showSimilarBookInfo = function() {
    var similarBook = $(".aside-left>ul");

    similarBook.on("click", 'li', function(el) {
      var curItem = $(el.currentTarget);
      var bookName = curItem.find('dt').text().trim();
      var hasBook = false;
      var index = 0;

      for(var i = 0; i < data.length; i++) {
        if (data[i]["BookInformation"]["bookName"] === bookName) {
          index = i;
          hasBook = true;
          break;
        }
      }

      if (hasBook) renderBookDetail(index);

    });
  };

  showSimilarBookInfo();

  // 畅销书排行榜获取高度
  var rankH = $(".con li:nth-child(2) .book-rank").height();
  var rankShowH = 3.5 * rankH;
  var overHiddenH = rankH * 5 + rankShowH;
  $(".book-show").css("height", rankShowH + "px");
  var curBookRank = $(".aside-left li.active .book-rank");
  curBookRank.css("height", rankH + "px");

  //   获取行高
  var topSpan = $(".aside-left .top .book-rank span");
  var topSpanH = topSpan.height();
  topSpan.css("line-height", topSpanH + "px");

  var bottomSpan = $(".aside-left .bottom .book-rank span");
  var bottomSpanH = bottomSpan.height();
  bottomSpan.css("line-height", bottomSpanH + "px");

  //   获取各地区销售码洋排行高度
  var areaRankBox = $(".aside-right .area-rank .con");
  var areaRankH = areaRankBox.height();
  var areaRankLiH = Math.round(areaRankH / 3);
  areaRankBox.find("li").css("height", areaRankLiH + "px");
  var areaUl = areaRankBox.children("ul");

  var areaUlH = areaUl.height();
  // 定时动画效果
  // 销售码洋排行
  var num = 0;
  setInterval(function() {
    num++;
    num > 4 ? (num = 0) : num;
    areaUl.css("top", -(num * areaRankH) + "px");
  }, 2000);
  //   同类图书
  function fanzhuan(parent, children, num, time, state) {
    clearInterval(parent.timer);

    var pressNum = -1;

    var rankbUl = $(parent);
    var rankbLen = rankbUl.children().length;
    parent.timer = setInterval(function() {
      pressNum++;

      if (pressNum >= num) {
        if (!state) {
          $(children).hide();
        }
      }
      if (pressNum > rankbLen) {
        pressNum = -1;
        if (!state) {
          $(children).show();
        }
      }
      // console.log(pressNum)
      var curLi = rankbUl.children().eq(pressNum);
      // console.log(curLi);
      if (state) {
        curLi.addClass("pressRotate");
        curLi.siblings().removeClass("pressRotate");
      }
    }, time);
  }
  fanzhuan(".aside-left  ul", ".aside-left  li:lt(5)", 5, 1500, true);
  fanzhuan(
    ".aside-right .con_top .aside_con",
    ".aside-right .con_top .aside_con dl:lt(3)",
    2,
    1000
  );
  // fanzhuan('.aside-right .con_button .aside_con', '.aside-right .con_button .aside_con dl:lt(3)', 2,800)

  // 推荐
  function translate($dom, $childrenFirst) {
    var $uList = $($dom);
    var timer = null;
    //触摸清空定时器
    $uList
      .hover(
        function() {
          clearInterval(timer);
        },
        function() {
          //离开启动定时器
          timer = setInterval(function() {
            scrollList($uList);
          }, 1000);
        }
      )
      .trigger("mouseleave"); //自动触发触摸事件

    //滚动动画
    function scrollList(obj) {
      //获得当前<li>的高度
      var scrollHeight = $($childrenFirst).height();
      //滚动出一个<li>的高度
      $uList.stop().animate(
        {
          marginTop: -scrollHeight
        },
        600,
        function() {
          //动画结束后，将当前<ul>marginTop置为初始值0状态，再将第一个<li>拼接到末尾。
          $uList
            .css({
              marginTop: 0
            })
            .find("dl:first")
            .appendTo($uList);
        }
      );
    }
  }

  translate(
    ".button_left .button_con .container",
    ".button_left .button_con .container dl:first"
  );
  translate(
    ".button_right .button_con .container",
    ".button_right .button_con .container dl:first"
  );
  //   畅销书排行
  var ranktUl = $(".aside-left .top ul");
  var bookLiLen = ranktUl.children().length;

  var bookNum = 0;

  var timer01 = setInterval(function() {
    bookNum++;
    // debugger
    if (bookNum % 5 == 0) {
      $(".aside-left .top li:lt(" + bookNum + ")").hide();
    }

    if (bookNum == bookLiLen) {
      bookNum = 0;
      ranktUl.children().show();
    }

    ranktUl.children().removeClass("active");
    ranktUl
      .children()
      .eq(bookNum)
      .addClass("active");

    ranktUl.find(".book-show").hide();
    ranktUl
      .children()
      .eq(bookNum)
      .children(".book-show")
      .show();
  }, 2000);
});
