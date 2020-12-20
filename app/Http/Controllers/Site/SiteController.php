<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;

class SiteController extends Controller
{
    public function index(){
        return view('site.index');
    }

    public function changelog() {
        return view('site.changelog');
    }
    public function groundschool() {
        return view('site.groundschool');
    }
    public function resources()
    {
        return view('site.resources');
    }
    public function documentation()
    {
        return view('site.documentation');
    }
}
