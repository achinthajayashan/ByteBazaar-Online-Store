import {Component} from "react";


export class MyAccount extends Component {
    render() {

        return (
            <section>
                <div className="h-44 w-[83%] bg-gray-50 text-center justify-center items-center flex ml-36 mr-36 mt-6">
                    <h1 className="text-[40px] ">MY ACCOUNT</h1>
                </div>

                <section className="flex flex-wrap">


                <section className="h-72 w-[30%] shadow ml-36 mt-6">
                    <h3 className="text-center mb-6 pt-6 text-xl">Account Details</h3>
                    <p className="ml-12 ">Name : <span className="font-bold">{localStorage.getItem('userName')}</span>
                    </p>
                    <p className="ml-12 mt-3">Email : <span
                        className="font-bold">{localStorage.getItem('userEmail')}</span>
                    </p>
                    <p className="ml-12 mt-3">Contact Number : <span
                        className="font-bold">{localStorage.getItem('phoneNumber')}</span>
                    </p>
                    <p className="ml-12 mt-3">Status : <span
                        className="font-bold text-green-600">Active</span>
                    </p>
                </section>

                    <section className="h-72 w-[50%] ml-5 shadow mr-36 mt-6">
                        <h3 className="text-center mb-6 pt-6 text-xl">Addresses</h3>

                        <section className="flex">
                            <div className="w-[40%] ml-12">
                                <h3 className="ml-12 mb-4 italic">Billing Address</h3>

                                <p className=" ml-12 text-red-600">You Haven't Setup Yet</p>
                                {/*<p className="ml-12 ">Name : <span*/}
                                {/*    className="font-bold">{localStorage.getItem('userName')}</span>*/}
                                {/*</p>*/}
                                {/*<p className="ml-12 mt-3">Email : <span*/}
                                {/*    className="font-bold">{localStorage.getItem('userEmail')}</span>*/}
                                {/*</p>*/}
                                {/*<p className="ml-12 mt-3">Contact Number : <span*/}
                                {/*    className="font-bold">{localStorage.getItem('phoneNumber')}</span>*/}
                                {/*</p>*/}
                                {/*<p className="ml-12 mt-3">Status : <span*/}
                                {/*    className="font-bold text-green-600">Active</span>*/}
                                {/*</p>*/}
                            </div>

                            <div className="w-[40%] ml-12">
                                <h3 className="ml-12 mb-4 italic">Shipping Address</h3>

                                <p className=" ml-12 text-red-600">You Haven't Setup Yet</p>
                                {/*<p className="ml-12 ">Name : <span*/}
                                {/*    className="font-bold">{localStorage.getItem('userName')}</span>*/}
                                {/*</p>*/}
                                {/*<p className="ml-12 mt-3">Email : <span*/}
                                {/*    className="font-bold">{localStorage.getItem('userEmail')}</span>*/}
                                {/*</p>*/}
                                {/*<p className="ml-12 mt-3">Contact Number : <span*/}
                                {/*    className="font-bold">{localStorage.getItem('phoneNumber')}</span>*/}
                                {/*</p>*/}
                                {/*<p className="ml-12 mt-3">Status : <span*/}
                                {/*    className="font-bold text-green-600">Active</span>*/}
                                {/*</p>*/}
                            </div>
                        </section>


                    </section>

                </section>


            </section>

        );
    }
}
