import React from 'react';
import UserHeader from "../../common/Header/UserHeader";
import Footer from "../../common/Footer";
import CartList from "./cartlist";
import {Outlet} from "react-router-dom";

function Cart(props) {
    return (
        <div>
            <UserHeader/>
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Cart;