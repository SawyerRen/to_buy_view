import React, {useEffect, useState} from 'react';
import s from "./index.module.css";
import {Link, useNavigate} from "react-router-dom";
import cart01 from "../../../assets/img/temp/cart01.jpg";
import sub from "../../../assets/img/new/sub.jpg";
import add from "../../../assets/img/new/add.jpg";
import axios from "axios";
import {message} from "antd";

function CartList(props) {
    const [cartItemList, setCartItemList] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const user_id = localStorage.getItem("user_id")
        if (!user_id) {
            navigate("/login", {replace: false})
            return
        }
        axios.get(`/store/cartitems/?user_id=${user_id}`).then(res => {
            console.log(res.data)
            setCartItemList(res.data)
            let cost = 0, count = 0
            res.data.forEach((item) => {
                cost += item.total_price
                count += item.quantity
                console.log(cost, count)
            }, 0)
            setTotalCount(count)
            setTotalCost(cost)
        }, () => {
            message.error("Cannot get your shopping cart. Please try again later.")
        })
    }, [])
    return (
        <div className={`${s.cart} ${s.mt}`}>
            <div className={s.site}>
                <p className={`${s.wrapper} ${s.clearfix}`}>
                    <span className={s.fl}>Shopping cart</span>
                    <Link to={"/home"} className={s.fr}>Continue to shopping&gt;</Link>
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
                {
                    cartItemList.map((item) => {
                        return (
                            <div className={s.th} key={item.id}>
                                <div className={`${s.pro} ${s.clearfix}`}>
                                    <label className={s.fl}>
                                        <input type="checkbox"/>
                                    </label>
                                    <a className={s.fl} href="#">
                                        <dl className={s.clearfix}>
                                            <dt className={s.fl}><img src={item.goods.image_url}/></dt>
                                            <dd className={s.fl}>
                                                <p>{item.goods.name}</p>
                                                <p>{item.goods.description}</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </div>
                                <div className={s.price}>${item.goods.price}</div>
                                <div className={s.number}>
                                    <p className={`${s.num} ${s.clearfix}`}>
                                        <img className={`${s.fl} sub`} src={sub}/>
                                        <span className={s.fl}>{item.quantity}</span>
                                        <img className={`${s.fl} add`} src={add}/>
                                    </p>
                                </div>
                                <div className={`${s.price} sAll`}>${item.total_price}</div>
                                <div className={s.price}><a className={s.del} href="#2">Delete</a></div>
                            </div>
                        )
                    })
                }
                <div className={s.goOn}>Nothing here~<Link to={"/index"}>Go to shopping</Link></div>
                <div className={`${s.tr} ${s.clearfix}`}>
                    {/*<label className={s.fl}>*/}
                    {/*    <input className={"checkAll"} type="checkbox"/>*/}
                    {/*    <span></span>*/}
                    {/*</label>*/}
                    {/*<p className={s.fl}>*/}
                    {/*    <a href="#">Select all</a>*/}
                    {/*    <a href="#" className={s.del}>Delete</a>*/}
                    {/*</p>*/}
                    <p className={s.fr}>
                        <span><small id="sl">{totalCount}</small> goods in total</span>
                        <span>Total:&nbsp;<small id="all">${totalCost}</small></span>
                        <Link to="/cart/confirm" className={s.count}>Commit</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartList;