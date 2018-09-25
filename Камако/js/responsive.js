window.addEventListener("load", loaded, false);


function loaded() {

    var mb = document.getElementById("css1"),
        timerID = null,
        pd = document.getElementById("css2"),
        dt = document.getElementById("css3"),
        slide = document.getElementById("slideShow"),
       pointF = document.querySelectorAll(".circles__cr");

    mb.disabled = pd.disabled = dt.disabled = true;

    F();

    window.addEventListener("resize", F, false);

    function F(evnt) {

        mb.disabled = true;
        pd.disabled = true;
        dt.disabled = true;

        if (window.innerWidth < 800) {

            mb.disabled = false;
            slide.style.left = "-320px";
            startAutoSlide();
          

        } else if ((window.innerWidth >= 800) && (window.innerWidth <= 1000)) {

            pd.disabled = false;
            slide.style.left = "-800px";
            color("", "#fff", "");
            startAutoSlide();

        } else {

            dt.disabled = false;
            slide.style.left = "-1358px";
            color("", "#fff", "");
            startAutoSlide();
            
            
            /*
            (function stopAutoSlide() {
                if (timerID) {
                    clearInterval(timerID);
                    timerID = null;
                }
            }());
            
            */
            
        }
    }
    
     function color(val_1, val_2, val_3) {
        pointF[0].style.backgroundColor = val_1;
        pointF[1].style.backgroundColor = val_2;
        pointF[2].style.backgroundColor = val_3;
    }
    
        function startAutoSlide() {
                if (!timerID) {
                    timerID = setInterval(function () {

                        slide.insertBefore(slide.lastElementChild, slide.firstElementChild);

                    }, 12000);
                }
            };
}
