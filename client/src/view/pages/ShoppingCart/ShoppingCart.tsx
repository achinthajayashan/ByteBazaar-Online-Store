import React, {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}


export class ShoppingCart
    extends Component<ShoppingCartProps> {

    calculateTotal = () => {
        let total = 0;

        this.props.itemsList.forEach((item) => {
            total += item.itemCount * item.product.price;
        });

        return total;
    };

    render() {
        const subtotal = this.calculateTotal();
        const deliveryCharge = 0; // Assuming a fixed delivery charge
        const discount = 0; // Assuming a fixed discount

        const promotions = 0; // Assuming a fixed promotional amount

        const totalToPay = subtotal + deliveryCharge - discount - promotions;
        return (
            <section>
                <div className="h-44 w-[83%] bg-gray-50 text-center justify-center items-center flex ml-36 mr-36 mt-6">
                    <h1 className="text-[40px] ">CART</h1>
                </div>
                <div className="flex ml-32 mr-32 mt-5">
                    <table className="w-full mx-6 h-auto">
                        <tr className="bg-blue-950 text-white h-10">
                            <th className="text-[16px]
                        font-normal  px-1">Id
                            </th>
                            <th className="text-[16px] font-normal  px-1">Name</th>
                            <th className="text-[16px] font-normal  px-1">UnitPrice</th>
                            <th className="text-[16px] font-normal  px-1">Quantity</th>
                            <th className="text-[16px] font-normal  px-1">Total Price</th>
                        </tr>

                        {
                            this.props.itemsList.length === 0 ?
                                <tr>
                                    <td colSpan={5}
                                        className=" px-1">
                                        <p className="text-center
                                    text-[16px]">No Items to Display!
                                        </p>
                                    </td>
                                </tr>
                                : this.props.itemsList.map((item) => (
                                    <tr className="px-1">
                                        <td className="text-[16px]
                                                   px-1">
                                            {item.product.id}</td>
                                        <td className="text-[16px]  px-1 ">{item.product.name}</td>
                                        <td className="text-[16px]  px-1">{item.product.currency + ' ' + item.product.price}</td>
                                        <td className="text-[16px]  px-1">{item.itemCount}</td>
                                        <td className="text-[16px] px-1">{item.product.currency + ' ' + (item.product.price * item.itemCount) + ".00"}</td>
                                    </tr>
                                ))
                        }
                    </table>
                    <div className="w-[37%] h-auto shadow m-0 rounded-sm">
                        <div className="ml-4 mr-4 mt-2">
                            <h3 className="mb-2">Enter Promo Code</h3>
                            <div className="flex">
                                <input className="w-[70%] border-2 mr-2 rounded"/>
                                <button className="bg-blue-950 text-white w-[30%] p-1 rounded">Apply</button>
                            </div>
                            <div className="flex justify-between mt-3 border-b-2 pb-2">
                                <h3>Promotions</h3>
                                <h2 className="text-green-600">Rs.0.00</h2>
                            </div>
                        </div>

                        <div className="ml-4 mr-4 mb-4">
                            <div className="flex justify-between mt-3 pb-2">
                                <h3>Sub Total</h3>
                                <h2 className="font-bold">{`Rs.${subtotal.toFixed(2)}`}</h2>
                            </div>

                            <div className="flex justify-between mt-3 pb-2">
                                <h3>Deliver Charge</h3>
                                <h2 className=" ">{`Rs.${deliveryCharge.toFixed(2)}`}</h2>
                            </div>

                            <div className="flex justify-between mt-3 pb-2">
                                <h3>Discounts</h3>
                                <h2 className="text-red-600">{`- Rs.${discount.toFixed(2)}`}</h2>
                            </div>

                            <div className="flex justify-between mt-3 pb-2">
                                <h3 className="font-bold">Total To Pay</h3>
                                <h2 className="font-bold text-xl">{`Rs.${totalToPay.toFixed(2)}`}</h2>
                            </div>

                            <a href='https://sandbox.payhere.lk/pay/o41328e52'>
                                <button className="w-[100%] bg-green-700 text-white p-2 rounded mt-6">Checkout
                                </button>
                            </a>


                            <p className="text-center text-xs mt-1">Pay With <span
                                className="font-bold text-blue-700 italic">PayHere</span></p>

                        </div>


                    </div>
                </div>
            </section>


        );
    }
}
