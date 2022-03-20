import React, {useEffect, useState} from 'react';
import s from "./index.module.css";
import banner from "../../../assets/img/temp/banner1.jpg"
import {Link} from "react-router-dom";
import pro from "../../../assets/img/temp/pro01.jpg";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {Pagination} from 'antd';
import { useNavigate } from "react-router-dom";
function Category(props) {
    let navigate = useNavigate();
    const [goodsList, setGoodsList] = useState([])
    const [params] = useSearchParams();
    const category_id = params.getAll("category_id")[0]
    const page = params.getAll("page")[0]
    // 接收search参数
    useEffect(() => {
        const page_size = 20
        axios.get(`http://127.0.0.1:8000/api/goods/?category_id=${category_id}&page=${page}&page_size=${page_size}`).then(res => {
            setGoodsList(res.data)
        })
        console.log(goodsList)
    }, [category_id, page])

    function changePage(pageNumber) {
        console.log('Page: ', pageNumber);
        navigate(`/goods?category_id=${category_id}&page=${pageNumber}`, { replace: true });
        // props.history.push(`/goods?category_id=${category_id}&page=${pageNumber}`)
    }

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
                {
                    goodsList.map((item) => {
                        return <li key={item.id}>
                            <Link to={`/goods_detail?goods_id=${item.id}`}>
                                <dl>
                                    <dt><img src={item.image_url}/></dt>
                                    <dd>{item.name}</dd>
                                    <dd>${item.price}</dd>
                                </dl>
                            </Link>
                        </li>
                    })
                }
            </ul>
            <div style={{textAlign: "center"}}>
                <Pagination defaultCurrent={1} total={200} showSizeChanger={false} onChange={changePage}/>
            </div>
        </div>
    );
}

export default Category;