<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDataTable extends Migration
{

public function up()
{
    Schema::create('payments', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('user_id');
        $table->string('ccNum');
        $table->string('exp');
        $table->foreign('user_id')->references('payment_id')->on('users');
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('data');
}
}