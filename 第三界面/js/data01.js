 /** 
 * [畅销书排行数据]
 * @param {[string]} bookName [书名]
 * @param {[string]} pressName [出版社名]
 * @param {[string]} bookName [书名]
 * @param {[string]} pressName [出版社名]
 * @param {[string]} bookName [书名]
 * @param {[string]} pressName [出版社名]
*/
var bestSelling = {
  "Jan": [
    {
      bookName: "齐民要术",    
      pressName: "北魏",   
      author: "贾思勰",    
      ISBN: "1",      
      pressDate: "六世纪中叶 ",   
      pricing: "0.00",    
      imageUrl: "img/齐民要术.png",     
      index: 0   
    },
    {
      bookName: "吕氏春秋·上农四篇",   
      pressName: "秦国相府刊行",  
      author: "吕不韦",      
      ISBN: "2",       
      pressDate: "公元前239年 ",   
      pricing: "0.00",    
      imageUrl: "img/吕氏春秋.png",
      index: 1    
    },
    {
      bookName: "农政全书",  
      pressName: "明代司农监", 
      author: "徐光启", 
      ISBN: "3",  
      pressDate: "崇祯年间 ",  
      pricing: "0.00", 
      imageUrl: "img/农政全书.png", 
      index: 2
    },
    
    
  ],
  
  "Feb": [
    
    {
      bookName: "群芳谱及广群芳谱",    
      pressName: "明代文林阁/清代武英殿",
      author: "王象晋/汪灏",       
      ISBN: "8",        
      pressDate: "1621年/1708年 ",
      pricing: "0.00",     
      imageUrl: "img/群芳谱.png",
      index: 0 
    },
    {
      bookName: "夏小正",    
      pressName: "西周王室",
      author: "佚名",       
      ISBN: "10",        
      pressDate: "约公元前十世纪 ",
      pricing: "0.00",     
      imageUrl: "img/夏小正.png",
      index: 1 
    }   ,
    {
      bookName: "授时通考",
      pressName: "清代武英殿",
      author: "鄂尔泰",
      ISBN: "4",
      pressDate: "乾隆七年 ",
      pricing: "0.00",
      imageUrl: "img/授时通考.png",
      index: 2
    }
  ],
  "Mar": [
      {
      bookName: "氾胜之书",    
      pressName: "西汉司农寺",
      author: "氾胜之",       
      ISBN: "6",
      pressDate: "公元前一世纪 ",
      pricing: "0.00",     
      imageUrl: "img/氾胜之书.png",
      index: 0
    },
    {
      bookName: "王祯农书",    
      pressName: "元代司农司",
      author: "王祯",       
      ISBN: "7",        
      pressDate: "皇庆二年 ",
      pricing: "0.00",     
      imageUrl: "img/王祯农书.png",
      index: 1   
    },
      {
      bookName: "四民月令",
      pressName: "东汉太学府",
      author: "崔寔",
      ISBN: "5",
      pressDate: "二世纪中叶 ",
      pricing: "0.00",
      imageUrl: "img/四民月令.png",
      index: 2 
    },
    
  ],
  "Apr": [
    {
      bookName: "陈旉农书",
      pressName: "南宋临安书铺",
      author: "陈旉",
      ISBN: "12",
      pressDate: "绍兴十九年",
      pricing: "0.00",
      imageUrl: "img/陈旉农书.png",
      index: 0
    },
    {
      bookName: "淮南子·时则训",
      pressName: "西汉淮南王府",
      author: "刘安",
      ISBN: "16",
      pressDate: "公元前二世纪",
      pricing: "0.00",
      imageUrl: "img/淮南子时则训.png",
      index: 1
    },
    {
      bookName: "三农纪",
      pressName: "清代四川省刻本",
      author: "张宗法",
      ISBN: "19",
      pressDate: "乾隆二十五年",
      pricing: "0.00",
      imageUrl: "img/三农纪.png",
      index: 2
    }
  ],

  "May": [
    {
      bookName: "农桑衣食撮要",
      pressName: "元代司农司",
      author: "鲁明善",
      ISBN: "20",
      pressDate: "延祐元年",
      pricing: "0.00",
      imageUrl: "img/农桑衣食撮要.png",
      index: 0
    },
    {
      bookName: "田家五行",
      pressName: "元代民间刻本",
      author: "娄元礼",
      ISBN: "21",
      pressDate: "至正年间",
      pricing: "0.00",
      imageUrl: "img/田家五行.png",
      index: 1
    },
    {
      bookName: "农候杂占",
      pressName: "明代书坊刻本",
      author: "梁章钜",
      ISBN: "22",
      pressDate: "嘉靖年间",
      pricing: "0.00",
      imageUrl: "img/农候杂占.png",
      index: 2
    }
  ],
    /*
  "Jun": [
    {
      bookName: "农丹",
      pressName: "清代农学刻本",
      author: "张标",
      ISBN: "23",
      pressDate: "康熙年间",
      pricing: "0.00",
      imageUrl: "img/农丹.png",
      index: 0
    },
    {
      bookName: "知本提纲·农则",
      pressName: "清代书院刻本",
      author: "杨屾",
      ISBN: "24",
      pressDate: "乾隆初年",
      pricing: "0.00",
      imageUrl: "img/知本提纲农则.png",
      index: 1
    },
    {
      bookName: "礼记·月令",
      pressName: "西汉太常寺",
      author: "戴圣",
      ISBN: "17",
      pressDate: "公元前一世纪",
      pricing: "0.00",
      imageUrl: "img/礼记月令.png",
      index: 2
    }
  ],

  "Jul": [
    {
      bookName: "岁时广记",
      pressName: "南宋建阳书坊",
      author: "陈元靓",
      ISBN: "15",
      pressDate: "宝祐四年",
      pricing: "0.00",
      imageUrl: "img/岁时广记.png",
      index: 0
    },
    {
      bookName: "天工开物",
      pressName: "明代书林堂",
      author: "宋应星",
      ISBN: "14",
      pressDate: "崇祯十年",
      pricing: "0.00",
      imageUrl: "img/天工开物.png",
      index: 1
    },
    {
      bookName: "沈氏农书",
      pressName: "明末江南书坊",
      author: "沈氏",
      ISBN: "18",
      pressDate: "崇祯末年",
      pricing: "0.00",
      imageUrl: "img/沈氏农书.png",
      index: 2
    }
  ],

  "Aug": [
    {
      bookName: "夏小正",
      pressName: "西周王室",
      author: "佚名",
      ISBN: "10",
      pressDate: "约公元前十世纪",
      pricing: "0.00",
      imageUrl: "img/夏小正.png",
      index: 0
    },
    {
      bookName: "月令广义",
      pressName: "明代民间书坊",
      author: "冯应京",
      ISBN: "11",
      pressDate: "万历三十年",
      pricing: "0.00",
      imageUrl: "img/月令广义.png",
      index: 1
    },
    {
      bookName: "群芳谱及广群芳谱",
      pressName: "明代文林阁/清代武英殿",
      author: "王象晋/汪灏",
      ISBN: "8",
      pressDate: "1621年/1708年",
      pricing: "0.00",
      imageUrl: "img/群芳谱.png",
      index: 2
    }
  ],

  "Sep": [
    {
      bookName: "氾胜之书",
      pressName: "西汉司农寺",
      author: "氾胜之",
      ISBN: "6",
      pressDate: "公元前一世纪",
      pricing: "0.00",
      imageUrl: "img/氾胜之书.png",
      index: 0
    },
    {
      bookName: "王祯农书",
      pressName: "元代司农司",
      author: "王祯",
      ISBN: "7",
      pressDate: "皇庆二年",
      pricing: "0.00",
      imageUrl: "img/王祯农书.png",
      index: 1
    },
    {
      bookName: "月令七十二候集解",
      pressName: "元代钦天监",
      author: "吴澄",
      ISBN: "9",
      pressDate: "至治元年",
      pricing: "0.00",
      imageUrl: "img/月令七十二候集解.png",
      index: 2
    }
  ],

  "Oct": [
    {
      bookName: "四民月令",
      pressName: "东汉太学府",
      author: "崔寔",
      ISBN: "5",
      pressDate: "二世纪中叶",
      pricing: "0.00",
      imageUrl: "img/四民月令.png",
      index: 0
    },
    {
      bookName: "授时通考",
      pressName: "清代武英殿",
      author: "鄂尔泰",
      ISBN: "4",
      pressDate: "乾隆七年",
      pricing: "0.00",
      imageUrl: "img/授时通考.png",
      index: 1
    },
    {
      bookName: "齐民要术",
      pressName: "北魏农书局",
      author: "贾思勰",
      ISBN: "1",
      pressDate: "六世纪中叶",
      pricing: "0.00",
      imageUrl: "img/齐民要术.png",
      index: 2
    }
  ],

  "Nov": [
    {
      bookName: "吕氏春秋·上农四篇",
      pressName: "秦国相府刊行",
      author: "吕不韦",
      ISBN: "2",
      pressDate: "公元前239年",
      pricing: "0.00",
      imageUrl: "img/吕氏春秋.png",
      index: 0
    },
    {
      bookName: "农政全书",
      pressName: "明代司农监",
      author: "徐光启",
      ISBN: "3",
      pressDate: "崇祯年间",
      pricing: "0.00",
      imageUrl: "img/农政全书.png",
      index: 1
    },
    {
      bookName: "氾胜之书",
      pressName: "西汉司农寺",
      author: "氾胜之",
      ISBN: "6",
      pressDate: "公元前一世纪",
      pricing: "0.00",
      imageUrl: "img/氾胜之书.png",
      index: 2
    }
  ],
  "Dec": [ 
    {
      bookName: "农圃便览",   
      pressName: "清代山东省刻本",   
      author: "丁宜曾",     
      ISBN: "25",        
      pressDate: "乾隆二十年 ",   
      pricing: "0.00",     
      imageUrl: "img/农圃便览.png",
      index: 0
    },
    {
      bookName: "马首农言",
      pressName: "清代山西省刻本",
      author: "祁寯藻",
      ISBN: "26",
      pressDate: "道光十六年 ",
      pricing: "0.00",
      imageUrl: "img/马首农言.png",
      index: 1
    },
    {
      bookName: "齐民要术",
      pressName: "北魏农书局",
      author: "贾思勰",
      ISBN: "1",
      pressDate: "六世纪中叶 ",
      pricing: "0.00",
      imageUrl: "img/齐民要术.png",
      index: 2
    }

  ]
  */
}
 

