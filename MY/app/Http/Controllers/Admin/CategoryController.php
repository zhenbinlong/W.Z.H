<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB,Session;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //查找所有分类
        $categories=DB::table("home_category")->orderByRaw("CONCAT_WS(',',path,d_id)")->get();
//        dd($categories);
        //重组数据，加缩进
        foreach($categories as $key=>$cate){
            $categories[$key]->cname = "||".str_repeat("-",substr_count($cate->path,",")*4)."-|".$cate->cname;
            $categories[$key]->hasChild=DB::table("home_category")->where("path","LIKE","%,{$cate->d_id}%")->first();
        }
        return view("admin.category.index",compact("categories"));
    }

    public function setIsNav(Request $request){
//        dd($request->all());
        $data=$request->all();
        if(false != DB::table("home_category")->where("d_id",$data["d_id"])->update(["isNav"=>$data["isNav"]]))
        {
            return response()->json(["status"=>1,"info"=>"修改成功"]);
        }else
        {
            return response()->json(["status"=>0,"info"=>"修改失败"]);
        }
        
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($d_id=null)
    {
//        dd(2);
        if(!empty($d_id))
        {
//            dd(1);
            $data =DB::table("home_category")->where("d_id",$d_id)->first();
        }
        return view("admin.category.create",compact("data"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //验证唯一性和不为空
         $this->validate($request,[
            "cname"=>"required|unique:home_category",
            
        ],[
            "cname.required"=>"类名不能为空",
            "cname.unique"=>"类名已存在",
            
        ]);
         $data=$request->except("_token");
         if(false !== $insertID=DB::table("home_category")->insertGetId($data))
         {
             return redirect("/tips")->with(["info"=>"添加类成功！ID：".$insertID,"url"=>"/Admin/category"]);
         }else
         {
             return redirect("/tips")->with(["info"=>"添加类失败！ID：".$insertID,"url"=>"/Admin/category"]);
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
        //
        $category=DB::table("home_category")->where("d_id",$id)->first();
        return view("admin.category.edit",["category"=>$category]);
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
        //如果该类有子类 则不能删除
        if (DB::table("home_category")->where("path", "LIKE", "%,{$id}%")->first()) {
            return redirect("/tips")->with(["info" => "有子类不能删除!", "url" => "/Admin/category"]);
        } else {
            DB::table("home_category")->where("d_id", $id)->delete();
            return redirect("/tips")->with(["info" => "删除成功!", "url" => "/Admin/category"]);
        }
       
    }
}
