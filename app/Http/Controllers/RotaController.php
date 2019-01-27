<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client; //O módulo pra ser um cliente REST

class RotaController extends Controller
{
    public function calculate($origem, $destino)
    {
        try
        {
            error_log('1');
            $apikey =  env('GOOGLE_API_KEY');
            $url = 'https://maps.googleapis.com/maps/api/directions/json?origin='.$origem.'&destination='.$destino.'&key='.$apikey;
            $client = new Client();
            $response = $client->get($url);
            $body = $response->getBody();
            $contents = $body->getContents();
            return $contents;
        }
        catch (\Exception $ex)
        {
            error_log("exception = ".$ex->getMessage()." line = ".$ex->getLine()." type = ".get_class($ex));
        }
    }
}
