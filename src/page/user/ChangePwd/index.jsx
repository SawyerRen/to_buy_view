import React, {useEffect, useState} from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import LeftMenu from "../../../common/user/LeftMenu";
import code from "../../../assets/img/new/code.jpg"
import axios from "axios";
import {message} from "antd";

function ChangePwd(props) {
    const [newPassword1, setNewPassword1] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const handleNewPwd1Change = (e) => {
        setNewPassword1(e.target.value)
    }
    const handleNewPwd2Change = (e) => {
        setNewPassword2(e.target.value)
    }
    const handleOldPwdChange = (e) => {
        setOldPassword(e.target.value)
    }
    const handleChangePwd = () => {
        const user_id = localStorage.getItem("user_id")
        if (newPassword1 !== newPassword2) {
            message.error("New passwords do not match!")
            return
        }
        axios.post("/account/change_password", {
            "user_id": user_id,
            "password": newPassword1,
            "old_password": oldPassword,
        }).then(res => {
            if (res.data.id) {
                message.info("Change your password successfully!")
            } else {
                message.error("Cannot change your password")
            }
        }, () => {
            message.error("Cannot change your password")
        })
    }
    return (
        <div>
            <div className={s.Bott}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <LeftMenu/>
                    <div className={`${s.you} ${s.fl}`}>
                        <h2>Change password</h2>
                        <form action="#" method="get" className={s.remima}>
                            <p><span>previous password：</span><input type="text" onChange={handleOldPwdChange.bind(this)}/></p>
                            <p className={s.op}>input previous password</p>
                            <p><span>new password：</span><input type="text" onChange={handleNewPwd1Change.bind(this)}/></p>
                            <p className={s.op}>6-16 characters, need to use a combination of letters, numbers or
                                symbols, cannot use pure numbers, pure letters, pure symbols</p>
                            <p><span>repeat new password：</span><input type="text" onChange={handleNewPwd2Change.bind(this)}/></p>
                            <p className={s.op}>repeat new password</p>
                            <input type="submit" value="Submit" onClick={handleChangePwd}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePwd;