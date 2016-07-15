<?php

namespace App\Http\Middleware;

use Closure;
use DB,Session;
class CommonMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)      
    {
        if (!Session::has("userData") && !preg_match("/^\/Admin\/login/",$_SERVER['REQUEST_URI'])&& preg_match("/^\/Admin/",$_SERVER['REQUEST_URI'])) {
            return redirect("/Admin/login");
        } else {
            //查找一下所有的权限列表 判断当前的操作是否需要权限验证
            $result = DB::table("admin_auth_rule")->get();
//            dd($result);//["/Admin/user" => "查看用户"]
            $rules = array();
            foreach ($result as $tmp)
            {
                $rules[$tmp->name] = $tmp->title;
            }
//            dd($rules);
            $subject = preg_replace("/\?.+$/", "", $_SERVER["REQUEST_URI"]);
            $subject = preg_replace("/\/\d+/", "", $subject);
//            dd($subject);
            if (array_key_exists($subject, $rules))
            {
                //获取当前用户的分组
                $groupid = DB::table("admin_user")->leftJoin("admin_user_group", "admin_user.uid", "=", "admin_user_group.uid")->where("admin_user.uid", Session::get("userData")->uid)->pluck("admin_user_group.group_id");
                //由分组查询当前用户的权限集合
                $lists = DB::table("admin_group_rule")->where("id", $groupid)->pluck("rules"); //[1,2,3,4]
//                dd($lists);//debug
                //当前操作的权限ID
                $rule = DB::table("admin_auth_rule")->where("name", $subject)->pluck("id");//7
//                dd($rule);//debug
//                dd(in_array($rule, explode(",", $lists)));//debug
                if (!in_array($rule, explode(",", $lists)))
                {
                    if(in_array($subject,["/Admin/user/setGroup","/Admin/group/setRule"])){
                         return response()->json(["status"=>0,"info"=>"你无权".$rules[$subject]]);
                    }else{
                         return redirect("/tips")->with(["info" => "你无权".$rules[$subject], "url" => $_SERVER['HTTP_REFERER']]);
                    }
                }
            }
        }
        return $next($request);
        
    }
}
