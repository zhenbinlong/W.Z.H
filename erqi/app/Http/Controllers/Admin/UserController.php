<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB,Hash,Session,Validator;
class UserController extends CommonController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index(Request $request) {
        //查询用户信息
        $users = DB::table("user")
                ->where("uname", "LIKE", "%" . $request->get("keyword") . "%")
                ->orWhere("nickname", "LIKE", "%" . $request->get("keyword") . "%")
                ->orderBy("uid", "DESC")
                ->paginate(6);
        //获取搜索条件
        $keyword = $request->get("keyword");
//        dd(get_class_methods($users));//debug
//          dd($users);
//          foreach($users as $user){
//              var_dump($user);
//          }
//          exit;

        //显示模板
        return view("admin.user.index", ["users" => $users, "keyword" => $keyword]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("admin.user.create");
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
//        dd($request);
        $this->validate($request,[
            "uname"=>"required|unique:user",
            "password"=>"required|between:6,15",
            "repassword"=>"required|same:password",
            "nickname"=>"required"
        ],[
            "uname.required"=>"账号不能为空",
            "uname.unique"=>"账号已存在",
            "password.required"=>"密码不能为空",
            "password.between"=>"密码长度应为6-15位",
            "repassword.required"=>"请确认密码",
            "repassword.same"=>"两次密码输入不一致",
            "nickname.required"=>"昵称必须填写",
        ]);
//        dd($request);//debug
        $data=$request->except("_token","repassword");
        $data["password"] =Hash::make($data["password"]);
        $data["created_at"]=date("Y-m-d H:i:s");
//        dd($data);//debug
        if($insertID=DB::table("user")->insertGetId($data)!== false)
        {
            return redirect("/Admin/user");
        }else
        {
            return back()->with(['info'=>"添加用户失败"]);
        }
        
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
        //显示编辑模板
        $data=DB::table("user")->where("uid",$id)->first();
//        dd($data);//debug
        return view("admin.user.edit",compact("data"));
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
        //数据库更新操作
//        dd($request);//debug
        //验证数据的有效性
        $this->validate($request, [
            "password" => "between:6,15",
            "repassword" => "same:password",
            "nickname" => "required",
                ], [
            "password.between" => "密码长度应为6-15位",
            "repassword.same" => "两次密码输入不一致",
            "nickname.required" => "昵称不能为空"
        ]);
        //修改用户的数据
        $data = $request->except("_token", "_method", "repassword");
        $data["updated_at"] = date("Y-m-d H:i:s");
        //对密码重新构造
        if (!empty($data["password"])) {
            $data["password"] = Hash::make($data["password"]);
        } else {
            unset($data["password"]);
        }
        if (false != $affectedRows = DB::table("user")->where("uid", $id)->update($data)) {
            return redirect("/Admin/user");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        dd(DB::table("user")->where("uid", $id)->delete());//debug
         //删除该用户记录
        if (false !== DB::table("user")->where("uid", $id)->delete()) {
            return redirect("/tips")->with(["info" => "操作成功", "url" => "/Admin/user"]);
        } else {
            return redirect("/tips")->with(["info" => "操作失败", "url" => "/Admin/user"]);
        }
    }
    
    //上传头像的处理地址
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
        $file->move("./uploads/avartar", $rename);

        //将存储的文件信息 写入数据库
        DB::table("user")->where("uid", $request->get("uid"))->update(["avartar" => "/uploads/avartar/" . $rename]);

        $data = Session::pull("userData");
        $data->avartar = "/uploads/avartar/" . $rename;
        Session::put("userData", $data);

        //返回结果
        return response()->json(array("status" => 1, "info" => "/uploads/avartar/" . $rename));
    }

    
    
    
}
