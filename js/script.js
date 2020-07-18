//Анимация кнопки menu button и выпадающего меню
$(".menu-button").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("menu-button_active");
  $(".header-menu").toggleClass("header-menu_active");
});
$(".header-menu__item").on("click", function () {
  $(".header-menu").removeClass("header-menu_active");
  $(".menu-button").removeClass("menu-button_active");
});
//маска ввода телефона
$(function () {
  $(".calc-form__input-phone").mask("+7(999) 999-9999");
});
