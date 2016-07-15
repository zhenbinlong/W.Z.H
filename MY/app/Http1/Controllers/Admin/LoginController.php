<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Gregwar\Captcha\CaptchaBuilder;
use Session;
class LoginController extends Controller
{
    //
    public function index(){
        return view("admin.login.index");
    }
    
    
   
    

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function captcha()
    {
                //生成验证码图片的Builder对象，配置相应属性
        $builder = new CaptchaBuilder;
        //可以设置图片宽高及字体
        $builder->build($width = 80, $height = 40, $font = null);
        //获取验证码的内容
        $phrase = $builder->getPhrase();

        //把内容存入session
        Session::flash('code', $phrase);
        //生成图片
        header("Cache-Control: no-cache, must-revalidate");
        header('Content-Type: image/jpeg');
        $builder->output();
    }

   public function logTodo(Request $request)
   {
       $data = $request->all();
       dd($data);
   }
    
}
