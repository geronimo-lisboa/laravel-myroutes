<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('entregas', 'EntregaController@index');
Route::get('entregas/{id}', 'EntregaController@show');
Route::post('entregas', 'EntregaController@store');
Route::put('entregas/{id}', 'EntregaController@update');
Route::put('entregas/{id}/entregue', 'EntregaController@setDataEntregaToNow');

Route::get('testeRoutes', 'TesteRouteApiController@helloRouteApi');

Route::get('rota/origem={origem}&destino={destino}', 'RotaController@calculate');
