import {Component} from "react";
import logo from "../../images/logo wide.png";
import {Link} from "react-router-dom";

export class AdminSidebar extends Component {
    render() {
        return (
            <>
                <section className="w-[16%] h-screen border-r-2">
                    <img src={logo} className="h-12 mt-3 ml-10"/>

                    <div className="flex w-[90%] h-20 ml-4 rounded-2xl border-2 mt-6 items-center">
                        <img className="rounded-[100%] bg-green-600 h-12 w-12 ml-2"/>
                        <div className="ml-5">
                            <h3>Achintha Jayashan</h3>
                            <p className="text-sm text-gray-500">position : <span className="font-bold ml-2">admin</span></p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center w-[90%] ml-4 h-auto mt-6">
                        <Link to="/admin/dashboard"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Dashboard</button></Link>
                        <Link to="/admin/customers"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Customers</button></Link>
                        <Link to="/admin/products"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Products</button></Link>
                        <Link to="/admin/orders"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Orders</button></Link>
                        <Link to="/admin/payments"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Payments</button></Link>
                        <Link to="/admin/reports"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Reports</button></Link>
                        <Link to="/admin/settings"><button className="w-[100%] h-12 border-2 rounded-xl mb-4 hover:bg-gray-100">Settings</button></Link>
                    </div>
                </section>
            </>
        );
    }
}
