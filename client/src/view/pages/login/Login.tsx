import {Component} from "react";
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <>
                <section className="w-screen h-[80vh] flex justify-center items-center">
                    <div className="shadow w-[25%] h-auto flex flex-col justify-center pt-6 pb-6">
                        <h3 className="font-extrabold text-xl mb-8 ml-12">Login</h3>

                        <div>
                            <label className="ml-12">Username / Email</label><br/>
                            <input type="email" className="w-80 h-10 border-2 mt-3 ml-12"/>
                        </div>

                        <div className="mt-6">
                            <label className="ml-12 ">Password</label><br/>
                            <input type="password" className="w-80 h-10 border-2 mt-3 ml-12"/>
                        </div>

                        <button className="bg-blue-950 h-10 text-white w-80 ml-12 mt-10" onClick={this.onLoginBtnClick}>
                            LOGIN
                        </button>
                        <p className="text-center mt-6">Don't Have An Account ? <br/><Link to="/signin" className="text-blue-900">Register Now</Link></p>
                    </div>
                </section>
            </>
        );
    }

    private onLoginBtnClick(){
        alert("login success");
    }
}
