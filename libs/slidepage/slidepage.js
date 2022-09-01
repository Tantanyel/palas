;
(function ($) {
    $.fn.slidepage = function (pimp, center, layer) {
        var pag = 0;
        var maxp = $(layer).length - 1;
        var stopit = false;

        function height() {
            var frameHeight;
            if (self.innerHeight) {
                frameHeight = self.innerHeight;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                frameHeight = document.documentElement.clientHeight;
            } else if (document.body) {
                frameHeight = document.body.clientHeight;
            } else {
                frameHeight = 480;
            }
            return frameHeight;
        }


        var elem = document.getElementById('center');

        if (elem.addEventListener) {
            if ('onwheel' in document) {
                elem.addEventListener("wheel", page);
            } else if ('onmousewheel' in document) {
                elem.addEventListener("mousewheel", page);
            } else {
                elem.addEventListener("MozMousePixelScroll", page);
            }
        } else {
            elem.attachEvent("onmousewheel", page);
        }


        function page(e) {
            e.preventDefault();
            var delta = e.deltaY || e.detail || e.wheelDelta;
            if (!stopit) {
                if (delta>0) {
                    if(delta>30){
                        upp();
                    }
                }else{
                    if(delta<-30){
                        downp();
                    }
                }
            }
        }

        function downp(){
            if (pag > 0) {
                if(pag!=7){
                    animatero(".layer"+(pag+1));
                    pag--;
                    menu(pag);
                    stopit = true;
                    setTimeout(function() {
                       $(center).animate({
                        scrollTop: height() * pag
                    }, 0, 'swing', function () {
                        animater(".layer"+(pag+1));
                        setTimeout(function() {
                            stopit = false;
                        },1000)
                    });
                   }, 300);
                }else{
                    pag=6;
                    menu(pag);
                    stopit = true;
                    $(center).animate({
                        scrollTop: height() * pag
                    }, 200, 'swing', function () {
                        stopit = false;
                    });
                }
            }
        }
        function upp(){
            if (pag < maxp) {
                if(pag!=6){
                    animatero(".layer"+(pag+1));
                    pag++;
                    menu(pag);
                    stopit = true;
                    setTimeout(function() {
                       $(center).animate({
                        scrollTop: height() * pag
                    }, 0, 'swing', function () {
                        animater(".layer"+(pag+1));
                        setTimeout(function() {
                            stopit = false;
                        },1000)
                    });
                   }, 300);
                }else{
                    pag=7;
                    menu(pag);
                    stopit = true;
                    $(center).animate({
                        scrollTop: height() * pag
                    }, 500, 'swing', function () {
                        stopit = false;
                    });
                }
            }
        }

    }
}(jQuery, document));