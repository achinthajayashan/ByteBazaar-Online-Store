import {Component} from "react";
import logo from "../../images/logo wide.png";

export class AdminSidebar extends Component {
    render() {
        return (
            <>
                <section className="w-[16%] h-screen border-r-2">
                    <img src={logo} className="h-10 mt-3 ml-12"/>

                    <div className="flex w-[90%] h-20 ml-4 rounded-2xl border-2 mt-6 items-center">
                        <img className="rounded-[100%] bg-green-600 h-12 w-12 ml-2"/>
                        <div className="ml-5">
                            <h3>Achintha Jayashan</h3>
                            <p className="text-sm text-gray-500">position : <span className="font-bold ml-2">admin</span></p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
