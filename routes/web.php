<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/* The main .blade file should be configured below (most likely index if you using react */
Route::get('/', function () 
{
    return view('index');
});

/* React Routes */
Route::view('/{path?}', 'index')
    ->where('path', '.*');

/* Main Routes & Controllers */
use App\Http\Controllers\loginController;
use App\Http\Controllers\registerController;
use App\Http\Controllers\sessionController;
use App\Http\Controllers\workerController;

Route::post('/session_variables', [sessionController::class, 'session_variables']);
Route::post('/register', [registerController::class, 'register']);
Route::post('/login',[loginController::class, 'login']);
Route::post('/worker', [workerController::class, 'worker']);

