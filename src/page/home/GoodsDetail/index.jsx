import React from 'react';
import s from "./index.module.css";
import {Link} from "react-router-dom";
import proDet from "../../../assets/img/temp/proDet.jpg"
import add from "../../../assets/img/new/add.jpg";
import sub from "../../../assets/img/new/sub.jpg";
import per01 from "../../../assets/img/temp/per02.jpg"
import see01 from "../../../assets/img/temp/see01.jpg"

function GoodsDetail(props) {
    return (
        <div>
            <div className={s.address}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <Link to={"/home"}>Home page</Link>
                    <span>/</span>
                    <Link to={"/goods"}>category</Link>
                    <span>/</span>
                    <Link to={"/goods_detail"} className="on">goods</Link>
                </div>
            </div>
            <div className={s.detCon}>
                <div className={`${s.proDet} ${s.wrapper}`}>
                    <div className={`${s.proCon} ${s.clearfix}`}>
                        <div className={`${s.proImg} ${s.fl}`}>
                            <img className={"det"} src={proDet}/>
                        </div>
                        <div className={`${s.fr} ${s.intro}`}>
                            <div className={s.title}>
                                <h4>Goods title</h4>
                                <p>description</p>
                                <span>$59.90</span>
                            </div>
                            <div className={s.proIntro}>
                                <p>pro details</p>
                                <p>Inventory: &nbsp;&nbsp;<span>2096</span></p>
                                <div className={`${s.num} ${s.clearfix}`}>
                                    <img className={`${s.fl} sub`} src={sub}/>
                                    <span className={s.fl} contentEditable="true">1</span>
                                    <img className={`${s.fl} add`} src={add}/>
                                </div>
                            </div>
                            <div className={`${s.btns} ${s.clearfix}`}>
                                <a href="#2"><p className={`${s.buy} ${s.fl}`}>Buy now</p></a>
                                <a href="#2"><p className={`${s.cart} ${s.fr}`}>Add to cart</p></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${s.introMsg} ${s.wrapper} ${s.clearfix}`}>
                <div className={`${s.msgL} ${s.fl}`}>
                    <div className={`${s.msgTit} ${s.clearfix}`}>
                        <a>Comments</a>
                    </div>
                    <div className={s.msgAll}>
                        <div className={s.eva}>
                            <div className={`${s.per} ${s.clearfix}`}>
                                <img className={s.fl} style={{width:"30px", height:"30px"}} src={per01}/>
                                <div className={`${s.perR} ${s.fl}`}>
                                    <p>username</p>
                                    <p>comment content</p>
                                    <p><span>2016/12/27 08:31</span></p>
                                </div>
                            </div>
                            <div className={`${s.per} ${s.clearfix}`}>
                                <img className={s.fl} style={{width:"30px", height:"30px"}} src={per01}/>
                                <div className={`${s.perR} ${s.fl}`}>
                                    <p>username</p>
                                    <p>comment content</p>
                                    <p><span>2016/12/27 08:31</span></p>
                                </div>
                            </div>
                            <div className={`${s.per} ${s.clearfix}`}>
                                <img className={s.fl} style={{width:"30px", height:"30px"}} src={per01}/>
                                <div className={`${s.perR} ${s.fl}`}>
                                    <p>username</p>
                                    <p>comment content</p>
                                    <p><span>2016/12/27 08:31</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${s.msgR} ${s.fr}`}>
                    <h4>recommend for you</h4>
                    <div className={s.seeList}>
                        <Link to={"/goods_detail"}>
                            <dl>
                                <dt><img src={see01}/></dt>
                                <dd>product</dd>
                                <dd>$193.20</dd>
                            </dl>
                        </Link>
                        <Link to={"/goods_detail"}>
                            <dl>
                                <dt><img src={see01}/></dt>
                                <dd>product</dd>
                                <dd>$193.20</dd>
                            </dl>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoodsDetail;