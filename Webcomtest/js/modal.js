$(function(){

        $('.filters_mobile').on('click', function() {
            $('#jquery-overlay').slideToggle(200);
            $('.modal-window').slideToggle(200);

        });

         $('#jquery-overlay').on('click', function() {
            $('.modal-window').slideToggle(200);
            $(this).slideToggle(200);
        }); 

          $('.remove_modal').on('click', function() {
            $('.modal-window').slideToggle(200);
            $('#jquery-overlay').slideToggle(200);
        }); 
     
})
