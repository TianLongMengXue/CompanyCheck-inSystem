/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/5/27 22:48 星期一
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
/*function getScreenHeight() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return {
            "screenWidth" : width,
            "screenHeight" : height
        };
    };
$(window).resize(function () {
    $("#startAnimation").css("width", getScreenHeight().screenWidth);
    $("#startAnimation").css("height", getScreenHeight().screenHeight);
});*/
var spanObj = document.querySelectorAll('#startAnimation span');
var spanObjTranslateX = ['-384px','-272px','-160px','-48px','48px','150px','262px','374px'];
var spanObjColor = ['skyblue','blueviolet','blue','cadetblue','lightblue','cornflowerblue','dodgerblue','deepskyblue'];
for (var i = 0; i < spanObj.length; i++){
    spanObj[i].style.opacity = '0';
    spanObj[i].style.color = spanObjColor[i];
    spanObj[i].style.transform = 'translateX('+spanObjTranslateX[i]+')';
}
anime({
    targets: '#startAnimation span',
    translateX: {
        value: '-=40px',
        duration: 4000,
        direction: 'alternate'
    },
    translateY: {
        value: '150px',
        duration: 4000
    },
    rotate: {
        value: '+=2turn', // 0 * 2 = '2turn'
        duration: 1000,
        easing: 'easeInOutSine'
    },
    opacity: {
        value: '1',
        duration: 5000
    },
    delay: anime.stagger(100)
});
anime({
    targets: '#startAnimation',
    height: {
        value: '0',
        delay: 4000,
        duration: 3000
    },
    width: {
        value: '0',
        delay: 7000,
        duration: 10
    },
    opacity: {
        value: '0',
        delay: 4000,
        duration: 1800
    }
});
var setTimeoutId = setTimeout(function () {
    $('#startAnimation').css({'display':'none'});
},7000,function () {
    clearTimeout(setTimeoutId);
});
