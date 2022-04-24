<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    // protected $rootView = 'app';

    public function rootView(Request $request)
    {
        $pathArr = explode('/', $request->path());

        if($pathArr[0] && $pathArr[0] == 'dashboard')
        {
            return 'app-root';
        }
        elseif($pathArr[0] && $pathArr[0] == 'admin'){
            
            return 'app-root';

        }else{

            return 'home-root';

        }
    }


    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */

    // public function register(Request $request)
    // {
 
    // }

    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {



        // dd($this->rootView);

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
        ]);
    }
    


    // public function handle(Request $request, Closure $next)
    // {
    //    $pathArr = explode('/', $request->path());

    //    if($pathArr[0] && $pathArr[0] == 'dashboard')
    //    {
    //        $this->rootView = 'app';
    //    }
    //    elseif($pathArr[0] && $pathArr[0] == 'admin'){
    //     $this->rootView = 'app';

    //    }else{
    //     $this->rootView = 'welcome';

    //    }


    //    return $next($request);

    // //    dd($this->rootView);
    // }
}
