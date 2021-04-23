<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        $user = new User;
        $user->email = $request->email;
        $user->quantity = $request->quantity;
        $user->total = $request->total;
        $user->save();

        return response()->json([
            "message" => "user record created"
        ], 201);
    }

    public function checkDuplicateEmail($email)
    {
        $found = User::where('email', $email)->exists();

        if ($found == true) {
            return response()->json([
                "error" => "Already Exists"
            ], 422);
        } else {
            return response()->json([
                "success" => "No Duplicate Email"
            ], 201);
        }
    }

}
