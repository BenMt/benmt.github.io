// jpreLoader   ----------------------------------------
$("#main").jpreLoader({
    loaderVPos: "50%",
    autoClose: true
}, function() {
    $("#main").animate({
        opacity: "1"
    }, {
        queue: false,
        duration: 700,
        easing: "easeInOutQuad",
		complete:function() {
		    $(".scroll-nav").animate({
	        	left: 0
		    });
		    $(".scroll-nav a").each(function(a) {
		        var b = $(this);
		        setTimeout(function() {
		            b.animate({
		                left: 0
		            }, {
		                queue: false,
		                duration: 500,
		                easing: "easeInOutQuart"
		            });
		        }, 250 * a);
		    });
		}
    });
});
// functions   ----------------------------------------
function initKrobs() {
    "use strict";
	 // Author code here 
   
    $(".start-button").click(function(b) {
        b.preventDefault();
        $(".container").scrollTo($(this).attr("href"), 950, {
            easing: "swing",
            offset: 0,
            axis: "y"
        });
    });
    $(".gw").click(function(b) {
        b.preventDefault();
        $(".container").scrollTo($(this).attr("href"), 950, {
            easing: "swing",
            offset: -140,
            axis: "y"
        });
    });

// scroll nav   ----------------------------------------
    $(".scroll-nav a").bind("click", function(a) {
        a.preventDefault();
        $(".container").scrollTo($(this).attr("href"), 950, {
            easing: "swing",
            offset: 0,
            axis: "y"
        });
    });
// portfolio  ----------------------------------------
    $("#folio_container").mixitup({
        targetSelector: ".box",
        effects: [ "fade", "rotateX" ],
        easing: "snap",
        transitionSpeed: 700,
        layoutMode: "grid",
        targetDisplayGrid: "inline-block",
        targetDisplayList: "block"
    });
    $("#options li").click(function() {
        $("#options li").removeClass("actcat");
        $(this).addClass("actcat");
    });
// Magnific popup  ----------------------------------------
    $(".popup-with-move-anim").magnificPopup({
        type: "ajax",
        alignTop: true,
        overflowY: "scroll",
        fixedContentPos: true,
        fixedBgPos: false,
        closeBtnInside: false,
        midClick: true,
        modal: true,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        callbacks: {
            ajaxContentAdded: function() {
                $("#project-slider").owlCarousel({
                    navigation: true,
                    pagination: false,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    autoHeight: true,
                    singleItem: true
                });
            }
        }
    });
    $(document).on("click", ".popup-modal-dismiss", function(a) {
        a.preventDefault();
        $.magnificPopup.close();
    });
// folio hover   ----------------------------------------
    $.fn.duplicate = function(a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
     $("<span class='scale-callback transition2'></span>").duplicate(6).appendTo(".folio-overlay ");
    $(".box").hover(function() {
        var a = $(this);
        var b = $(this).find("div.folio-item");
        var c = $(this).find(".folio-item span.fol-but");
        var d = $(this).find(".folio-overlay span");
        var e = {
            queue: true,
            duration: 500,
            easing: "swing"
        };
        var f = {
            queue: true,
            duration: 900,
            easing: "easeInOutElastic"
        };
        if (a.hasClass("notvisible")) {
            b.stop(true, true).animate({
                opacity: "1"
            }, e);
            c.delay(350).animate({
                opacity: "1",
                bottom: "40%"
            }, f);
            setTimeout($.proxy(function() {
                d.each(function(a) {
                    var b = $(this);
                    setTimeout(function() {
                        b.removeClass("scale-callback");
                    }, 50 * a);
                });
            }, this), 250);
            a.removeClass("notvisible");
        } else {
            b.stop(true, true).animate({
                opacity: "0"
            }, f);
            c.animate({
                opacity: "0",
                bottom: "-50%"
            }, e);
            setTimeout($.proxy(function() {
                d.each(function(a) {
                    var b = $(this);
                    setTimeout(function() {
                        b.addClass("scale-callback");
                    }, 50 * a);
                });
            }, this), 250);
            a.addClass("notvisible");
        }
        return false;
    });

// services   ----------------------------------------
    $(".services-holder a[data-ser=modal]").click(function(a) {
        a.preventDefault();
        var b = $(this).attr("href");
        $(b).fadeIn(500);
    });
    $("<span class='closeser transition2'></span>").appendTo(".services-info");
    $(".closeser").click(function() {
        $(".services-info").fadeOut();
    });
    $(".scroll-btn").on("click", function(a) {
        a.preventDefault();
        $(".container").animate({
            scrollTop: 0
        }, {
            queue: false,
            duration: 1e3,
            easing: "easeInOutQuad"
        });
    });
}
// ajax portfolio  ----------------------------------------
function initajaxjs() {
    $("#project-slider").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: true,
        singleItem: true,
        touchDrag: false,
        mouseDrag: true
    });
    $(".elemajax").each(function(a) {
        var b = $(this);
        setTimeout(function() {
            b.animate({
                top: "0",
                opacity: 1
            }, {
                duration: 1200,
                easing: "easeInOutQuart"
            });
        }, 350 * a);
        $(".popup-gallery-ajax").magnificPopup({
            type: "image",
            tLoading: "Loading image #%curr%...",
            removalDelay: 600,
            mainClass: "my-mfp-slide-bottom",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [ 0, 1 ]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    });
}

$(window).load(function() {
    !function() {
        var a = $("#project-page-holder");
        var b = $(".open-project-link");
        index = b.length;
        $(".open-project-link").click(function() {
            $(".container").scrollTo("#options", 600, {
                axis: "y"
            });
            if ($(this).hasClass("actajax")) ; else {
                lastIndex = index;
                index = $(this).index();
                b.removeClass("actajax");
                $(this).addClass("actajax");
                var a = $(this).find("a.open-project").attr("href") + " .item-data";
                $("#project-page-data").animate({
                    opacity: 0
                }, 400, function() {
                    $("#project-page-data").load(a, function(a) {
                        var b = $(".helper");
                        var c = b.height();
                        $("#project-page-data").css({
                            height: ""
                        });
                    });
                 	$("#project-page-data").animate({
                        opacity: 1
                    }, 400);            
                });
                $("#project-page-holder").slideUp(600, function() {
                    $("#project-page-data").css("visibility", "visible");
                }).delay(500).slideDown(1e3, function() {
                    $("#project-page-data").fadeIn("slow", function() {
                        initajaxjs();
                    });
                });
            }
            return false;
        });
        $("#project_close").on("click", function(a) {
            a.preventDefault();
            $("#project-page-data").animate({
                opacity: 0
            }, 400, function() {
                $("#project-page-holder").slideUp(400);
                $(".project-page").find("iframe").remove();
            });
            $(".container").scrollTo("#options", 600, {
                axis: "y"
            });
            $(".open-project-link").removeClass("actajax");
            return false;
        });
    }();
});
// init   ----------------------------------------
$(document).ready(function() {
	console.log("%c %c contact@benoitmaigret.com %c %c","background: #F56D45","color: #F56D45; background: #222;","background: #F56D45","background: #F56D45");
    initKrobs();
});