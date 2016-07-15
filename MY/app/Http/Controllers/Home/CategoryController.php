<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB,Hash,Session,Validator;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index(Request $request) {
        //国内地区
        $cate1 = DB::table("home_category")->where("pid",1)->get();
//      dd($cate1);
        //国内省份
        $cate2 = DB::table("home_category")->where("path","like","0,1,_")->get();
//        dd($cate2);
        //热门城市
        $cate3 = DB::table("home_category")->where("path","like","0,1,_,%")->get();
//          dd($cate3);
//        国际大洲
         $zcate = DB::table("home_category")->where("pid","2")->get();
//         dd($zcate);
//        国家
          $gcate = DB::table("home_category")->where("path","like","0,2,_")->get();
//             dd($gcate);
           //热门城市
          $ccate = DB::table("home_category")->where("path","like","0,2,__,%")->get();
//          dd($ccate);
        //显示模板
        return view("home.index",compact("cate1","cate2","cate3","zcate","gcate","ccate"));
//        return view("home.index",compact("cate2"));
   }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
       public function create()
       {
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
  
     
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
    
    }

   

    
    
    
}
