@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />

<div class="center">
    



    <div class="tableMain" >
        <table  class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody >

                <tr >
                    <th>D_ID</th>
                    <th>类名</th>
                    <th>父类</th>
                    
                    <th>路径</th>
                    <th>是否导航</th>
                    <th id="clearTDrightBorder">操作</th>
                </tr>
                @foreach($categories as $cate)
                <tr>
                    <td>{{ $cate->d_id }}</td>
                    <td>{{ $cate->cname }}</td>
                    <td>{{ $cate->pid }}</td>
                    <td>{{ $cate->path }}</td>
                    <td><input type="radio" d_id="{{$cate->d_id}}" name="isNav_{{$cate->d_id}}" value="y" @if($cate->isNav == "y") checked @endif />是、否<input type="radio" name="isNav_{{$cate->d_id}}"d_id="{{$cate->d_id}}" value="n" @if($cate->isNav == "n") checked @endif /></td>
                    <td>[<a href="/Admin/category/child/{{$cate->d_id}}">添加子类</a>]&nbsp; [<a href="/Admin/category/{{$cate->d_id}}/edit">编辑</a> 
            @if (!$cate->hasChild)<a href="/Admin/category/delete/{{$cate->d_id}}">删除</a>@endif]</td>
                 
                         
                </tr>
                @endforeach
             </tbody>
        </table>
        
    </div> 

          
</div>

 <script src="/js/admin/category_index.js"></script>
@include("admin.layout.foot")