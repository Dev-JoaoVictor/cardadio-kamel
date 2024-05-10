import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="w-full h-20 bg-primary text-white">
      <div className="w-full max-w-7xl h-20 flex items-center gap-3 px-5 mx-auto">
        <Link to='https://www.instagram.com/confeitariakamel' target="_blank">
          <FaInstagram size={30} />
        </Link>
        <Link to='mailto:confeitariakamel@gmail.com' target="_blank">
          <MdOutlineEmail size={34} />
        </Link>
      </div>
    </footer>
  )
}