$(function () {
     
    var angle = 0;
    
$('.reviews_more').on('click', function(){

    if(angle === 0) {angle=180;} else {angle=0;}
    
      var img = $(this).children();
        $(img).css({'transform': 'rotate('+angle+'deg)', transition: "0.5s"});

})
     
});

