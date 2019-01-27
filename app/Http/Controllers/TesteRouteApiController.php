<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TesteRouteApiController extends Controller
{
    public function helloRouteApi()
    {
        //var_dump("hello world");
        return ['resp'=>'hello world'];
    }
}
