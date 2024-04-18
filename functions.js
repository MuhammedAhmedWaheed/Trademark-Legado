$(document).ready(function() {

    //responsive menu
    $(".menu-bottom").on("click", function() {
        $("html").toggleClass("menu-open")
    });
    $(".menu-bottom").click(function() {
        $(this).toggleClass("click")
    });


    AOS.init({
        disable: 'mobile'
    });


    $(".popupform_pricing").validate();




    var currentIP = $("meta[name=ip2loc]").attr('content');
    var key = '5XpThOAEkfgOvEJ';

    $.ajax({
        method: 'get',
        url: 'https://pro.ip-api.com/json/' + currentIP,
        data: {
            key: key
        },
        success: function(data) {
            if (data) {
                $('input[name=ip2loc_ip]').val(data.query);
                $('input[name=ip2loc_isp]').val(data.isp);
                $('input[name=ip2loc_org]').val(data.org);
                $('input[name=ip2loc_country]').val(data.country);
                $('input[name=ip2loc_region]').val(data.regionName);
                $('input[name=ip2loc_city]').val(data.city);
            }
        }
    });





    /*PORTFOLIO*/
    $('.various').click(function() {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });


    $(".validate-banner").validate({});
    $(".validate-popupform").validate({});




    $('.lazy').lazy();

    //owlcarousel
    $('.owl-testimonial').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
            360: {
                items: 1
            }
        }
    });
    $('.owl-service').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
            360: {
                items: 1,
                nav: false
            }
        }
    });
    $('.owl-site-logo').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            },
            360: {
                items: 3,
            }
        }
    });
    $('.owl-site-logo2').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 4,
            },
            360: {
                items: 2,
            }
        }
    });

    $('.owl-portfolio').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 4,
            },
            360: {
                items: 2,
                nav: false,
            }
        }
    });


    var btn = $('#back-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });






});





// document.write("<script id='ze-snippet' src='https://static.zdassets.com/ekr/snippet.js?key=a0fe1ce1-55ac-4df5-9688-7dd79a605afb'> </script>");

function setButtonURL() {
    zE.activate();
}


$('.chat').click(function() {
    zE.activate();
});