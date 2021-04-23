<?php

namespace Tests\Unit;

use App\Models\Payment;
use App\Models\User;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RouteTest extends TestCase
{

    use RefreshDatabase;

    public function testSuccessfulRegistration()
    {

        $userData = array();

        $userData["email"] = "doe@gmail.com";
        $userData["quantity"] = 1;
        $userData["total"] = 49.99;

        $userData["payment"] = array();

        $userData["payment"]["ccNum"] = "4242424242424242";
        $userData["payment"]["exp"] = "12/12";

        $this->post(route('magic'), $userData)
            ->assertStatus(201);
    }

    public function testDuplicateEmailFail()
    {
        $userData = array();

        $email = "jane@gmail.com";

        $userData["email"] = $email;
        $userData["quantity"] = 2;
        $userData["total"] = 99.98;

        $this->post(route('user'), $userData);
        $this->post(route('user'), $userData);
        $this->get(route('duplicate', $email))
            ->assertStatus(422);
    }
}