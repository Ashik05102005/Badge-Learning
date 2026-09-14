import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Slices/themeSlice";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";


function Header() {
    const theme = useSelector(state=>state.theme.theme);
    const cart = useSelector(state=>state.cart.cart)
    const dispatch = useDispatch()
  return (
    <header className= {
       theme==="dark"? `bg-slate-900 text-white px-8 py-4 flex items-center justify-between transition-all border-b border-gray-800 fixed w-full`
                     : `bg-slate-100 text-slate-900 px-8 py-4 flex items-center justify-between transition-all border border-gray-200 fixed w-full `} >
      <h1 className="text-2xl font-bold">
        My React App
      </h1>


      <nav className="flex gap-6">
        <div>
           <button 
           className="border p-2 rounded-full "
           onClick={()=>dispatch(toggleTheme())} >
             {theme==="dark"?<CiLight className="" />:<MdNightlight className="rotate-300"/>}
             </button>
        </div>
        <a href="#" className="hover:text-blue-400 transition">
          Home
        </a>

        <span>cart count : {cart.length}</span>

        <a href="#" className="hover:text-blue-400 transition">
          Users
        </a>
      </nav>
    </header>
  );
}

export default Header;