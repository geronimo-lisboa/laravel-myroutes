<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EntregaEndpointTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCanSave()
    {
        $payload = ['cliente'=>'foo', 'origem'=>'bar', 'destino'=>'woo'];
        $this->json('POST', '/api/entregas', $payload)
            ->assertStatus(201)
            ->assertJson(['cliente'=>'foo', 'origem'=>'bar', 'destino'=>'woo']);
    }

    public function testCanGet()
    {
        $this->json('GET', '/api/entregas/1')
            ->assertStatus(200)
            ->assertJson(['id'=>'1']);
    }

    public function  testCanUpdateWithDate()
    {
        //2016-02-13 17:10:04
        $dt = new \DateTime();
        $dtAsStr = $dt->format("Y-m-d H:i:s");
        $jsonData = json_decode( $this->json('GET', '/api/entregas/1')->content() );
        $payload=[
            'id'=>$jsonData->id,
            'cliente'=>$jsonData->cliente,
            'origem'=>$jsonData->origem,
            'destino'=>$jsonData->destino,
            'data_entrega'=>$dtAsStr,
            ];
        $this->json('PUT', '/api/entregas/1', $payload)
            ->assertStatus(200)
            ->assertJson([
                'id'=>$jsonData->id,
                'data_entrega'=>$dtAsStr,
        ]);
    }

    public function testCanUpdateWithoutDate()
    {
        //2016-02-13 17:10:04
        $dt = new \DateTime();
        $dtAsStr = $dt->format("Y-m-d H:i:s");
        $jsonData = json_decode( $this->json('GET', '/api/entregas/1')->content() );
        $payload=[
            'id'=>$jsonData->id,
            'cliente'=>$jsonData->cliente,
            'origem'=>$jsonData->origem,
            'destino'=>$jsonData->destino,
        ];
        $this->json('PUT', '/api/entregas/1', $payload)
            ->assertStatus(200)
            ->assertJson([
                'id'=>$jsonData->id,
                'data_entrega'=>null,
            ]);
    }

    public function testCreationFailWithoutEnoughData()
    {
        $payload=[
//            'cliente'=>'charlie',
            'origem'=>"able",
            'destino'=>"baker",
        ];
        $this->json('POST', '/api/entregas', $payload)
            ->assertStatus(400);

        $payload=[
            'cliente'=>'charlie',
//            'origem'=>"able",
            'destino'=>"baker",
        ];
        $this->json('POST', '/api/entregas', $payload)
            ->assertStatus(400);

        $payload=[
            'cliente'=>'charlie',
            'origem'=>"able",
//            'destino'=>"baker",
        ];
        $this->json('POST', '/api/entregas', $payload)
            ->assertStatus(400);

    }

    public function testUpdateFailWithoutEnoughData()
    {
        $jsonData = json_decode( $this->json('GET', '/api/entregas/1')->content() );
        $payload=[
            'id'=>$jsonData->id,
            'origem'=>$jsonData->origem,
            'destino'=>$jsonData->destino,
        ];
        //a exceção tem que ser captada no servidor e transformada num erro 400
        $this->json('PUT', '/api/entregas/1', $payload)
            ->assertStatus(400);

    }
}
