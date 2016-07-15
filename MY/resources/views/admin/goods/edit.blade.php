@include("admin.layout.head")
<title>修改路线</title>
<!--前端验证未作-->

<link rel="stylesheet" href="/css/admin/reset.css"> 
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />
<script src="/plugins/uploadify/jquery.uploadify.min.js"></script>
<link type="text/css" rel="stylesheet" href="/plugins/uploadify/uploadify.css">

<body><div id='preview' style="position: absolute;left: 600px;top: 330px"><img src="{{$goods->images}}"></div>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/goods/{{$goods->line_id}}" enctype="multipart/form-data" name="fm">
                    <div class="input-row">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <input type="hidden" id="images" name="images" value="{{$goods->images}}">
                        <input type="hidden" name="_method" id="images" value="PUT" />
                        
                        
                        <label class="label fadeIn">路线名称</label>
                        <input type="text" name="line_name" id="" value="{{$goods->line_name}}" class="input fadeIn delay1"/>
                    </div>
                    
                    
                     <div class="input-row">
                        <label class="label fadeIn">路线分类</label>
                        <input id="username" type="text" name="line_pri" value="{{$goods->line_type}}" data-fyll="pineapple" class="input fadeIn delay1"/>
                    </div>
                    
                    
                    
                    
                    
                    <div class="input-row">
                        <label class="label fadeIn">商品价格</label>
                        <input id="username" type="text" name="line_pri" value="{{$goods->line_pri}}" data-fyll="pineapple" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label">所属分类</label>
                        <select name="d_id" class="fadeIn delay1" style="height:40px;width: 100px;">
                            <option value="">-请选择-</option>
                            <?php
                            $flag = 0;
                            foreach ($categories as $key => $cate) {
                                if ($cate->d_id == 0) {
                                    $flag++;
                                    echo $flag % 2 == 1 ? "<optgroup label='" . $cate->cname . "'>" : "</optgroup><optgroup label='" . $cate->cname . "'>";
                                } else {
                                    if ($cate->d_id == $goods->d_id) {
                                        echo "<option value='" . $cate->d_id . "' selected >" . $cate->cname . "</option>";
                                    } else {
                                        echo "<option value='" . $cate->d_id . "'>" . $cate->cname . "</option>";
                                    }
                                }
                            }
                            echo "</optgroup>";
                            ?>
                        </select>
                    </div>

                    <div class="input-row">
                        <label class="label fadeIn">商品图片</label>

                        <input id="upload" type="file" name="upload" data-fyll="pineapple" value="" class="fadeIn delay1"/>
                    </div>

            </div>

            <div class="input-row perspective">
                <p><input class="button load-btn fadeIn delay4" type="submit" value="修改" /></p>
            </div>
            </form>
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
    <script src="/js/admin/goods_create.js"></script>
</body>
@include("admin.layout.foot")
