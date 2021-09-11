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