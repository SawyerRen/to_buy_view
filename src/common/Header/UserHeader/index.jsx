import React from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/new/logo.png"
import grzx from "../../../assets/img/new/grzx.png";

function UserHeader(props) {
    return (
        <div className={`${s.head} ${s.ding}`}>
            <div className={`${s.wrapper} ${s.clearfix}`}>
                <div className={s.clearfix} id="top">
                    <h1 className={s.fl}><Link to={"/home"}><img style={{height:"50px",width:"100px"}} src={logo} alt={""}/></Link></h1>
                    <div className={`${s.fr} ${s.clearfix}`} id="top1">
                        <form action="#" method="get" className={s.fl}>
                            <input type="text" placeholder="Search"/>
                            <input type="button"/>
                        </form>
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

export default UserHeader;