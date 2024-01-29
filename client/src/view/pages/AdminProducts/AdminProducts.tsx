import React, {Component} from "react";
import axios from "axios";
import {Product} from "../../common/Product/Product";

interface AdminProductsState {
    products: Array<{
        _id: string;
        id:string;
        category: string;
        name: string;
        price: number;

    }>;
}

export class AdminProducts extends Component<{},AdminProductsState> {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({ baseURL: `http://localhost:4000` });
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData = async ()=> {
        try {
            await this.api.get('/products/all')
                .then((res: { data: any }) => {
                    this.setState({ products: res.data });
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
        const { products } = this.state;

        return (
            <>
                <section className="w-full h-[94.8%] flex flex-col items-center">
                    <h3 className="font-bold mt-6 mb-0 text-lg">All Products</h3>
                    <section className="w-[90%] mt-10 flex flex-wrap">
                        <table className="w-full mx-6 h-auto">
                            <tr className="bg-blue-950 text-white h-10">
                                <th className="text-[16px] font-normal  px-1">Id</th>
                                <th className="text-[16px] font-normal  px-1">Category</th>
                                <th className="text-[16px] font-normal  px-1">Name</th>
                                <th className="text-[16px] font-normal  px-1">Price</th>
                                <th className="text-[16px] font-normal  px-1">Option</th>
                            </tr>

                            <tbody>
                            {products.map((product) => (
                                <tr className="h-12" key={product._id}>
                                    <td>{product.id}</td>
                                    <td>{product.category}</td>
                                    <td>{product.name}</td>
                                    {/* Replace with the actual field name */}
                                    <td>Rs. {product.price} .00</td>
                                    {/* Replace with the actual field name */}
                                    <td>
                                        <button className=" bg-red-500 text-white p-1 rounded">Delete</button>
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
