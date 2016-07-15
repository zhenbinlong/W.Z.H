<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB,Session,Hash;
class RuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $rules = DB::table("admin_auth_rule")->get();
//        dd($rules);
        return view("admin.rule.index",compact("rules"));
    }
    public function multi(Request $request){
//        dd($request->get("rules"));//debug
        $rules=join(",",$request->get("rules"));
        switch($request->get("submit")){
            case "选中有效":
                $result = DB::table("admin_auth_rule")->whereIn("id",$request->get("rules"))->update(["status"=>1]);
                break;
            case "选中禁用":
                $result=DB::table("admin_auth_rule")->whereIn("id",$request->get("rules"))->update(["status"=>0]);
                break;
            case "选中删除":
                $result=DB::table("admin_auth_rule")->whereIn("id",$request->get("rules"))->delete();
                break;
            default:
        }
        return back();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("admin.rule.create");
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
//        dd($request->get("name"));
        $this->validate($request,[
            "title"=>"required|unique:admin_group_rule",
            "name"=>"required|unique:admin_group_rule",
        ],[
            "title.required"=>"名称不能为空!",
            "title.unique"=>"名称已存在!",
            "name.required"=>"权限不能为空!",
            "name.unique"=>"权限已存在!"
            
        ]);
        $data =$request->except("_token");
        $this->validate($request,[
            "name"=>"required | unique:admin_auth_rule",
            "title"=>"required",
        ]);
        if(false !== DB::table("admin_auth_rule")->insert($data))
        {
            return redirect("/tips")->with(["info"=>"添加权限成功","url"=>"/Admin/rule"]);
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
        
       $rule=DB::table("admin_auth_rule")->where("id",$id)->first();
       return view("admin.rule.show",compact("rule"));
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
        $data=$request->except("_token","_method");
        DB::table("admin_auth_rule")->where("id",$id)->update($data);
        //返回上一页
       echo "<script>";
            echo "parent.location.href='/Admin/rule';";
       echo "</script>";
       exit;
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
}
