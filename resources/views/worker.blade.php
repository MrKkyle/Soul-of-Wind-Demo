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

        if ($_POST["action"] == "equipment")
        {
            $query = "SELECT Equipment FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['Equipment']);
        }
        else if($_POST["action"] == "equipment-update")
        {
            $query = "UPDATE aesperia SET Equipment = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }   
        else if ($_POST["action"] == "PVP")
        {
            $query = "SELECT PVP FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['PVP']);
        }
        else if($_POST["action"] == "PVP-update")
        {
            $query = "UPDATE aesperia SET PVP = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "aesperiaEnemies")
        {
            $query = "SELECT aesperiaEnemies FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['aesperiaEnemies']);
        }
        else if($_POST["action"] == "aesperiaEnemies-update")
        {
            $query = "UPDATE aesperia SET aesperiaEnemies = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if($_POST["action"] == "aesperiaWorldBosses")
        {
            $query = "SELECT aesperiaWorldBosses FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['aesperiaWorldBosses']);
        }
        else if($_POST["action"] == "aesperiaWorldBosses-update")
        {
            $query = "UPDATE aesperia SET aesperiaWorldBosses = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "veraEnemies")
        {
            $query = "SELECT veraEnemies FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['veraEnemies']);
        }
        else if($_POST["action"] == "veraEnemies-update")
        {
            $query = "UPDATE vera SET veraEnemies = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if($_POST["action"] == "veraWorldBosses")
        {
            $query = "SELECT veraWorldBosses FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['veraWorldBosses']);
        }
        else if($_POST["action"] == "veraWorldBosses-update")
        {
            $query = "UPDATE vera SET veraWorldBosses = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "domain9Enemies")
        {
            $query = "SELECT domain9Enemies FROM domain9";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['domain9Enemies']);
        }
        else if($_POST["action"] == "domain9Enemies-update")
        {
            $query = "UPDATE domain9 SET domain9Enemies = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "domain9WorldBosses")
        {
            $query = "SELECT domain9WorldBosses FROM domain9";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['domain9WorldBosses']);
        }
        else if($_POST["action"] == "domain9WorldBosses-update")
        {
            $query = "UPDATE domain9 SET domain9WorldBosses = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "unknown")
        {
            $query = "SELECT Unknown FROM domain9";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['Unknown']);
        }
        else if($_POST["action"] == "unknown-update")
        {
            $query = "UPDATE domain9 SET Unknown = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "ArtificialIsland")
        {
            $query = "SELECT ArtificialIsland FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['ArtificialIsland']);
        }
        else if($_POST["action"] == "ArtificialIsland-update")
        {
            $query = "UPDATE aesperia SET ArtificialIsland = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "Banges")
        {
            $query = "SELECT Banges FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['Banges']);
        }
        else if($_POST["action"] == "Banges-update")
        {
            $query = "UPDATE aesperia SET Banges = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "Hykros")
        {
            $query = "SELECT Hykros FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['Hykros']);
        }
        else if($_POST["action"] == "Hykros-update")
        {
            $query = "UPDATE aesperia SET Hykros = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "Warren")
        {
            $query = "SELECT Warren FROM aesperia";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['Warren']);
        }
        else if($_POST["action"] == "Warren-update")
        {
            $query = "UPDATE aesperia SET Warren = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "confoundingAbyss")
        {
            $query = "SELECT confoundingAbyss FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['confoundingAbyss']);
        }
        /* if action variable = logout */
        else if($_POST["action"] == "confoundingAbyss-update")
        {
            $query = "UPDATE vera SET confoundingAbyss = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "graySpace")
        {
            $query = "SELECT graySpace FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['graySpace']);
        }

        else if($_POST["action"] == "graySpace-update")
        {
            $query = "UPDATE vera SET graySpace = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "innars")
        {
            $query = "SELECT innars FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['innars']);
        }

        else if($_POST["action"] == "innars-update")
        {
            $query = "UPDATE vera SET innars = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "miasmicSwamp")
        {
            $query = "SELECT miasmicSwamp FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['miasmicSwamp']);
        }
        else if($_POST["action"] == "miasmicSwamp-update")
        {
            $query = "UPDATE vera SET miasmicSwamp = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "Mirroria")
        {
            $query = "SELECT Mirroria FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['Mirroria']);
        }
        else if($_POST["action"] == "Mirroria-update")
        {
            $query = "UPDATE vera SET Mirroria = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

        else if ($_POST["action"] == "twilightZone")
        {
            $query = "SELECT twilightZone FROM vera";
            $result = mysqli_query($conn, $query);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row['twilightZone']);
        }
        else if($_POST["action"] == "twilightZone-update")
        {
            $query = "UPDATE vera SET twilightZone = '$text'";
            mysqli_query($conn, $query);
            echo json_encode($text);
        }

    ?>
    </body>
</html>