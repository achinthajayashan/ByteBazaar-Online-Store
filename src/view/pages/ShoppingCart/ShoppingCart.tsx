import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}
export class ShoppingCart
    extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center
                  items-center ml-32 mr-32 mt-5">
                <table className="w-full mx-6">
                    <tr className="bg-blue-950 text-white">
                        <th className="text-[16px]
                        font-normal border-black
                        border-[0.5px]  px-1">Id</th>
                        <th className="text-[16px] font-normal border-black border-[0.5px] px-1">Name</th>
                        <th className="text-[16px] font-normal border-black border-[0.5px] px-1">UnitPrice</th>
                        <th className="text-[16px] font-normal border-black border-[0.5px] px-1">Quantity</th>
                        <th className="text-[16px] font-normal border-black border-[0.5px] px-1">Total Price</th>
                    </tr>

                    {
                        this.props.itemsList.length === 0 ?
                            <tr>
                                <td colSpan={5}
                                    className="border-black
                                    border-[0.5px] px-1">
                                    <p className="text-center
                                    text-[16px]">No Items to Display!
                                    </p>
                                </td>
                            </tr>
                            : this.props.itemsList.map((item) => (
                                <tr className="border-black border-[0.5px] px-1">
                                    <td className="text-[16px]
                                                   border-black
                                                   border-[0.5px] px-1">
                                        {item.product.id}</td>
                                    <td className="text-[16px] border-black border-[0.5px] px-1 ">{item.product.name}</td>
                                    <td className="text-[16px] border-black border-[0.5px] px-1">{ item.product.currency+ ' ' +item.product.price }</td>
                                    <td className="text-[16px] border-black border-[0.5px] px-1">{item.itemCount}</td>
                                    <td className="text-[16px] border-black border-[0.5px] px-1">{item.product.currency+ ' ' +(item.product.price * item.itemCount)+".00"  }</td>
                                </tr>
                            ))
                    }
                </table>
            </div>
        );
    }
}