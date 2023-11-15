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
            exit();
        }

        $user = $request['username'];
        $key = $request['password'];

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "api-database";

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        if($conn->connect_error)
        {
            die("Connection Failed: " . $conn->connect_error);
        }

        $query = mysqli_query($conn, "SELECT * FROM `api-credentials` WHERE userName = '$user' AND passCode = '$key'");
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
