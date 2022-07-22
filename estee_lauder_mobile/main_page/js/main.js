document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";

$(function () {
  $(".main_visual").slick({
    slide: "div",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ' <div class="ms_left"></div>',
    nextArrow: ' <div class="ms_right"></div>',
  });
});
