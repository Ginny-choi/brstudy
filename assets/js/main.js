$(document).ready(function () {
  const gnbBtn = $(".gnb-btn");
  const subMenu = $(".sub-menu");
  const dropMenu = $(".drop-menu");
  const dep2SearchBox = $(".dep2-search-box");

  const closeBtn = $(".close-btn");
  const menuBtn = $(".menu-btn");
  const searchBtn = $(".search-drop-btn");
  const dropCloseBtn = $(".drop-close-btn");
  const searchCloseBtn = $(".search-close-btn");

  gnbBtn.on({
    click: function (e) {
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
});
