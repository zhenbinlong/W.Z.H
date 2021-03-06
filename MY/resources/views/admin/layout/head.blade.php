<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>iTour后台管理平台</title>
<link href="share/images/favicon.ico" rel="shortcut icon"/>
<link rel="stylesheet" type="text/css" href="/css/admin/share.css"/>
<link rel="stylesheet" type="text/css" href="/css/admin/index.css"/>
<link rel="stylesheet" type="text/css" href="/css/admin/share1.css"/>
<script src="/js/admin/jquery-1.11.0.min.js" type="application/javascript"></script>
<script type="text/javascript" src="/js/admin/jsUtil.js"></script>
<script src="/js/admin/index.js" type="application/javascript"></script>
<meta name="csrf-token" content="{{ csrf_token() }}" />
        <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        </script>
<!--<script src="/js/jquery-1.8.3.min.js" type="application/javascript"></script>-->


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
            <h4>后台用户管理</h4>
            <ul>
            	<li class="on"><a href="{{ url("/Admin/user")}}">用户列表</a></li>
            	<li><a href="{{ url("/Admin/user/create") }}">添加用户</a></li>
            	
            </ul>
            
            
            <h4>前台用户管理</h4>
            <ul>
            	<li class="on"><a href="{{ url("/Admin/member")}}">用户列表</a></li>
            	
            	
            </ul>
            
            
            <h4>分组管理</h4>
            <ul>
            	<li class="on"><a href="/Admin/group">分组列表</a></li>
            	<li><a href="/Admin/group/create">添加分组</a></li>
            	
            </ul>
            <h4>权限管理</h4>
            <ul>
            	<li class="on"><a href="{{url('/Admin/rule')}}">权限列表</a></li>
            	<li><a href="{{url('/Admin/rule/create')}}">添加权限</a></li>
            	
            </ul>
            <h4>分类管理</h4>
            <ul>
            	<li class="on"><a href="{{url('/Admin/category')}}">分类列表</a></li>
            	<li><a href="{{url('/Admin/category/create')}}">添加根类</a></li>
            	
            </ul>
            <h4>商品管理</h4>
            <ul>
            	<li class="on"><a href="{{url('/Admin/goods')}}">商品列表</a></li>
            	<li><a href="{{url('/Admin/goods/create')}}">添加商品</a></li>
            	
            </ul>
            <h4>轮播图管理</h4>
            <ul>
            	<li class="on"><a href="{{url('/Admin/round')}}">轮播图列表</a></li>
            	<li><a href="{{url('/Admin/round/create')}}">添加轮播图</a></li>
            	
            </ul>
             <h4>订单管理</h4>
            <ul>
            	<li class="on"><a href="{{url('/Admin/linelist')}}">订单列表</a></li>
            	<li><a href="{{url('/Admin/round/create')}}">添加轮播图</a></li>
            	
            </ul>
            <h4>友情链接管理</h4>
            <ul>
            	<li class="on"><a href="{{url('/Admin/category')}}">链接列表</a></li>
            	<li><a href="{{url('/Admin/category/create')}}">添加链接</a></li>
            	
            </ul>
        </div>
       <!-- <div id="showHideMenu"><div></div></div> -->
        <div class="rleft">
            
            