/** 
 * [畅销书详细数据]
 * @param {[string]} BookInformation [书的信息]
 * @param {[string]} similarBook [同类书籍]
 * @param {[string]} PurchaseRe [购买推荐]
 * @param {[string]} borrowRe [借阅推荐]
 * @param {[string]} comment [评论]
*/
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
    PurchaseRe: [
      { 
        libraryName: "耕作技术·精耕体系", 
        address: "敦煌藏经洞·黄河中游农耕技术母本库" 
      },
      { 
        libraryName: "酿造工艺·生物工程", 
        address: "北魏郡县农政档案·古代食品加工中枢" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "农学体系·技术奠基", 
        address: "六世纪黄河流域·旱作农业标准化总源" 
      },
      { 
        libraryName: "经济实证·生产镜像", 
        address: "北朝庄园经济档案·古代家庭农业管理库" 
      }
    ],
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
    
  PurchaseRe: [
      { 
        libraryName: "耕战政策·军政档案", 
        address: "云梦秦简库·先秦农政思想发源地" 
      },
      { 
        libraryName: "土宜辨正·土地规划", 
        address: "秦相府刊本·战国农耕制度总枢" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "月令体系·时序规范", 
        address: "黄老思想总库·阴阳五行农学典范" 
      },
      { 
        libraryName: "重农抑商·治国法典", 
        address: "秦国军政档案·耕战政策策源地" 
      }
    ],
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
     PurchaseRe: [
      { 
        libraryName: "水利工程·农器革命", 
        address: "宁波天一阁·明代农业科技总枢" 
      },
      { 
        libraryName: "荒政制度·防灾体系", 
        address: "司农监典籍库·古代赈灾技术集成" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "农学启蒙·中西合璧", 
        address: "徐光启手稿本·近代农学改革母本" 
      },
      { 
        libraryName: "田制规划·生态智慧", 
        address: "崇祯官刻本·江南集约农业典范" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "历法集成·节气规范", 
        address: "文渊阁殿本·国家农时标准制定库" 
      },
      { 
        libraryName: "物候观测·授时制度", 
        address: "登封天文台·古代农耕时序中枢" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "农事占验·星象体系", 
        address: "钦天监藏本·物候观测技术总源" 
      },
      { 
        libraryName: "耕作规范·国家典章", 
        address: "武英殿刊本·清代农政制度集成" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "庄园经济·田庄管理", 
        address: "居延汉简库·汉代家庭经济档案库" 
      },
      { 
        libraryName: "纺织技术·手工业", 
        address: "东汉太学府·麻纺技术发源地" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "月令体系·四时规范", 
        address: "东汉官修典籍·农耕文化总汇" 
      },
      { 
        libraryName: "节气民俗·祭祀制度", 
        address: "礼制农时总库·古代农业仪式集成" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "区田法·旱作技术", 
        address: "武威汉墓出土简牍·黄河农耕起源实证库" 
      },
      { 
        libraryName: "溲种法·种子处理", 
        address: "西汉司农寺藏本·古代生物技术先驱地" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "耕作三原则·农学奠基", 
        address: "旱作农业技术母本·北方耕作体系总源" 
      },
      { 
        libraryName: "麦作体系·抗逆栽培", 
        address: "黄河中游流域观测站·冬麦技术规范中枢" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "农器图谱·机械革命", 
        address: "永乐大典残卷库·古代农具技术总枢" 
      },
      { 
        libraryName: "梯田开发·山地治理", 
        address: "元代司农司刊本·丘陵耕作技术集成" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "南北融合·技术集成", 
        address: "全国农耕地理总汇·多元农技融合典范" 
      },
      { 
        libraryName: "水转翻车·灌溉革新", 
        address: "木刻版技术图谱·元代水利工程母本库" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "植物图谱·园艺集成", 
        address: "四库全书阁藏本·明清植物分类总库" 
      },
      { 
        libraryName: "物种引种·技术传播", 
        address: "武英殿刊本·中外农业交流档案库" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "花卉分类·造园艺术", 
        address: "文林阁刻本·观赏植物培育技术中枢" 
      },
      { 
        libraryName: "药用植物·医学融合", 
        address: "清代增补本·中医药材种植技术总源" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "物候观测·星象对应", 
        address: "登封观星台遗址·农时观测技术中心" 
      },
      { 
        libraryName: "阴阳五行·农时体系", 
        address: "钦天监孤本·节气耕作规范总库" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "农谚体系·气象预测", 
        address: "元代观测数据站·天气经验集成库" 
      },
      { 
        libraryName: "节气民俗·文化整合", 
        address: "至治元年官刻本·农耕仪式档案总汇" 
      }
    ],
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
    PurchaseRe: [
      { 
        libraryName: "星象历法·古历溯源", 
        address: "殷墟甲骨窖藏·华夏农耕文明发源地" 
      },
      { 
        libraryName: "物候体系·原始农时", 
        address: "大戴礼记注本·十月太阳历遗存实证" 
      }
    ],
    borrowRe: [
      { 
        libraryName: "祭祀农事·原始信仰", 
        address: "西周王室典籍库·早期农耕文化总源" 
      },
      { 
        libraryName: "畜牧技术·马政起源", 
        address: "青铜器铭文档案·先秦畜牧技术总库" 
      }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "节气民俗·迎春仪式", 
            address: "浙江宁波天一阁·岁时民俗文献总库" 
        },
        { 
            libraryName: "农具改良·代耕架", 
            address: "万历民间刻本·江南农具革新策源地" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "占岁文化·年景预测", 
            address: "明代地方志库·农业气象预测集成" 
        },
        { 
            libraryName: "食疗养生·节气方案", 
            address: "建阳书坊刻本·江南食疗文化中枢" 
        }
    ],
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
     PurchaseRe: [
        { 
            libraryName: "水田技术·烤田法", 
            address: "杭州临安府库·南宋耕作技术母本" 
        },
        { 
            libraryName: "地力常新·土壤理论", 
            address: "蝴蝶装稿本·可持续农业典范库" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "耕耨体系·精细管理", 
            address: "江南农学总源·集约经营技术中枢" 
        },
        { 
            libraryName: "立体农业·六种之宜", 
            address: "绍兴年间刻本·地形利用典范" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "蚕桑技术·纺织革新", 
            address: "元代大都档案库·丝绸技术策源地" 
        },
        { 
            libraryName: "木棉种植·棉纺革命", 
            address: "至元十年官本·北方棉业起源库" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "多语编译·技术传播", 
            address: "畏兀儿文坊本·民族农技交汇处" 
        },
        { 
            libraryName: "救荒体系·作物推广", 
            address: "司农监典籍·抗旱作物技术总汇" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "乃粒篇·杂交育种", 
            address: "江西奉新涂本·古代生物技术母本" 
        },
        { 
            libraryName: "花机图录·纺织革命", 
            address: "崇祯十年刊本·机械农具图谱库" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "技术母本·工业前驱", 
            address: "明代科技总汇·手工业革命前奏" 
        },
        { 
            libraryName: "海舟制造·水密隔舱", 
            address: "闽南船政档案·古代造船技术中枢" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "节气溯源·饮食文化", 
            address: "建阳书坊刻本·宋代市井文化总汇" 
        },
        { 
            libraryName: "踏犁秧马·新式农具", 
            address: "闽刻本·江南农具革新档案" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "占验体系·云图识别", 
            address: "宝祐四年官本·天气预测经验库" 
        },
        { 
            libraryName: "商业农事·节气经济", 
            address: "南宋市井档案·农业商品经济典范" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "五行配时·耕作时序", 
            address: "长沙马王堆帛书·黄老农政思想库" 
        },
        { 
            libraryName: "生态禁忌·资源保护", 
            address: "淮南王府藏本·古代可持续发展法典" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "宇宙观·天人相应", 
            address: "汉初哲学总源·农耕时空体系" 
        },
        { 
            libraryName: "灾害预防·阴阳理论", 
            address: "西汉太学典籍·农事灾异预测库" 
        }
    ],
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
     PurchaseRe: [
        { 
            libraryName: "礼制农时·政令规范", 
            address: "甘肃省武威·汉朝礼制规范总源" 
        },
        { 
            libraryName: "生态禁忌·资源保护", 
            address: "西汉太常寺典籍·古代可持续发展法典" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "月令体系·国家典章", 
            address: "汉简档案库·农耕时序制度母本" 
        },
        { 
            libraryName: "农事仪式·祭祀文化", 
            address: "皇室春耕仪轨·农耕信仰集成库" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "蚕织技术·桑基鱼塘", 
            address: "浙江湖州·明清生态农业示范基地" 
        },
        { 
            libraryName: "水田管理·看苗施肥", 
            address: "江南稿本·精细耕作技术中枢" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "成本核算·经营典范", 
            address: "明末经济档案·农业会计学先驱" 
        },
        { 
            libraryName: "集约农业·江南模式", 
            address: "长三角农技总汇·水田集约化模板" 
        }
    ],
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
     PurchaseRe: [
        { 
            libraryName: "梯田开发·山地治理", 
            address: "四川盆地·西南丘陵耕作总库" 
        },
        { 
            libraryName: "林粮间作·立体农业", 
            address: "巴蜀农技档案·生态复合种植体系" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "竹笕灌溉·水利创新", 
            address: "川陕山地·特殊地形水利技术库" 
        },
        { 
            libraryName: "杂粮体系·耐寒作物", 
            address: "青藏高原东麓·高海拔农业技术集成" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "多语农技·民族融合", 
            address: "新疆吐鲁番·丝路农业文明交汇处" 
        },
        { 
            libraryName: "家庭副业·增收技艺", 
            address: "元代坊刻本·庭院经济操作指南" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "月令体例·实用创新", 
            address: "西北边疆·农事历法传播枢纽" 
        },
        { 
            libraryName: "食品加工·贮藏技术", 
            address: "绿洲农业档案·干燥区食品保存总汇" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "气象农谚·观天体系", 
            address: "太湖流域·古代天气预测中心" 
        },
        { 
            libraryName: "占候科学·经验集成", 
            address: "江浙刻本·农业气象学实证档案" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "云图识别·预测模型", 
            address: "长三角观测站·气象大数据先驱" 
        },
        { 
            libraryName: "物候序列·演进规律", 
            address: "江南农谚总库·气候变迁研究母本" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "云形分类·预测体系", 
            address: "福建土楼·东南农谚研究总库" 
        },
        { 
            libraryName: "节气占验·灾害预警", 
            address: "闽刻本·古代农业风险管理典范" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "物候链·生态时序", 
            address: "万历观测档案·生物气候学先驱" 
        },
        { 
            libraryName: "科学占卜·经验升华", 
            address: "民间智慧总汇·气象学去迷信典范" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "地气学说·土壤哲学", 
            address: "河北保定·传统农学理论化基地" 
        },
        { 
            libraryName: "耕层管理·地温调控", 
            address: "华北平原·土壤耕作实验档案库" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "阴阳燮理·农学思辨", 
            address: "康熙稿本·传统农学哲学化标本" 
        },
        { 
            libraryName: "施肥体系·物质循环", 
            address: "北方旱作·生态农业理论先驱" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "理学农学·天地人三才", 
            address: "陕西省西安·儒学农学融合典范库" 
        },
        { 
            libraryName: "耕作仪式·生态伦理", 
            address: "关中书院藏本·可持续农业哲学总源" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "农政体系·耕读传家", 
            address: "乾隆官刻本·北方旱作技术标准库" 
        },
        { 
            libraryName: "地气学说·土壤改良", 
            address: "黄河流域观测站·传统农学实证基地" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "土壤分类·适地种植", 
            address: "山东省潍坊·北方土壤改良技术中枢" 
        },
        { 
            libraryName: "轮作防衰·地方农谚", 
            address: "鲁中平原·华北农业实践指南库" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "沙地耕作·抗逆栽培", 
            address: "黄河三角洲·耐盐作物技术总汇" 
        },
        { 
            libraryName: "农具适配·精耕细作", 
            address: "齐鲁农耕档案·工具与土质匹配典范" 
        }
    ],
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
    PurchaseRe: [
        { 
            libraryName: "旱作体系·烧荒整地", 
            address: "山西省平遥·黄土高原耕作技术母本" 
        },
        { 
            libraryName: "杂粮种植·耐寒作物", 
            address: "晋中丘陵区·山地农业技术集成库" 
        }
    ],
    borrowRe: [
        { 
            libraryName: "农谚体系·灾害应对", 
            address: "太行山观测站·传统气象预测总源" 
        },
        { 
            libraryName: "畜牧管理·山地放牧", 
            address: "晋商牧场档案·高原畜牧技术规范" 
        }
    ],
    comment: [
  { userName: "烧荒技术", con: "'立春烧荒，惊蛰耙地'的晋中旱作整地体系" },
  { userName: "杂粮种植", con: "详述莜麦、荞麦等耐寒作物栽培管理要点" },
  { userName: "畜牧经验", con: "总结'春放阳坡夏放梁，秋放山洼冬放沟'放牧规律" },
  { userName: "农谚集成", con: "'谷雨前后，安瓜点豆'等晋中农谚系统性整理" },
  { userName: "灾害应对", con: "防霜'薰烟法'、抗旱'积雪法'等地方智慧结晶" }
]
  }
  ];
