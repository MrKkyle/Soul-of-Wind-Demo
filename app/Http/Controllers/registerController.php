<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class registerController extends Controller 
{

   public function register(Request $request)
   {
        session_start();

        $user = $request['register_username'];
        $key = $request['register_password'];

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "api-database";

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        if($conn->connect_error)
        {
            die("Connection Failed: " . $conn->connect_error);
        }
        $query = "INSERT INTO `api-credentials` (username, passCode) VALUES ('$user', '$key')";

        
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
        
   }
}

