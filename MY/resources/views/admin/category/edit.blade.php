@include("admin.layout.head")
<title>添加用户</title>


<!--前端验证未作-->



<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />

<body>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/category/{{$category->d_id}}">
                    
                    
                    <div class="input-row">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <input type="hidden" name="_method" value="PUT" />
                        <label class="label fadeIn">类名：</label>
                        
                        <input type="text" name="cname" value="{{$category->cname}}" class="input fadeIn delay1"/>
                    </div>
                     <div class="input-row">
                       
                        <label class="label fadeIn">导航：</label>
                        <p><input type="radio" name="isNav" value="y" @if($category->isNav == "y") checked @endif  />是
        <input type="radio" name="isNav" value="n" @if($category->isNav == "n") checked @endif  />否</p>
                    </div>
                    
              
                    <div class="input-row perspective">
                        <p><input class="button load-btn fadeIn delay4" type="submit" value="修改" /></p>
                       
                    </div>
                </form>
            </div>
        </div>
      
    </div>
   
    
    
    
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
