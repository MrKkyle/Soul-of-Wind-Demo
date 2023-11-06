<?php
    session_start();
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    if($_POST["action"] == "validate")
    {   
        $result = array("username"=>$_SESSION['username'], "key"=>$_SESSION['key'] , "Status"=>"validate");
        echo json_encode($result);
        exit();
    }

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

    $query = mysqli_query($conn, "SELECT * FROM `api-credentials` WHERE userName = '$user' AND passCode = '$key'");
    if(mysqli_num_rows($query) > 0)
    {
        $result = array("username"=>$user, "key"=>$key, "Status"=>"login-true");
        $_SESSION['username'] = $user;
        $_SESSION['key'] = $key;
        echo json_encode($result);

    }
    else
    {
        $result = array("username"=>$user, "key"=>$key, "Status"=>"login-false");
        $_SESSION['username'] = $user;
        $_SESSION['key'] = $key;
        echo json_encode($result);
    }

?>
