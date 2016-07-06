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
Route::match(["get", "post"], "/Admin/user", "Admin\UserController@index");
Route::post("/Admin/user/store","Admin\UserController@store");
Route::get("Admin/user/delete/{id}","Admin\UserController@destroy");
Route::post("Admin/user/update/{id}","Admin\UserController@update");
//头像
Route::post("/Admin/user/avartar","Admin\UserController@avartar");