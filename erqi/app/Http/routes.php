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

Route::get('/', function () {
    return view('welcome');
});


Route::get("/Admin","Admin\IndexController@index");
Route::get("/Admin/login", "Admin\LoginController@index");
Route::get("/Admin/login/captcha/{tmp}", "Admin\LoginController@captcha");
Route::post("/Admin/login/logTodo", "Admin\LoginController@logTodo");