<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function home()
    {
        $rands = Blog::inRandomOrder()->paginate(3);

        return Inertia::render('Welcome', ['rands' => $rands]);
    }
    public function index()
    {
        $blogs = Blog::orderBy('created_at', 'desc')->simplePaginate(2);

        return Inertia::render('Blog', ['blogs' => $blogs]);
    }

    public function view($slug)
    {

        $blog = Blog::where('slug', $slug)->first();

        $rands = Blog::inRandomOrder()->paginate(3);

        return Inertia::render('BlogDetail', ['blog' => $blog, 'rands' => $rands]);
    }
}
