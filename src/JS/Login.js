import {useEffect} from 'react';
import {useState} from "react";

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

    const Login = (event) =>
    {
        event.preventDefault();
    }

    const Register = (event) =>
    {
        event.preventDefault();
    }


    useEffect(()=> 
    {

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