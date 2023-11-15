<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class sessionController extends Controller 
{
   public function session_variables(Request $request)
   {
        session_start();
        /* If action variable = login */
        if ($request["action"] == "login")
        {
            $isLogged = true;
            $_SESSION['isLogged'] = $isLogged;
            return response()->json($isLogged);
        }
        /* if action variable = logout */
        else if($request["action"] == "logout")
        {
            $isLogged = false;
            $_SESSION['isLogged'] = $isLogged;
            return response()->json($isLogged);
        }   
        else 
        {
            if(!(isset($_SESSION['isLogged'])))
            {
                $isLogged = 'null';
                $_SESSION['isLogged'] = $isLogged;
                return response()->json($isLogged);
            }
            else 
            {
                $isLogged = $_SESSION['isLogged'];
                return response()->json($isLogged);
            }
            
        }
   }
}

