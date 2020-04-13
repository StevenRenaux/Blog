<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{

    /**
     * Provide a centralized display of a JSON, with httpStatusCode, to all Controllers
     *
     * @param mixed $data
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendJsonResponse($data , $httpStatusCode=200)
    {
        return response()->json($data , $httpStatusCode);
    }

    /**
     * Provide a centralized empty response, with httpStatusCode, to all Controllers
     *
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendEmptyResponse($httpStatusCode=204)
    {
        // Return response, with headers
        return response('', $httpStatusCode);
    }

}
