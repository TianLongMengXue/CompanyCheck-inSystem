/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/10 3:44 ζζδΈ
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
$(document).ready(function(){
    $(".operation").load("./home.html");
});
function loadHtml(value) {
    var name = value+'.html';
    $(".operation").load(name);
}
