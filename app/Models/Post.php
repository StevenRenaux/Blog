<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Get the category that owns the post.
     */
    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    /**
     * Get the author that owns the post.
     */
    public function author()
    {
        return $this->belongsTo('App\Models\Author');
    }
}
