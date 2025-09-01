"use strict";
$(".participants__slider").slick({ arrows: !1, dots: !0 }),
  $(".winner__slider").slick({ arrows: !1, dots: !0 }),
  $(".feedback__slider").slick({ arrows: !1, dots: !0, adaptiveHeight: !0 }),
  $(".reviews__slider").slick({ arrows: !1, dots: !0, adaptiveHeight: !0 }),
  $(document).on("click", 'a[href^="#"]', function (t) {
    var e = $(this).attr("href"),
      r = $(e);
    if (0 !== r.length) {
      t.preventDefault();
      var s = r.offset().top;
      $("body, html").animate({ scrollTop: s });
    }
  });
