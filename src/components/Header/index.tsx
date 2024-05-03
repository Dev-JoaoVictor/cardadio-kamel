import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className="w-full px-2 mb-4 bg-primary shadow-lg">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="w-24">
          <img src={logo} alt="" />
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart size={30} className="fill-white" />
          <span className="absolute -right-4 -top-2 bg-secondary px-2.5 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm font-bold">2</span>
        </Link>
      </nav>
    </header>
  )
}