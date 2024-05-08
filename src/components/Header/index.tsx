import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import logo from '../../assets/logo.png'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {

  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full px-2 bg-primary shadow-lg">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="w-24">
          <img src={logo} alt="logo confeitaria kamel" />
        </Link>
        <Link to="/cart" className="relative">
          <IoCartOutline size={32} className="text-white" />
          {
            cartAmount > 0 && (
              <span className="absolute -right-4 -top-2 bg-secondary px-2.5 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm font-bold">{cartAmount}</span>
            )
          }
        </Link>
      </nav>
    </header>
  )
}