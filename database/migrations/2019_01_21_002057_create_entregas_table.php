<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntregasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entregas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cliente');
            $table->string('origem');
            $table->string('destino');
            //Data de entrega pode ser nula, ainda n entregou.
            //Trabalhar com os formatos de data do php estava mto dificil e dando mtos erros nos testes por diferenças
            //de formatos e presença ou não de milisegundos. Vou gravar a representação textual da data.
            $table->string('data_entrega')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entregas');
    }
}
