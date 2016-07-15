//检测登录状态
$.getJSON('http://passport.baicheng.com/usercommon/islogin?callback=?',{},function (json) {
    if(json.value){
        $('#_headerNoLogin').hide();
        $('#_headerLogin_nickname').html(json.data);
        $('#_headerLogin').show();
    }
});

//公共退出
function _CommonLogout() {
    $.getJSON('http://passport.baicheng.com/usercommon/logout?callback=?',{},function (json) {
        if(json.value){

            
            $('#_headerLogin').hide();
            $('#_headerLogin_nickname').html('');
            $('#_headerNoLogin').show();
        }
    });
}
//其它登录方式
function otherLogin(type) {
    var win=window.open('http://passport.baicheng.com/userlogin/gologin/?type='+type,'newwindow','width=500px,heigh=250px,scrollbars=1');
    setInterval((function(win){return function(){
        if(win.closed){
            window.location.reload();
        }
    };})(win),1000);
}

// 判断屏幕高度
$(function(){
    resizeFn();
    $(window).resize(function(){
     resizeFn();
    }); 
    function resizeFn(){
      var _heigth = $(window).height(); 
      if(_heigth < 850){
        $(".passport_pwdlogin").addClass("smallh");
      }else{
        $(".passport_pwdlogin").removeClass("smallh");
      }
    }
});
// 服务条款弹框
$(function(){
  $(".passport_logininfo span.tytk i").click(function(){
    $(".scrmask").show();
    $(".sevrule").show();
  });
  $(".sevrule .layer_close").click(function(){
    $(".scrmask").hide();
    $(".sevrule").hide();
  });
});