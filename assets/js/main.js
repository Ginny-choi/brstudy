$(document).ready(function () {
  const $window = $(window);
  const searchBox = $(".right-box .search-box");
  const mobilesearchBox = $(".mobile-search-box");
  const gnbBtn = $(".gnb-btn");
  const subMenu = $(".sub-menu");
  const dropMenu = $(".drop-menu");
  const dep2SearchBox = $(".dep2-search-box");
  const mobileLnbMenu = $(".mobile-lnb-wrap");
  const mobileLnbBg = $(".mobile-lnb-bg");
  const mobileSearchMenu = $(".mobile-search-menu");
  const typeListBox = $(".type-list-box");

  const closeBtn = $(".close-btn");
  const mobileSearchCloseBtn = $(".mobile-search-close-btn");
  const searchTypeBtn = $(".type-btn");
  const dropCloseBtn = $(".drop-close-btn");
  const searchCloseBtn = $(".search-close-btn");
  const mobileLnbCloseBtn = $(".mobile-lnb-close-btn");

  const subBg = $(".sub-bg");

  gnbBtn.on({
    click: function (e) {
      e.preventDefault();
      webSubhide();
      mobileSubhide();
      if ($(this).hasClass("active")) {
        subBg.removeClass("bgactive");
        subMenu.slideUp(300);
        $(this).removeClass("active");
      } else {
        gnbSubClose();
        subBg.addClass("bgactive");
        $(this).next().slideToggle(300);
        $(this).addClass("active");
      }
    },
  });
  closeBtn.on({
    click: function (e) {
      e.preventDefault();
      subBg.removeClass("bgactive");
      gnbSubClose();
    },
  });

  ///웹 gnb 서브 메뉴 닫기

  function gnbSubClose() {
    gnbBtn.removeClass("active");
    subMenu.slideUp(300);
  }

  //웹 햄버거 버튼 & 서치버튼

  searchBox.on({
    click: function (e) {
      let target = e.target;
      e.preventDefault();

      if (target.matches(".menu-btn") || target.matches(".menu-btn > span")) {
        gnbSubClose();
        subBg.removeClass("bgactive");
        dep2SearchBox.slideUp(300);
        dropMenu.slideToggle(200);
      } else if (target.matches(".search-drop-btn") || target.matches(".search-drop-btn > span")) {
        if (gnbBtn.hasClass("active")) {
          gnbSubClose();
          subBg.addClass("bgactive");
        } else {
          subBg.toggleClass("bgactive");
        }
        dropMenu.slideUp(200);
        dep2SearchBox.slideToggle(300);
      }
    },
  });

  // 웹 햄버거 & 서치 닫기 버튼

  dropCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      dropMenu.slideUp(200);
    },
  });

  searchCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      subBg.removeClass("bgactive");
      dep2SearchBox.slideUp(300);
    },
  });

  //모바일 테블릿 햄버거 & 서치 버튼
  mobilesearchBox.on({
    click: function (e) {
      let target = e.target;
      e.preventDefault();
      if (target.matches(".mobile-menu-btn") || target.matches(".mobile-menu-btn > span")) {
        subBg.removeClass("bgactive");
        gnbSubClose();
        mobileSearchMenu.slideUp(300);
        mobileLngShow();
      } else if (target.matches(".mobile-search-btn")) {
        if (gnbBtn.hasClass("active")) {
          gnbSubClose();
          subBg.addClass("bgactive");
        } else {
          subBg.toggleClass("bgactive");
        }
        mobileSearchMenu.slideToggle(300);
      }
    },
  });

  mobileLnbMenu.on({
    click: function (e) {
      let target = e.target;
      if (target.matches(".mobile-lnb-bg")) {
        mobileLnbClose();
      }
    },
  });

  mobileLnbCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileLnbClose();
    },
  });

  function mobileLngShow() {
    mobileLnbBg.css({
      "transition-delay": "0.7s",
    });
    mobileLnbMenu.fadeIn(300);
    mobileLnbMenu.addClass("mobile-show");
    mobileLnbBg.addClass("bgon");
  }

  function mobileLnbClose() {
    mobileLnbBg.css({
      "transition-delay": "0s",
    });
    mobileLnbBg.removeClass("bgon");
    subBg.removeClass("bgactive");
    mobileLnbMenu.removeClass("mobile-show");
  }

  mobileSearchCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      subBg.removeClass("bgactive");
      mobileSearchMenu.slideUp(300);
    },
  });

  //모바일 서치 메뉴 리스트 타입 버튼
  searchTypeBtn.on({
    click: function (e) {
      e.preventDefault();

      if ($(this).hasClass("active")) {
        $(this).toggleClass("active");
        $(this).next().slideToggle(400);
      } else {
        typeListBox.hide();
        searchTypeBtn.removeClass("active");
        $(this).next().slideDown(400);
        $(this).toggleClass("active");
      }
    },
  });

  //해상도별 서브 메뉴
  $window.resize(function () {
    if ($window.innerWidth() > 768) {
      mobileSubhide();
    }
    if ($window.innerWidth() <= 768) {
      webSubhide();
    }
  });

  webSubhide = () => {
    dropMenu.slideUp(200);
    dep2SearchBox.slideUp(300);
  };
  function mobileSubhide() {
    mobileLnbMenu.removeClass("mobile-show");
    mobileSearchMenu.slideUp(300);
  }
  //서브 배경 클릭시 닫기
  subBg.on({
    click: function () {
      $(this).removeClass("bgactive");
      dep2SearchBox.slideUp(300);
      mobileSearchMenu.slideUp(300);
      gnbSubClose();
    },
  });

  //공지사항 스와이프
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    speed: 800,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
