window.addEventListener("load", function () {


    var buttonLeft = document.getElementById("arrows__arrL"),
        buttonRight = document.getElementById("arrows__arrR"),
        pointF = document.querySelectorAll(".circles__cr"),
        slide = document.getElementById("slideShow");
    
    
    pointF[1].style.backgroundColor = "#fff";


    buttonLeft.addEventListener("click", initClick, false);
    buttonRight.addEventListener("click", initClick, false);
    pointF[0].addEventListener("click", initClick, false);
    pointF[1].addEventListener("click", initClick, false);
    pointF[2].addEventListener("click", initClick, false);

    function initClick(e) {
        activeButton = e.target;
        switch (e.target) {

            case buttonLeft:
                if (slide.style.left === "-1358px") {
                    action(-2716);
                    color("", "", "#fff");
                    stopAutoSlide();
                }

                if (slide.style.left === "0px") {
                    action(-1358);
                    color("", "#fff", "");
                }

                break;

            case buttonRight:
                if (slide.style.left === "-2716px") {
                    action(-1358);
                    color("", "#fff", "");
                }

                if (slide.style.left === "-1358px") {
                    action(0);
                    color("#fff", "", "");
                }

                break;

            case pointF[0]:
                action(0);
                color("#fff", "", "");
                break;

            case pointF[1]:
                color("", "#fff", "");
                if ((window.innerWidth >= 800) && (window.innerWidth <= 1000)) {
             
                    action(-800);
                } else {
                    action(-1358);
                }

                break;

            case pointF[2]:
                color("", "", "#fff");
                if ((window.innerWidth >= 800) && (window.innerWidth <= 1000)) {

                    action(-1600);
                } else {
                    action(-2716);
                }
                break;

        }
    }

    function action(val) {
        TweenLite.to(slide, 1, {
            css: {
                left: val + "px"
            }
        });
    }

    function color(val_1, val_2, val_3) {
        pointF[0].style.backgroundColor = val_1;
        pointF[1].style.backgroundColor = val_2;
        pointF[2].style.backgroundColor = val_3;
    }


}, false);
