<?php
    session_start();
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $user = $_POST['username'];
    $key = $_POST['password'];

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
        echo("register-true");
    }
    else
    {
        echo("register-false");
    }

?>
