<?php
/**
 * Created by PhpStorm.
 * User: lucia
 * Date: 05/02/2019
 * Time: 15:38
 */

namespace App\Services;
use GuzzleHttp\Client; //O módulo pra ser um cliente REST

use App\Exceptions\ErrorCalculatingRouteException;

class RouteService
{
    public function calculate($origem, $destino)
    {
        try
        {
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
            $errorMsg = "exception = ".$ex->getMessage()." line = ".$ex->getLine()." type = ".get_class($ex);
            error_log($errorMsg);
            throw new ErrorCalculatingRouteException($errorMsg);
        }
    }
}