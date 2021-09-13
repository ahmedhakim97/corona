// for navbar scroll ; 
$(window).scroll(function(){


    let wScroll =   $(window).scrollTop();
    let headerOffset = $("#banner").offset().top;
 
    if(wScroll > 100)
    {
    
     $("nav ul li a , nav #logo ").css("color" ,"black");
        $("nav").addClass("fixed-top");
        $("#btnScroll").fadeIn(2000)
    }
    else 
    {
     $("nav").removeClass("fixed-top");
     $("#btnScroll").fadeOut(2000)
 
    }
 
 });

 $("#btnScroll").click(function(){
    $(this).css("border" ,"1px solid  rgb(43,86,245)")
$("html , body").animate({scrollTop : `0px`} , 1000)
});

// ***************************************** //
$(document).ready(function() {

    // Start Frequently Section
    var menuContext = $('.faq .faq-boxs .faq-left-box ul li');
    var blockContext = $('.faq .faq-boxs .faq-right-box > div');
    var Content = $('.faq .faq-boxs .faq-right-box');

    $(menuContext).click(function() {
        $(menuContext).removeClass('active');
        $(this).addClass('active');
        $(blockContext).hide();
        $(titleContent).find(".body").hide();
        $(titleContent).find(".body.first").show();
        $(icon).find(".plus").show();
        $(icon).find(".minus").hide();
        $(icon).find(".minus.first").show();
        $(icon).find(".plus.first").hide();
        $(titleContent).removeClass('change-color');
        $(titleContent).has(".first").addClass('change-color');

        if ($(this).hasClass('spreads')) {
            $(Content).find(".spreads").show();

        } else if ($(this).hasClass('protects')) {
            $(Content).find(".protects").show();

        } else if ($(this).hasClass('symptom')) {
            $(Content).find(".symptom").show();

        } else if ($(this).hasClass('outbreak')) {
            $(Content).find(".outbreak").show();

        } else if ($(this).hasClass('busters')) {
            $(Content).find(".busters").show();

        } else {
            $(Content).find(".disease").show();
        }
    })

    var mainTitle = $('.faq .faq-boxs .faq-right-box div ul li.main-title');
    var icon = $('.faq .faq-boxs .faq-right-box div ul li');
    var titleContent = $('.faq .faq-boxs .faq-right-box div ul');
    $(mainTitle).click(function() {
            if ($(this).hasClass('first')) {
                $(titleContent).find(".body.first").toggle();
                $(titleContent).has(".first").toggleClass('change-color');
                $(icon).find(".plus.first").toggle();
                $(icon).find(".minus.first").toggle();

            } else if ($(this).hasClass('second')) {
                $(titleContent).find(".body.second").toggle();
                $(titleContent).has(".second").toggleClass('change-color');
                $(icon).find(".plus.second").toggle();
                $(icon).find(".minus.second").toggle();

            } else if ($(this).hasClass('third')) {
                $(titleContent).find(".body.third").toggle();
                $(titleContent).has(".third").toggleClass('change-color');
                $(icon).find(".plus.third").toggle();
                $(icon).find(".minus.third").toggle();

            } else if ($(this).hasClass('fourth')) {
                $(titleContent).find(".body.fourth").toggle();
                $(titleContent).has(".fourth").toggleClass('change-color');
                $(icon).find(".plus.fourth").toggle();
                $(icon).find(".minus.fourth").toggle();

            } else if ($(this).hasClass('fifth')) {
                $(titleContent).find(".body.fifth").toggle();
                $(titleContent).has(".fifth").toggleClass('change-color');
                $(icon).find(".plus.fifth").toggle();
                $(icon).find(".minus.fifth").toggle();

            } else if ($(this).hasClass('sixth')) {
                $(titleContent).find(".body.sixth").toggle();
                $(titleContent).has(".sixth").toggleClass('change-color');
                $(icon).find(".plus.sixth").toggle();
                $(icon).find(".minus.sixth").toggle();

            } else if ($(this).hasClass('seventh')) {
                $(titleContent).find(".body.seventh").toggle();
                $(titleContent).has(".seventh").toggleClass('change-color');
                $(icon).find(".plus.seventh").toggle();
                $(icon).find(".minus.seventh").toggle();

            } else if ($(this).hasClass('eighth')) {
                $(titleContent).find(".body.eighth").toggle();
                $(titleContent).has(".eighth").toggleClass('change-color');
                $(icon).find(".plus.eighth").toggle();
                $(icon).find(".minus.eighth").toggle();

            }
        })
        // Finish Frequently Section
});