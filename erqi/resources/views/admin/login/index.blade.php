<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>iTour后台管理-登录</title>
        <link href="/images/admin/favicon.ico" rel="shortcut icon"/>
        <link href="/css/admin/share.css" rel="stylesheet" type="text/css"/>
        <link href="/css/admin/login.css" rel="stylesheet" type="text/css"  />
        <link href="/css/admin/share1.css" rel="stylesheet" type="text/css"  />

        <link rel="stylesheet" type="text/css" href="{{ asset('plugins/wbox/wbox/wbox.css') }}" />
    </head>

    <body id="loginBody">
        <!--<div id="pointerOpen" onclick="hideLoginBezel()">开启登录</div>--> 
        
        <div id="loginBezel">
<!--             <div id="loginChildTop" onclick="hideLoginBezel()" title="点击将隐藏登录小窗口">　CMS管理平台</div>-->
           
            <div id="loginChildTop">　<img src="/images/admin/logo-right.png" width="57" height="50" align="absbottom"  /><strong><em>爱游网</em></strong> 后台管理系统</div>
            
            <!--错误提示-->
            <span>{{ session("info")}}</span>
            
            
            
            
            <div id="loginChildBottom">
                <table cellpadding="0" cellspacing="0" width="100%" height="95%" border="0">
                    
                    <form method="post" name="login" action="/Admin/login/logTodo">
                        <tr>
                            <input type="hidden" name="_token" value="{{$data["_token"] or csrf_token()}}" />
                            <td align="right" width="35%">账　号：</td>
                            <td align="left" width="65%"><input type="text" id="account"  class="inputUP" name="uname"  value="{{$data["uname"] or ''}}" size=30 /></td>
                        </tr>
                        <tr>
                            <td align="right">密　码：</td>
                            <td align="left"><input type="password" id="pwd" class="inputUP" name="password" value="{{$data["password"] or ''}}" size=30 /></td>
                        </tr>
                        <tr>
                            <td align="right">验证码：</td>
                            <td align="left"><input type="text" id="checkNum" name="code" size=10 maxlength=5 value="{{$data["code"] or ''}}"/>&nbsp;<span id="checkNumResult"><img src="{{url('/Admin/login/captcha').'/'.rand()}}" align="top" onclick="this.src = this.src.replace(/\d+$/, '') + Math.random();" ></span></td>

<!--<td align="left"><input type="text" id="checkNum"/>&nbsp;<span id="checkNumResult"><img src="/images/checkNum.jpg" id="checkImage" align="absbottom" alt="验证码" title="点击更换验证码" /></span></td>-->
                        </tr>
                        <tr>
                            <td align="center" colspan="2"><input type="button" id="btn" value="登　录"/> </td>
                        </tr> 
                       
                    </form>
                </table>
            </div>  
        </div>
        
        <script src="/js/jquery-1.8.3.min.js"></script>
        <script src="/js/admin/login.js"></script>
        <script src="/js/admin/login_index.js"></script>
        <script type="text/javascript" src="{{ asset('/plugins/wbox/jquery1.4.2.js') }}"></script> 
        <script type="text/javascript" src="{{ asset('/plugins/wbox/mapapi.js') }}"></script> 
        <script type="text/javascript" src="{{ asset('/plugins/wbox/wbox.js') }}"></script> 
        <div style="text-align:center;margin:180px 0 0 0">
            
            <p>&copy;2016 <em><strong> W.Z.H </strong><em> 版权所有</p>
        </div>
    </body>
</html>
