<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entrega extends Model
{
    protected $fillable = ['cliente', 'origem', 'destino', 'data_entrega'];
}
