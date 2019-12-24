window.addEventListener("load", function () {

    var glass = document.getElementById("search__glass"),
        form = document.getElementsByClassName("form__input")[0];


    glass.addEventListener("click", inClick, false);
    window.addEventListener("click", inClick, false);


    function inClick(e) {

        if (e.target === glass) {
            glass.style.display = "none";
            form.style.cssText = "display:block; right: 0px; top:0px;";
        } else if (e.target !== form && e.target !== glass) {
            glass.style.display = "block";
            form.style.cssText = "display:none; right: -200px";
        }
    }

}, false);
