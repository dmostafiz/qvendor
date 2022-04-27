<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified', 'isAdmin'])
->prefix('admin')
->group(function(){

    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    
    })->name('admin.dashboard');
    
    
    Route::get('one', function () {
        return Inertia::render('Admin/Dashboard');
    
    })->name('admin.one');
    
    Route::get('icons', function () {
        return Inertia::render('Admin/Icons');
    })->name('admin.icons');
    
    Route::get('maps', function () {
        return Inertia::render('Admin/Maps');
    
    })->name('admin.maps');
    
    Route::get('user-profile', function () {
    
        return Inertia::render('Admin/Profile');
        
    })->name('admin.profile');
    
    Route::get('tables', function () {
        return Inertia::render('Admin/Tables');
    })->name('admin.tables');
    
});
