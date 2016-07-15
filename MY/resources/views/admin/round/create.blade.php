@include("admin.layout.head")
<title>添加</title>


<!--前端验证未作-->



<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />

<body>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/round/store" enctype="multipart/form-data">
                    <div class="input-row">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <label class="label fadeIn">图片名称</label>
                        
                        <input type="text" name="rname" value="" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">图片</label>
                        <input id="username" type="file" name="rpicture" value="" data-fyll="pineapple" class="fadeIn delay1"/>
                    </div>

                    <div class="input-row">
                        <label class="label fadeIn delay2">是否使用:<input type="radio" name="ruse" value="启用"  checked id="启用"/>启用
                                                                <input type="radio" name="ruse" value="禁用" id="禁用" />禁用
                        </label>    
                    </div>

                    <div class="input-row perspective">
                        <p><input class="button load-btn fadeIn delay4" type="submit" value="添加" /></p>
                       
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

