
var bookData = dataOne().bookData;
console.log(bookData)

$(function() {
  // 畅销书排行榜获取高度
  var conH = $(".aside-left .top .con-wrap").height();
  $(".aside-left .top .con").css("height", conH + "px");

  var rankH = $(".con li:nth-child(2) .book-rank").height();
  var rankShowH = 3.5 * rankH;
  var overHiddenH = rankH * 5 + rankShowH;
  $(".book-show").css("height", rankShowH + "px");

  var curBookRank = $(".aside-left li.active .book-rank");
  curBookRank.css("height", rankH + "px");

  //   畅销书数据获取
  var pressData = dataOne().bestSelling;
  var rankUl = $(".aside-left .top ul");
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
  var bookName = "";
  var pressName = "";
  var author = "";
  var ISBN = "";
  var pressDate = "";
  var pricing = "";
  var imageUrl = "";

  rankUl.each(function(index, item) {
    var len = item.children.length;

    for (var i = 0; i < len; i++) {
      // 添加安全检查
      if (pressData[Month[index]] && pressData[Month[index]][i]) {
        bookName = pressData[Month[index]][i]["bookName"];
        pressName = pressData[Month[index]][i]["pressName"];
        author = pressData[Month[index]][i]["author"];
        ISBN = pressData[Month[index]][i]["ISBN"];
        pressDate = pressData[Month[index]][i]["pressDate"];
        pricing = pressData[Month[index]][i]["pricing"];
        imageUrl = pressData[Month[index]][i]["imageUrl"];
      } else {
        continue; // 跳过无效数据
      }

      $(item.children[i])
        .find(".name")
        .text(bookName);
      $(item.children[i])
        .find(".company")
        .text(pressName);
      $(item.children[i])
        .find(".authors")
        .text(author);
      $(item.children[i])
        .find(".isbn")
        .text(ISBN);
      $(item.children[i])
        .find(".pub-date")
        .text(pressDate);
      $(item.children[i])
        .find(".pricing")
        .text(pricing);
      $(item.children[i])
        .find("img")
        .attr("src", imageUrl);
    }
  });
  // 复制第一个ul
  var parentWrap = $(".aside-left .top .over-wrap");
  Month.forEach((month, index) => {
  var newUl = $("<ul>").addClass("con");
  // 填充实际数据到 newUl
  parentWrap.append(newUl);
});

	//   添加点击事件
  $(".aside-left .top").on('click', 'li', function(el) {
    try {
      var curItem = $(el.currentTarget);
      var bookName = curItem.find('.name').text().trim();
      var index = -1;

      console.log('点击的书名:', bookName);
      console.log('bookData:', bookData);

      // 遍历 bookData 并匹配书名
      if (bookData && Array.isArray(bookData)) {
        bookData.forEach((book, i) => {
          if (book && book.BookInformation && book.BookInformation.bookName === bookName) {
            index = i;
          }
        });
      }

      console.log('找到的索引:', index);

      if (index === -1) {
        console.log('未找到对应书籍，书名:', bookName);
        return;
      }

      // 生成正确路径
      var currentPath = window.location.href.replace(/[^/]*$/, ''); // 获取当前页面的目录
      var newHref = currentPath + 'four.html?index=' + index;
      console.log('跳转到:', newHref);
      window.location.href = newHref;
    } catch (error) {
      console.error('点击事件处理错误:', error);
    }
  });

  //   获取行高
  var topSpan = $(".aside-left .top .book-rank span");
  var topSpanH = topSpan.height();
  topSpan.css("line-height", topSpanH +"px");

  var bottomSpan = $(".aside-left .bottom .book-rank span");
  var bottomSpanH = bottomSpan.height();
  bottomSpan.css("line-height", bottomSpanH +"px");
});

//   // 柱形折线图

var trendBar1 = echarts.init(document.getElementById("trendBar1"));

var optionBar = {
  grid: {
    top: 50,
    bottom: "20%"
  },
  legend: {
    data: ["发展程度", "同比增长"],//"农业发展程度", "农业发展增长"
    right: "5%",
    itemWidth: 18,
    itemHeight: 12,
    textStyle: {
      color: "#fff"
    }
  },
  xAxis: {
    data:[
      "夏商周", "春秋", "战国",
      "秦", "汉", "三国", "魏晋", "隋", "唐", "宋", "元", "明", "清"
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#07bffb"
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0
    }
  },
  yAxis: [
    {
      name: "农业指数",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#07bffb"
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: true
      },
      interval: 20,
      min: 0,
      max: 100,
      position: "left"
    },
    {
      name: "同比增长(%)",
      max: 100,
      min: -100,
      axisLabel: {
        formatter: "{value}"
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#07bffb"
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      position: "right"
    }
  ],
  series: [
    {
      name: "发展程度",
      type: "bar",
      barWidth: "100%",
      barGap: 5,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#00fecc"
              },
              {
                offset: 0.8,
                color: "#2690cf"
              }
            ],
            false
          )
        }
      },
      data: [5, 15, 25, 20, 30, 25, 35, 40, 65, 75, 70, 85, 95]
    },
    {
      name: "同比增长",
      type: "line",
      itemStyle: {
        color: "#fff"
      },
      yAxisIndex: 1,
      data: [100, 100,  66.7, -20, 50, -16.7, 40, 25, 62.5, 15.4, -6.7, 21.4, 11.8]
    }
  ]
};
trendBar1.setOption(optionBar);
