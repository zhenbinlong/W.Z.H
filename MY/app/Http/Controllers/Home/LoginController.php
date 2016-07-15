<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Gregwar\Captcha\CaptchaBuilder;
use Session,DB,Hash;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view("home.login.index");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    
    public function logTodo(Request $request)
    {
        //接受数据
//        dd($request);
//        dd(33);
        $data = $request->all();
        //验证码是否正确
        if (session("code") != $data["code"]) {
            $request->flash();
            return back()->with(["info" => "验证码错误"]);
        }

        //有效性验证
        $this->validate($request, [
            "uname" => "required",
            "password" => "required|between:6,15",
                ], [
            "uname.required" => "账号未填写",
            "password.required" => "密码不能为空",
            "password.between" => "密码长度应为6-15位"
        ]);

        //真实性验证
        $userRec = DB::table("home_member")->where("uname", $data["uname"])->first();
//		dd($userRec);exit;
        if (empty($userRec)) {
            $request->flash();
            return back()->with(["info" => "账号不存在"]);
        } else if (!Hash::check($data["password"], $userRec->password)) {
            $request->flash();
            return back()->with(["info" => "密码错误"]);
        } else {//返回结果
            //将用户状态写入session
            session(["homeUserData" => $userRec]);
            return redirect("/Home");
        }
    }

    public function captcha() {
//        dd("aa");
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
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
       
        
    }
    public function logout()
    {
//        dd(22);
         Session::forget("homeUserData");
        return redirect("/Home");
    }
}
