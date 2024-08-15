<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class WeatherController extends Controller
{
    public function getWeather($city){ // Declare function with parameters of city

        $apiKey = env('API_WEATHER'); // Secret Api Key
        $client = new Client(); // Declare client to get the api

        $apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=$city, JP&appid={$apiKey}";
            
        try {
            $response = $client->get($apiUrl);

            // Get the response body as an array
            $data = json_decode($response->getBody(), true);

            return response()->json(['weather' => $data]); // response of get weather data
        } catch (\Exception $e) {
            // Handle any errors
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
