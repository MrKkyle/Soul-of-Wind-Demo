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

Route::get('/', function () 
{
    return view('welcome');
});

/* Main Routes & Controllers */
use App\Http\Controllers\AjaxController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\registerController;
use App\Http\Controllers\sessionController;

Route::post('/session_variables', [sessionController::class, 'session']);
Route::post('/register', [registerController::class, 'register']);
Route::post('/login',[loginController::class, 'login']);
Route::post('/worker', [AjaxController::class, 'worker']);

