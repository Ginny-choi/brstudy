$(document).ready(function () {
  const gnbBtn = $(".gnb-btn");
  const subMenu = $(".sub-menu");
  const dropMenu = $(".drop-menu");
  const closeBtn = $(".close-btn");
  const menuBtn = $(".menu-btn");
  const dropCloseBtn = $(".drop-close-btn");

  gnbBtn.on({
    click: function (e) {
      e.preventDefault();
      subMenu.hide();
      gnbBtn.removeClass("active");
      $(this).next().slideDown(300);
      $(this).addClass("active");
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
});
