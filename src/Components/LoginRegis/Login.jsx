import { Toast } from "bootstrap";
import '../css/user.css';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export const Login = (props) => {
    const [name, nameupdate] = useState('');
    const [pass, setPass] = useState('');

    const usenavigate = useNavigate();
    useEffect(() => {
        sessionStorage.clear();
    })
    const ProceedLogin = (e) => {
        
        e.preventDefault();
        if(validate()) {

            fetch("http://localhost:8000/user/"+name).then((res)=>{
                return res.json();
            }).then((resp)=> {
                console.log(resp)
                if(Object.keys(resp).length===0){
                    alert('Please enter valid username');
                }
                else{
                    if(resp.pass===pass) {
                        alert('Success');
                        sessionStorage.setItem('username', name);
                        usenavigate('/');
                    }else{
                        alert('Please enter valid password');
                    }
                }
            }).catch((err) => {
                alert('Login Failed')
            })
        }
    }

    const validate = () => {
        let result=true;
        if(name === '' || name === null) {
            result = false;
            alert('Please Enter name')
        }
        if(pass === '' || pass === null) {
            result = false;
            alert('Please Enter Password')
        }
        return result;
    }
    return (
        <div className="log">
        <div className="auth-form-container">
            <center>
            <h1>ServiceCore</h1></center>
            <h3>Login</h3>
            <form className="login-form" onSubmit={ProceedLogin}>
                <label>Username <span className="errmsg"></span></label>
                <input value={name} onChange={e=>nameupdate(e.target.value)} placeholder="Username" id="name" name="name" ></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link className="link-btn" to="/register">Don't have an account? Register here.</Link>
        </div>
        </div>
    )
}