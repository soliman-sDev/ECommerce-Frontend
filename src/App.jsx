import './App.css'
import { BrowserRouter,Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AllProducts from './pages/allProducts';
import MenClothing from './pages/menClothes';
import WomenClothing from './pages/womenClothes';
import Electronics from './pages/electronics';
import Jewelery from './pages/jewelery';
import Login from './pages/login';


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
    
    {!hideNavbar && (
        <div className="bg-slate-900 fixed w-full z-10">
          <Navbar />
        </div>)}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/men`s clothing' element={<MenClothing />} />
        <Route path='/women`s clothing' element={<WomenClothing />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;
