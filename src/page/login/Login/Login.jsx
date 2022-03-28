import React, {useState} from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import logoImg from "../../../assets/img/new/logo.png"

function Login(props) {
    const [token, setToken] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={s.login}>
            <form action="#" method="post">
                <h1><Link to={"/home"}><img src={logoImg} style={{height: "70px", width: "130px"}} alt={""}/></Link></h1>
                <div className={`${s.msgWarn} hide`}><b style={{fontSize: "15px"}}>Log in to enjoy for functions.</b>
                </div>
                <p><input type="text" name="" placeholder="email/phone number" /></p>
                <p><input type="password" name="" placeholder="password"/></p>
                <p><input type="submit" name="" value="Login"/></p>
                <p className={s.txt}>
                    <input type={"checkbox"}/> <span style={{fontSize: "15px"}}>remember me</span>
                    <Link className={""} to={"/register"}>Register</Link>
                    <Link className={""} to={"/forget"}>Forget password？</Link>
                </p>
            </form>
        </div>

    );
}

export default Login;