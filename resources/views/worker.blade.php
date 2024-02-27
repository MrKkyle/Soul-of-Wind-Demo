<html>
    <body>
    <?php
        session_start();
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Credentials: true');

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "api-database";

        $text = $_POST['data'];

        $conn = mysqli_connect($servername, $username, $password, $dbname);
        if($conn->connect_error)
        {
            die("Connection Failed: " . $conn->connect_error);
        }


    ?>
    </body>
</html>