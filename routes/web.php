<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

    return Inertia::render('Home/Landing');

});

Route::middleware(['auth', 'verified'])
->prefix('admin')
->group(function(){

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    
    })->name('dashboard.index');
    
    
    Route::get('one', function () {
        return Inertia::render('Dashboard');
    
    })->name('dashboard.index');
    
    Route::get('icons', function () {
        return Inertia::render('Icons');
    })->name('dashboard.icons');
    
    Route::get('maps', function () {
        return Inertia::render('Maps');
    
    })->name('dashboard.maps');
    
    Route::get('user-profile', function () {
    
        return Inertia::render('Profile');
        
    })->name('dashboard.profile');
    
    Route::get('tables', function () {
        return Inertia::render('Tables');
    })->name('dashboard.tables');
    
});

require __DIR__.'/auth.php';
