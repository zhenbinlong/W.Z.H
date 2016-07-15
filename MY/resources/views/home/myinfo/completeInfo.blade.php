@include("home.common.head")

<!--右侧主内容-->
<div class="uc_mainnr">
    
   
    <h3 class="uc_miantit">
        <span class="span">完善个人信息</span>
        <div class="uclist_btn">
        </div>
    </h3>
    <div style="text-align:left ;width:300px ;height:300px;border:1px  red;float:right;">
    <div>
        
        <ul>
            @if(count($errors) > 0)
                @foreach($errors->all() as $e)
                    <li style="width:200px;height:30px;color:red;">{{ $e }}</li>
                    
                @endforeach
            @endif
         </ul>
    </div>
    </div>
     
    <!-- 内容列表 -->
    <div class="uc_nrlist">
        <!--基本信息 -->
        <!--修改前-->
        <div class="box5_cont bgc_white" id="formeditbox">
            <div class="forms BC_ValidationFormBox">
                <form action="/Home/user/setInfo" method="post">
                    <input class="validationBinded" name="_token" value="{{ csrf_token()}}" type="hidden">              <dl class="item_name clearfix">
                        <dt>账号</dt>
                        <dd>
                            <input name="uname" id="realname" class="Bc_input validationBinded" style="width:234px;" type="text" value="{{ session("homeUserData")->uname}}" disabled>
                        </dd>
                    </dl>
                    <dl class="item_name clearfix">
                        <dt>重置密码</dt>
                        <dd>
                            <input name="password" id="realname" class="Bc_input validationBinded" style="width:234px;" type="text">(*置空则不修改*)
                        </dd>
                    </dl>
                     <dl class="item_name clearfix">
                        <dt>确认密码</dt>
                        <dd>
                            <input name="repassword" id="realname" class="Bc_input validationBinded" style="width:234px;" type="text">(*置空则不修改*)
                        </dd>
                    </dl>
                    <dl class="item_nickname clearfix BC_showInputErrorBox">
                        
                        <dt><em class="BC_xing"></em>真实姓名</dt>
                        
                        
                        <dd>
                            <input name="truename" class="Bc_input required validationBinded" style="width:234px;" id="nickname" maxlength="16" user-type="mobile" type="text">
                        </dd>
                    </dl>
                   <dl class="item_nickname clearfix BC_showInputErrorBox">
                        
                        <dt><em class="BC_xing"></em>联系方式</dt>
                        
                        
                        <dd>
                            <input name="phone" class="Bc_input required validationBinded" style="width:234px;" id="nickname" maxlength="16" user-type="mobile" type="text">
                        </dd>
                    </dl>
                    <dl class="item_nickname clearfix BC_showInputErrorBox">
                        
                        <dt><em class="BC_xing"></em>常用地址</dt>
                        
                        
                        <dd>
                            <input name="addr" class="Bc_input required validationBinded" style="width:234px;" id="nickname" maxlength="16" user-type="mobile" type="text">
                        </dd>
                    </dl>
                    <dl class="item_nickname clearfix BC_showInputErrorBox">
                        
                        <dt><em class="BC_xing"></em>邮箱</dt>
                        
                        
                        <dd>
                            <input name="email" class="Bc_input required validationBinded" style="width:234px;" id="nickname" maxlength="16" user-type="mobile" type="text">
                        </dd>
                    </dl>
                    <dl class="item_sex clearfix BC_showInputErrorBox">
                        <dt><em class="BC_xing"></em>性别</dt>
                        <dd class="BC_Validation_Radio required" fc="请选择">
                            <input name="sex" value="男" id="sex" checked="checked" class="BC_radio" type="radio"><label for="sex" class="Dz_vm w40">男 </label>
                            <input name="sex" value="女" id="sex2" class="BC_radio" type="radio"><label for="sex2" class="Dz_vm w40">女</label>
                        </dd>
                    </dl>
                    <dl class="item_name clearfix">
                        <dt>出生日期</dt>
                        <dd>
                            <input name="birthday" id="realname" class="Bc_input validationBinded" style="width:234px;" type="text">
                        </dd>
                    </dl>
                    
                   
                    <dl class="clearfix">
                        <dt>&nbsp;</dt>
                        <dd>
                            <input type="submit" value="保存">
                        </dd>
                    </dl>
                  
                    
                </form>
                 
                
                
                
            </div>
            
        </div>
       
    </div>
    
</div>


 









</div>

@include("home.common.footer")
