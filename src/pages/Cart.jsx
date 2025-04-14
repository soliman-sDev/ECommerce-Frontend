import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clear } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [ totalAmount, setTotalAmount] = useState(0);
    const dispatch = useDispatch();

    const clearAllItems = () => {
        dispatch(clear());
        toast.success("Checkout")
    }

    
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [ cart ])

    return (
        <div className="w-full max-w-[1000px] mx-auto relative">
            { 
            cart.length > 0 ? 
            (<div className="flex justify-between">
                <div className="mt-16">
                    { cart.map((item, index) => (<CartItem key={index} item={item} />))}
                </div>
                <div  className="mt-32 flex flex-col justify-between h-auto fixed right-50 p-8 rounded-2xl group hover:scale-110 transition duration-300 ease-in-out hover:bg-slate-900">
                    <div>
                        <div className="uppercase text-green-700 font-semibold">Your Cart</div>
                        <div className="uppercase text-green-700 font-bold text-4xl">Summary</div>
                        <p className="mt-3 font-bold">
                            <span className="group-hover:text-slate-200 duration-300 ease-in-out transition"> Total Item: {cart.length} </span>
                        </p>
                    </div>
                    <div>
                        <p className="group-hover:text-slate-200 duration-300 ease-in-out transition">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>
                        <button onClick={clearAllItems}  className="mt-2 bg-green-700 w-full text-white py-2 rounded-md hover:scale-70 duration-300 transition">Checkout Now</button>
                    </div>
                </div>
            </div>) 
            : (<div className="flex justify-center  items-center h-screen flex-col ">
                <h1 className="font-bold mt-4 mr-2">Your cart is Empty</h1>
                <Link to="/allProducts">
                    <button className="bg-green-700 py-3 px-8 mt-3 rounded-lg text-white"> Shop Now </button>
                </Link>
            </div>)
            }
        </div>
    );
};

export default Cart;