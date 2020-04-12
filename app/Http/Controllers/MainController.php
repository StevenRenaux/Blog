<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    /**
     * HTTP method: GET
     * URL : /
     */
    public function home() {

        $allPosts = Post::all()->load('category')->load('author');

        return view(
            // Nom de la View dans /resources/views
            // => /resources/views/main/home.php
            'home',
            // Données à transmettre à la View
            [
                'title' => 'home',
                'allCategories' => $this->allCategories,
                'allAuthors' => $this->allAuthors,
                'allPosts' => $allPosts,
            ]

        );
    }
}
