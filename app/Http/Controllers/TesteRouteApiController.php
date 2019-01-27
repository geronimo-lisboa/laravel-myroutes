<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client; //O módulo pra ser um cliente REST

class TesteRouteApiController extends Controller
{
    public function helloRouteApi()
    {
        try{
            $apikey =  env('GOOGLE_API_KEY');
            $url = 'https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key='.$apikey;
            $client = new Client();

            $response =  $client->get($url);

            $body = $response->getBody();

            $contents = $body->getContents();
//            error_log($contents);
//            $jsonData = json_decode($contents);
//            error_log("5");
            return $contents;



//            $request = new Request('GET', $url);
//
//            $client = new Client(['timeout'=>10.0]);
//            $body = $client->send($request, ['timeout'=>10])->getBody();
//            $obj = json_decode($body);
//            return $obj;

//            $client = new Client();
//            $apikey =  env('GOOGLE_API_KEY');//$_ENV['APP_KEY'];
//            $url = 'https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key='.$apikey;
//            $res = $client->get($url);
//            $body = $res->getBody();//isso aqui é um stream
//            $sz = $body->getSize();
//            $bodyContent = $body->read($sz);
//            $body->close();
//            error_log("typeof body = ".get_class($body));
//            error_log("contentof = ".$bodyContent);
//            return $bodyContent;
        }
        catch (\Exception $ex){
            error_log("exception = ".$ex->getMessage()." line = ".$ex->getLine()." type = ".get_class($ex));
        }
    }
}
