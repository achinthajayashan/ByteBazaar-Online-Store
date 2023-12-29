import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {data: any}
interface ModifyCartState {itemCount: number}
export class ModifyCart
    extends Component<ModifyCartProps,
                      ModifyCartState> {

    public static itemsList:CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const  {itemCount} = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList
                .find(item =>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                )
            }
        }
        console.log(ModifyCart.itemsList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount} = this.state;
        let item =  ModifyCart
            .itemsList
            .find(item =>
                item.product.id ===
                this.props.data.product.id);
        // @ts-ignore
        let index = ModifyCart.itemsList.indexOf(item);
        ModifyCart.itemsList.splice(index, 1);
        ModifyCart.itemsList.push(
            {product: this.props.data.product,
                itemCount: itemCount}
        );

        console.log(ModifyCart.itemsList)
    }

    render() {

        let {itemCount} = this.state;

        const onDecreaseItemCount = ()=> {
            if (itemCount > 1) {
                this.setState({itemCount: --itemCount})
            } else {
                alert("Item count can't be less than 1");
            }
        }
        const onIncreaseItemCount = () => {
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div className="w-[180px] mt-3 h-[40px] bg-blue-950 text-white
                            text-[12px]
                                            text-center">
                <button className="float-left text-[15px] h-[40px] w-[40px]"
                                  onClick={onDecreaseItemCount}>-</button>
                <button className="text-[15px] h-[40px] w-[40px] cursor-none">{itemCount}</button>
                <button className="float-right text-[15px]
                                         h-[40px] w-[40px]"
                                  onClick={onIncreaseItemCount}>+</button>
            </div>
        );
    }
}