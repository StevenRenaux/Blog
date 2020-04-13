<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// route pour la page d'accueil
$router->get(
    '/',
    [
        'uses' => 'MainController@home',
        'as' => 'home',
    ]
);

/**
 * URL : /posts
 * HTTP Method : GET
 * Controller : PostController
 * Method : list
 */
$router->get(
    '/posts',
    [
        'uses' => 'PostController@list',
        'as' => 'post-list'
    ]
);

/**
 * URL : /categories
 * HTTP Method : GET
 * Controller : CategoryController
 * Method : list
 */
$router->get(
    '/categories',
    [
        'uses' => 'CategoryController@list',
        'as' => 'category-list'
    ]
);
/**
* URL : /authors
* HTTP Method : GET
* Controller : AuthorController
* Method : list
 */
$router->get(
    '/authors',
    [
        'uses' => 'AuthorController@list',
        'as' => 'author-list'
    ]
);
