<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * URL : /categories
     * HTTP Method : GET
     */
    public function list()
    {
        $allCategory = Category::orderBy('position')->get();

        return $this->sendJsonResponse($allCategory);
    }
}
