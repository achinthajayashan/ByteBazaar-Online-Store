import {Component} from "react";
import slide1 from '../../../images/slide1-5.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export class Home extends Component {
    render() {
        return (
            <>
                <section>
                    <img src={slide1} alt=""/>
                </section>

                <section className="h-32 ml-36 mr-36 grid grid-cols-3 grid-rows-1 gap-5 mt-14">
                    <div className="flex text-blak items-center justify-center border-r-2">
                        <div><LocalShippingIcon style={{fontSize: 50}} className="mr-8"/></div>
                        <div>
                            <h5 className="font-bold text-lg">FREE SHIPPING & RETURN</h5>
                            <p className="text-xs text-gray-500">Free Shipping on All Orders Above Rs.2000</p>
                        </div>
                    </div>
                    <div className="flex text-blak items-center justify-center border-r-2">
                        <div><PaidIcon style={{fontSize: 50}} className="mr-8"/></div>
                        <div>
                            <h5 className="font-bold text-lg">MONEY BACK GUARANTEE</h5>
                            <p className="text-xs text-gray-500">100% Money Back Guarantee</p>
                        </div>
                    </div>
                    <div className="flex text-blak items-center justify-center">
                        <div><SupportAgentIcon style={{fontSize: 50}} className="mr-8"/></div>
                        <div>
                            <h5 className="font-bold text-lg">ONLINE SUPPORT 24/7</h5>
                            <p className="text-xs text-gray-500">Well Dedicated Team for Help Always</p>
                        </div>
                    </div>
                </section>

                <section className="mt-24">
                    <h2 className="text-center text-2xl">BROWSE OUR CATEGORIES</h2>
                </section>

            </>
        );
    }
}
