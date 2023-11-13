<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;


class AjaxController extends Controller 
{

   public function post(Request $request)
   {
        $response = array
        (
            'status' => 'success',
            'msg' => $request->message,
        );
        return response()->json($response); 
   }
}
