import React from 'react';
import s from "./index.module.css"
import like01 from "../../../assets/img/temp/like01.jpg"
import {Link} from "react-router-dom";

function CartSuccess(props) {
    return (
        <div>
            <div className={`${s.order} ${s.mt} ${s.cart}`}>
                {/*<div className={s.site}>*/}
                {/*    <p className={`${s.wrapper} ${s.clearfix}`}>*/}
                {/*        <span className={s.fl}>Payment Success</span>*/}
                {/*    </p>*/}
                {/*</div>*/}
                <p className={s.ok}>Payment Success！<Link to={"/user/order"}>返回订单页</Link></p>
            </div>
            <div className={s.like}>
                <h4>Maybe you like</h4>
                <div className={s.bottom}>
                    <div className={"hd"}>
                    </div>
                    <div className={`${s.imgCon} ${s.wrapper} bd`}>
                        <div className={`${s.likeList} ${s.clearfix}`}>
                            <div>
                                <a href="proDetail.html">
                                    <dl>
                                        <dt><img src={like01}/></dt>
                                        <dd>【最家】复古文艺风玻璃花瓶</dd>
                                        <dd>￥193.20</dd>
                                    </dl>
                                </a>
                                <a href="proDetail.html">
                                    <dl>
                                        <dt><img src={like01}/></dt>
                                        <dd>【最家】复古文艺风玻璃花瓶</dd>
                                        <dd>￥193.20</dd>
                                    </dl>
                                </a>
                                <a href="proDetail.html">
                                    <dl>
                                        <dt><img src={like01}/></dt>
                                        <dd>【最家】复古文艺风玻璃花瓶</dd>
                                        <dd>￥193.20</dd>
                                    </dl>
                                </a>
                                <a href="proDetail.html">
                                    <dl>
                                        <dt><img src={like01}/></dt>
                                        <dd>【最家】复古文艺风玻璃花瓶</dd>
                                        <dd>￥193.20</dd>
                                    </dl>
                                </a>
                                <a href="proDetail.html">
                                    <dl>
                                        <dt><img src={like01}/></dt>
                                        <dd>【最家】复古文艺风玻璃花瓶</dd>
                                        <dd>￥193.20</dd>
                                    </dl>
                                </a>
                                <a href="proDetail.html">
                                    <dl>
                                        <dt><img src={like01}/></dt>
                                        <dd>【最家】复古文艺风玻璃花瓶</dd>
                                        <dd>￥193.20</dd>
                                    </dl>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSuccess;