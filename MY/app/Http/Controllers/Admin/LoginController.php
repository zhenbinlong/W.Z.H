<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Gregwar\Captcha\CaptchaBuilder;
use Session,DB,Hash;
    
   

class LoginController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        $data = $request->old();
        return view("admin.login.index",compact("data"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function logTodo(Request $request) 
     {
//           
//        dd($request->all());//debug
        //接收数据
        $data = $request->all();
        //检验验证码
//        dd($data);
//        dd(session("code"));
//        dd($data["code"]);
//       dd(session("code")!= $data["code"]);
        if(session("code")!= $data["code"])
        { 
           
            $request->flash();
            return back()->with(["info"=>"验证码错误"]);
        }
        //有效性验证
        
        $this->validate($request,[
            "uname" => "required",
            "password" => "required|between:6,15",
            
        ],[
            "uname.required" =>"账号未填写",
            "password.required"=>"密码不能为空",
            "password.between" =>"密码长度应为6-15位"
            
        ]);
        //真实性验证
        $userRec=DB::table("admin_user")->where("uname",$data["uname"])->first();
//        dd($userRec);
        if(empty($userRec))
        { 
            
            $request->flash();
            return back()->with(["info"=>"账号不存在"]);
        }else if(!Hash::check($data["password"],$userRec->password))      
        {
//            dd($data);//debug
//             dd(Hash::check($data["password"],$userRec->password));//debug
            $request->flash();
            return back()->with(["info"=>"密码错误"]);
        }else
        {//返回解果，将用户状态写入session
////            dd($userRec);//debug
           session(["userData" => $userRec]);
//           dd(session("userData"));//debug
           return redirect("/Admin");
        }
   
        
    }

    public function captcha() {
        //生成验证码图片的Builder对象，配置相应属性
        $builder = new CaptchaBuilder;
        //可以设置图片宽高及字体
        $builder->build($width = 100, $height = 36, $font = null);
        //获取验证码的内容
        $phrase = $builder->getPhrase();

        //把内容存入session
        Session::flash('code', $phrase);
        //生成图片
        header("Cache-Control: no-cache, must-revalidate");
        header('Content-Type: image/jpeg');
        $builder->output();
    }
        //退出登录
    public function logout(){
        //销毁session
        Session::forget("userData");
        return redirect("/Admin");
    }


}
