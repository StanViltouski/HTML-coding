$(function() {

  let active = false;

  $('#mobile_nav a').on('click', function(){

    if(active == false) {

      $('#mobile_menu').css('display', 'block');
      active=true;
      block();

    } else {

      $('#mobile_menu').css({
        'height':'0px',
        transition: "0.5s"
      })
      active=false;
      none();
    }
  })

  function block() {
        $('#mobile_menu').css({
        'height':'165px',
        transition: "0.5s"
        })
  }

   function none() {
      setTimeout(function(){
      $('#mobile_menu').css('display', 'none');
  }, 500);
     
  }
  
});
