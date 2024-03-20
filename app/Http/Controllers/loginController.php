<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class loginController extends Controller 
{
   public function login(Request $request)
   {
        session_start();
        if($request["action"] == "validate")
        {   
            $result = array("username"=>$_SESSION['username'], "key"=>$_SESSION['key'] , "Status"=>"validate");
            return response()->json($result); 
        }

        //User credentials from form submission
        $user = $request['username'];
        $key = $request['password'];

        $db_host = 'SOW-db';
        $database_user = 'root';
        $user_passord = 'rewrite';
        $database_name = 'api_database';

        //Database connection and query
        $conn = mysqli_connect($db_host, $database_user, $user_passord, $database_name);
        if ($conn->connect_error) { die("PHP failed to access MySQL: " . $conn->connect_error);}
        $query = mysqli_query($conn, "SELECT * FROM `api_credentials` WHERE userName = '$user' AND passCode = '$key'");

        //Returns the results
        if(mysqli_num_rows($query) > 0)
        {
            $result = array("username"=>$user, "key"=>$key, "Status"=>"login-true");
            $_SESSION['username'] = $user;
            $_SESSION['key'] = $key;
            return response()->json($result); 

        }
        else
        {
            $result = array("username"=>$user, "key"=>$key, "Status"=>"login-false");
            $_SESSION['username'] = $user;
            $_SESSION['key'] = $key;
            return response()->json($result); 
        }
   }
}
