<?php

namespace Tests\Unit;
use Illuminate\Database\Seeder;
use App\Entrega;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EntregaTest extends TestCase
{
    //Garante que o banco tenha uns dados iniciais
    public function setUp()
    {
        parent::setUp();
        Artisan::call('db:seed');
    }

    public function testCreateEntrega()
    {
        $faker = \Faker\Factory::create();
        $name = $faker->name;
        $entrega = Entrega::create([
            'cliente'=>$name,
            'origem'=>$faker->address,
            'destino'=>$faker->address,
            'data_entrega'=>$faker->dateTime,
        ]);
        $entrega->save();

        $retrieved = Entrega::findOrFail($entrega->id);
        $this->assertEquals($entrega->id, $retrieved->id);
    }

    public function testDeleteEntrega()
    {
        //fwrite(STDOUT, "foobar?");
        $faker = \Faker\Factory::create();
        $name = $faker->name;
        $entrega = Entrega::create([
            'cliente'=>$name,
            'origem'=>$faker->address,
            'destino'=>$faker->address,
            'data_entrega'=>$faker->dateTime,
        ]);
        $entrega->save();
        //pega a entrega criada
        $retrieved = Entrega::findOrFail($entrega->id);
        $this->assertEquals($entrega->id, $retrieved->id);
        $entrega->delete();
        //agora ela tem que sumir
        $retrieved = Entrega::find($entrega->id);
        $this->assertEmpty($retrieved);
    }

    public function testUpdateEntrega()
    {
        $faker = \Faker\Factory::create();
        $name = $faker->name;
        $entrega = Entrega::create([
            'cliente'=>$name,
            'origem'=>$faker->address,
            'destino'=>$faker->address,
            'data_entrega'=>$faker->dateTime,
        ]);
        $entrega->save();//Salvou o original

        $newDateTime = $faker->dateTime;
        $currentId = $entrega->id;

        $entrega->data_entrega = $newDateTime;
        $entrega->save();//atualiza

        $retrieved = Entrega::findOrFail($entrega->id);
        $this->assertEquals($entrega->data_entrega, $newDateTime);

    }

}
