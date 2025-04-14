import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector((state) => state);

  return (
    <nav className=" p-4 flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
            <div className="ml-5">
                <img src="logo.png" alt="logo" className="h-14"/>
            </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

        <div className="relative group">
          <button className="text-slate-100 px-4 py-2 rounded-lg  transition duration-300">
            Category
          </button>

          <div className=" bg-slate-700 absolute left-0 w-40 mt-2 space-y-2 opacity-0 rounded-md border border-slate-600  invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <NavLink to="/allProducts" className="block  text-slate-100 px-4 py-2 rounded-t-md hover:bg-slate-800 w-full">
              All Products
            </NavLink>
            <NavLink to="/men`s clothing" className="block  text-slate-100 px-4 py-2 rounded-t-md hover:bg-slate-800 w-full">
              men`s clothing
            </NavLink>
            <NavLink to="/women`s clothing" className="block text-slate-100 px-4 py-2 hover:bg-slate-800 w-full">
              women`s clothing
            </NavLink>
            <NavLink to="/electronics" className="block  text-slate-100 px-4 py-2 rounded-b-md  hover:bg-slate-800 w-full">
              Electronics
            </NavLink>
            <NavLink to="jewelery" className="block  text-slate-100 px-4 py-2 rounded-b-md  hover:bg-slate-800 w-full">
              jewelery
            </NavLink>
          </div>
        </div>

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
              { cart.length > 0 && 
                <span 
                className="absolute -top-1 -right-2 bg-slate-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                { cart.length }
                </span>
              }
          </div>
        </NavLink>
      
      </div>
      
    </nav>
  );
};

export default Navbar;
