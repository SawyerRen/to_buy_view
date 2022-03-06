import React from 'react';
import s from "./index.module.css";
import banner from "../../../assets/img/banner1.jpg"
import {Link} from "react-router-dom";
import flo from "../../../assets/img/flo1.jpg"
function Home(props) {
    return (
        <div>
            <div className={s.news}>
                <div className={s.wrapper}>
                    <div className={`${s.flower} ${s.clearfix} ${s.tran}`}>
                        <Link to={"/goods_detail"} className={s.clearfix}>
                            <dl>
                                <dt>
                                    <span className={s.abl}/>
                                    <img src={flo}/>
                                    <span className={s.abr}/>
                                </dt>
                                <dd>Product</dd>
                                <dd><span>$79.00</span></dd>
                            </dl>
                        </Link>
                        <Link to={"/goods_detail"}>
                            <dl>
                                <dt>
                                    <span className={s.abl}/>
                                    <img src={flo}/>
                                    <span className={s.abr}/>
                                </dt>
                                <dd>Product</dd>
                                <dd><span>$79.00</span></dd>
                            </dl>
                        </Link>
                        <Link to={"/goods_detail"}>
                            <dl>
                                <dt>
                                    <span className={s.abl}/>
                                    <img src={flo}/>
                                    <span className={s.abr}/>
                                </dt>
                                <dd>Product</dd>
                                <dd><span>$79.00</span></dd>
                            </dl>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;