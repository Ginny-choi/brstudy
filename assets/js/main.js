$(document).ready(function () {
  const $window = $(window);
  const searchBox = $(".right-box .search-box");
  const mobilesearchBox = $(".mobile-search-box");
  const gnbBtn = $(".gnb-btn");
  const subMenu = $(".sub-menu");
  const dropMenu = $(".drop-menu");
  const dep2SearchBox = $(".dep2-search-box");
  const mobileLnbMenu = $(".mobile-lnb-wrap");
  const mobileSearchMenu = $(".mobile-search-menu");
  const typeListBox = $(".type-list-box");

  const closeBtn = $(".close-btn");
  const mobileSearchCloseBtn = $(".mobile-search-close-btn");
  const searchTypeBtn = $(".type-btn");
  const dropCloseBtn = $(".drop-close-btn");
  const searchCloseBtn = $(".search-close-btn");
  const mobileLnbCloseBtn = $(".mobile-lnb-close-btn");

  const infoWrap = $(".info-wrap");
  const noticeControlBox = $(".info-box .control-box");
  let cnt = 0;

  gnbBtn.on({
    click: function (e) {
      e.preventDefault();
      dep2SearchBox.slideUp(300);
      dropMenu.slideUp(200);
      if ($(this).hasClass("active")) {
        subMenu.slideUp(300);
        $(this).removeClass("active");
      } else {
        subMenu.hide();
        gnbBtn.removeClass("active");
        $(this).next().slideToggle(300);
        $(this).addClass("active");
      }
    },
  });
  closeBtn.on({
    click: function (e) {
      e.preventDefault();
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
        dep2SearchBox.slideUp(300);
        dropMenu.slideToggle(200);
      } else if (target.matches(".search-drop-btn") || target.matches(".search-drop-btn > span")) {
        gnbSubClose();
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
      dep2SearchBox.slideUp(300);
    },
  });

  //모바일 테블릿 햄버거 & 서치 버튼
  mobilesearchBox.on({
    click: function (e) {
      let target = e.target;
      e.preventDefault();

      if (target.matches(".mobile-menu-btn") || target.matches(".mobile-menu-btn > span")) {
        mobileSearchMenu.slideUp(300);
        mobileLnbMenu.addClass("mobile-show");
      } else if (target.matches(".mobile-search-btn")) {
        mobileSearchMenu.slideToggle(300);
      }
    },
  });

  mobileLnbMenu.on({
    click: function (e) {
      let target = e.target;
      if (target.matches(".mobile-lnb-wrap")) {
        mobileLnbMenu.removeClass("mobile-show");
      }
    },
  });

  mobileLnbCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileLnbMenu.removeClass("mobile-show");
    },
  });

  mobileSearchCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileSearchMenu.slideUp(300);
    },
  });

  mobileSearchMenu.on({
    mouseleave: function () {
      $(this).slideUp(300);
    },
  });

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

  $window.resize(function () {
    if ($window.innerWidth() > 768) {
      mobileSubhide();
    }
    if ($window.innerWidth() <= 768) {
      webSubhide();
    }
  });

  function webSubhide() {
    dropMenu.slideUp(200);
    dep2SearchBox.slideUp(300);
  }
  function mobileSubhide() {
    mobileLnbMenu.removeClass("mobile-show");
    mobileSearchMenu.slideUp(300);
  }

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
