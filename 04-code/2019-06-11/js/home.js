/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/10 7:48 星期一
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
function myGetDate() {
    var dt = new Date();
    return {
        "hour": dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours(),
        "minute": dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes(),
        "second": dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds()
    }
}
$('.inner p:nth-of-type(2)').html(myGetDate().hour + ":" + myGetDate().minute + ":" + myGetDate().second);
setInterval(function () {
    $('.inner p:nth-of-type(2)').html(myGetDate().hour + ":" + myGetDate().minute + ":" + myGetDate().second);
}, 1000);
