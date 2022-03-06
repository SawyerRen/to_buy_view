import React from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import LeftMenu from "../../../common/user/LeftMenu";
import jia from "../../../assets/img/new/add.jpg"
function UserAddress(props) {
    return (
        <div>
            <div className={`${s.address} ${s.mt}`}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <Link to={"/home"} className={s.fl}>Home page</Link>
                    <span>/</span>
                    <Link to={"/user/index"}>User Center</Link>
                    <span>/</span>
                    <Link to={"/user/address"} className={s.on}>My address</Link>
                </div>
            </div>
            <div className={s.Bott}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <LeftMenu/>
                    <div className={`${s.you} ${s.fl}`}>
                        <h2>My address</h2>
                        <div className={s.add}>
                            <div>
                                <a href="#2" id="addxad"><img src={jia}/></a>
                                <span>Add new address</span>
                            </div>
                            <div id="dizhi">
                                <p>Name</p>
                                <p>2002002200</p>
                                <p>Illinois Champaign 210 S 4th ST</p>
                                <p>APT410</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserAddress;