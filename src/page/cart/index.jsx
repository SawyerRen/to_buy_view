import React from 'react';
import UserHeader from "../../common/Header/UserHeader";
import Footer from "../../common/Footer";
import CartList from "./cartlist";
import {Outlet} from "react-router-dom";
import HomeHeader from "../../common/Header/HomeHeader";

function Cart(props) {
    return (
        <div>
            <HomeHeader/>
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Cart;