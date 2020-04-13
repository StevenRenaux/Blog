<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * URL : /categories
     * HTTP Method : GET
     */
    public function list()
    {
        $allauthor = Author::all();

        return $this->sendJsonResponse($allauthor);
    }
}
