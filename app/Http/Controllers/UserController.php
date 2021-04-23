<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function checkDuplicateEmail($email)
    {
        $found = User::where('email', $email)->exists();

        if ($found == true) {
            print_r('email found');
            return response()->json(true);
        } else {
            print_r('no email found');
            return response()->json(false);
        }
    }

}
