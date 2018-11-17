window.addEventListener("load", loaded, false);


function loaded() {

    var mb = document.getElementById("css1"),
        timerID = null,
        pd = document.getElementById("css2"),
        dt = document.getElementById("css3"),
        slide = document.getElementById("slideShow");


    mb.disabled = pd.disabled = dt.disabled = true;

    F();

    window.addEventListener("resize", F, false);

    function F(evnt) {

        mb.disabled = true;
        pd.disabled = true;
        dt.disabled = true;

        if (window.innerWidth < 800) {
            
            mb.disabled = false;
            slide.style.left="-320px";

        } else if ((window.innerWidth >= 800) && (window.innerWidth <= 1000)) {
            
            pd.disabled = false;
            slide.style.left="-800px";
        
        } else {
            dt.disabled = false;
           slide.style.left="-1358px"; 
        }
    }
}
