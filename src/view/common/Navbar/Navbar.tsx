import {Component} from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LanguageIcon from '@mui/icons-material/Language';
import './Navbar.css';
import logo from '../../../images/logo wide.png'
import {MenuItem} from "@mui/material";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export class Navbar extends Component {
    render() {
        return (
            <>
                {/*upper header section*/}
                <div className="flex justify-between mt-2 text-xs pb-1 border-b-2">
                    <div className="flex text-gray-500 ml-36">
                        <LocalShippingIcon style={{fontSize : 18}}/>
                        <h5 className="text-gray-500 ml-3">ISLANDWIDE FREE DELIVER</h5>
                    </div>

                    <div className="flex text-gray-500 mr-36">
                        <AttachMoneyIcon style={{fontSize : 18}}/>
                        <select className="text-gray-500 mr-7 ml-2 focus:outline-0">
                        <option className="border-0">SRILANKA RS.</option>
                        </select>
                        <LanguageIcon style={{fontSize : 18}}/>
                        <select className="text-gray-500 ml-2 focus:outline-0">
                            <option className="border-0">SRILANKA RS.
                        </option>
                        </select>
                    </div>

                    {/*<div className="text-gray-500">*/}
                    {/*    <FacebookIcon/>*/}
                    {/*    <YouTubeIcon/>*/}
                    {/*    <InstagramIcon/>*/}
                    {/*</div>*/}
                </div>

                {/*logo and search section*/}
                <div className="flex justify-between pt-3 h-20 border-b-2 pb-3">
                    {/*logo*/}
                    <img src={logo} className="h-14 ml-36 mt-1"/>

                    {/*search box*/}
                    <div className="h-12 flex rounded-2xl border-0 mt-1.5 bg-gray-100">
                        <input placeholder="Search Here....." className="w-96 h-12 mt-0 pl-2 bg-transparent focus:outline-0"/>
                        <select className="h-12 mt-0 pl-2 pr-2 pt-0 bg-transparent text-gray-500 mr-2 focus:outline-0 border-l-2">
                            <option>All Categories</option>
                        </select>
                    </div>

                    {/*number and cart buttons*/}
                    <div className="h-16 text-[20px] flex mr-36 mt-2 text-gray-500">
                        <PermPhoneMsgIcon style={{fontSize : 40}}/>
                        <div className="mr-10">
                            <p className="font-light text-[8px]">24 Hrs Hotline</p>
                            <h4 className="text-xl text-gray-700">078 7155885</h4>
                        </div>
                        <PersonOutlineOutlinedIcon style={{fontSize : 30}} className="mr-5 text-gray-500 mt-2 hover:text-blue-900"/>
                        <FavoriteBorderOutlinedIcon style={{fontSize : 30}} className="mr-5 font-light mt-2 hover:text-blue-900"/>
                        <ShoppingBagOutlinedIcon style={{fontSize : 30}} className="mt-2 hover:text-blue-900"/>



                    </div>
                </div>


            </>
        );
    }
}