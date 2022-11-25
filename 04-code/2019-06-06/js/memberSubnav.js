/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/5 8:35 星期三
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
function initSubnavUl() {
    $('#memberSubnav > ul').css({'height':'40px'});
    $('#memberSubnav ul:first-child').addClass('active');
    $('#memberSubnav ul:first-child li').children().addClass('active');
}
initSubnavUl();
// 功能按钮点击事件的
$('#memberSubnav ul li:first-child').on('click',function () {
    // 清除之前标签的激活状态
    $('#memberSubnav ul.active span.active').removeClass('active');
    $('#memberSubnav ul.active a.active').removeClass('active');
    // $('#memberSubnav ul.active').removeClass('active').css({"height":'40px'});
    $('#memberSubnav ul.active').removeClass('active').stop().animate({"height":'40px'},500);
    //
    var newHeight = ($(this).parent().children().length - 1) * 28 + 40;
    // $(this).parent().addClass('active').css({"height":newHeight+"px"});
    $(this).parent().addClass('active').stop().animate({"height":newHeight+"px"},500);
    $(this).children().addClass('active');
});
$('#memberSubnav ul li.item').on('click',function () {
    $('#memberSubnav ul li.item').children().removeClass('active');
    $(this).children().addClass('active');
});
