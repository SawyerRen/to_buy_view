import React, {useEffect, useState} from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/new/logo.png"
import userLogo from "../../../assets/img/new/grzx.png"
import cartLogo from "../../../assets/img/gwc.png"
import axios from "axios";
import {Input} from 'antd';

const {Search} = Input;
function HomeHeader(props) {
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/categories/`).then(res => {
            setCategoryList(res.data)
        })
    }, [])
    return (
        <div className={s.head}>
            <div className={`${s.wrapper} ${s.clearfix}`}>
                <div className={s.clearfix} id="top">
                    <h1 className={s.fl}><Link to={"/home"}><img style={{height: "75px", width: "150px"}}
                                                                 src={logo}/></Link></h1>
                    <div className={`${s.fr} ${s.clearfix}`} id="top1">
                        <p className={s.fl}>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/register"}>Register</Link>
                        </p>
                        <form action="#" method="get" className={s.fl}>
                            <Search placeholder="input search text" allowClear bordered={false} style={{width: 180}}/>
                        </form>
                        <div className={`${s.btn} ${s.fl} ${s.clearfix}`}>
                            <Link to={"/user/index"}><img src={userLogo}/></Link>
                            <Link to={"/cart/list"}><img src={cartLogo}/></Link>
                        </div>
                    </div>
                </div>
                <ul className={s.clearfix} id="bott">
                    <li><Link to={"/home"}>Home page</Link></li>
                    <li><Link to={"/goods/0"}>All Goods</Link></li>
                    {
                        categoryList.map((item) => {
                            return <li key={item.id}><Link to={`/goods?category_id=${item.id}&page=1`}>{item.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>

    );
}

export default HomeHeader;