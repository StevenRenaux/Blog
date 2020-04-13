<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * URL : /posts
     * HTTP Method : GET
     */
    public function list()
    {
        $allPosts = Post::all()->load('category')->load('author');

        return $this->sendJsonResponse($allPosts);
    }
}
