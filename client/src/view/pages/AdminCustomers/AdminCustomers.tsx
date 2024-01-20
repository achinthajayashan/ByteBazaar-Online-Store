import React, {Component} from "react";
import axios from "axios";
import {Product} from "../../common/Product/Product";

interface AdminCustomersState {
    customers: Array<{
        _id: string;
        name: string;
        email: string;
        phoneNumber: string; // Replace with your actual field name
        userName: string; // Replace with your actual field name
        // Add more fields as needed
    }>;
}

export class AdminCustomers extends Component<{},AdminCustomersState> {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({ baseURL: `http://localhost:4000` });
        this.state = {
            customers: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData = async ()=> {
        try {
            await this.api.get('/customer/all')
                .then((res: { data: any }) => {
                    this.setState({ customers: res.data });
                    console.log(res.data);
                    console.log(res.data[0].name);
                }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }
    render() {
        const { customers } = this.state;

        return (
            <>
                <section className="w-full h-[94.8%] flex flex-col items-center">
                    <section className="w-[90%] mt-10 flex flex-wrap">
                        <table className="w-full mx-6 h-auto">
                            <tr className="bg-blue-950 text-white h-10">
                                <th className="text-[16px] font-normal  px-1">Name</th>
                                <th className="text-[16px] font-normal  px-1">Email</th>
                                <th className="text-[16px] font-normal  px-1">Telephone Number</th>
                                <th className="text-[16px] font-normal  px-1">User Name</th>
                                <th className="text-[16px] font-normal  px-1">Option</th>
                            </tr>

                            <tbody>
                            {customers.map((customer) => (
                                <tr key={customer._id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phoneNumber}</td>
                                    {/* Replace with the actual field name */}
                                    <td>{customer.email}</td>
                                    {/* Replace with the actual field name */}
                                    <td><button className=" bg-red-500 text-white p-1 rounded">Delete</button></td>
                                </tr>
                            ))}
                            </tbody>

                        </table>

                    </section>
                </section>
            </>
        );
    }
}
