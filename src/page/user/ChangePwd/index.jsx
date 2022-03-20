import React from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import LeftMenu from "../../../common/user/LeftMenu";
import code from "../../../assets/img/new/code.jpg"
function ChangePwd(props) {
    return (
        <div>
            {/*<div className={`${s.address} ${s.mt}`}>*/}
            {/*    <div className={`${s.wrapper} ${s.clearfix}`}>*/}
            {/*        <Link to={"/home"} className={s.fl}>Home page</Link>*/}
            {/*        <span>/</span>*/}
            {/*        <Link to={"/user/info"} className={s.on}>User information</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={s.Bott}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <LeftMenu/>
                    <div className={`${s.you} ${s.fl}`}>
                        <h2>Change password</h2>
                        <form action="#" method="get" className={s.remima}>
                            <p><span>previous password：</span><input type="text"/></p>
                            <p className={s.op}>input previous password</p>
                            <p><span>new password：</span><input type="text"/></p>
                            <p className={s.op}>6-16 characters, need to use a combination of letters, numbers or symbols, cannot use pure numbers, pure letters, pure symbols</p>
                            <p><span>repeat new password：</span><input type="text"/></p>
                            <p className={s.op}>repeat new password</p>
                            <p><span>Captcha：</span><input type="text"/><img style={{width:"100px", height:"30px"}} src={code} alt=""/></p>
                            <p className={s.op}>Enter the captcha as shown on the right, case insensitive</p>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePwd;