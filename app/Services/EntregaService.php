<?php
/**
 * Created by PhpStorm.
 * User: lucia
 * Date: 05/02/2019
 * Time: 15:38
 */

namespace App\Services;


use App\Entrega;

class EntregaService
{
    public function findAll()
    {
        return Entrega::all();
    }

    public function findById($id)
    {
        return Entrega::findOrFail($id);
    }

    public function create($cliente, $origem, $destino, $data_entrega)
    {
        $newEntrega = Entrega::create([
            'cliente'=>$cliente,
            'origem'=>$origem,
            'destino'=>$destino,
            'data_entrega'=>$data_entrega,
        ]);
        return $newEntrega;
    }

    public function update($id,$cliente, $origem, $destino, $data_entrega)
    {
        $entrega = Entrega::findOrFail($id);

        $entrega->cliente = $cliente;
        $entrega->origem = $origem;
        $entrega->destino = $destino;
        $entrega->data_entrega = $data_entrega;

        $entrega->update();
        return $entrega;
    }
}