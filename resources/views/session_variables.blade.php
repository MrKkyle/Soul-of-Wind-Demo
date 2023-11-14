<?php
    session_start();
    header('Access-Control-Allow-Origin: http://localhost:8000');
    header('Access-Control-Allow-Credentials: true');

    /* If action variable = login */
    if ($_POST["action"] == "login")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    /* if action variable = logout */
    else if($_POST["action"] == "logout")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }   
    else 
    {
        if(!(isset($_SESSION['isLogged'])))
        {
            $isLogged = null;
            $_SESSION['isLogged'] = $isLogged;
            echo json_encode($isLogged);
        }
        else 
        {
            $isLogged = $_SESSION['isLogged'];
            echo json_encode($isLogged);
        }
        
    }
?>