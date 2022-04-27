<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified', 'isUser'])
->prefix('user')
->group(function(){

    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    
    })->name('user.dashboard');
    
    
    Route::get('one', function () {
        return Inertia::render('Admin/Dashboard');
    
    })->name('user.one');
    
    Route::get('icons', function () {
        return Inertia::render('Admin/Icons');
    })->name('user.icons');
    
    Route::get('maps', function () {
        return Inertia::render('Admin/Maps');
    
    })->name('user.maps');
    
    Route::get('user-profile', function () {
    
        return Inertia::render('Admin/Profile');
        
    })->name('user.profile');
    
    Route::get('tables', function () {
        return Inertia::render('Admin/Tables');
    })->name('user.tables');
    
});