import {Component} from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LanguageIcon from '@mui/icons-material/Language';
import './Navbar.css';
export class Navbar extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}