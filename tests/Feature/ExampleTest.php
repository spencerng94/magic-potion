<?php

namespace Tests\Feature;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('duplicate/spencerng94@gmail.com');

        $response->assertStatus(200);
    }
}