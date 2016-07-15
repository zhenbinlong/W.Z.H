<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB,Hash,Session,Validator;
class RoundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index(Request $request) {
        //查询图片信息
//       dd(22);
        $runs = DB::table("round")->paginate(3);

        
        //获取搜索条件
        $keyword = $request->get("keyword");
       

        //显示模板
        return view("admin.round.index",compact("runs"));
   }

   public function setRuse(Request $request)
   {
        $data=$request->all();
        if(false != DB::table("round")->where("rid",$data["rid"])->update(["ruse"=>$data["ruse"]]))
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
       public function create()
       {
        //
          
        
        return view("admin.round.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $this->validate($request,[
            "rname"=>"required|unique:round",
           "rpicture"=>"required",
            
            
        ],[
            "rname.required"=>"名称不能为空",
            "rname.unique"=>"图片已存在",
            "rpicture.required"=>"请选择一张图片"
        ]);
      
        $data=$request->except("_token");
       
         //接受文件并转存
        $file = $request->file("rpicture");
//        dd($file);
        //重组文件名
        $suffix = $file->getClientOriginalExtension();      
//        dd($suffix);
        $rename = date("YmdHis") . rand(1000, 9999) . "." . $suffix; //201607011620341234.JPG
//        dd($rename);
        //转存文件
        $file->move("./uploads/rpicture/",$rename);
        
        $data["rpicture"] = "/uploads/rpicture/".$rename;
//
        
        $data['addtime']=date("Y-m-d H:i:s");
//       dd($data);
//        $data["rpicture"]=$data["rpicture"];
//        dd($data["rpicture"]);
        
    
        //将存储的文件信息 写入数据库
       if( false!==$insertID=DB::table("round")->insertGetId($data))
        {
//            dd($insertID);
//            dd($request->get("groupid"));
          
            return redirect("/Admin/round");
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
        $run=DB::table("round")
                ->where("rid",$id)->first();
        
//        $groups=DB::table("round")->get();
//        dd($run);//debug
        return view("admin.round.edit",["run"=>$run]);
    }

//    /**
//     * Update the specified resource in storage.
//     *
//     * @param  \Illuminate\Http\Request  $request
//     * @param  int  $id
//     * @return \Illuminate\Http\Response
//     */
    public function update(Request $request, $id)
    {
        //数据库更新操作
//        dd($request);//debug
       
        //修改用户的数据
        $run= $request->except("_token", "_method");
        $date= date("Y-m-d H:i:s");
        $file= $request->file("rpicture");
//      dd($file);
        //重组文件名
        $suffix = $file->getClientOriginalExtension();      
//        dd($suffix);
        $rename = date("YmdHis") . rand(1000, 9999) . "." . $suffix; //201607011620341234.JPG
        //转存文件
        $file->move("./uploads/rpicture/", $rename);
        //将存储的文件信息 写入数据库 
       if(false != $affectedRows = DB::table("round")->where("rid",$id)->update(["rname"=>$request->get("rname"),"rpicture" => "/uploads/rpicture/" . $rename,"ruse"=>$request->get("ruse"),"addtime"=>$date]))
       {

         return redirect("/Admin/round");
        }
    }
//
//    /**
//     * Remove the specified resource from storage.
//     *
//     * @param  int  $id
//     * @return \Illuminate\Http\Response
//     */
    public function destroy($id)
    {
//        dd(DB::table("round")->where("rid", $id)->delete());//debug
         //删除该用户记录
        if (false !== DB::table("round")->where("rid", $id)->delete()) {
            return redirect("/tips")->with(["info" => "操作成功", "url" => "/Admin/round"]);
        } else {
            return redirect("/tips")->with(["info" => "操作失败", "url" => "/Admin/round"]);
        }
    }
//
   

    
    
    
}
