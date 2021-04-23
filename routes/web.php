<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/testing', function () {
    return ['message' => 'hello'];
});

Route::post('magic', [PaymentController::class, 'createPayment'])->name('magic');

Route::post('user', [UserController::class, 'createUser'])->name('user');

Route::get('duplicate/{email}', [UserController::class, 'checkDuplicateEmail'])->name('duplicate');