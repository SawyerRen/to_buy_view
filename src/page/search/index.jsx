import React from 'react';
import Footer from "../../common/Footer";
import s from "./index.module.css";
import {Link} from "react-router-dom";
import pro from "../../assets/img/temp/pro01.jpg";
import HomeHeader from "../../common/Header/HomeHeader";

function Search(props) {
    return (
        <div>
            <HomeHeader/>
            <div className={s.schBox}>
                <ul className={`${s.wrapper} ${s.sch}`}>
                    <li>
                        <h4>price：</h4>
                        <a href="#">less than 5</a>
                        <a href="#">5 - 10</a>
                        <a href="#">10 - 20</a>
                        <a href="#">more than 20</a>
                    </li>
                    <li>
                        <h4>Brand：</h4>
                        <a href="#">Brand1</a>
                        <a href="#">Brand2</a>
                        <a href="#">Brand3</a>
                        <a href="#">Brand4</a>
                    </li>
                </ul>
            </div>
            <div className={s.address}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <Link to={"/home"}>Home page</Link>
                    <span>/</span>
                    <a className="on">Search “keyword”</a>
                </div>
            </div>
            <div className={s.current}>
                <div className={`${s.wrapper} ${s.clearfix}`}>
                    <h3 className={s.fl}>Search results</h3>
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

            <Footer/>
        </div>
    );
}

export default Search;