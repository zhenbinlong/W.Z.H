<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CMS后台管理平台-首页</title>
<link href="share/images/favicon.ico" rel="shortcut icon"/>
<link rel="stylesheet" type="text/css" href="/css/admin/share.css"/>
<link rel="stylesheet" type="text/css" href="/css/admin/index.css"/>
<link rel="stylesheet" type="text/css" href="/css/admin/share1.css"/>
<script src="/js/admin/jquery-1.11.0.min.js" type="application/javascript"></script>
<script type="text/javascript" src="/js/admin/jsUtil.js"></script>
<script src="/js/admin/index.js" type="application/javascript"></script>
<script src="/js/jquery-1.8.3.min.js" type="application/javascript"></script>
</head>

<body>
<div class="bezel" id="bezel-id">
    <div class="head">
        <div class="hleft"><span class="head-icon">iTour管理平台</span></div>
       <div class="hcenter"> </div>
        	
       
        <div class="hright">
        	<span>您好 ，<a style="color:#a6e1ec" href="{{url("/Admin")}}"><em>{{ Session::get("userData")->uname }} </em></a>  欢迎登录使用！ 　<a class="outLogin" href="/Admin/login/logout">退出</a></span>
        </div>
    </div>
    <div class="center">
        <div class="cleft" id="cleft-id">
            
            <h4 class="on">用户管理</h4>
            <ul style="display:block;">
            	<li class="on"><a href="{{ url("/Admin/user")}}" target="contentMain">用户列表</a></li>
            	<li><a href="{{ url("/Admin/user/create") }}" target="contentMain">添加用户</a></li>
            	
            </ul>
            
            <h4>内容管理</h4>
            <ul>
            	<li class="on"><a href="javascript:void(0)">角色管理</a></li>
            	<li><a href="javascript:void(0)">用户管理</a></li>
            	<li><a href="javascript:void(0)">权限管理</a></li>
            	<li><a href="javascript:void(0)">用户管理</a></li>
            	<li><a href="javascript:void(0)">权限管理</a></li>
            	<li><a href="javascript:void(0)">用户管理</a></li>
            	<li><a href="javascript:void(0)">权限管理</a></li>
            	<li><a href="javascript:void(0)">用户管理</a></li>
            	<li><a href="javascript:void(0)">权限管理</a></li>
            	<li><a href="javascript:void(0)">用户管理</a></li>
            	<li><a href="javascript:void(0)">权限管理</a></li>
            	<li><a href="javascript:void(0)">用户管理</a></li>
            	<li><a href="javascript:void(0)">权限管理</a></li>
            </ul>
            <h4>业务管理</h4>
            <h4>站点管理</h4>
        </div>
       <!-- <div id="showHideMenu"><div></div></div> -->
        <div class="rleft">
            
            