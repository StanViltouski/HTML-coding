
$(function () {

    var timer = null,
        form = $('.main_form');

    (function () { 
        if (!timer) {
            timer = setInterval(function () {
                form.animate({
                    "left": "68%"
                }).fadeTo(500, 1);
            }, 15000);
        }
    }());


    function stopAutoSlide() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    };


$('.main_button button').on({
    'click': function () {
        if (form.css('left') === "3000px") {
            form.animate({
                "left": "68%"
            }).fadeTo(500, 1);
        } else {
            form.animate({
                "left": "3000"
            }).fadeTo(500, 0.1);
            stopAutoSlide();
        }
    }
}),

$('#show_form').on('click', function () {
    form.animate({
        "left": "3000"
    }).fadeTo(500, 0.1);
    stopAutoSlide();
})

    
});