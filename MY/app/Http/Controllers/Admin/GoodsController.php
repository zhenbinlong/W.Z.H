<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\GoodsRequest;
use DB,
    Session;

class GoodsController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $goods = DB::table("home_line")->leftJoin("home_category", "home_line.d_id", "=", "home_category.d_id")->orderBy("home_line.d_id")->paginate(6);
        //引入模板显示
        return view("admin.goods.index", compact("goods"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        $categories = DB::table("home_category")->orderByRaw("CONCAT_WS(',',path,d_id)")->get();
        foreach ($categories as $key => $cat) {
            $categories[$key]->cname = "|" . str_repeat("-", substr_count($cat->path, ",") * 5) . $cat->cname;
        }
        return view("admin.goods.create", compact("categories"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $data = $request->except("_token", "upload");
        $data["addtime"] = date("Y-m-d H:i:s");
//        dd($data);
        $insertID = DB::table("home_line")->insertGetID($data);
        if ($insertID != false) {
            return redirect("/tips")->with(["info" => "Add Goods Ok! ID : " . $insertID, "url" => "/Admin/goods"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //查询所有的分类
//        dd($id);
        $categories = DB::table("home_category")->orderByRaw("CONCAT_WS(',',path,d_id)")->get();
        foreach ($categories as $key=>$cat)
        {
            $categories[$key]->cname = "|".str_repeat("-", substr_count($cat->path, ",")*6).$cat->cname;
        }
        //查询该商品信息
        $goods = DB::table("home_line")->leftJoin("home_category", "home_line.d_id", "=", "home_category.d_id")->where("home_line.line_id",$id)->first();
//        dd($goods);
        //发送数据
        return view("admin.goods.edit", ["goods" => $goods, "categories" => $categories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $data = $request->except("_token","_method", "upload");
        $result = DB::table("home_line")->where("line_id", $id)->update($data);
        if ($result !== false)
        {
            return redirect("/tips")->with(["info" => "Update Ok!", "url" => "/Admin/goods"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //获取商品图片地址
        $images = DB::table("home_line")->where("d_id", $id)->pluck("images");
        //删除商品记录
        DB::table("home_line")->where("d_id", $id)->delete();
        //删除商品图片
        unlink(public_path()."/".$images);
        //返回
        return back();
    }

    public function upload(Request $request) {
//        dd("aaaaaaaaa");
        $file = $request->file("Filedata");
//        dd($file);
        $suffix = $file->getClientOriginalExtension();
        $rename = date("YmdHis") . rand(1000, 9999) . "." . $suffix;
        $result = $file->move("./uploads/goods", $rename);
        if ($result) {
            return response()->json(["status" => 1, "info" => "/uploads/goods/{$rename}"]);
        } else {
            return response()->json(["status" => 0, "info" => "上传失败"]);
        }
    }

}
