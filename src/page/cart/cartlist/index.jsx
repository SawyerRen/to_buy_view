import React from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import cart01 from "../../../assets/img/temp/cart01.jpg";
import sub from "../../../assets/img/new/sub.jpg";
import add from "../../../assets/img/new/add.jpg";

function CartList(props) {
    return (
        <div className={`${s.cart} ${s.mt}`}>
            <div className={s.site}>
                <p className={`${s.wrapper} ${s.clearfix}`}>
                    <span className={s.fl}>Shopping cart</span>
                    <Link to={"/index"} className={s.fr}>Continue to shopping&gt;</Link>
                </p>
            </div>
            <div className={`${s.table} ${s.wrapper}`}>
                <div className={s.tr}>
                    <div>Goods</div>
                    <div>Unit price</div>
                    <div>Count</div>
                    <div>Subtotal</div>
                    <div>Operation</div>
                </div>
                <div className={s.th}>
                    <div className={`${s.pro} ${s.clearfix}`}>
                        <label className={s.fl}>
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                        <a className={s.fl} href="#">
                            <dl className={s.clearfix}>
                                <dt className={s.fl}><img src={cart01}/></dt>
                                <dd className={s.fl}>
                                    <p>Goods name</p>
                                    <p>description</p>
                                    <p>description</p>
                                </dd>
                            </dl>
                        </a>
                    </div>
                    <div className={s.price}>$20.00</div>
                    <div className={s.number}>
                        <p className={`${s.num} ${s.clearfix}`}>
                            <img className={`${s.fl} sub`} src={sub}/>
                            <span className={s.fl}>1</span>
                            <img className={`${s.fl} add`} src={add}/>
                        </p>
                    </div>
                    <div className={`${s.price} sAll`}>￥20.00</div>
                    <div className={s.price}><a className={s.del} href="#2">Delete</a></div>
                </div>
                <div className={s.th}>
                    <div className={`${s.pro} ${s.clearfix}`}>
                        <label className={s.fl}>
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                        <a className={s.fl} href="#">
                            <dl className={s.clearfix}>
                                <dt className={s.fl}><img src={cart01}/></dt>
                                <dd className={s.fl}>
                                    <p>Goods name</p>
                                    <p>description</p>
                                    <p>description</p>
                                </dd>
                            </dl>
                        </a>
                    </div>
                    <div className={s.price}>$20.00</div>
                    <div className={s.number}>
                        <p className={`${s.num} ${s.clearfix}`}>
                            <img className={`${s.fl} sub`} src={sub}/>
                            <span className={s.fl}>1</span>
                            <img className={`${s.fl} add`} src={add}/>
                        </p>
                    </div>
                    <div className={`${s.price} sAll`}>￥20.00</div>
                    <div className={s.price}><a className={s.del} href="#2">Delete</a></div>
                </div>
                <div className={s.th}>
                    <div className={`${s.pro} ${s.clearfix}`}>
                        <label className={s.fl}>
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                        <a className={s.fl} href="#">
                            <dl className={s.clearfix}>
                                <dt className={s.fl}><img src={cart01}/></dt>
                                <dd className={s.fl}>
                                    <p>Goods name</p>
                                    <p>description</p>
                                    <p>description</p>
                                </dd>
                            </dl>
                        </a>
                    </div>
                    <div className={s.price}>￥20.00</div>
                    <div className={s.number}>
                        <p className={`${s.num} ${s.clearfix}`}>
                            <img className={`${s.fl} sub`} src={sub}/>
                            <span className={s.fl}>1</span>
                            <img className={`${s.fl} add`} src={add}/>
                        </p>
                    </div>
                    <div className={`${s.price} sAll`}>￥20.00</div>
                    <div className={s.price}><a className={s.del} href="#2">Delete</a></div>
                </div>
                <div className={s.th}>
                    <div className={`${s.pro} ${s.clearfix}`}>
                        <label className={s.fl}>
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                        <a className={s.fl} href="#">
                            <dl className={s.clearfix}>
                                <dt className={s.fl}><img src={cart01}/></dt>
                                <dd className={s.fl}>
                                    <p>Goods name</p>
                                    <p>description</p>
                                    <p>description</p>
                                </dd>
                            </dl>
                        </a>
                    </div>
                    <div className={s.price}>￥20.00</div>
                    <div className={s.number}>
                        <p className={`${s.num} ${s.clearfix}`}>
                            <img className={`${s.fl} sub`} src={sub}/>
                            <span className={s.fl}>1</span>
                            <img className={`${s.fl} add`} src={add}/>
                        </p>
                    </div>
                    <div className={`${s.price} sAll`}>￥20.00</div>
                    <div className={s.price}><a className={s.del} href="#2">Delete</a></div>
                </div>
                <div className={s.goOn}>Nothing here~<Link to={"/index"}>Go to shopping</Link></div>
                <div className={`${s.tr} ${s.clearfix}`}>
                    <label className={s.fl}>
                        <input className={"checkAll"} type="checkbox"/>
                        <span></span>
                    </label>
                    <p className={s.fl}>
                        <a href="#">Select all</a>
                        <a href="#" className={s.del}>Delete</a>
                    </p>
                    <p className={s.fr}>
                        <span><small id="sl">0</small> goods in total</span>
                        <span>Total:&nbsp;<small id="all">$0.00</small></span>
                        <Link to="/cart/confirm" className={s.count}>Commit</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartList;