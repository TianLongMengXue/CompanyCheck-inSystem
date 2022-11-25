/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/8 8:04 星期六
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
var inner = $('.inner');
var spanHeight = inner.height()/2 + 'px';
var spanWidth = inner.width() +'px';

anime({
    targets: '.inner span:nth-child(1)',
    translateY: {
        value: '-'+spanHeight,
        delay: 1300,
        duration: 300
    },
    width: {
        value: spanWidth,
        delay: 500,
        duartion: 800
    },
    easing: 'easeInOutSine'
});
anime({
    targets: '.inner span:nth-of-type(2)',
    translateY: {
        value: spanHeight,
        delay: 1300,
        duration: 300
    },
    width: {
        value: spanWidth,
        delay: 500,
        duartion: 800
    },
    easing: 'easeInOutSine'
});
var svgWidth = $('.inner svg').width()/2;
var svgXSide = inner.width()/2 - svgWidth;
var svgXCenter = inner.width()/4 - svgWidth;
anime({
    targets: '.startAnimation svg:nth-of-type(1)',
    translateX: {
        // value: '-200px',
        value: '-'+svgXSide,
        duration: 2000
    },
    opacity: {
        value: '1',
        duration: 1000
    },
    delay: 2000
});
anime({
    targets: '.startAnimation svg::nth-of-type(1) .qian',
    fill: '#00BFFF',
    delay: 2000,
    duration: 1000
});
anime({
    targets: '.startAnimation svg:nth-of-type(2)',
    translateX: {
        // value: '-200px',
        value: '-'+svgXCenter,
        duration: 2000
    },
    opacity: {
        value: '1',
        duration: 1000
    },
    delay: 2000
});
anime({
    targets: '.startAnimation svg:nth-of-type(2) .dao',
    fill: '#00BFFF',
    delay: 2000,
    duration: 1000
});
anime({
    targets: '.startAnimation svg:nth-of-type(3)',
    translateX: {
        // value: '-200px',
        value: svgXCenter,
        duration: 2000
    },
    opacity: {
        value: '1',
        duration: 1000
    },
    delay: 2000
});
anime({
    targets: '.startAnimation svg:nth-child(3) .xi',
    fill: '#00BFFF',
    delay: 2000,
    duration: 1000
});
anime({
    targets: '.startAnimation svg:nth-of-type(4)',
    translateX: {
        // value: '-200px',
        value: svgXSide,
        duration: 2000
    },
    opacity: {
        value: '1',
        duration: 1000
    },
    delay: 2000
});
anime({
    targets: '.startAnimation svg:nth-child(4) .tong',
    fill: '#00BFFF',
    delay: 2000,
    duration: 1000
});
anime({
    targets: '.startAnimation',
    height: {
        value: '0',
        delay: 5000,
        duration: 3000
    },
    width: {
        value: '0',
        delay: 8000,
        duration: 10
    },
    opacity: {
        value: '0',
        delay: 5000,
        duration: 1800
    }
});
var setTimeoutId = setTimeout(function () {
    $('#startAnimation').css({'display': 'none'});
}, 7000, function () {
    clearTimeout(setTimeoutId);
});
