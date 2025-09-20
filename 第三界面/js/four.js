$(function () {
  // 获取URL参数中的书籍索引
  var hasIndex = window.location.href.split("?").length > 1;
  var index = hasIndex ? parseInt(window.location.href.split("?")[1].split("=")[1]) : 0;

  // 从外部数据文件获取数据（data01.js中定义的全局变量）
  var bookData = window.data || [];

  // 轮播相关变量
  var currentBookPage = 0;
  var booksPerPage = 4; // 每页显示的书籍数量

  // 渲染同类农书列表（显示所有农籍书籍）
  var renderSimilarBooks = function(bookIndex) {
    // 获取所有农籍书籍
    var allBooks = [];
    for (var i = 0; i < bookData.length; i++) {
      if (bookData[i] && bookData[i].BookInformation) {
        allBooks.push({
          bookName: bookData[i].BookInformation.bookName,
          author: bookData[i].BookInformation.author,
          year: bookData[i].BookInformation.year,
          imgUrl: bookData[i].BookInformation.imgUrl,
          index: i
        });
      }
    }

    var totalPages = Math.ceil(allBooks.length / booksPerPage);

    // 计算当前书籍应该在哪一页
    var currentBookPageIndex = -1;
    for (var i = 0; i < allBooks.length; i++) {
      if (allBooks[i].index === bookIndex) {
        currentBookPageIndex = Math.floor(i / booksPerPage);
        break;
      }
    }

    // 如果找到当前书籍，设置当前页面
    if (currentBookPageIndex !== -1) {
      currentBookPage = currentBookPageIndex;
    } else {
      currentBookPage = 0; // 默认显示第一页
    }

    var renderCurrentPage = function() {
      var html = "";
      var startIndex = currentBookPage * booksPerPage;
      var endIndex = Math.min(startIndex + booksPerPage, allBooks.length);

      for (var i = startIndex; i < endIndex; i++) {
        var book = allBooks[i];
        var isCurrentBook = book.index === bookIndex ? ' class="current-book"' : '';
        html +=
          '<li data-book-index="' + book.index + '" data-book-name="' + book.bookName + '"' + isCurrentBook + '>' +
            '<img src="' + book.imgUrl + '" alt="' + book.bookName + '" onerror="this.src=\'img/default-book.png\'">' +
            '<dl>' +
              '<dt>' + book.bookName + '</dt>' +
              '<dd>' +
                '<p>作者：' + book.author + '</p>' +
                '<p>年代：' + book.year + '</p>' +
              '</dd>' +
            '</dl>' +
          '</li>';
      }

      $("#similarBooksList").html(html);

      // 绑定点击事件，点击书籍可以切换到该书籍
      $("#similarBooksList li").off('click').on('click', function() {
        var targetIndex = parseInt($(this).data('book-index'));
        if (targetIndex !== bookIndex) {
          // 切换到选中的书籍
          renderAllBookInfo(targetIndex);
        }
      });

      // 更新按钮状态
      $("#prevBooks").prop('disabled', currentBookPage === 0);
      $("#nextBooks").prop('disabled', currentBookPage >= totalPages - 1);

      // 更新页数指示器
      $("#pageIndicator").text((currentBookPage + 1) + " / " + totalPages);
    };

    // 初始渲染
    renderCurrentPage();

    // 绑定轮播按钮事件
    $("#prevBooks").off('click').on('click', function() {
      if (currentBookPage > 0) {
        currentBookPage--;
        renderCurrentPage();
      }
    });

    $("#nextBooks").off('click').on('click', function() {
      if (currentBookPage < totalPages - 1) {
        currentBookPage++;
        renderCurrentPage();
      }
    });
  };

  // 渲染书籍封面和基本信息
  var renderBookInfo = function(bookIndex) {
    var bookInfo = bookData[bookIndex].BookInformation;

    // 渲染当前书籍名称
    $("#currentBookTitle").html(bookInfo.bookName);

    // 渲染书籍封面
    var coverHtml = '<img src="' + bookInfo.imgUrl + '" alt="' + bookInfo.bookName + '" onerror="this.src=\'img/default-book.png\'">';
    $("#bookCoverContainer").html(coverHtml);
  };

  // 渲染书籍标签
  var renderBookLabels = function(bookIndex) {
    var bookInfo = bookData[bookIndex].BookInformation;
    var html = "";
    
    if (bookInfo.bookLabel && bookInfo.bookLabel.length > 0) {
      for (var i = 0; i < bookInfo.bookLabel.length; i++) {
        html += '<li>' + bookInfo.bookLabel[i] + '</li>';
      }
    }
    
    $("#bookLabels").html(html);
  };

  // 渲染主题词
  var renderThemeWords = function(bookIndex) {
    var bookInfo = bookData[bookIndex].BookInformation;
    var html = "";

    if (bookInfo.themaWords && bookInfo.themaWords.length > 0) {
      for (var i = 0; i < bookInfo.themaWords.length; i++) {
        html += '<li>' + bookInfo.themaWords[i] + '</li>';
      }
    }

    $("#themeWords").html(html);
  };

  // 渲染内容提要
  var renderContentSummary = function(bookIndex) {
    var bookInfo = bookData[bookIndex].BookInformation;
    var summary = bookInfo.contentSummary || "暂无内容提要";
    $("#contentSummary").html(summary);
  };

  // 渲染书籍目录
  var renderBookCatalog = function(bookIndex) {
    var bookInfo = bookData[bookIndex].BookInformation;
    var html = "";

    if (bookInfo.catalogues && bookInfo.catalogues.length > 0) {
      for (var i = 0; i < bookInfo.catalogues.length; i++) {
        html += '<li>' + (i + 1) + '. ' + bookInfo.catalogues[i] + '</li>';
      }
    } else {
      html = '<li>暂无目录信息</li>';
    }

    $("#bookCatalog").html(html);
  };

  // 渲染作者简介
  var renderAuthorIntro = function(bookIndex) {
    var bookInfo = bookData[bookIndex].BookInformation;
    var intro = bookInfo.authorIntro || "暂无作者简介";
    $("#authorIntro").html(intro);
  };

  // 轮播管理对象
  var carouselManager = {
    highFreqWords: {
      currentIndex: 0,
      timer: null,
      data: []
    },
    centralThemes: {
      currentIndex: 0,
      timer: null,
      data: []
    }
  };

  // 渲染高频词轮播
  var renderHighFreqWords = function(bookIndex) {
    var purchaseData = bookData[bookIndex].PurchaseRe || [];
    carouselManager.highFreqWords.data = purchaseData;
    carouselManager.highFreqWords.currentIndex = 0;

    if (purchaseData.length === 0) {
      $("#highFreqWordsCarousel").html('<div class="carousel-item"><div class="loading">暂无数据</div></div>');
      $("#highFreqIndicators").html('');
      return;
    }

    // 生成轮播项（在末尾添加第一个项目的副本用于无缝循环）
    var carouselHtml = "";
    var indicatorsHtml = "";

    for (var i = 0; i < purchaseData.length; i++) {
      carouselHtml +=
        '<div class="carousel-item">' +
          '<div class="word-title">' + purchaseData[i].libraryName + '</div>' +
          '<div class="word-desc">' + purchaseData[i].address + '</div>' +
        '</div>';

      indicatorsHtml += '<div class="carousel-dot' + (i === 0 ? ' active' : '') + '"></div>';
    }

    // 添加第一个项目的副本用于无缝循环
    if (purchaseData.length > 1) {
      carouselHtml +=
        '<div class="carousel-item">' +
          '<div class="word-title">' + purchaseData[0].libraryName + '</div>' +
          '<div class="word-desc">' + purchaseData[0].address + '</div>' +
        '</div>';
    }

    $("#highFreqWordsCarousel").html(carouselHtml);
    $("#highFreqIndicators").html(indicatorsHtml);

    // 启动自动轮播
    startCarousel('highFreqWords');
  };

  // 渲染中心主题轮播
  var renderCentralThemes = function(bookIndex) {
    var borrowData = bookData[bookIndex].borrowRe || [];
    carouselManager.centralThemes.data = borrowData;
    carouselManager.centralThemes.currentIndex = 0;

    if (borrowData.length === 0) {
      $("#centralThemesCarousel").html('<div class="carousel-item"><div class="loading">暂无数据</div></div>');
      $("#centralThemesIndicators").html('');
      return;
    }

    // 生成轮播项（在末尾添加第一个项目的副本用于无缝循环）
    var carouselHtml = "";
    var indicatorsHtml = "";

    for (var i = 0; i < borrowData.length; i++) {
      carouselHtml +=
        '<div class="carousel-item">' +
          '<div class="theme-title">' + borrowData[i].libraryName + '</div>' +
          '<div class="theme-desc">' + borrowData[i].address + '</div>' +
        '</div>';

      indicatorsHtml += '<div class="carousel-dot' + (i === 0 ? ' active' : '') + '"></div>';
    }

    // 添加第一个项目的副本用于无缝循环
    if (borrowData.length > 1) {
      carouselHtml +=
        '<div class="carousel-item">' +
          '<div class="theme-title">' + borrowData[0].libraryName + '</div>' +
          '<div class="theme-desc">' + borrowData[0].address + '</div>' +
        '</div>';
    }

    $("#centralThemesCarousel").html(carouselHtml);
    $("#centralThemesIndicators").html(indicatorsHtml);

    // 启动自动轮播
    startCarousel('centralThemes');
  };

  // 启动轮播
  var startCarousel = function(type) {
    var carousel = carouselManager[type];

    // 清除之前的定时器
    if (carousel.timer) {
      clearInterval(carousel.timer);
    }

    // 如果只有一项或没有数据，不需要轮播
    if (carousel.data.length <= 1) {
      return;
    }

    // 设置自动轮播，每3秒切换一次
    carousel.timer = setInterval(function() {
      nextCarouselItem(type);
    }, 3000);
  };

  // 切换到下一个轮播项
  var nextCarouselItem = function(type) {
    var carousel = carouselManager[type];
    var totalItems = carousel.data.length;

    if (totalItems <= 1) return;

    var carouselElement = $("#" + type + "Carousel");

    // 根据类型确定正确的指示器ID
    var indicatorId;
    if (type === 'highFreqWords') {
      indicatorId = "#highFreqIndicators";
    } else if (type === 'centralThemes') {
      indicatorId = "#centralThemesIndicators";
    }

    // 移动到下一个位置
    carousel.currentIndex++;
    var translateX = -carousel.currentIndex * 100;
    carouselElement.css('transform', 'translateX(' + translateX + '%)');

    // 立即更新指示器（显示即将到达的位置）
    var displayIndex = carousel.currentIndex >= totalItems ? 0 : carousel.currentIndex;
    $(indicatorId + " .carousel-dot").removeClass('active');
    $(indicatorId + " .carousel-dot").eq(displayIndex).addClass('active');

    // 如果移动到了副本位置（最后一个位置），在动画结束后跳回第一个
    if (carousel.currentIndex === totalItems) {
      setTimeout(function() {
        // 移除过渡动画
        carouselElement.css('transition', 'none');
        // 跳回第一个位置
        carouselElement.css('transform', 'translateX(0%)');
        carousel.currentIndex = 0;

        // 确保指示器显示第一个
        $(indicatorId + " .carousel-dot").removeClass('active');
        $(indicatorId + " .carousel-dot").eq(0).addClass('active');

        // 强制重绘后恢复动画
        setTimeout(function() {
          carouselElement.css('transition', 'transform 0.5s ease-in-out');
        }, 50);
      }, 500); // 等待动画完成（0.5秒）
    }
  };

  // 停止轮播
  var stopCarousel = function(type) {
    var carousel = carouselManager[type];
    if (carousel.timer) {
      clearInterval(carousel.timer);
      carousel.timer = null;
    }
  };

  // 渲染书籍概览（评论）
  var renderBookOverview = function(bookIndex) {
    var comments = bookData[bookIndex].comment || [];
    var html = "";

    for (var i = 0; i < comments.length; i++) {
      html +=
        '<div class="overview-item">' +
          '<div class="user">' + comments[i].userName + '</div>' +
          '<div class="time">' + (comments[i].time || '古代文献') + '</div>' +
          '<div class="comment">' + comments[i].con + '</div>' +
        '</div>';
    }

    if (html === "") {
      html = '<div class="overview-item"><div class="comment">暂无相关评论</div></div>';
    }

    $("#bookOverview").html(html);
  };

  // 渲染完整的书籍详情
  var renderBookDetail = function(bookIndex) {
    if (!bookData[bookIndex]) {
      console.error('书籍数据不存在，索引：', bookIndex);
      return;
    }

    renderSimilarBooks(bookIndex);
    renderBookInfo(bookIndex);
    renderBookLabels(bookIndex);
    renderThemeWords(bookIndex);
    renderContentSummary(bookIndex);
    renderBookCatalog(bookIndex);
    renderAuthorIntro(bookIndex);
    renderHighFreqWords(bookIndex);
    renderCentralThemes(bookIndex);
    renderBookOverview(bookIndex);
  };

  // 渲染所有书籍信息（用于切换书籍）
  var renderAllBookInfo = function(bookIndex) {
    if (!bookData[bookIndex]) {
      console.error('书籍数据不存在，索引：', bookIndex);
      return;
    }

    // 停止当前轮播
    stopCarousel('highFreqWords');
    stopCarousel('centralThemes');

    // 更新全局索引
    index = bookIndex;

    // 渲染所有内容
    renderBookDetail(bookIndex);

    // 更新URL
    var newUrl = window.location.pathname + '?index=' + bookIndex;
    window.history.pushState({}, '', newUrl);
  };

  // 处理同类书籍点击事件（现在在renderCurrentPage中处理）
  var bindSimilarBookEvents = function() {
    // 事件绑定已移至renderCurrentPage函数中
    // 这里保留函数以保持兼容性
  };

  // 绑定轮播事件
  var bindCarouselEvents = function() {
    // 鼠标悬停暂停轮播
    $('.carousel-container').on('mouseenter', function() {
      var isHighFreq = $(this).find('#highFreqWordsCarousel').length > 0;
      var type = isHighFreq ? 'highFreqWords' : 'centralThemes';
      stopCarousel(type);
    });

    // 鼠标离开恢复轮播
    $('.carousel-container').on('mouseleave', function() {
      var isHighFreq = $(this).find('#highFreqWordsCarousel').length > 0;
      var type = isHighFreq ? 'highFreqWords' : 'centralThemes';
      startCarousel(type);
    });
  };

  // 添加加载动画样式
  var addLoadingStyles = function() {
    var style = document.createElement('style');
    style.textContent = `
      .word-item, .theme-item {
        background: rgba(255, 255, 255, 0.8);
        padding: 12px;
        margin: 8px 0;
        border-radius: 6px;
        border-left: 3px solid #8B4513;
      }
      .word-title, .theme-title {
        font-weight: 600;
        color: #8B4513;
        margin-bottom: 6px;
      }
      .word-desc, .theme-desc {
        font-size: 12px;
        color: #666;
        line-height: 1.4;
      }
    `;
    document.head.appendChild(style);
  };

  // 初始化页面
  var init = function() {
    // 检查数据是否存在
    if (!bookData || bookData.length === 0) {
      console.error('数据未加载或为空');
      return;
    }

    // 确保索引有效
    if (index >= bookData.length || index < 0) {
      index = 0;
    }
    
    // 添加样式
    addLoadingStyles();
    
    // 渲染页面
    renderBookDetail(index);

    // 绑定事件
    bindSimilarBookEvents();
    bindCarouselEvents();
  };

  // 页面加载完成后初始化
  $(document).ready(function() {
    // 如果数据还没加载，等待一下
    if (!window.data) {
      setTimeout(init, 100);
    } else {
      init();
    }
  });

  // 初始化翻页功能
  var initContentTabs = function() {
    var tabs = document.querySelectorAll('.nav-tab');
    var pages = document.querySelectorAll('.content-page');

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var targetTab = this.getAttribute('data-tab');

        // 移除所有活动状态
        tabs.forEach(function(t) {
          t.classList.remove('active');
        });
        pages.forEach(function(p) {
          p.classList.remove('active');
        });

        // 添加当前活动状态
        this.classList.add('active');
        document.getElementById('page-' + targetTab).classList.add('active');
      });
    });
  };

  // 在页面加载完成后初始化翻页功能
  initContentTabs();
});
