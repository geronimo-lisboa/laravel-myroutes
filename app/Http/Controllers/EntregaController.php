<?php

namespace App\Http\Controllers;

use App\Exceptions\NotEnoughParametersException;
use App\Services\EntregaService;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Entrega;
use mysql_xdevapi\Exception;

class EntregaController extends Controller
{
    /*
     * Lista todos.
     * */
    public function index()
    {
        $service = new EntregaService();
        return $service->findAll();
        //return Entrega::all();
    }
    /*
     * Retorna por id.
     * */
    public function show($id)
    {
        $service = new EntregaService();
        return $service->findById($id);

        //return Entrega::findOrFail($id);
    }
    /*
     * Cria uma nova entrega.
     * */
    public function store(Request $request)
    {
        $service = new EntregaService();
        try{
            $cliente = $request->request->get('cliente');
            $origem =  $request->request->get('origem');
            $destino = $request->request->get('destino');
            $data_entrega = $request->request->get('data_entrega');

            return $service->create($cliente, $origem, $destino, $data_entrega);

//            return Entrega::create([
//                'cliente'=>$cliente,
//                'origem'=>$origem,
//                'destino'=>$destino,
//                'data_entrega'=>$data_entrega,
//            ]);
        }
        catch (QueryException $exception)
        {
            throw new NotEnoughParametersException();
        }
    }

    public function setDataEntregaToNow($id)
    {
        error_log("foobar");
    }
    /*
     * Atualiza uma entrega.
     * */
    public function update(Request $request, $id)
    {
        $service = new EntregaService();
        try
        {
            $cliente = $request->request->get('cliente');
            $origem =  $request->request->get('origem');
            $destino = $request->request->get('destino');
            $data_entrega = $request->request->get('data_entrega');
            return $service->update($id, $cliente, $origem, $destino, $data_entrega);

//            $entrega = Entrega::findOrFail($id);
//            $entrega->cliente = $cliente;
//            $entrega->origem = $origem;
//            $entrega->destino = $destino;
//            $entrega->data_entrega = $data_entrega;
//            $entrega->update();
//
//            // var_dump($entrega);
//            return $entrega;

        }
        catch (QueryException $exception)
        {
            throw new NotEnoughParametersException();
        }
    }
}
