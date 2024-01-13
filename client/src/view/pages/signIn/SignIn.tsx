import {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

interface SignInProps {
    data: any;
}

interface SignInState {
    name: string;
    email: string;
    phoneNumber: number;
    password:string
}

export class SignIn extends Component<SignInProps,SignInState> {
    private api: any;


    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            name: ' ',
            email: ' ',
            phoneNumber: 0,
            password:' '
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <>
                <section className="w-screen h-[80vh] flex justify-center items-center">
                    <div className="shadow w-[25%] h-auto flex flex-col justify-center pt-6 pb-6">
                        <h3 className="font-extrabold text-xl mb-8 ml-12">REGISTER</h3>
                        <form>
                            <div>
                                <label className="ml-12">Name</label><br/>
                                <input type="text" className="w-80 h-10 border-2 mt-3 ml-12" name="name" value={this.state.name} onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div>
                                <label className="ml-12">Email</label><br/>
                                <input type="email" className="w-80 h-10 border-2 mt-3 ml-12" name="email" value={this.state.email} onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div>
                                <label className="ml-12">Phone Number</label><br/>
                                <input type="tel" className="w-80 h-10 border-2 mt-3 ml-12" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div className="mt-6">
                                <label className="ml-12 ">Password</label><br/>
                                <input type="password" className="w-80 h-10 border-2 mt-3 ml-12" name="password" value={this.state.password} onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div className="mt-6">
                                <label className="ml-12 ">Confirm Password</label><br/>
                                <input type="password" className="w-80 h-10 border-2 mt-3 ml-12"/>
                            </div>

                            <button className="bg-blue-950 h-10 text-white w-80 ml-12 mt-10" onClick={this.onSendBtnClick}>
                                REGISTER
                            </button>
                        </form>

                        <p className="text-center mt-6">Already An Account ? <br/><Link to="/login"
                                                                                        className="text-blue-900">Login</Link>
                        </p>
                    </div>
                </section>
            </>
        );
    }

    handleMessageInputOnChange(event: { target: {value: any; name: any;} }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSendBtnClick = () => {
        try {
            this.api.post('/customer/register', {
                name: this.state.name,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                password: this.state.password
            }).then((res: { data: any}) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any)=> {
                console.error('Axios Error', error);
                alert('error');
            });
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('error');
        }
    }
}
