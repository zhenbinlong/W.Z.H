<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Gregwar\Captcha\CaptchaBuilder;
use Session,
    DB,
    Hash;

class UserController extends Controller {

    public function register() {
        
        return view("home.user.register");
    }

    public function doregister(Request $request) {
        //接受数据
//        dd($request);
        $data = $request->all();
//        dd($data);
        //验证码是否正确
        if (session("code") != $data["code"]) {
            $request->flash();
            return back()->with(["info" => "验证码错误"]);
        }

        //有效性验证
        $this->validate($request, [
            "uname" => "required|unique:home_member",
            "password" => "required|between:6,15",
                ], [
            "uname.required" => "账号未填写",
            "uname.unique" => "用户名已存在",
            "password.required" => "密码不能为空",
            "password.between" => "密码长度应为6-15位"
        ]);


        $data = $request->only("uname", "password");
        $data["password"] = Hash::make($data["password"]);
        $data["created_at"] = date("Y-m-d H:i:s");
//        dd($data);
        //执行数据创建
        if (FALSE !== $insertID = DB::table("home_member")->insertGetId($data)) {
//                alert("注册成功，现在就去登陆吧");
            return redirect("/Home/login");
        } else {
            return back()->with(["info" => "添加用户失败"]);
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //

        $uid=session('homeUserData')->uid;
        $user=DB::table("home_member")->where("uid",$uid)->first();
//        dd($user);
        return view("home.myinfo.index",compact("user"));
    }
 
    public function setAvartar()
    {
        dd(11);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
//        dd($id);
        $data=DB::table("home_line_list")->where("member_id",$id)->first();
        dd($data);
        return view("home.myinfo.order",compact("data"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }
    public function complete()
    {
        return view("home.myinfo.completeInfo");
    }
    public function setInfo(Request $request)
    {
        
       $this->validate($request,[
            
            "password"=>"between:6,15",
            "repassword"=>"same:password",
            "truename"=>"required",
            "phone"=>"required|max:11",
            "addr"=>"required",
            "email"=>"required",
            
           
        ],[
            
           
           
            "password.between"=>"密码长度应为6-15位",
            "repassword.required"=>"请确认密码",
            "repassword.same"=>"两次密码输入不一致",
            "truename.required"=>"请填写真实姓名",
            "phone.required"=>"请填写联系方式",
            "phone.numeric"=>"请填写数字",
            "phone.max"=>"请填写正确的手机号",
            "addr.required"=>"请填写地址",
            "email.required"=>"请填写邮箱",
            
            
        ]);
        
        $data=$request->except("_token","repassword");
//        dd($data);
        if (!empty($data["password"])) {
            $data["password"] = Hash::make($data["password"]);
        } else {
            unset($data["password"]);
        }
        $id=session("homeUserData")->uid;
        if (false != $affectedRows = DB::table("home_member")->where("uid", $id)->update($data)) {
         $uid=session('homeUserData')->uid;
        $user=DB::table("home_member")->where("uid",$uid)->first();
         return view("home.myinfo.index",compact("user"));
        }
    }
    
    public function avartar(Request $request) 
        {
//        dd($request);
        if (!$request->hasFile("Filedata")) {
            return response()->json(["status" => 0, "info" => "没有文件提交"]);
        }

        //接受文件并转存
        $file = $request->file("Filedata");
        
        //重组文件名
        $suffix = $file->getClientOriginalExtension();
        $rename = date("YmdHis") . rand(1000, 9999) . "." . $suffix; //201607011620341234.JPG
        //转存文件
        $file->move("./uploads/avartar/home", $rename);
//        dd($rename);   
        //将存储的文件信息 写入数据库
        DB::table("home_member")->where("uid", $request->get("uid"))->update(["avartar" => "/uploads/avartar/home"."/" . $rename]);
        
        $data = Session::pull("homeUserData");
        $data->avartar = "/uploads/avartar/home"."/" . $rename;
        Session::put("homeUserData", $data);

        //返回结果
        return response()->json(array("status" => 1, "info" => "/uploads/avartar/home" ."/". $rename));
    }
    
    
}
