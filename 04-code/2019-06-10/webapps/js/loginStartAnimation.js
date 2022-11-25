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

anime({
    targets: '.startAnimation svg:nth-child(1)',
    translateX: {
        // value: '-200px',
        value: '-120px',
        duration: 4000,
        direction: 'alternate'
    },
    translateY: {
        value: '220px',
        duration: 4000
    },
    rotate: {
        value: '+=2turn', // 0 * 2 = '2turn'
        duration: 1000,
        easing: 'easeInOutSine'
    },
    delay: 1000
});
anime({
    targets: '.startAnimation svg:nth-child(1) .qian',
    fill: '#00BFFF',
    delay: 1000,
    duration: 3000
});
anime({
    targets: '.startAnimation svg:nth-child(2)',
    translateX: {
        // value: '-100px',
        value: '-60px',
        duration: 4000,
        direction: 'alternate'
    },
    translateY: {
        value: '220px',
        duration: 4000
    },
    rotate: {
        value: '+=2turn', // 0 * 2 = '2turn'
        duration: 1000,
        easing: 'easeInOutSine'
    },
    delay: 1100
});
anime({
    targets: '.startAnimation svg:nth-child(2) .dao',
    fill: '#5F9EA0',
    delay: 1100,
    duration: 3000
});
anime({
    targets: '.startAnimation svg:nth-child(3)',
    translateX: {
        // value: '100px',
        value: '60px',
        duration: 4000,
        direction: 'alternate'
    },
    translateY: {
        value: '220px',
        duration: 4000
    },
    rotate: {
        value: '+=2turn', // 0 * 2 = '2turn'
        duration: 1000,
        easing: 'easeInOutSine'
    },
    delay: 1200
});
anime({
    targets: '.startAnimation svg:nth-child(3) .xi',
    fill: '#8A2BE2',
    delay: 1200,
    duration: 3000
});
anime({
    targets: '.startAnimation svg:nth-child(4)',
    translateX: {
        // value: '200px',
        value: '120px',
        duration: 4000,
        direction: 'alternate'
    },
    translateY: {
        value: '220px',
        duration: 4000
    },
    rotate: {
        value: '+=2turn', // 0 * 2 = '2turn'
        duration: 1000,
        easing: 'easeInOutSine'
    },
    delay: 1300
});
anime({
    targets: '.startAnimation svg:nth-child(4) .tong',
    fill: '#0000FF',
    delay: 1300,
    duration: 3000
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
