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
export class Navbar extends Component {
    render() {
        return (
            <>
                {/*upper header section*/}
                <div className="flex justify-between mt-2 text-xs pb-1 border-b-2">
                    <div className="flex text-gray-500 ml-20">
                        <LocalShippingIcon/>
                        <h5 className="text-gray-500 ml-3 mt-1">ISLANDWIDE FREE DELIVER</h5>
                    </div>

                    <div className="flex text-gray-500 mr-20">
                        <AttachMoneyIcon/>
                        <h5 className="text-gray-500 mr-7 mt-1 ml-2">SRILANKA RS.</h5>
                        <LanguageIcon/>
                        <h5 className="text-gray-500 mt-1 ml-2">ENGLISH</h5>
                    </div>

                    {/*<div className="text-gray-500">*/}
                    {/*    <FacebookIcon/>*/}
                    {/*    <YouTubeIcon/>*/}
                    {/*    <InstagramIcon/>*/}
                    {/*</div>*/}
                </div>

                {/*logo and search section*/}
                <div className="flex justify-between pt-3 h-16">
                    {/*logo*/}
                    <img src={logo} className="h-14 ml-20 mt-1"/>

                    {/*search box*/}
                    <div className="h-16 flex">
                        <select className="border-2 h-12 mt-1 pl-2 pr-2 pt-0">
                            <option>All Categories</option>
                        </select>
                        <input placeholder="Search Here....." className="w-96 border-2 h-12 mt-1 pl-2"/>
                    </div>

                    {/*number and cart buttons*/}
                    <div className="h-16 text-[20px] flex">
                        <PermPhoneMsgIcon/>
                        <div>
                            <p className="font-light text-[8px]">24 Hrs Hotline</p>
                            <h4 className="text-xl">078 7155885</h4>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}