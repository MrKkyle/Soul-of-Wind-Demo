<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class workerController extends Controller
{
    public function worker(Request $request)
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "api-database";

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        if($conn->connect_error)
        {
            die("Connection Failed: " . $conn->connect_error);
        }

        $query = mysqli_query($conn, "SELECT * from `soul-of-wind`");
        $array = array();
        if($query->num_rows > 0)
        {
            while($row = $query->fetch_assoc())
            {
                $array[] = $row;
            }
        }
        return response()->json($array);
    }
}

?>
