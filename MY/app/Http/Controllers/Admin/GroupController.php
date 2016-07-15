<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
//        dd(1);
        $groups=DB::table("admin_group_rule")->get();
        $rules=DB::table("admin_auth_rule")->get();
        return view("admin.group.index",["groups"=>$groups,"rules"=>$rules]);
    }

    public function setRule(Request $request)
        {
        //修改权限
//        dd($request);
//       dd($request->get("id"));//debug
        $rules = explode(",",DB::table("admin_group_rule")->where("id",$request->get("id"))->pluck("rules"));
//        dd($rules);//debug
        if(false != $key = array_search($request->get("rule"),$rules))
        {
            unset($rules[$key]);
        }else
        {
            array_push($rules,$request->get("rule"));
        }
//        dd($rules);//debug
        //修改该分组的权限集合
        if(false !=DB::table("admin_group_rule")->where("id",$request->get("id"))->update(["rules"=>join(",",$rules)]) )
        {
            return response()->json(["status"=>1,"info"=>"修改权限分组成功"]);
        }else
        {
          return response()->json(["status"=>0,"info"=>"修改分组权限失败"]);  
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //查询所有的权限
        $rules = DB::table("admin_auth_rule")->get();
        //显示添加模板
        return view("admin.group.create",compact("rules"));
        
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
            "title"=>"required|unique:admin_group_rule",
            
        ],[
            "title.required"=>"名称不能为空!",
            "title.unique"=>"名称已存在!",
            
        ]);
        //接收数据
        $data =$request->except("_token");
//        dd($data);//debug
        $data["rules"]= join(",",$data["rules"]);
        //存入数据库
        if(false !== $insertID = DB::table("admin_group_rule")->insertGetId($data))
        {
            return redirect("/tips")->with(["info" => "添加成功","url"=>"/Admin/group"]);
        }else
        {
             return redirect("/tips")->with(["info" => "添加成功","url"=>"/Admin/group"]);
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
        //dd($id);//debug
        //查询该分组的信息
        $group=DB::table("admin_group_rule")->where("id",$id)->first();
//        dd($group);//debug
        //查询所有权限数据
        $rules=DB::table("admin_auth_rule")->get();
//        dd($rules);//debug
        //显示分组编辑模板
        return view("admin.group.edit",["group"=>$group,"rules"=>$rules]);

        
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
        //接收数据
        $data=$request->except("_token","_method");
        $data["rules"]=join(",",$data["rules"]);
//        dd($data);
        if(false !== DB::table("admin_group_rule")->where("id",$id)->update($data))
        {
          return redirect("tips")->with(["info"=>"修改成功","url"=>"/Admin/group"]);  
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
        //
//        dd($id);
        //删除分组
        DB::table("admin_group_rule")->where("id",$id)->delete();
        $users = DB::table("admin_user_group")->where("group_id",$id)->get();
        foreach($users as $user)
        {
            DB::table("admin_user")->where("uid",$user->uid)->delete();
        }
        return back();
    }
}
