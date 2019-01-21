<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entrega;

class EntregaController extends Controller
{
    /*
     * Lista todos.
     * */
    public function index()
    {
        return Entrega::all();
    }
    /*
     * Retorna por id.
     * */
    public function show($id)
    {
        return Entrega::findOrFail($id);
    }
    /*
     * Cria uma nova entrega.
     * */
    public function store(Request $request)
    {
        $cliente = $request->request->get('cliente');
        $origem =  $request->request->get('origem');
        $destino = $request->request->get('destino');
        $data_entrega = $request->request->get('data_entrega');
        return Entrega::create([
            'cliente'=>$cliente,
            'origem'=>$origem,
            'destino'=>$destino,
            'data_entrega'=>$data_entrega,
            ]);
    }
    /*
     * Atualiza uma entrega.
     * */
    public function update(Request $request, $id)
    {
        $cliente = $request->request->get('cliente');
        $origem =  $request->request->get('origem');
        $destino = $request->request->get('destino');
        $data_entrega = $request->request->get('data_entrega');

        $entrega = Entrega::findOrFail($id);
        $entrega->cliente = $cliente;
        $entrega->origem = $origem;
        $entrega->destino = $destino;
        $entrega->data_entrega = $data_entrega;

        $entrega->update();
        return $entrega;
    }
}
