<?php

use Illuminate\Database\Seeder;
use App\Entrega;

class EntregasTableSeeder extends Seeder
{
    public function run()
    {
        Entrega::truncate();
        $faker = \Faker\Factory::create();
        for($i=0; $i<10; $i++)
        {
            // ['cliente', 'origem', 'destino', 'data_entrega'];
            $data = $i % 2 == 1 ? null : $faker->dateTime;
            Entrega::create([
                'cliente'=>$faker->name,
                'origem'=>$faker->address,
                'destino'=>$faker->address,
                'data_entrega'=>$data,
            ]);
        }
    }
}
