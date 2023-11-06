import {useEffect} from 'react';
import {useState} from "react";
import $ from "jquery";

import Background from "../components/Background";
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

        $.ajaxSetup({ xhrFields: { withCredentials: true }, });

        /* Submits the user Information */
        $.ajax
        ({
            type: "POST",
            url: "http://localhost:8000/submit.php",
            data: form.serialize(), // important to maintain the form data output
            dataType: 'json',
            success(data) {
                setResult(data);
                console.log(data);
            },
        });
    }

    //Register
    const Register = (event) =>
    {
        event.preventDefault();
        const form = $(event.target);

        $.ajaxSetup({ xhrFields: { withCredentials: true }, });

        /* Submits the user Information */
        $.ajax
        ({
            type: "POST",
            url: "http://localhost:8000/submit.php",
            data: form.serialize(), // important to maintain the form data output
            dataType: 'json',
            success(data) {
                setResult(data);
                console.log(data);
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

        /* Adds the additional Register portion After clicking Proceed */
        let proceed_button = document.getElementById("proceed");
        let reg_portion = document.getElementById("reg-portion");
        proceed_button.addEventListener("click", () =>
        {
            reg_portion.style.animation = "SlideIn 1s ease-in";
            reg_portion.style.display = "block";
            reg_portion.style.left = "0%";
        });

        /* return button swapping of forms */
        return_button.addEventListener("click", () =>
        {
            form2.style.animation = "Fadeout ease-out 1s";
            form2.style.display = "none";

            form1.style.animation = "FadeIn ease-in 1s";
            form1.style.display = "block";

            return_button.style.display = "none";

            /* resets the reg_portion to default */
            reg_portion.style.animation = "none";
            reg_portion.style.display = "none";
            reg_portion.style.left = "15%";
        })
        
    }, []);


    return (
    <>
    <Background />
    <div>
        <div className = 'modal1' id = "model" style = {{display: 'block'}}>

            <form className = 'modal-content' method = 'post' onSubmit={(event) => Login(event)} autoComplete='off' id = 'form1'>
                <div className = 'modal-container'>

                    <label style = {{fontSize: '18px'}}><b>Welcome. Please login to proceed</b></label>
                    <br /><br /><br />
                    <label><b>Username</b></label>
                    <br />
                    <span><input type = 'text' placeholder = "Name" name = "username" value = {inputs.username || ""}  onChange = {handleChange} required></input></span>
                    <br /><br /><br />
                    <label><b>Api Key</b></label>
                    <br />
                    <span><input type = 'password' placeholder = "Api-Key" name = "password" value = {inputs.password || ""} onChange = {handleChange} required></input></span>
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
                    <label><b>Email</b></label>
                    <br />
                    <span><input type = 'email' placeholder = "Email" name = "register_password" value = {inputs.register_password || ""} onChange = {handleChange} required></input></span>
                    <br /><br />
                    <button id = 'proceed' className = 'button' type = 'button'>Send Token</button>
                    <br /><br />

                    <div className = 'reg-portion' id = "reg-portion">
                        <label><b>Authentication Token</b></label>
                        <br />
                        <span><input type = 'password' placeholder = "Enter Token" name = "authentication" value = {inputs.authentication || ""} onChange = {handleChange} required></input></span>
                        <br /><br />
                        <button className = 'button' type = 'submit'>Register</button>
                    </div>
                </div>
            </form>

            <div className = 'return-button'></div>
        </div>

        
    </div>
    </>
    );
  
};
    
export default Login;