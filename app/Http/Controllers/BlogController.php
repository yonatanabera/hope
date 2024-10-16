<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return Blog::all();
    }

    public function view($slug)
    {
        return Blog::where('slug', $slug)->first();
    }
}
