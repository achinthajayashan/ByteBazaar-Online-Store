import {Component} from "react";
import {Product} from "../../common/Product/Product";
import axios from "axios";

export class Shop extends Component {
    private api: any;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData()
            .then(r => console.log("Data fetch completed!" + r)); // Callback Function
    }
    fetchData = async ()=> {
        try {
            this.api.get('/products/all')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    this.setState({data: jsonData});
                }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (

            <div >
                <div className="h-44 w-[83%] bg-gray-50 text-center justify-center items-center flex ml-36 mr-36 mt-6">
                    <h1 className="text-[40px] ">SHOP</h1>
                </div>
                <div className="flex ml-12 mr-12 mt-6">
                    <div className="mt-5 mb-5 flex flex-wrap
                                justify-center
                                items-center
                                mx-auto">
                        {
                            data.map((product: any) => (
                                <Product key={product.id} data={product}/>
                            ))
                        }

                    </div>
                </div>

            </div>
        );
    }
}
