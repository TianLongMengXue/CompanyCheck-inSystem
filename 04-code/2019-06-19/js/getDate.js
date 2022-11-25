/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/13 23:10 星期四
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
function myGetDate (){
    var dt = new Date();
    var week = ["日","一","二","三","四","五","六"];
    return {
        "year" : dt.getFullYear(),
        "month" : (dt.getMonth()+1) < 10 ? "0" + (dt.getMonth()+1) : (dt.getMonth()+1),
        "day" : dt.getDate() < 10 ? "0"+ dt.getDate() : (dt.getDate()),
        "hour" : dt.getHours() < 10 ? "0"+dt.getHours() : dt.getHours(),
        "minute" : dt.getMinutes() < 10 ? "0"+dt.getMinutes() : dt.getMinutes(),
        "second" : dt.getSeconds() < 10 ? "0"+dt.getSeconds() : dt.getSeconds(),
        "week" : week[dt.getDay()]
    }
}
function changeTime(){
    $('.infoTimeInner h4:nth-of-type(1)').html(myGetDate().year+'年'+myGetDate().month+'月'+myGetDate().day+'日&nbsp;&nbsp;星期'+myGetDate().week);
    $('.infoTimeInner h4:nth-of-type(2)').html(myGetDate().hour+':'+myGetDate().minute+':'+myGetDate().second);
}
changeTime();
setInterval(function () {
    changeTime();
},1000);
