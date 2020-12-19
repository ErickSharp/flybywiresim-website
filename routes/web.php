<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes([
    'register' => false,
]);

Route::get('/', [App\Http\Controllers\Site\SiteController::class, 'index'])->name('site.index');
Route::get('/features', [App\Http\Controllers\Site\SiteController::class, 'features'])->name('site.features');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
