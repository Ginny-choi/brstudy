$(document).ready(function () {
  const $window = $(window);
  const gnbBox = $(".gnb-box");
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

  gnbBox.mouseleave(function () {
    subMenu.hide();
    gnbBtn.removeClass("active");
  });

  //웹 햄버거 버튼

  menuBtn.on({
    click: function (e) {
      e.preventDefault();
      dropMenu.toggleClass("active");
    },
  });

  dropCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      dropMenu.removeClass("active");
    },
  });

  //웹 서치 버튼

  searchBtn.on({
    click: function (e) {
      e.preventDefault();
      dep2SearchBox.toggleClass("active");
    },
  });
  searchCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      dep2SearchBox.removeClass("active");
    },
  });

  //모바일 테블릿 햄버거 버튼
  mobileMenuBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileLnbMenu.addClass("mobile-show");
    },
  });

  mobileLnbCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileLnbMenu.removeClass("mobile-show");
    },
  });

  //모바일 -테블릿 서치버튼
  mobileSearchBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileSearchMenu.toggleClass("active");
    },
  });

  mobileSearchCloseBtn.on({
    click: function (e) {
      e.preventDefault();
      mobileSearchMenu.removeClass("active");
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
});
