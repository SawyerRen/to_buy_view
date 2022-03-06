import React from 'react';
import s from "./index.module.css";
import logoImg from "../../../assets/img/new/logo.png"
import codeImg from "../../../assets/img/new/code.jpg"
import {Link} from "react-router-dom";

function Register(props) {
    return (
        <div className={s.reg}>
            <form action="#" method="post">
                <h1><Link to={"/home"}><img style={{height: "70px", width: "130px"}} src={logoImg} alt={""}/></Link></h1>
                <p><b style={{fontSize: "15px"}}>Register</b></p>
                <p><input type="text" name="" placeholder="Please enter your username"/></p>
                <p><input type="text" name="" placeholder="Please enter your email"/></p>
                <p><input type="text" name="" placeholder="Please enter your phone number"/></p>
                <p><input type="password" name="" placeholder="Please enter your password"/></p>
                <p><input type="password" name="" placeholder="Please confirm your password"/></p>
                <p className={`${s.txtL} ${s.txt}`}><input className="code" type="text" name="" placeholder="CAPTCHA"/><img
                    src={codeImg}/></p>
                <p><input type="submit" name="" value="注册"/></p>
                <p className={`${s.txtL} ${s.txt}`}>By completing this registration, you agree to our <a href="#">
                    Terms of Use and Privacy Policy
                </a></p>

                <p className={s.txt}><Link to={"/login"}>Already have an account, click here to log in</Link></p>
            </form>
        </div>
    );
}

export default Register;