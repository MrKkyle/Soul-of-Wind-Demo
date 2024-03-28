<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

class registerController extends Controller 
{

   public function register(Request $request)
   {
        
        session_start();
        //User credentials from form submission
        $user = $request['register_username'];
        $key = $request['register_password'];

        $db_host = 'SOW-db';
        $database_user = 'root';
        $user_passord = 'rewrite';
        $database_name = 'api_database';


        /* connection and query */
        $conn = mysqli_connect($db_host, $database_user, $user_passord, $database_name);
        if ($conn->connect_error) { die("PHP failed to access MySQL: " . $conn->connect_error); }
        $query = "INSERT INTO `api_credentials` (username, passCode) VALUES ('$user', '$key')";

        //Returns the data
        if(mysqli_query($conn, $query))
        {
            $result = array("username"=>$user, "key"=>$key, "Status"=>"register-true");
            return response()->json($result);
        }
        else
        {
            $result = array("username"=>$user, "key"=>$key, "Status"=>"register-false");
            return response()->json($result);
        }
        /*

        $users = DB::select('select * from api_credentials');
 
        return view('register', [$users]);
        //return response()->json(['register', $users]);

        */
        
   }
}

