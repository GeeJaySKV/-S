$(document).ready(function(event){
    $("#doit").click(function(){
        if($("input").css('display') === 'none'){
            $("#button-div").animate({"margin-top": "120px"}, 700);
            $("#policy").animate({"margin-top": "275px"}, 700);
            $("input").css('display', 'block');
            $("input").animate({"opacity": "1"}, 1000);
        }else if($("input").css('display') === 'block' && ($("#name").val() === '' && $("#surname").val() === '' && $("#phone").val() === '' && $("#email").val() === '')){
            $("#button-div").animate({"margin-top": "-65px"}, 700);
            $("#policy").animate({"margin-top": "110px"}, 700);
            $("input").animate({"opacity": "0"}, 500);
            let displayNone = function(){$("input").css('display', 'none');}
            setTimeout(displayNone, 800);
        }
    })
})
$(window).resize(function(){
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    if(width < 1280){
        alert('Для ширины экрана < 1280, верстка не предусмотрена!!!');
    }else if(height < 720){
        alert('C такой высотой не будет красиво! :)');
    }
})