/** 
 * [地图全国按月数据（2017）]
 * @param {[Array]} book [书目数据]
 * @param {[Array]} variety [品种数]
 * @param {[Array]} sales [销量]
 * @param {[Array]} stock [库存]
*/


var allMData = {
    book: ["约550本"],
    variety: ["约260种"],
    sales: ["约150种"],
    stock:  ["约50种"]
}

/** 
 * [地图按月按省数据（2017）]
 * @param {[Array]} uploadcnt [土地类型]
 * @param {[Array]} uploadpzs [主要作物]
 * @param {[Array]} xsmy [气候]
 * @param {[Array]} kcmy [主要食物]
*/


var mapD = {
  Jan: [
    {
      name: "河北省",
      uploadcnt: "黄土平原、冲积平原",
      uploadpzs: "小麦、谷子、高粱",
      xsmy: "温带季风气候，冬季寒冷干燥",
      kcmy: "面食（饼、馒头）、杂粮粥"
    },
    {
      name: "山西省",
      uploadcnt: "黄土高原",
      uploadpzs: "谷子、黍、高粱",
      xsmy: "温带大陆性气候，寒冷干燥",
      kcmy: "杂粮、窝头、豆类制品"
    },
    {
      name: "内蒙古自治区",
      uploadcnt: "草原、沙地、丘陵",
      uploadpzs: "燕麦、黍、马铃薯",
      xsmy: "温带草原气候，干冷风大",
      kcmy: "奶制品、牛羊肉、面食"
    }
  ],
  Feb: [
    {
      name: "辽宁省",
      uploadcnt: "山地、平原、丘陵",
      uploadpzs: "小麦、高粱、粟",
      xsmy: "温带季风气候，寒冷干燥",
      kcmy: "面食、杂粮粥、鱼类"
    },
    {
      name: "吉林省",
      uploadcnt: "山地、丘陵、平原",
      uploadpzs: "大豆、粟、马铃薯",
      xsmy: "温带季风气候，严寒多雪",
      kcmy: "豆制品、粟米饭、野菜"
    },
    {
      name: "黑龙江省",
      uploadcnt: "黑土平原、林地",
      uploadpzs: "大豆、小麦、马铃薯",
      xsmy: "寒温带气候，严寒漫长",
      kcmy: "大豆制品、牛羊肉、杂粮"
    }
  ],
  Mar: [
    {
      name: "江苏省",
      uploadcnt: "冲积平原、水网密布",
      uploadpzs: "水稻、小麦、蚕桑",
      xsmy: "亚热带湿润季风气候，温暖多雨",
      kcmy: "米饭、面条、鱼虾"
    },
    {
      name: "浙江省",
      uploadcnt: "丘陵、水田",
      uploadpzs: "水稻、茶叶、蚕桑",
      xsmy: "亚热带季风气候，温暖湿润",
      kcmy: "米饭、鱼干、蔬菜"
    },
    {
      name: "安徽省",
      uploadcnt: "山地、平原、湖泊",
      uploadpzs: "水稻、小麦、油菜",
      xsmy: "亚热带季风气候，雨量充沛",
      kcmy: "米饭、杂粮、鱼肉"
    }
  ],
  Apr: [
    {
      name: "福建省",
      uploadcnt: "山地、丘陵、水田",
      uploadpzs: "水稻、甘蔗、茶叶",
      xsmy: "亚热带季风气候，湿润多雨",
      kcmy: "米饭、番薯、海产"
    },
    {
      name: "江西省",
      uploadcnt: "丘陵、湖泊、水田",
      uploadpzs: "水稻、甘蔗、棉花",
      xsmy: "亚热带湿润气候，四季分明",
      kcmy: "米饭、藜蒿、鸭肉"
    },
    {
      name: "山东省",
      uploadcnt: "平原、丘陵、沿海",
      uploadpzs: "小麦、花生、高粱",
      xsmy: "温带季风气候，春旱夏雨",
      kcmy: "面食、地瓜、海鲜"
    }
  ],
  May: [
    {
      name: "河南省",
      uploadcnt: "黄土平原、河谷地",
      uploadpzs: "小麦、棉花、芝麻",
      xsmy: "温带季风气候，春暖夏热",
      kcmy: "馒头、杂粮粥、豆腐"
    },
    {
      name: "湖北",
      uploadcnt: "湖泊、平原、水田",
      uploadpzs: "水稻、油菜、棉花",
      xsmy: "亚热带湿润气候，雨多湿热",
      kcmy: "米饭、鱼、藕汤"
    },
    {
      name: "湖南省",
      uploadcnt: "丘陵、水田、湖区",
      uploadpzs: "水稻、棉花、甘蔗",
      xsmy: "亚热带湿润气候，潮湿多雨",
      kcmy: "米饭、腊肉、鱼类"
    }
  ],
  Jun: [
    {
      name: "广东省",
      uploadcnt: "丘陵、盆地、平原",
      uploadpzs: "水稻、甘蔗、香蕉",
      xsmy: "南亚热带季风气候，炎热多雨",
      kcmy: "米饭、粥、海鲜"
    },
    {
      name: "广西壮族自治区",
      uploadcnt: "喀斯特丘陵、河谷",
      uploadpzs: "水稻、玉米、甘蔗",
      xsmy: "南亚热带湿润气候，湿热多雨",
      kcmy: "米饭、螺蛳粉、豆豉菜"
    },
    {
      name: "海南省",
      uploadcnt: "火山地、平原、丘陵",
      uploadpzs: "水稻、甘蔗、热带水果",
      xsmy: "热带季风气候，全年高温",
      kcmy: "米饭、椰子饭、热带果品"
    }
  ],
  Jul: [
    {
      name: "四川省",
      uploadcnt: "盆地、山地、丘陵",
      uploadpzs: "水稻、小麦、油菜",
      xsmy: "亚热带湿润气候，炎热多雨",
      kcmy: "米饭、麻辣火锅、豆瓣酱"
    },
    {
      name: "重庆市",
      uploadcnt: "丘陵、山地",
      uploadpzs: "水稻、甘蔗、蔬菜",
      xsmy: "亚热带湿润气候，闷热潮湿",
      kcmy: "米饭、火锅、小面"
    },
    {
      name: "贵州省",
      uploadcnt: "喀斯特高原、山地",
      uploadpzs: "玉米、马铃薯、稻谷",
      xsmy: "亚热带湿润气候，湿润凉爽",
      kcmy: "酸汤饭、腊肉、米豆腐"
    }
  ],
  Aug: [
    {
      name: "云南省",
      uploadcnt: "高原、山地、河谷",
      uploadpzs: "水稻、玉米、烟草",
      xsmy: "高原山地气候，干湿分明",
      kcmy: "米线、野菜、腊肉"
    },
    {
      name: "西藏自治区",
      uploadcnt: "高原、山地",
      uploadpzs: "青稞、豌豆、马铃薯",
      xsmy: "高原气候，寒冷干燥",
      kcmy: "糌粑、酥油茶、牦牛肉"
    },
    {
      name: "青海省",
      uploadcnt: "高原、山地、草原",
      uploadpzs: "青稞、马铃薯、豆类",
      xsmy: "高原大陆性气候，寒冷干燥",
      kcmy: "糌粑、奶制品、牛羊肉"
    }
  ],
  Sep: [
    {
      name: "陕西省",
      uploadcnt: "关中平原、黄土高原",
      uploadpzs: "小麦、玉米、棉花",
      xsmy: "温带大陆性气候，四季分明",
      kcmy: "面食、凉皮、杂粮"
    },
    {
      name: "甘肃省",
      uploadcnt: "山地、沙地、绿洲",
      uploadpzs: "小麦、玉米、马铃薯",
      xsmy: "温带干旱半干旱气候，少雨多风",
      kcmy: "馍馍、牛羊肉、粉条"
    },
    {
      name: "宁夏回族自治区",
      uploadcnt: "黄土台地、河套平原",
      uploadpzs: "小麦、水稻、枸杞",
      xsmy: "温带大陆性干旱气候",
      kcmy: "面食、羊肉、粥类"
    }
  ],
  Oct: [
    {
      name: "新疆维吾尔自治区",
      uploadcnt: "盆地、山地、绿洲",
      uploadpzs: "小麦、棉花、葡萄",
      xsmy: "温带大陆性干旱气候，昼夜温差大",
      kcmy: "馕、抓饭、牛羊肉"
    },
    {
      name: "天津市",
      uploadcnt: "冲积平原、滨海湿地",
      uploadpzs: "小麦、玉米、蔬菜",
      xsmy: "温带季风气候，冬冷夏热",
      kcmy: "煎饼果子、面食、海鲜"
    },
    {
      name: "北京",
      uploadcnt: "山地、平原",
      uploadpzs: "小麦、玉米、豆类",
      xsmy: "温带季风气候，四季分明",
      kcmy: "面条、豆汁、驴打滚"
    }
  ],
  Nov: [
    {
      name: "上海",
      uploadcnt: "冲积平原、河网密布",
      uploadpzs: "水稻、棉花、蔬菜",
      xsmy: "亚热带季风气候，湿润温暖",
      kcmy: "米饭、小笼包、河鲜"
    },
    {
      name: "台湾省",
      uploadcnt: "山地、平原、海岸",
      uploadpzs: "水稻、甘蔗、热带水果",
      xsmy: "热带和亚热带季风气候",
      kcmy: "米饭、海产、水果"
    },
    {
      name: "香港",
      uploadcnt: "丘陵、海港、填海地",
      uploadpzs: "蔬菜、甘蔗、水稻（少量）",
      xsmy: "亚热带季风气候，炎热潮湿",
      kcmy: "粥粉面饭、海鲜、点心"
    }
  ],
  Dec: [
    {
      name: "澳门",
      uploadcnt: "海岛、丘陵",
      uploadpzs: "蔬菜、水稻（少量）",
      xsmy: "亚热带季风气候，温暖湿润",
      kcmy: "葡式米饭、点心、鱼虾"
    },
    {
      name: "其他",
      uploadcnt: "多样化地形",
      uploadpzs: "地方特产",
      xsmy: "因地而异",
      kcmy: "地方饮食风格各异"
    }
  ]
};

