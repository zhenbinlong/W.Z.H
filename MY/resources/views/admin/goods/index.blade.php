@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<div style="color:blueviolet;">
    <form action="{{url('/Admin/user')}}" method="post" name="fm">

        <input type="hidden"  name="_token" value="{{ csrf_token() }}">
        <input type="hidden" name="_method" value="PUT" />
    </form>
</div>
<div class="center">
    <div class="tableMain" >
        <table  class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody>
                <tr >
                    <th>ID</th><th>产品名称</th><th>所属分类</th><th>价格</th><th>图片</th><th id="clearTDrightBorder">操作</th>
                </tr>
                @foreach($goods as $tmp)
                <tr>
                    <td>{{$tmp->line_id}}</td>
                    <td>{{$tmp->line_name}}</td>
                    <td>{{$tmp->cname}}</td>
                    <td>{{$tmp->line_pri}}</td>
                    <td><img src="{{$tmp->images}}" height="50" /></td>
                    <td>[<a href="/Admin/goods/{{$tmp->line_id}}/edit">编辑</a>] [<a href="/Admin/goods/delete/{{$tmp->d_id}}">删除</a>]</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        {!!$goods->render()!!}
    </div> 
    
</div>
@include("admin.layout.foot")