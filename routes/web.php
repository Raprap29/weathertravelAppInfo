<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;
use App\Http\Controllers\TravelerController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('cors')->group(function(){
    Route::get('/weather/{city}', [WeatherController::class, 'getWeather']);
    Route::get('/travel/{city}', [TravelerController::class, 'getLocationTravel']);
});
