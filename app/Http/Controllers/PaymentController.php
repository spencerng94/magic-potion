<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\User;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {
        $user = new User;
        $user->email = $request->email;
        $user->quantity = $request->quantity;
        $user->total = $request->total;
        $user->save();

        // $user = new User([
        //     'email' => $request->email,
        //     'quantity' => $request->quantity,
        //     'total' => $request->total
        // ])
        // $user->save();

        $ccNum = $request["payment"]["ccNum"];
        $exp = $request["payment"]["exp"];

        // $ccNum = $request->payment->ccNum;
        // $exp = $request->payment->exp;
        $last = User::latest()->first("id")->value("id");

        $payment = new Payment;
        $payment->user_id = $last;
        $payment->ccNum = $ccNum;
        $payment->exp = $exp;
        $payment->save();

        // $payment = new Payment([
        //     'user_id' => $last,
        //     'ccNum' => $ccNum,
        //     'exp' => $exp
        // ])
        // $payment->save();

        $uid = Payment::latest()->first("id")->value("id");

        return response()->json([
            "id" => $uid
        ], 201);
    }
}

// class PaymentController extends Controller
// {
//     public function createPayment(Request $request)
//     {
//         $user = new User;
//         $user->email = $request->email;
//         $user->quantity = $request->quantity;
//         $user->total = $request->total;
//         $user->save();

//         $ccNum = $request["payment"]["ccNum"];
//         $exp = $request["payment"]["exp"];

//         // $ccNum = $request->payment->ccNum;
//         // $exp = $request->payment->exp;
//         $last = User::latest()->first("id")->value("id");

//         $payment = new Payment;
//         $payment->user_id = $last;
//         $payment->ccNum = $ccNum;
//         $payment->exp = $exp;
//         $payment->save();

//         $uid = Payment::latest()->first("id")->value("id");

//         return response()->json([
//             "id" => $uid
//         ], 201);
//     }
// }
