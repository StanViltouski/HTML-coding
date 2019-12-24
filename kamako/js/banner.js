window.addEventListener("load", function () {

    var stop = document.getElementsByClassName("banner__button")[0],
        banner = document.getElementsByClassName("banner")[0];

    stop.addEventListener("click", bannerOff, false);


    function bannerOff() {
        banner.style.display = "none";
    }

}, false);
