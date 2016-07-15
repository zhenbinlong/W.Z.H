<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB,Session;
class LinelistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $orders=DB::table("home_line_list")
                ->leftJoin("home_line","home_line_list.line_id","=","home_line.line_id")
                ->leftJoin("home_member","home_line_list.member_id","=","home_member.uid")
                ->where("home_member.uid", "LIKE", "%" . $request->get("keyword") . "%")
                ->orWhere("home_line_list.line_id", "LIKE", "%" . $request->get("keyword") . "%")
                ->orderBy("home_line_list.line_list_id", "DESC")
                ->paginate(3);
//        foreach($orders as $order)
//            {
//                var_dump($order);
//            }
//            exit;
//        dd($orders);
        $keyword = $request->get("keyword");
        return view("admin.linelist.index",compact("orders","keyword"));
    }
    
    public function setStatus(Request $request)
    { 
        if (false !== DB::table("home_line_list")->where("line_list_id", $request->get("lin_list_id"))->update(["status" => $request->get("status")]))
        {
            return response()->json(["status" => 1, "info" => "修改状态成功"]);
        } else 
        {
            return response()->json(["status" => 0, "info" => "修改状态失败"]);
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
}
