import React from 'react';
import s from "./index.module.css";
import way01 from "../../../assets/img/temp/way01.jpg"
import order01 from "../../../assets/img/temp/order01.jpg"
import {Link} from "react-router-dom";

function CartConfirm(props) {
    return (
        <div className={`${s.order} ${s.cart} ${s.mt}`}>
            <div className={s.site}>
                <p className={`${s.wrapper} ${s.clearfix}`}>
                    <span className={s.fl}>Order confirmation</span>
                </p>
            </div>
            <div className={`${s.orderCon} ${s.wrapper} ${s.clearfix}`}>
                <div className={`${s.orderL} ${s.fl}`}>
                    <h3>Receiver information<a href="#" className={s.fr}>Add address</a></h3>
                    <div className={`addres ${s.clearfix}`}>
                        <div className={`${s.addre} ${s.fl} ${s.on}`}>
                            <div className={`${s.tit} ${s.clearfix}`}>
                                <p className={s.fl}>Receiver1
                                    <span className={s.default}>[default address]</span>
                                </p>
                                <p className={s.fr}>
                                    <a href="#">delete</a>
                                    <span>|</span>
                                    <a href="#" className={s.edit}>edit</a>
                                </p>
                            </div>
                            <div className={s.addCon}>
                                <p>Illinois&nbsp;Champaign&nbsp;210 S 4th ST&nbsp;APT410</p>
                                <p>200-200-2200</p>
                            </div>
                        </div>
                        <div className={`${s.addre} ${s.fl}`}>
                            <div className={`${s.tit} ${s.clearfix}`}>
                                <p className={s.fl}>Receiver3
                                </p>
                                <p className={s.fr}>
                                    <a href="#" className={"setDefault"}>set as default</a>
                                    <span>|</span>
                                    <a href="#">delete</a>
                                    <span>|</span>
                                    <a href="#" className={s.edit}>edit</a>
                                </p>
                            </div>
                            <div className={s.addCon}>
                                <p>Illinois&nbsp;Champaign&nbsp;210 S 4th ST&nbsp;APT410</p>
                                <p>200-200-2200</p>
                            </div>
                        </div>
                    </div>
                    <h3>Payment</h3>
                    <div className={`${s.way} ${s.clearfix}`}>
                        <img className={s.on} src={way01}/>
                        <img src={way01}/>
                        <img src={way01}/>
                        <img src={way01}/>
                    </div>
                    <h3>Delivery</h3>
                    <div className={`${s.dis} ${s.clearfix}`}>
                        <span className={s.on}>Federal Express</span>
                        <span>UPS</span>
                        <span>USPS</span>
                    </div>
                </div>
                <div className={`${s.orderR} ${s.fr}`}>
                    <div className={s.msg}>
                        <h3>Order content<a href="cart.html" className={s.fr}>Go back to shopping cart</a></h3>
                        <ul className={s.clearfix}>
                            <li className={s.fl}>
                                <img src={order01}/>
                            </li>
                            <li className={s.fl}>
                                <p>Product name</p>
                                <p>description</p>
                                <p>Amount：1</p>
                            </li>
                            <li className={s.fr}>$69.90</li>
                        </ul>
                        <ul className={s.clearfix}>
                            <li className={s.fl}>
                                <img src={order01}/>
                            </li>
                            <li className={s.fl}>
                                <p>Product name</p>
                                <p>description</p>
                                <p>Amount：1</p>
                            </li>
                            <li className={s.fr}>$69.90</li>
                        </ul>
                    </div>
                    <div className={s.tips}>
                        <p><span className={s.fl}>Goods payment：</span><span className={s.fr}>$139.80</span></p>
                        <p><span className={s.fl}>Discount：</span><span className={s.fr}>$0.00</span></p>
                        <p><span className={s.fl}>shipping：</span><span className={s.fr}>Free</span></p>
                    </div>
                    <div className={`${s.count} ${s.tips}`}>
                        <p><span className={s.fl}>Total：</span><span className={s.fr}>$139.80</span></p>
                    </div>
                    <Link to={"/cart/success"} className={s.pay}>Pay now</Link>
                </div>
            </div>
        </div>
    );
}

export default CartConfirm;