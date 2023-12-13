import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Shop} from "../../pages/shop/Shop";
import {TrackOrder} from "../../pages/trackOrder/TrackOrder";
import {Policy} from "../../pages/policy/Policy";
import {Contact} from "../../pages/contact/Contact";
import {SignIn} from "../../pages/signIn/SignIn";

export class MainContent extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/shop" Component={Shop}></Route>
                <Route path="/track" Component={TrackOrder}></Route>
                <Route path="/policy" Component={Policy}></Route>
                <Route path="/contact" Component={Contact}></Route>
                <Route path="/signin" Component={SignIn}></Route>
            </Routes>
        );
    }
}