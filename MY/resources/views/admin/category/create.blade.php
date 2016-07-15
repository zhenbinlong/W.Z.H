@include("admin.layout.head")
<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />

<body>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/category">
                    <input type="hidden" name="_token" value="{{csrf_token()}}" />
                    <input type="hidden" name="pid" value="{{isset($data) ? $data->d_id : 0}}" />
    <input type="hidden" name="path" value="{{isset($data) ? $data->path.",".$data->d_id : 0}}" />
                    <div class="input-row">
                        
                        <p><label class="label fadeIn">父类：</label>
                            <input disabled type="text" name="cname" value="{{isset($data) ? $data->cname : "根类"}}" class="input fadeIn delay1"/>
                        
                    </div>
                    
                    <div class="input-row">
                        
                        <label class="label fadeIn">类名：</label>
                        
                        <input type="text" name="cname" value="" class="input fadeIn delay1"/>
                    </div>
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
                     <div class="input-row">
                       
                        <label class="label fadeIn">导航：</label>
                        <p><input type="radio" name="isNav" value="y" />是
        <input type="radio" name="isNav" value="n" checked />否</p>
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
   
    
</body>
@include("admin.layout.foot")