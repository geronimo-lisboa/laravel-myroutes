<?php
use Faker\Generator as Faker;

$factory->define(App\Entrega::class, function (Faker\Generator $faker){
   return  [
       'cliente'=>$faker->name,
       'origem'=>$faker->address,
       'destino'=>$faker->address,
       'data_entrega'=>$faker->timestamp,
   ];
});