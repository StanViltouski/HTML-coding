$(function() {

  let select;
  let selectOne;

   $('.opt').on('click', function(){

      select = $(this).children().attr('href');
      anim();
  })

   $('.opt-1').on('click', function(){

      selectOne = $(this).children().attr('href');
      anim();
  })

  function anim() {
    $('.card').hide();

      if(selectOne === undefined) {

        $('.' + select).show(500);

    } else if(select === undefined){

        $('.' + selectOne).show(500);

    } else {$('.' + select + '.' + selectOne).show(500);}

  }

  $('.show_all').on('click', function(){
    $('.card').show();
  })

/* for filter "Price";

    $(".filterPriceBkg_input").keyup(function() {

         var clienPrice=$(this).val();

});

*/

});