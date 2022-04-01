<?php

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\UserController;

if (request()->getHost() != '127.0.0.1') {
    URL::forceScheme('https');
}

Route::get('/', WelcomeController::class)->name('welcome');
Route::get('/{user:username}', UserController::class)->name('user.show');
