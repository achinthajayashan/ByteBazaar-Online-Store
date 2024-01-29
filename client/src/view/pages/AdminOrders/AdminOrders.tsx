import React, {Component} from "react";
import axios from "axios";

interface AdminOrderState {
    orders: Array<{
        _id: string;
        customer: string;
        date: string;
        items: any[];
        totalToPay: number;
        status: string;
    }>;
}


export class AdminOrders extends Component<{}, AdminOrderState>  {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            orders:[]
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData = async ()=> {
        try {
            await this.api.get('/order/all')
                .then((res: { data: any }) => {
                    this.setState({ orders: res.data });
                    console.log(res.data);
                    console.log(res.data[0].customer);
                }).catch((error: any)=> {
                    console.error('Axios Error:', error)
                });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    // updateOrderStatus = async () => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('status', this.state.status);
    //
    //         const response = await this.api.put(`order/update/${this.state.orderId}`, formData);
    //
    //         const jsonData = response.data;
    //         console.log(jsonData);
    //
    //         alert('Order Status Updated Successfully!');
    //     } catch (err) {
    //         console.error('Axios Error:', err);
    //         alert('Error updating order status: ' + err);
    //     }
    // }

    // updateOrderStatusOnAction = () => {
    //     const isConfirm = window.confirm('Do you want to update order status?');
    //
    //     (isConfirm)
    //         ? this.updateOrderStatus()
    //         : console.log("Order Status Update cancelled!");
    // }

    render() {
        const { orders } = this.state;
        return (

            <>
                <section className="w-full h-[94.8%] flex flex-col items-center">
                    <h3 className="font-bold mt-6 mb-0 text-lg">All Orders</h3>
                    <section className="w-[90%] mt-10 flex flex-wrap">
                        <table className="w-full mx-6 h-auto">
                            <thead className="bg-blue-950 text-white h-10">
                            <th className="text-[16px] font-normal  px-1">Customer</th>
                            <th className="text-[16px] font-normal  px-1">date</th>
                            <th className="text-[16px] font-normal  px-1">Items</th>
                            <th className="text-[16px] font-normal  px-1">TotalPaid</th>
                            <th className="text-[16px] font-normal  px-1">Current Status</th>
                            <th className="text-[16px] font-normal  px-1">Update To</th>
                            <th className="text-[16px] font-normal  px-1">Action</th>
                            </thead>

                            <tbody>
                            {orders.map((orders) => (
                                <tr className="h-12" key={orders._id}>
                                    <td>{orders.customer}</td>
                                    <td>30/01/2024</td>
                                    <td>hfhhfgfjorifhyeirfhfierh</td>
                                    {/*<td>{orders.items}</td>*/}
                                    <td>{orders.totalToPay}</td>
                                    <td>{orders.status}</td>
                                    <td><select>
                                        <option>pending</option>
                                        <option>processing</option>
                                        <option>completed</option>
                                        <option>cancelled</option>
                                    </select></td>
                                    <td>
                                        <button className=" bg-red-500 text-white p-1 rounded">update</button>
                                    </td>
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
