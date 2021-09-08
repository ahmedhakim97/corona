let x= Math.round(Math.random()*255)

let y = Math.round(Math.random()*255)

let z = Math.round(Math.random()*255)


$(".test").css("backgroundColor" , `rgb(${x},${y}, ${z})`);


$(".test").click(function(){
var currentcolor = $(this).css("backgroundColor")
$("p").css("color" , currentcolor);

})