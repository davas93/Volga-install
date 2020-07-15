//Анимация кнопки menu button
$(".menu-button").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("menu-button_active");
});
