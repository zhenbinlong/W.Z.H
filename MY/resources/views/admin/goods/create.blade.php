@include("admin.layout.head")
<title>添加路线</title>
<!--前端验证未作-->

<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />
<script src="/plugins/uploadify/jquery.uploadify.min.js"></script>
<link type="text/css" rel="stylesheet" href="/plugins/uploadify/uploadify.css">

<body><div id='preview' style="position: absolute;left: 600px;top: 330px"></div>
    <div id="window" style="display:none;">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/goods" enctype="multipart/form-data" name="fm">
                    <div class="input-row">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <input type="hidden" id="images" name="images" value="">
                        
                        <label class="label fadeIn">商品名称</label>
                        <input type="text" name="line_name" id="" value="" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">商品价格</label>
                        <input id="username" type="text" name="line_pri" value="" data-fyll="pineapple" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label">所属分类</label>
                        <select name="d_id" class="fadeIn delay1" style="height:40px;width: 100px;">
                            <option value="">-请选择-</option>
                            <?php
                            foreach ($categories as $key=>$cate){
                                if($key==0){
                                    echo '<optgroup label="' .$cate->cname. '" >';
                                    continue;
                                }
                                if($cate->pid==0){
                                    echo "</optgroup><optgroup label='" .$cate->cname. "'>";
                                }else{
                                    echo "<option value='" .$cate->d_id. "'>" .$cate->cname."</option>";
                                }
                            }
                            echo "<optgroup>";
                            ?>
                        </select>
                    </div>
                    
                    <div class="input-row">
                        <label class="label fadeIn">商品图片</label>
                        
                        <input id="upload" type="file" name="upload" data-fyll="pineapple" value="" class="fadeIn delay1"/>
                    </div>
                    
            </div>

                    <div class="input-row perspective">
                        <p><input class="button load-btn fadeIn delay4" type="submit" value="添加" /></p>
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
