$(document).ready(function () {
  const $window = $(window);
  const $header = $(".header");
  const $gnbBox = $(".gnb-box");
  const headerRightBox = $(".header .right-box");
  const gnbBtn = $(".gnb-btn");
  const subMenu = $(".sub-menu");
  const dropMenu = $(".drop-menu");
  const dep2SearchBox = $(".dep2-search-box");
  const mobileLnbMenu = $(".mobile-lnb-menu");
  const mobileSearchMenu = $(".mobile-search-menu");
  const typeListBox = $(".type-list-box");

  const closeBtn = $(".close-btn");
  const menuBtn = $(".search-box .menu-btn");
  const searchBtn = $(".search-drop-btn");
  const mobileSearchBtn = $(".mobile-search-btn");
  const mobileSearchCloseBtn = $(".mobile-search-close-btn");
  const mobileMenuBtn = $(".mobile-menu-btn");
  const searchTypeBtn = $(".type-btn");

  const dropCloseBtn = $(".drop-close-btn");
  const searchCloseBtn = $(".search-close-btn");
  const mobileLnbCloseBtn = $(".mobile-lnb-close-btn");

  gnbBtn.on({
    mouseenter: function (e) {
      e.preventDefault();
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
      gnbBtn.removeClass("active");
      subMenu.slideUp(400);
    },
  });

  $gnbBox.mouseleave(function () {
    subMenu.hide();
    gnbBtn.removeClass("active");
  });

  //웹 햄버거 버튼

  menuBtn.on({
    click: function (e) {
      e.preventDefault();
      dropMenu.slideToggle(300);
    },
  });

  dropCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      dropMenu.slideUp(300);
    },
  });

  //웹 서치 버튼

  searchBtn.on({
    click: function (e) {
      e.preventDefault();
      dep2SearchBox.slideToggle(300);
    },
  });
  searchCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      dep2SearchBox.slideUp(300);
    },
  });

  //모바일 테블릿 햄버거 버튼

  mobileMenuBtn.click(function (e) {
    e.preventDefault();
    mobileLnbMenu.addClass("mobile-show");
  });

  mobileLnbCloseBtn.click(function (e) {
    e.preventDefault();
    mobileLnbMenu.removeClass("mobile-show");
  });

  //모바일 -테블릿 서치버튼
  mobileSearchBtn.click(function (e) {
    e.preventDefault();
    mobileSearchMenu.slideToggle(300);
  });

  mobileSearchCloseBtn.click(function (e) {
    e.preventDefault();
    mobileSearchMenu.slideUp(300);
  });
  searchTypeBtn.click(function (e) {
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
  });
});
