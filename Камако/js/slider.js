window.addEventListener("load", function () {

    
    funSlSh(document.querySelectorAll("#slideShow")[0], document.querySelectorAll(".circles__cr"));

    function funSlSh(container, pointF) {
        
            pointF[1].style.backgroundColor='#fff';
        var buttonLeft = document.getElementById("arrows__arrL"),
            buttonRight = document.getElementById("arrows__arrR"),
            timerID = null,
            containerImg = container,
            containerImgLeft = -1358,
            containerImgStyle = containerImg.style,
            windowWidth = -1358,
            countCircle = 1,
            activeButton;
            startAutoSlide();
        
 window.addEventListener("resize", resize, false);
        
          function resize() {
              if (window.innerWidth < 800) {windowWidth = -320;} 
              else if ((window.innerWidth >= 800) && (window.innerWidth <= 1000)) {windowWidth = -800;} 
              else {windowWidth = - 1358;}
    };
                 (function resize4reload() {
              if (window.innerWidth < 800) {windowWidth = -320;} 
              else if ((window.innerWidth >= 800) && (window.innerWidth <= 1000)) {windowWidth = -800;} 
              else {windowWidth = - 1358;}
    }());
      
        
        container.addEventListener("mouseover", stopAutoSlide, false);
        container.addEventListener("mouseout", startAutoSlide, false);
        buttonLeft.addEventListener("mouseover", stopAutoSlide, false);
        buttonLeft.addEventListener("mouseout", startAutoSlide, false);
        buttonRight.addEventListener("mouseover", stopAutoSlide, false);
        buttonRight.addEventListener("mouseout", startAutoSlide, false);
        buttonLeft.addEventListener("click", initClick, false);
        buttonRight.addEventListener("click", initClick, false);

        
        function initClick(e) {
            
            activeButton = e.target;
            if (activeButton !== buttonLeft && activeButton !== buttonRight) return;
            
            switch (e.type) {
                case "click":
                    if (containerImg.style.left === "-1358px") {

                        if (activeButton === buttonLeft) {
                               containerImgLeft = -2716;
                                ++countCircle;
                               bkgCircle(); 
                                                    
                        } else {
                              containerImgLeft = 0;
                              --countCircle;
                               bkgCircle();  
                        }

                        TweenLite.to(containerImg, 0.5, {
                            css: {
                                left: containerImgLeft + "px"
                            },
                            onComplete: function () {transposition(containerImgLeft);
                            }
                        });

                    }
                    break;
            }
            
        }

        //переброс  блоков
        
        function transposition(d) {
            if (d === 0) {
                containerImg.insertBefore(containerImg.lastElementChild, containerImg.firstElementChild);
                containerImg.style.left = windowWidth + "px";

            } else if (d === (windowWidth*2)) {
                containerImg.appendChild(containerImg.firstElementChild);
                containerImg.style.left = windowWidth + "px";
            }
        }
        
        //цвет маркеров слайдера
        
            function bkgCircle() { 
                pointF.forEach(function(Element){
                    Element.style.backgroundColor="";
                });
                 if(countCircle>2) {countCircle=0} else if(countCircle<0) {countCircle=2}
                pointF[countCircle].style.backgroundColor="#fff";
              }
        
        //автослайдер
        
             function startAutoSlide() {
                if (!timerID) {
                    timerID = setInterval(function () {
                        
                          containerImgLeft = windowWidth*2;
                        
                          TweenLite.to(containerImg, 0.5, {
                            css: {
                                left: containerImgLeft + "px"
                            },
                            onComplete: function () {
                                transposition(containerImgLeft);
                            }
                        });
                    ++countCircle;
                    bkgCircle(); 
                        
                     
                    }, 10000);
                }
            };
        
        // стоп автослайдер
          function stopAutoSlide() {
                if (timerID) {
                    clearInterval(timerID);
                    timerID = null;
                }
            };
    }

}, false);
