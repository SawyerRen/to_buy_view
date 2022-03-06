import React from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/new/logo.png"
import userLogo from "../../../assets/img/new/grzx.png"
import cartLogo from "../../../assets/img/gwc.png"

function HomeHeader(props) {
    return (
        <div className={s.head}>
            <div className={`${s.wrapper} ${s.clearfix}`}>
                <div className={s.clearfix} id="top">
                    <h1 className={s.fl}><Link to={"/home"}><img style={{height:"75px",width:"150px"}} src={logo}/></Link></h1>
                    <div className={`${s.fr} ${s.clearfix}`} id="top1">
                        <p className={s.fl}>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/register"}>Register</Link>
                        </p>
                        <form action="#" method="get" className={s.fl}>
                            <input type="text" placeholder="Search"/>
                            <input type="button"/>
                        </form>
                        <div className={`${s.btn} ${s.fl} ${s.clearfix}`}>
                            <Link to={"/user/index"}><img src={userLogo}/></Link>
                            <Link to={"/cart/list"}><img src={cartLogo}/></Link>
                        </div>
                    </div>
                </div>
                <ul className={s.clearfix} id="bott">
                    <li><Link to={"/home"}>Home page</Link></li>
                    <li><Link to={"/goods"}>All Goods</Link></li>
                    <li><Link to={"/goods"}>Category1</Link></li>
                    <li><Link to={"/goods"}>Category2</Link></li>
                    <li><Link to={"/goods"}>Category3</Link></li>
                    <li><Link to={"/goods"}>Category3</Link></li>
                    <li><Link to={"/goods"}>Category3</Link></li>
                </ul>
            </div>
        </div>

    );
}

export default HomeHeader;