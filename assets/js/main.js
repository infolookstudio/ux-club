(function ($) {
    'use strict';

    $(window).on("load", function() {
		background()
		// checkSize();
	    // $(window).resize(checkSize);
	    
	    //preloader
	    $("#preloader").delay(300).animate({
	      "opacity" : "0"
	      }, 500, function() {
	      $("#preloader").css("display","none");
	    });

	  });

	  // Mobile menu js
	  $('#navMenu').slicknav({
	  	prependTo: ".mobile-menu",
	  	label: ""
	  });

	  $('select').niceSelect();

	  // Activate lightcase
	  $('a[data-rel^=lightcase]').lightcase();

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	$(".rocket-by a.bkashh1").on("click", function () {
		$("a.bkashh1").addClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$("a.bkashh1").removeClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$("a.rocketts").addClass("active");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$("a.rocketts").removeClass("active");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$(".bkash").addClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$(".bkash").removeClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$(".rocket").addClass("active");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$(".rocket").removeClass("active");
	});

	

})(jQuery);