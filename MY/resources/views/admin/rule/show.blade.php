
<link rel="stylesheet" href="/css/admin/reset.css">
<link rel="stylesheet" href="/css/admin/style.css" media="screen" type="text/css" />
<body>
    <div id="window" style="">
        <div class="page page-front">
            <div class="page-content">
                <form method="post" action="/Admin/rule/{{$rule->id}}">
                   <input type="hidden" name="_token" value="{{csrf_token()}}" />
                   <input type="hidden" name="_method" value="PUT" />
                    <div class="input-row">
                        <input type="hidden" name="_method" value="PUT" />
                        <label class="label fadeIn">权限：</label>
                        <input type="text" name="name" value="{{$rule->name}}" class="input fadeIn delay1"/>
                    </div>
                   <div class="input-row">
                        <input type="hidden" name="_method" value="PUT" />
                        <label class="label fadeIn">名称：</label>
                        <input type="text" name="title" value="{{$rule->title}}" class="input fadeIn delay1"/>
                    </div>
                   <div  class="input-row">
                        
                        <label class="label fadeIn">状态：</label>
                        <input type="radio" name="status" value="1" @if($rule->status == "1") checked @endif class="" /><font style="color:black">有效</font>
                        <input type="radio" name="status" value="0" @if($rule->status="0") checked @endif class="" /><font style="color:red">禁用</font>
                    </div>
                   <div class="input-row perspective">
                        <p><input class="button load-btn fadeIn delay4" type="submit" value="修改" /></p>
                   </div>
                </form>
            </div>
        </div>
     </div>
</body>