/** 
 * [出版社按月数据（2017）]
 * @param {[Array]} pressName [出版社名称]
 * @param {[Array]} hotVal [热度值]
**/

var pressRanking = {
  Jan: [
    {
      pressName: '齐民要术',
      hotVal: '贾思勰'
    },
    {
      pressName: '吕氏春秋·上农四篇',
      hotVal: '吕不韦'
    },    
    {
      pressName: '氾胜之书',
      hotVal: '氾胜之'
    },    
    {
      pressName: '四民月令',
      hotVal: '崔寔'
    },    
    {
      pressName: '农政全书',
      hotVal: '徐光启'
    },    
    {
      pressName: '天工开物',
      hotVal: '宋应星'
    },    
    {
      pressName: '授时通考',
      hotVal: '鄂尔泰'
    },    
    {
      pressName: '王祯农书',
      hotVal: '王祯'
    },    
    {
      pressName: '月令七十二候集解',
      hotVal: '吴澄'
    }
  ],
 
}

/** 
 * [分类销售占比按月数据（2017）]
 * @param {[Array]} name [分类名称]
 * @param {[Array]} value [占比]
**/

var saleBL = {
  Jan: [
    {
        value:27, 
        name:'粟-先秦',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value:23, 
        name:'黍-先秦',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 15, 
        name:'菽-先秦',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 8, 
        name:'麦-先秦',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'稻-先秦',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 17, 
        name:'其他-先秦',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Feb: [
    {
      value:27, 
      name:'粟-汉',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:22, 
        name:'麦-汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 15, 
        name:'稻-汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'菽-汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'黍-汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 18, 
        name:'其他-汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Mar: [
    {
      value:26, 
      name:'粟-魏晋',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:22, 
        name:'麦-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 14, 
        name:'稻-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'菽-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 8, 
        name:'桑-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 19, 
        name:'其他-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Apr: [
    {
      value:26, 
      name:'粟-唐',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:22, 
        name:'稻-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 13, 
        name:'麦-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'黍-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 8, 
        name:'菽-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 19, 
        name:'其他-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  May: [
    {
      value:27, 
      name:'稻-宋',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:22, 
        name:'麦-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 15, 
        name:'粟-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'菽-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'桑-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 18, 
        name:'其他-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Jun: [
    {
      value:31, 
      name:'稻-明',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:21, 
        name:'麦-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 13, 
        name:'粟-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 9, 
        name:'玉米-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'甘薯-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 19, 
        name:'其他-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Jul: [
    {
      value:26, 
      name:'稻-清',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:23, 
        name:'玉米-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 13, 
        name:'甘薯-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'麦-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'粟-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 18, 
        name:'其他-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
}

/** 
 * [分类库存占比按月数据（2017）]
 * @param {[Array]} name [分类名称]
 * @param {[Array]} value [占比]
**/
var stockBL = {
  Jan: [
    {
        value:50, 
        name:'犁-西汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value:22, 
        name:'耒-西汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 17, 
        name:'镰-西汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 14, 
      name: '锄-西汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'耙-西汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 14, 
        name:'磨盘-西汉',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Feb: [
    {
      value:28, 
      name:'犁-魏晋',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:23, 
        name:'镰-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 17, 
        name:'锄-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 10, 
        name:'耒-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 9, 
        name:'耙-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 13, 
        name:'铲-魏晋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Mar: [
    {
      value:29, 
      name:'犁-唐',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:21, 
        name:'镰-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 15, 
        name:'耒-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 12, 
        name:'耙-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 9, 
        name:'锄-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 14, 
        name:'锯-唐',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Apr: [
    {
      value:25, 
      name:'犁-宋',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:24, 
        name:'镰-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 14, 
        name:'锄-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 13, 
        name:'耙-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 6, 
        name:'耒-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 16, 
        name:'铲-宋',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  May: [
    {
      value:26, 
      name:'犁-元',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:23, 
        name:'镰-元',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 13, 
        name:'锄-元',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'耙-元',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 8, 
        name:'耒-元',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 19, 
        name:'铲-元',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Jun: [
    {
      value:30, 
      name:'犁-明',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:22, 
        name:'镰-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'锄-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 10, 
        name:'耙-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 8, 
        name:'铲-明',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 19, 
        name:'其他',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
  Jul: [
    {
      value:26, 
      name:'犁-清',
      label: {
          normal: {
              formatter: '{c}%\n\n{b}'
          }
      }
    },
    {
        value:23, 
        name:'镰-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 13, 
        name:'锄-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },
    {
        value: 11, 
        name:'铲-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 7, 
        name:'耙-清',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    },                
    {
        value: 20, 
        name:'其他',
        label: {
            normal: {
                formatter: '{c}%\n\n{b}'
            }
        }
    }
  ],
}

/**
 * [销售码洋地区按月数据（2017）]
 * @param {[Array]} name [省份名称]
 * @param {[Array]} value [值]
**/
var saleStockR = {
    Jan: [{
            value: "100*6",
            name: '蚕'
        },
        {
            value: "95*6",
            name: '猪'
        },
        {
            value: "90*6",
            name: '牛'
        },
        {
            value: "85*6",
            name: '鸡'
        },
        {
            value: "80*6",
            name: '羊'
        },
        {
            value: "75*6",
            name: '鱼'
        },
        {
            value: "70*6",
            name: '马'
        },
        {
            value: "65*6",
            name: '鸭'
        }
    ],
    Feb: [{
            value: 761,
            name: '牛-汉'
        },
        {
            value: 665,
            name: '猪-汉'
        },
        {
            value: 555,
            name: '羊-汉'
        },
        {
            value: 497,
            name: '鸡-汉'
        },
        {
            value: 367,
            name: '马-汉'
        },
        {
            value: 366,
            name: '蚕-汉'
        },
        {
            value: 317,
            name: '驴-汉'
        },
        {
            value: 310,
            name: '鱼-汉'
        }
    ],
    Mar: [{
            value: 281,
            name: '牛-魏晋'
        },
        {
            value: 219,
            name: '羊-魏晋'
        },
        {
            value: 205,
            name: '马-魏晋'
        },
        {
            value: 147,
            name: '猪-魏晋'
        },
        {
            value: 118,
            name: '蚕-魏晋'
        },
        {
            value: 93,
            name: '鸡-魏晋'
        },
        {
            value: 87,
            name: '驴/骡-魏晋'
        },
        {
            value: 81,
            name: '鱼-魏晋'
        }
    ],
    Apr: [{
            value: 337,
            name: '牛-唐'
        },
        {
            value: 331,
            name: '马-唐'
        },
        {
            value: 196,
            name: '羊-唐'
        },
        {
            value: 169,
            name: '猪-唐'
        },
        {
            value: 159,
            name: '蚕-唐'
        },
        {
            value: 112,
            name: '鸡-唐'
        },
        {
            value: 105,
            name: '鱼-唐'
        },
        {
            value: 97,
            name: '蜜蜂-唐'
        }
    ],
    May: [{
            value: 195,
            name: '牛-宋'
        },
        {
            value: 135,
            name: '猪-宋'
        },
        {
            value: 98,
            name: '鱼-宋'
        },
        {
            value: 87,
            name: '蚕-宋'
        },
        {
            value: 88,
            name: '鸡/鸭-宋'
        },
        {
            value: 63,
            name: '羊-宋'
        },
        {
            value: 40,
            name: '马-宋'
      },
        {
            value: 23,
            name: '蜜蜂-宋'
        }
    ],
    Jun: [{
            value: 362,
            name: '羊-元'
        },
        {
            value: 271,
            name: '马-元'
        },
        {
            value: 181,
            name: '牛-元'
        },
        {
            value: 167,
            name: '骆驼-元'
        },
        {
            value: 99,
            name: '猪-元'
        },
        {
            value: 97,
            name: '鱼-元'
      },
        {
            value: 97,
            name: '鹰-元'
      },
        {
            value: 97,
            name: '蚕-元'
        }
    ],
    Jul: [{
            value: 362,
            name: '猪-明'
        },
        {
            value: 271,
            name: '牛-明'
        },
        {
            value: 181,
            name: '蚕-明'
        },
        {
            value: 167,
            name: '鱼-明'
        },
        {
            value: 99,
            name: '鸡/鸭-明'
        },
        {
            value: 97,
            name: '羊-明'
      },
        {
            value: 97,
            name: '蜜蜂-明'
      },
        {
            value: 97,
            name: '鹅-明'
        }
    ],
    Aug:  [{
            value: 362,
            name: '猪-清'
        },
        {
            value: 271,
            name: '牛-清'
        },
        {
            value: 181,
            name: '蚕-清'
        },
        {
            value: 167,
            name: '鸡/鸭-清'
        },
        {
            value: 99,
            name: '鱼-清'
        },
        {
            value: 97,
            name: '羊-清'
      },
        {
            value: 97,
            name: '蜜蜂-清'
      },
        {
            value: 97,
            name: '鸽子-清'
        }
    ]
    
}

function dataOne(){
  return {
    bestSelling: bestSelling,
    allMData: allMData,
    mapD: mapD,
    pressRanking: pressRanking,
    saleBL: saleBL,
    stockBL: stockBL,
    saleStockR: saleStockR,
    bookData: data
  }
};

