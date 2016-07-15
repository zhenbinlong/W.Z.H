<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//网站首页
Route::get('/', function () {
    return view('welcome');
});

//后台首页
Route::get("/Admin","Admin\IndexController@index");
//错误页
Route::get("/tips",function()
{
    return view("errors.tips");
});
//登陆
Route::get("/Admin/login", "Admin\LoginController@index");
Route::post("/Admin/login/logTodo", "Admin\LoginController@logTodo");
Route::get("/Admin/login/logout","Admin\LoginController@logout");
;
//验证码
Route::get("/Admin/login/captcha/{tmp}", "Admin\LoginController@captcha");
//用户模块
Route::resource("/Admin/user","Admin\UserController");
//Route::match(["get", "post"], "/Admin/user", "Admin\UserController@index");
Route::post("/Admin/user/store","Admin\UserController@store");
Route::get("Admin/user/delete/{id}","Admin\UserController@destroy");
Route::post("Admin/user/update/{id}","Admin\UserController@update");
Route::any("/Admin/user/setGroup", "Admin\UserController@setGroup");
//头像
Route::post("/Admin/user/avartar","Admin\UserController@avartar");
//分组
Route::resource("/Admin/group", "Admin\GroupController");
Route::post("/Admin/group/setRule","Admin\GroupController@setRule");
Route::get("Admin/group/create","Admin\GroupController@create");
Route::get("/Admin/group/delete/{id}", "Admin\GroupController@destroy");
//权限
Route::resource("Admin/rule","Admin\RuleController");
Route::post("/Admin/rule/multi","Admin\RuleController@multi");
Route::get("/Admin/rule/show/{id}","Admin\RuleController@show");
//分类
Route::resource("/Admin/category","Admin\CategoryController");
Route::post("/Admin/category/setIsNav","Admin\CategoryController@setIsNav");
Route::get("/Admin/category/create","Admin\CategoryController@create");
Route::get("/Admin/category/child/{d_id}", "Admin\CategoryController@create");
Route::get("/Admin/category/delete/{d_id}", "Admin\CategoryController@destroy");
//后台会员管理
Route::resource("/Admin/member","Admin\MemberController");

//后台商品模块管理
Route::resource("/Admin/goods","Admin\GoodsController");
Route::post("/Admin/goods/upload","Admin\GoodsController@upload");
Route::get("/Admin/goods/delete/{id}", "Admin\GoodsController@destroy");



//后台图片轮播管理
Route::any("/Admin/round","Admin\RoundController@index");
         //添加图片
Route::resource("/Admin/round","Admin\RoundController");
Route::post("/Admin/round/store","Admin\RoundController@store");
Route::post("/Admin/round/setRuse","Admin\RoundController@setRuse");
          //修改图片
Route::post("Admin/round/update/{id}","Admin\RoundController@update");
          //删除图片
Route::get("Admin/round/delete/{id}","Admin\RoundController@destroy");
//订单管理
Route::any("/Admin/linelist","Admin\LinelistController@index");

Route::any("/Admin/linelist/setStatus","Admin\LinelistController@setStatus");





//前台用户
Route::get("/Home/user","Home\UserController@index");//个人中心
Route::get("/Home/user/complete","Home\UserController@complete");
Route::post("/Home/user/setInfo","Home\UserController@setInfo");
//前台登陆注册
Route::post("/Home/login/logTodo","Home\LoginController@logTodo");
Route::any("/Home/login/captcha/{tmp}","Home\LoginController@captcha");
Route::any("/Home/user/captcha/{tmp}","Home\UserController@captcha");


Route::any("/Home/user/register","Home\UserController@register");



Route::post("/Home/user/doregister","Home\UserController@doregister");
Route::get("/Home/login","Home\LoginController@index");
Route::get("/Home/user/logout","Home\LoginController@logout");
//前台用户头像
Route::post("/Home/user/avartar","Home\UserController@avartar");
Route::get("/Home/user/order/{id}","Home\UserController@show");








//前台首页路由
Route::get("/Home","Home\IndexController@index");
//后台轮播图绑定首页
Route::get("/Home/round","Home\RoundController@index");

//前台地区分类
//Route::get("/Home/category","Home\CategoryController@index");

//前台商品列表页
Route::get("/Home/list","Home\ListController@index");