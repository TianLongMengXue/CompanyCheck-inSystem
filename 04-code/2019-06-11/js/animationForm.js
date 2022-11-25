var current = null;
$('#username').on('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '245,1487',
            // value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
$('#word').on('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -330,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            // value: '240 1386',
            value: '245,1487',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
$('#captcha').on('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -680,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            // value: '240 1386',
            value: '245,1487',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
$('#submit').on('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -1045,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '530 1487',
            // value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
