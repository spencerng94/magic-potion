<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDataTable extends Migration
{

public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('email');
        $table->integer('quantity');
        $table->decimal('total', 10, 2);
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('data');
}
}