var bookData = dataOne().bookData;

// 声明全局当前月份
let currentMonth = 'Jan';

$(function() {
  // 初始化农畜排行
  updateLivestockRank(currentMonth);
  
  // 畅销书排行榜获取高度
  var conH = $(".aside-left .top .con-wrap").height();
  $(".aside-left .top .con").css("height", conH + "px");

  var rankH = $(".con li:nth-child(2) .book-rank").height();
  var rankShowH = 3.5 * rankH;
  var overHiddenH = rankH * 5 + rankShowH;
  $(".book-show").css("height", rankShowH + "px");

  var curBookRank = $(".aside-left li.active .book-rank");
  curBookRank.css("height", rankH + "px");

  // 畅销书数据获取
  var pressData = dataOne().bestSelling;
  var rankUl = $(".aside-left .top ul");
  var Month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  rankUl.each(function(index, item) {
    var len = item.children.length;
    for (var i = 0; i < len; i++) {
      const bookInfo = pressData[Month[index]][i];
      $(item.children[i]).find(".name").text(bookInfo.bookName);
      $(item.children[i]).find(".company").text(bookInfo.pressName);
      $(item.children[i]).find(".authors").text(bookInfo.author);
      $(item.children[i]).find(".isbn").text(bookInfo.ISBN);
      $(item.children[i]).find(".pub-date").text(bookInfo.pressDate);
      $(item.children[i]).find(".pricing").text(bookInfo.pricing);
      $(item.children[i]).find("img").attr("src", bookInfo.imageUrl);
    }
  });

  // 复制第一个ul
  var parentWrap = $(".aside-left .top .over-wrap");
  var ulClone = $(".aside-left .top ul").eq(0).clone(true);
  parentWrap.append(ulClone);

  // 书籍点击事件
  $(".aside-left .top").on('click', 'li', function(el) {
    const curItem = $(el.currentTarget);
    const bookName = curItem.find('.name').text().trim();
    
    const bookIndex = bookData.findIndex(item => 
      item.BookInformation.bookName === bookName
    );
    
    if(bookIndex !== -1) {
      const newHref = `${window.location.href.split("index.html")[0]}four.html?index=${bookIndex}`;
      window.location.href = newHref;
    }
  });

  // 行高设置
  const setLineHeight = (elements) => {
    const height = elements.height();
    elements.css("line-height", height + "px");
  };
  setLineHeight($(".aside-left .top .book-rank span"));
  setLineHeight($(".aside-left .bottom .book-rank span"));

  // 初始化时间轴（示例用定时器）
  initTimeline();
});

// ========== 农畜词频排行 ==========
function updateLivestockRank(month) {
  const currentData = dataOne().saleStockR[month];
  if (!currentData) return;

  // 处理数据：排序 + 格式化
  const sortedData = [...currentData]
    .sort((a, b) => b.value - a.value)
    .slice(0, 9)
    .map(item => ({
      ...item,
      displayName: item.name.split("-")[0], // 分离朝代信息
      widthPercent: (item.value / currentData[0].value * 100).toFixed(1)
    }));

  // 生成HTML
  const rankItems = sortedData.map((item, index) => `
    <li>
      <span class="num">${index + 1}</span>
      <span class="city-name">${item.displayName}</span>
      <span class="bar">
        <b class="bar-in" style="width: ${item.widthPercent}%"></b>
      </span>
      <span class="rank-value">${item.value}万</span>
    </li>
  `).join('');

  // 更新DOM
  $('.area-rank ul').html(rankItems);
}

// ========== 时间轴示例 ==========
function initTimeline() {
  // 模拟时间轴切换（实际应与你的时间轴组件集成）
  let monthIndex = 0;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  setInterval(() => {
    monthIndex = (monthIndex + 1) % months.length;
    currentMonth = months[monthIndex];
    
    // 更新界面
    $('.month-tip').text(`2017年${monthIndex + 1}月`);
    
    // 更新所有图表
    updateLivestockRank(currentMonth);
    // 此处应添加其他图表更新逻辑...
  }, 5000); // 5秒切换一次
}

// ========== 趋势图配置 ==========
const trendBar1 = echarts.init(document.getElementById("trendBar1"));
const optionBar = {
  grid: { top: 50, bottom: "20%" },
  legend: {
    data: ["销售码洋", "同比增长"],
    right: "5%",
    itemWidth: 18,
    itemHeight: 12,
    textStyle: { color: "#fff" }
  },
  xAxis: {
    data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
    axisLine: { show: false },
    axisTick: { show: false }
  },
  yAxis: [
    {
      name: "码洋(/千万)",
      axisLine: { show: false },
      splitLine: { show: false },
      interval: 5,
      min: 0,
      max: 20
    },
    {
      name: "同比增长(%)",
      max: 100,
      position: "right",
      axisLine: { show: false },
      splitLine: { show: false }
    }
  ],
  series: [
    {
      name: "销售码洋",
      type: "bar",
      barWidth: "40%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [{offset:0,color:"#00fecc"},{offset:0.8,color:"#2690cf"}]
          )
        }
      },
      data: [2.5,5.4,6.4,4.4,5.7,11,12,10,8,14,18,19]
    },
    {
      name: "同比增长",
      type: "line",
      yAxisIndex: 1,
      itemStyle: { color: "#fff" },
      data: [10,8,36,12,24,16,48,32,18,14,66,70]
    }
  ]
};
trendBar1.setOption(optionBar);