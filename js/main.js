(function ($) {
    "use strict";

    $('#navi-list li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    // // Fine Tune smooth scroll
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 250) {
            $('.footer .totop').fadeIn();
        } else {
            $('.footer .totop').fadeOut();
        }

    })

    // Top to bottom btn
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
 

}(jQuery));

$(document).ready(function () {
	$("a[href*=#]").bind("click", function (e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(target).offset().top
				},
				600,
				function () {
					location.hash = target;
				}
			);
		return false;
	});
});

$(window)
	.scroll(function () {
		var scrollDistance = $(window).scrollTop();
		$(".page-section").each(function (i) {
			if ($(this).position().top <= scrollDistance) {
				$(".navigation a.active").removeClass("active");
				$(".navigation a").eq(i+1).addClass("active");
			}
		});
	})
	.scroll();