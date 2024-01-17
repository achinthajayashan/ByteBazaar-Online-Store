import React, {ChangeEvent, Component} from "react";
import {Link, useNavigate} from "react-router-dom";


import axios from "axios";

interface LogInProps {
    data: any;
}

interface LogInState {
    email: string;
    password: string;
}


function refreshPage() {
    window.location.reload();
}



export class Login extends React.Component<LogInProps, LogInState> {


    private api: any;

    static accountDetails=[];



    constructor(props: any) {
        super(props);
        this.api = axios.create({ baseURL: `http://localhost:4000` });
        this.state = {
            email:"",
            password:"",

        };
    }

    handleMessageInputOnChange=(event: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        } as Pick<LogInState, keyof LogInState>);
    }

    private onLoginBtnClick = async () => {


            const typedPW=this.state.password;
            try {
                await this.api.get('/customer/login/'+this.state.email, {
                }).then((res: { data: any}) => {
                    const jsonData = res.data;
                    console.log(jsonData);
                    console.log(jsonData[0].password);
                    if (jsonData[0].password==typedPW){
                        alert(jsonData[0].name+" Login Success !");
                        localStorage.setItem('userName', jsonData[0].name);
                        localStorage.setItem('userEmail',jsonData[0].email);
                        localStorage.setItem('phoneNumber',jsonData[0].phoneNumber);
                        localStorage.setItem('islogin','true');
                        refreshPage();
                        window.location.href = '/';

                    }else{
                        alert("Wrong Password")
                    }
                }).catch((error: any)=> {
                    console.error('Axios Error', error);
                    alert(error);
                });

            } catch (error) {
                console.error("Axios Error", error);
                alert(error);
            }

    };

    render() {
        return (
            <>
                <section className="w-screen h-[80vh] flex justify-center items-center">
                    <div className="shadow w-[25%] h-auto flex flex-col justify-center pt-6 pb-6">
                        <h3 className="font-extrabold text-xl mb-8 ml-12">Login</h3>

                        <div>
                            <label className="ml-12">Username / Email</label><br/>
                            <input type="email" className="w-80 h-10 border-2 mt-3 ml-12" name="email"
                                   value={this.state.email}
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>

                        <div className="mt-6">
                            <label className="ml-12 ">Password</label><br/>
                            <input type="password" className="w-80 h-10 border-2 mt-3 ml-12" name="password"
                                   value={this.state.password}
                                   onChange={this.handleMessageInputOnChange}/>
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


}
