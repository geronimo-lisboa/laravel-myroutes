<?php

namespace App\Http\Controllers;

use App\Services\RouteService;
use Illuminate\Http\Request;
use GuzzleHttp\Client; //O módulo pra ser um cliente REST

class RotaController extends Controller
{
    public function calculate($origem, $destino)
    {
        $routeService = new RouteService();
        return $routeService->calculate($origem, $destino);
    }
}
