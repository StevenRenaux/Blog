<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Author;
use Laravel\Lumen\Routing\Controller as BaseController;


class Controller extends BaseController
{
    protected $allCategories;
    protected $allAuthors;

    public function __construct()
    {
        $this->allCategories = Category::all();
        $this->allAuthors = Author::all();
    }
}
