@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<div style="color:blueviolet;">
    <form action="{{url('/Admin/round/store')}}" method="post" name="fm">
        
            <input type="hidden"  name="_token" value="{{ csrf_token() }}">
            
    </form>
</div>
<div class="center">
    



    <div class="tableMain" >
        <table class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody >

                <tr >
                    <th>ID</th>
                    <th>名称</th>
                    <th>图片</th>
                    <th>是否使用</th>
                    
                    <th id="clearTDrightBorder">操作</th>
                </tr>
                @foreach($runs as $run)
                <tr>
                    <td>{{ $run->rid }}</td>
                    <td>{{ $run->rname}}</td>
                    <td><img src="{{$run->rpicture}}" width="150px" height='100px'></td>
                    <td><input type="radio" rid="{{ $run->rid }}" name="ruse.{{ $run->rid}}" value="启用"  @if($run->ruse == "启用") checked @endif/>启用
                        <input type="radio" rid="{{ $run->rid }}" name="ruse.{{ $run->rid}}" value="禁用" @if($run->ruse == "禁用") checked @endif />禁用
                    <td><a href="/Admin/round/{{$run->rid}}/edit">编辑</a> <a href="{{ url('/Admin/round/delete/'.$run->rid) }}">删除</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <p>
            {!!$runs->render()!!}
        </p> 
    </div> 

          
</div>
<script src="/js/admin/round_index.js"></script>
 
@include("admin.layout.foot")

