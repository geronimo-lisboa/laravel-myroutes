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
    public function testExample()
    {

        $payload = ['cliente'=>'foo', 'origem'=>'bar', 'destino'=>'woo'];
        $this->json('POST', '/api/entregas', $payload)
            ->assertStatus(201);
    }
}
