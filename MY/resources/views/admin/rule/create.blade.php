@include("admin.layout.head")
<title>添加用户</title>


<!--前端验证未作-->



<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />

<body>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/rule">
                    <input type="hidden" name="_token" value="{{csrf_token()}}" />
                    
                    <div class="input-row">
                    
                        <label class="label fadeIn">权限：</label>

                        <input type="text" name="name" value="{{ old("name")}}" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                    
                        <label class="label fadeIn">名称：</label>

                        <input type="text" name="title" value="{{ old("title")}}" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                    
                        <label class="label fadeIn">状态：</label>

                        <input type="radio" name="status" value="1" class=""/>有效
                        <input type="radio" name="status" value="0" class=""/>禁用
                    </div>

                    <div class="input-row perspective">
                        <p><input class="button load-btn fadeIn delay4" type="submit" value="保存" /></p>

                    </div>
                </form>
            </div>
        </div>

    </div>


<!--<script type="text/javascript" src='/js/admin/jquery.js'></script>-->

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
