//Анимация кнопки menu button
$(".menu-button").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("menu-button_active");
  $(".header-menu").toggleClass("header-menu_active");
});
$(".header-menu__item").on("click", function () {
  $(".header-menu").removeClass("header-menu_active");
  $(".menu-button").removeClass("menu-button_active");
});
