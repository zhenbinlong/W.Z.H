@include("admin.layout.head")
<div style="margin:100px 0 0 300px">
    <form action="/Admin/user/update/{{ $data->uid }}" method="post" >
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <p>账&nbsp;&nbsp;号：<input type="text" name="uname" value="{{ $data->uname}}"></p>
    <p>昵&nbsp;&nbsp;称：<input type="text" name="nickname" value="{{ $data->nickname}}"></p>
    <p>密&nbsp;&nbsp;码：<input type="password" name="password" value="">(*置空则不修改*)</p>
    <p>确认密码：<input type="password" name="repassword" value="">(*置空则不修改*)</p>
    <p>性&nbsp;&nbsp;别：
        <label><input type="radio" name="sex" value="男" @if($data->sex == "男" ) checked @endif  >男</label>&nbsp;&nbsp;
        <label><input type="radio" name="sex" value="女" @if($data->sex == "女" ) checked @endif >女</label>        
    </p>
    <p ><input type="submit" value="修改"></p>
    </form>
</div>

@include("admin.layout.foot")
