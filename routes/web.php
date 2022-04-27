<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Landing');
});

require __DIR__.'/AdminRoutes.php';
require __DIR__.'/UserRoutes.php';
require __DIR__.'/auth.php';
