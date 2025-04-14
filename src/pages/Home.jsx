import { Link } from "react-router-dom";




export default function Home() {

    return (
        <div className="flex justify-center items-center h-screen flex-col  font-bold" >
            Welcome to our Store
            <Link to="/allProducts">
                <button className="bg-green-700 py-3 px-8 mt-3 rounded-lg text-white"> Shop Now </button>
            </Link>
        </div>
    );
};