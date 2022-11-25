/*
* Filename:
* Description:
* Version: 1.0
* Created: 2019/6/4 21:53 星期二
* Revision: none
* Compiler:
* Author: DreamDraco SnowBrother
* Company:
* */
/*用户名长度校验 开始*/
$("#username").on('focus',function () {
    $('#middle .usernameMessage').text('');
    $('#middle .usernameMessage').removeClass('error');
});
$("#username").on('blur',function () {
    var username = $('#username').val();
    console.log(username);
    console.log($('#username').val());
    // js校验用户名长度
    if (username.length > 16 || username.length < 6){
        console.log(username.length);
        $('#middle .usernameMessage').text('用户名长度不符');
        $('#middle .usernameMessage').addClass('error');
    }
    else{
        $('#middle .usernameMessage').text('用户名格式正确');
        $('#middle .usernameMessage').addClass('sure');
    }
});
/*用户名长度校验 结束*/

$('#login').on('click',function () {
    window.location.href = './member.html';
});
