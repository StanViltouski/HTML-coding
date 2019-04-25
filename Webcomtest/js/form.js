$(function() {

  $(".filterPriceBkg_input").keypress(function(event){
    event = event || window.event;
    if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
    return false;
  });



  $('.select_link').click(function(){

    var dropBlock = $(this).parent().find('.drop');

    if( dropBlock.is(':hidden') ) {
      dropBlock.slideDown();

    $('.drop').find('li').click(function(){
      var selectResult = $(this).text();

      $(this).parent().parent().find('input').val(selectResult);

      $(this).parent().parent().find('.select_link').html(selectResult);

      dropBlock.slideUp();
    });

    } else {
      dropBlock.slideUp();
      }

    $(window).click(function(){
      dropBlock.slideUp();
    })

  return false;

});


  
});