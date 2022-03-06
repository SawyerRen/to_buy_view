import React from 'react';
import s from "./index.module.css";
import banner from "../../../assets/img/temp/banner1.jpg"
import {Link} from "react-router-dom";
import pro from "../../../assets/img/temp/pro01.jpg";

function Category(props) {
    return (
        <div>
            <div className={s.banner}>
                <a href="#"><img src={banner}/></a>
            </div>

            <div className={s.address}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <Link to={"/home"}>Home page</Link>
                    <span>/</span>
                    <Link to={"/goods"} className="on">category</Link>
                </div>
            </div>

            <div className={s.current}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <h3 className={s.fl}>category</h3>
                    <div className={`${s.fr} ${s.choice}`}>
                        <p className={s.default}>order by</p>
                        <ul className={s.select}>

                        </ul>
                    </div>
                </div>
            </div>

            <ul className={`${s.proList} ${s.wrapper} ${s.clearfix}`}>
                <li>
                    <Link to={"/goods_detail"}>
                        <dl>
                            <dt><img src={pro}/></dt>
                            <dd>Product name</dd>
                            <dd>$17.90</dd>
                        </dl>
                    </Link>
                </li>
                <li>
                    <Link to={"/goods_detail"}>
                        <dl>
                            <dt><img src={pro}/></dt>
                            <dd>Product name</dd>
                            <dd>$17.90</dd>
                        </dl>
                    </Link>
                </li>
                <li>
                    <Link to={"/goods_detail"}>
                        <dl>
                            <dt><img src={pro}/></dt>
                            <dd>Product name</dd>
                            <dd>$17.90</dd>
                        </dl>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Category;