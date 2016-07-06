@include("admin.layout.head")
<title>添加用户</title>


<!--前端验证未作-->



<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />

<body>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/user/store">
                    <div class="input-row">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <label class="label fadeIn">账号</label>
                        
                        <input type="text" name="uname" value="" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">密码</label>
                        <input id="username" type="password" name="password" value="" data-fyll="pineapple" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">确认密码</label>
                        <input id="username" type="password" name="repassword" value="" data-fyll="pineapple" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">昵称</label>
                        <input id="username" type="text" name="nickname" data-fyll="pineapple" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn delay2">性别</label>
                        <label><input type="radio" name="sex" value="男"  checked id="male" />男</label>
                        
                        <label ><input type="radio" name="sex" value="女" id="female"/>女</label>
                        
                    </div>

                    <div class="input-row perspective">
                        <p><input class="button load-btn fadeIn delay4" type="submit" value="添加" /></p>
                       
                    </div>
                </form>
            </div>
        </div>
      
    </div>
   
    
    <script type="text/javascript" src='/js/admin/jquery.js'></script>
    
    <script type="text/javascript" src="/js/admin/index_create.js"></script>
    <div style="text-align:left ;width:300px ;height:500px;border:1px  red;float:left;margin-left: 400px;margin:80px 0 0 400px">
    <div>
        {{ session("info") }}
        <ul>
            @if(count($errors) > 0)
                @foreach($errors->all() as $e)
                    <li style="width:200px;height:30px;color:red;">{{ $e }}</li>
                    
                @endforeach
            @endif
         </ul>
    </div>
    </div>
    
</body>
@include("admin.layout.foot")
