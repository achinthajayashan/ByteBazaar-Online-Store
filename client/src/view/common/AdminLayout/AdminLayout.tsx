import {Component} from "react";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminContent} from "../AdminContent/AdminContent";

export class AdminLayout extends Component {
    render() {
        return (
            <>
            <AdminNavbar/>
                <AdminContent/>
            </>
        );
    }
}
