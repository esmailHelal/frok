 var t = $(window);
    t.on("scroll", function() {
      var o = t.scrollTop(),
        a = $(".navbar");
      o > 300 ? a.addClass("fixed-top") : a.removeClass("fixed-top");
    })