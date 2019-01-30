$(function () {

      $('.coursesBlocksItem_content').on({
          'mouseenter':function(){
           var text=$(this).children()[0];
           var button=$(this).children()[1];
           $(text).css({'padding-top':'20%', transition: "0.5s"});
           $(button).css({
               'margin-top':'-70px',
               'opacity':'1',
               transition: "0.5s"
           }); 
           
       },
           'mouseleave':function(){
            var text=$(this).children()[0];
            var button=$(this).children()[1];
            $(text).css({'padding-top':'30%', transition: "0.5s"});
            $(button).css({
                'margin-top':'-80px',
                'opacity':'0',
                transition: "0.5s"
            });   
       }
         
      })
    
});

