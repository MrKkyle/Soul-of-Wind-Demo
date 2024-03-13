import React from 'react';
import {useEffect} from 'react';
import {useState} from "react";
import $ from "jquery";

import '../CSS/login.css';
import video from '../media/Live-wallpapers/SOW-video.mp4';

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

        $.ajaxSetup({ xhrFields: { withCredentials: true }, headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});

        let message = document.getElementById("message");
        /* Login */
        $.post( "http://localhost:8000/login", {action: "login", username: inputs.username, password: inputs.password}, [],'json')
        .done(function( _data) 
        {
            console.log(_data);

            /* configure message */
            let login_form = document.getElementById("form1");
            message.style.display = "block";
            message.innerHTML = "Login Sucessfully";
            message.style.backgroundColor = "rgb(6, 133, 6)";
            setTimeout(() =>
            {
                message.innerHTML = "";
                message.style.backgroundColor = "transparent";
                login_form.style.animation = "Fadeout ease-out 0.5s";
                setTimeout(() => { window.location.href = '/redirect'; }, 200);
            }, 500);
            
        })
        .fail( function(xhr) 
        { 
            /* configure message */
            message.style.display = "block";
            message.innerHTML = "Login Failed";
            message.style.backgroundColor = "rgb(175, 11, 11)";
            setTimeout(() => {  message.innerHTML = ""; message.style.backgroundColor = "transparent"; }, 2000);
        });

        /* Set session variables */
        $.post( "http://localhost:8000/session_variables", {action: "login"})
        .done(function( _data) { console.log(_data); })
        .fail( function(xhr) { alert(xhr.responseText) });
    }

    //Register
    const Register = (event) =>
    {
        event.preventDefault();
        const form = $(event.target);

        $.ajaxSetup({ xhrFields: { withCredentials: true }, headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});

        /* Submits the user Information */
        $.post( "http://localhost:8000/register",{register_username: inputs.register_username, register_password: inputs.register_password}, [],'json')
        .done(function( _data) 
        {
            setResult(_data);
            console.log(_data);
            let register_form = document.getElementById("form2");
            let login_form = document.getElementById("form1");
            
            /* configure message */
            message.style.display = "block";
            message.innerHTML = "Registered Sucessfully";
            message.style.backgroundColor = "rgb(6, 133, 6)";
            setTimeout(() =>
            {
                message.innerHTML = ""; message.style.backgroundColor = "transparent";
                register_form.style.animation = "Fadeout ease-out 1s";
                setTimeout(() =>
                {
                    register_form.style.display = "none"; login_form.style.animation = "FadeIn ease-in 1s";
                    login_form.style.display = "block"; login_form.style.opacity = "1";
                }, 1000);
            }, 2000);
        })
        .fail( function(xhr) 
        { 
            console.log(xhr.responseText);
            /* configure message */
            message.style.display = "block";
            message.innerHTML = "Registered Failed";
            message.style.backgroundColor = "rgb(175, 11, 11)";
            setTimeout(() => { message.innerHTML = ""; message.style.backgroundColor = "transparent"; }, 2000);
        });
    }


    useEffect(()=> 
    {
        $.ajaxSetup({ xhrFields: { withCredentials: true }, headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});

        $.post( "http://localhost:8000/session_variables", {action: "validate"})
        .done(function( _data) { console.log(_data); })
        .fail( function(xhr) { alert(xhr.responseText) });

        /* The swapping of forms */
        let register_button = document.getElementById("reg");
        let return_button = document.querySelector(".return-button");
        let form1 = document.getElementById("form1");
        let form2 = document.getElementById("form2");
        register_button.addEventListener("click", () =>
        {
            form1.style.animation = "Fadeout ease-out 1s";form1.style.display = "none";
            form2.style.animation = "FadeIn ease-in 1s"; form2.style.display = "block";
            return_button.style.display = "block";
        });

        /* return button swapping of forms */
        return_button.addEventListener("click", () =>
        {
            form2.style.animation = "Fadeout ease-out 1s"; form2.style.display = "none";
            form1.style.animation = "FadeIn ease-in 1s"; form1.style.display = "block";
            return_button.style.display = "none";
        })
        
    }, []);


    return (
    <>
    <div>
        <video loop autoPlay muted className = "video" id = "video">
            <source src = {video} type = "video/mp4" />
        </video>
        <div className = 'modal1' id = "model" style = {{display: 'block'}}>
            <form className = 'modal-content' method = 'post' onSubmit={(event) => Login(event)} autoComplete='off' id = 'form1'>
                <div className = 'modal-container'>

                    <label style = {{fontSize: '18px'}}><b>Welcome</b></label>
                    <br />
                    <label><b>Username</b></label>
                    <br />
                    <span><input type = 'text' placeholder = "Name" name = "username" value = {inputs.username || ""}  onChange = {handleChange} required></input></span>
                    <br /><br />
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
                    <br />
                    <label><b>Username</b></label>
                    <br />
                    <span><input type = 'text' placeholder = "Name" name = "register_username" value = {inputs.register_username || ""}  onChange = {handleChange} required></input></span>
                    <br /><br />
                    <label><b>Password</b></label>
                    <br />
                    <span><input type = 'password' placeholder = "Password" name = "register_password" value = {inputs.register_password || ""} onChange = {handleChange} required></input></span>
                    <br /><br />
                    <button className = 'button' type = 'submit'>Proceed</button>
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