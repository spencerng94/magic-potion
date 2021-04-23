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
            return response()->json(true);
        } else {
            return response()->json(false);
        }
    }

}
