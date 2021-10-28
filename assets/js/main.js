$(document).ready(function () {
  const gnbBtn = $(".gnb-btn");
  const subMenu = $(".sub-menu");
  const closeBtn = $(".close-btn");

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
});
