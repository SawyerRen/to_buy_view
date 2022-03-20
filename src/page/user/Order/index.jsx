import React from 'react';
import s from "./index.module.css";
import tx from "../../../assets/img/new/tx.png"
import g1 from "../../../assets/img/g1.jpg"
import zuo from "../../../assets/img/zuo.jpg"
import you from "../../../assets/img/you.jpg"
import LeftMenu from "../../../common/user/LeftMenu";
import {Link} from "react-router-dom";
import {Pagination} from 'antd';
import {Input} from 'antd';

const {Search} = Input;
function Order(props) {
    return (
        <div>
            {/*<div className={`${s.address} ${s.mt}`}>*/}
            {/*    <div className={`${s.wrapper} ${s.clearfix}`}>*/}
            {/*        <Link to={"/home"} className={s.fl}>Home page</Link>*/}
            {/*        <span>/</span>*/}
            {/*        <Link to={"/user/index"}>User Center</Link>*/}
            {/*        <span>/</span>*/}
            {/*        <Link to={"/user/order"} className={s.on}>My order</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={s.Bott}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <LeftMenu/>
                    <div className={`${s.you} ${s.fl}`}>
                        <div className={`${s.my} ${s.clearfix}`}>
                            <h2 className={s.fl}>My order</h2>
                        </div>
                        <div className={`${s.dlist} ${s.clearfix}`}>
                            <ul className={`${s.fl} ${s.clearfix}`} id="wa">
                                <li className={s.on}><Link to={"#2"}>All valid orders</Link></li>
                                <li><Link to={"#2"}>To be paid</Link></li>
                                <li><Link to={"#2"}>Pending receipt</Link></li>
                                <li><Link to={"#2"}>Closed</Link></li>
                            </ul>
                            {/*<form action="#" method="get" className={`${s.fl} ${s.clearfix}`}>*/}
                                <Search placeholder="input search text" allowClear style={{width: 200}}/>
                            {/*</form>*/}
                        </div>
                        <div className={s.dkuang}>
                            <p className={s.one}>Received</p>
                            <div className={`${s.word} ${s.clearfix}`}>
                                <ul className={`${s.fl} ${s.clearfix}`}>
                                    <li>2016/12/1 18:53</li>
                                    <li>Receiver</li>
                                    <li>Order number:5160513358520018</li>
                                    <li>Online Payment</li>
                                </ul>
                                <p className={s.fr}>Order amount：<span>$99.00</span></p>
                            </div>
                            <div className={`${s.shohou} ${s.clearfix}`}>
                                <a href="#" className={s.fl}><img src={g1}/></a>
                                <p className={s.fl}><a href="#">Product name</a><a href="#">$99.00×1</a></p>
                                <p className={s.fr}>
                                    <Link to={"/user/comment"}>Comment</Link>
                                    <Link to={"/user/order_detail"}>Order details</Link>
                                </p>
                            </div>
                        </div>
                        <div className={`${s.dkuang} ${s.clearfix} ${s.deng}`}>
                            <p className={`${s.one} ${s.fl}`}>Pending receipt</p>
                            <div className={s.clearfix}>
                            </div>
                            <div className={`${s.word} ${s.clearfix}`}>
                                <ul className={`${s.fl} ${s.clearfix}`}>
                                    <li>2016/12/1 18:53</li>
                                    <li>Receiver</li>
                                    <li>Order number: 5160513358520018</li>
                                    <li>Online payment</li>
                                </ul>
                                <p className={s.fr}>Order amount：<span>$99.00</span></p>
                            </div>
                            <div className={`${s.shohou} ${s.clearfix}`}>
                                <a href="#" className={s.fl}><img src={g1}/></a>
                                <p className={s.fl}><a href="#">Product name</a><a href="#">$99.00×1</a></p>
                                <p className={s.fr}>
                                    <a href="#">Confirm receipt</a>
                                    <Link to={"/user/order_detail"}>Order details</Link>
                                </p>
                            </div>
                        </div>
                        <div className={`${s.dkuang} ${s.deng}`}>
                            <p className={s.one}>To be paid</p>
                            <div className={`${s.word} ${s.clearfix}`}>
                                <ul className={`${s.fl} ${s.clearfix}`}>
                                    <li>2016/12/1 18:53</li>
                                    <li>Receiver</li>
                                    <li>Order number: 5160513358520018</li>
                                    <li>Online payment</li>
                                </ul>
                                <p className={s.fr}>Order amount：<span>$99.00</span></p>
                            </div>
                            <div className={`${s.shohou} ${s.clearfix}`}>
                                <a href="#" className={s.fl}><img src={g1}/></a>
                                <p className={s.fl}><a href="#">Product name</a><a href="#">$99.00×1</a></p>
                                <p className={s.fr}>
                                    <a href="#">Pay now</a>
                                    <Link to={"/user/order_detail"}>Order details</Link>
                                </p>
                            </div>
                        </div>
                        <div className={s.dkuang}>
                            <p className={s.one}>Closed</p>
                            <div className={`${s.word} ${s.clearfix}`}>
                                <ul className={`${s.fl} ${s.clearfix}`}>
                                    <li>2016/12/1 18:53</li>
                                    <li>Receiver</li>
                                    <li>Order number: 5160513358520018</li>
                                    <li>Online payment</li>
                                </ul>
                                <p className={s.fr}>Order amount：<span>99.00</span></p>
                            </div>
                            <div className={`${s.shohou} ${s.clearfix}`}>
                                <a href="#" className={s.fl}><img src={g1}/></a>
                                <p className={s.fl}><a href="#">Product name</a><a href="#">$99.00×1</a></p>
                                <p className={s.fr}>
                                    <a href="#">Transaction failed</a>
                                    <Link to={"/user/order_detail"}>Order details</Link>
                                </p>
                            </div>
                        </div>
                        {/*<div className={`${s.fenye} ${s.clearfix}`}>*/}

                        {/*    /!*<Link to="#"><img src={zuo}/></Link>*!/*/}
                        {/*    /!*<Link to="#">1</Link>*!/*/}
                        {/*    /!*<Link to="#"><img src={you}/></Link>*!/*/}
                        {/*</div>*/}
                        <div style={{textAlign:"center"}}>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Order;