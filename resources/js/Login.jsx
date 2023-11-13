import React from 'react';
import {useEffect} from 'react';
import {useState} from "react";
import $ from "jquery";

import '../CSS/login.css';

function Login()
{
    const[inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    //Login
    const Login = (event) =>
    {
        event.preventDefault();
        const form = $(event.target);

        $.ajaxSetup({ xhrFields: { withCredentials: true }, headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});

        /*
        $.ajax
        ({
            type: "POST",
            url: "http://localhost:8000/login",
            data: form.serialize(), // important to maintain the form data output
            dataType: 'json',
            success(data) {
                setResult(data);
                console.log(data);
            }, 
        });
        */

        $.post( "http://localhost:8000/login", {action: "login", username: inputs.username, password: inputs.password})
        .done(function( _data) 
        {
            console.log(_data);
        });
    
        $.post( "http://localhost:8000/session_variables", {action: "login"})
        .done(function( _data) 
        {
            console.log(_data);
        });
    }

    //Register
    const Register = (event) =>
    {
        event.preventDefault();
        const form = $(event.target);

        $.ajaxSetup({ 
            xhrFields: { withCredentials: true }, 
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
        });

        /* Submits the user Information */
        $.ajax
        ({
            type: "POST",
            url: "http://localhost:8000/register",
            data: form.serialize(), // important to maintain the form data output
            dataType: 'json',
            success(data) {
                setResult(data);
                console.log(data);
                let message = document.getElementById("message");
                let register_form = document.getElementById("form2");
                if(message.innerHTML !== "")
                {
                    message.style.display = "block";
                    if(message.innerHTML === "register-true")
                    {
                        message.innerHTML = "Registered Sucessfully";
                        message.style.backgroundColor = "rgb(6, 133, 6)";
                        setTimeout(() =>
                        {
                            register_form.style.animation = "Fadeout ease-out 1s";
                            register_form.style.display = "none";
                            redirect_main.style.display = "block";
                        
                        }, 1000);
                    }
                    else if(message.innerHTML === "register-false")
                    {
                        message.innerHTML = "Registration Failed";
                        message.style.backgroundColor = "rgb(175, 11, 11)";
                        setTimeout(() =>
                        {
                            //reloads the browser
                            window.location.reload();
                        }, 2000);
                    }
                }
            },
        });
    }


    useEffect(()=> 
    {
        
        /* The swapping of forms */
        let register_button = document.getElementById("reg");
        let return_button = document.querySelector(".return-button");
        let form1 = document.getElementById("form1");
        let form2 = document.getElementById("form2");
        register_button.addEventListener("click", () =>
        {
            form1.style.animation = "Fadeout ease-out 1s";
            form1.style.display = "none";

            form2.style.animation = "FadeIn ease-in 1s";
            form2.style.display = "block";

            return_button.style.display = "block";
        });

        /* return button swapping of forms */
        return_button.addEventListener("click", () =>
        {
            form2.style.animation = "Fadeout ease-out 1s";
            form2.style.display = "none";

            form1.style.animation = "FadeIn ease-in 1s";
            form1.style.display = "block";

            return_button.style.display = "none";
        })
        
    }, []);


    return (
    <>
    <div>
        <div className = 'modal1' id = "model" style = {{display: 'block'}}>

            <form className = 'modal-content' method = 'post' onSubmit={(event) => Login(event)} autoComplete='off' id = 'form1'>
                <div className = 'modal-container'>

                    <label style = {{fontSize: '18px'}}><b>Welcome.</b></label>
                    <br /><br /><br />
                    <label><b>Username</b></label>
                    <br />
                    <span><input type = 'text' placeholder = "Name" name = "username" value = {inputs.username || ""}  onChange = {handleChange} required></input></span>
                    <br /><br /><br />
                    <label><b>Password</b></label>
                    <br />
                    <span><input type = 'password' placeholder = "Password" name = "password" value = {inputs.password || ""} onChange = {handleChange} required></input></span>
                    <br /><br />
                    <button className = 'button' type = 'submit'>Proceed</button> <div id = "reg" className = 'text'>Or Register</div>
                </div>
            </form>

            <form style = {{display: 'none'}} className = 'modal-content'  method = 'post' onSubmit={(event) => Register(event)} autoComplete='off' id = 'form2'>
                <div className = 'modal-container'>
                    
                    <label style = {{fontSize: '18px'}}><b><u>Register a New Account</u></b></label>
                    <br /><br /><br />
                    <label><b>Username</b></label>
                    <br />
                    <span><input type = 'text' placeholder = "Name" name = "register_username" value = {inputs.register_username || ""}  onChange = {handleChange} required></input></span>
                    <br /><br /><br />
                    <label><b>Password</b></label>
                    <br />
                    <span><input type = 'password' placeholder = "Password" name = "register_password" value = {inputs.register_password || ""} onChange = {handleChange} required></input></span>
                    <br /><br />
                    <button className = 'button' type = 'submit'>Proceed</button>
                    <br /><br />

                </div>
            </form>
            <div className = "info-message" id = "message">{result['Status']}</div>

            <div className = 'return-button'></div>
        </div>

        
    </div>
    </>
    );
  
};
    
export default Login;