import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export function Header() {
  return (
    <header className="w-full px-2 mb-10 border-b-4 border-b-blue-500 shadow-lg">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="text-lg">
          Kamel
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart size={30} className="fill-pink-300" />
          <span className="absolute -right-4 -top-2 bg-blue-500 px-2.5 rounded-full h-6 w-6 flex items-center justify-center text-white text-xs font-bold">2</span>
        </Link>
      </nav>
    </header>
  )
}