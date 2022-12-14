/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/4 18:51 ζζδΊ
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
$('#head').css({'background':'rgba(255,255,255,.1)'});
var colorsExamples = anime.timeline({
    endDelay: 1000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    duration: 32000
}).add({
    targets: '#head',
    background: [
        {value: 'rgba(135,206,235,.8)'},
        {value: 'rgba(136,205,206,.8)'},
        {value: 'rgba(173,216,230,.8)'},
        {value: 'rgba(100,149,237,.8)'},
        {value: 'rgba(95,158,160,.8)'},
        {value: 'rgba(30,144,255,.8)'},
        {value: 'rgba(0,191,255,.8)'},
        {value: 'rgba(0,0,225,.8)'}
    ]
}, 0);
