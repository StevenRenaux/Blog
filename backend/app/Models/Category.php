<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * Get the posts for the blog post.
     */
    public function posts()
    {
        return $this->hasMany('App\Models\Post');
    }

}
