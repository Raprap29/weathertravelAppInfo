<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
class TravelerController extends Controller
{
    public function getLocationTravel ($city) {
        $api = env('API_TRAVEL');
        $client = new Client(); // Declare client to get the api
        $apiUrl = "https://api.geoapify.com/v1/geocode/search?text=$city,%20Japan&apiKey=$api";
       
        try {
            $response = $client->get($apiUrl);

            // Get the response body as an array
            $data = json_decode($response->getBody(), true);

            return response()->json(['travel' => $data]); // response of get travel data
        } catch (\Exception $e) {
            // Handle any errors
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
