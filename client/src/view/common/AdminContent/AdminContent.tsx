import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Shop} from "../../pages/shop/Shop";
import {TrackOrder} from "../../pages/trackOrder/TrackOrder";
import {Policy} from "../../pages/policy/Policy";
import {Contact} from "../../pages/contact/Contact";
import {SignIn} from "../../pages/signIn/SignIn";
import {Login} from "../../pages/login/Login";
import {MyAccount} from "../../pages/myAccount/MyAccount";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";
import {AdminDashboard} from "../../pages/adminDashboard/AdminDashboard";
import {AdminLayout} from "../AdminLayout/AdminLayout";
import {AdminCustomers} from "../../pages/AdminCustomers/AdminCustomers";

export class AdminContent extends Component {
    render() {
        return (
            <Routes>
                <Route path="/dashboard" Component={AdminDashboard}></Route>
                <Route path="/customers" Component={AdminCustomers}></Route>
                {/*<Route path="/shop" Component={Shop}></Route>*/}
                {/*<Route path="/track" Component={TrackOrder}></Route>*/}
                {/*<Route path="/policy" Component={Policy}></Route>*/}
                {/*<Route path="/contact" Component={Contact}></Route>*/}
                {/*<Route path="/signin" Component={SignIn}></Route>*/}
                {/*<Route path="/login" Component={Login}></Route>*/}
                {/*<Route path="/myaccount" Component={MyAccount}></Route>*/}
                {/*<Route path="/shopping-cart"*/}
                {/*       element={<ShoppingCart*/}
                {/*           itemsList={ModifyCart.itemsList}/>*/}
                {/*       }>*/}
                {/*</Route>*/}
            </Routes>
        );
    }
}
