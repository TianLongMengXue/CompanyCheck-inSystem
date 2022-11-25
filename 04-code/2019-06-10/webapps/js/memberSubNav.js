/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/9 20:26 星期日
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */

/* 初始化菜单列表 */
function initSubNavUl() {
    $('.subNav > ul').css({'height': '40px'});
    $('.subNav > ul:first-child').addClass('active');
    $('.subNav > ul:first-child > li > a').addClass('active');
}

initSubNavUl();
/* 为菜单主功能项添加点击事件 */
$('.subNav> ul> li:first-child').on('click', function () {
    // 清除已存在的选种样式
    var lastTargetActive = $(".subNav ul.active");
    lastTargetActive.children().children().removeClass('active');
    lastTargetActive.stop().animate({'height': '40px'}, 500);
    lastTargetActive.removeClass('active');
    // lastTargetActive.children().removeClass('active');
    // 为被点击的模块添加选中样式
    var target = $(this).parent();
    var newHeight = 40 + 25 * (target.children().length - 1) + 'px';
    target.addClass('active');
    target.stop().animate({'height': newHeight}, 500);
    $(this).children().addClass('active');
    // $(this).children().addClass('active');
});
/* 为菜单子功能添加点击事件 */
$('.subNav > ul > .item').on('click', function () {
    $('.subNav > ul > .item').children().removeClass('active');
    $(this).children().addClass('active');
});
