<?php
    session_start();
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    $user = $_POST['register_username'];
    $key = $_POST['register_password'];

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
        echo json_encode($result);
    }
    else
    {
        $result = array("username"=>$user, "key"=>$key, "Status"=>"register-false");
        echo json_encode($result);
    }

?>
