import {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminContent} from "../AdminContent/AdminContent";
import {AdminSidebar} from "../../AdminSidebar/AdminSidebar";

export class AdminLayout extends Component {
    render() {
        return (
            <section className="flex w-screen h-screen justify-between">
            <AdminSidebar/>
                <section className="h-screen w-[84%]">
                    <AdminNavbar/>
                    <AdminContent/>
                </section>

            </section>
        );
    }
}
