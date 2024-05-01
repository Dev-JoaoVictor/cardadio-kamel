import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

export function Food() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Link to="/cart">
        <div className="w-full h-[200px] rounded-lg  bg-blue-300"></div>
        <div className="flex items-center justify-center gap-3 mt-6 text-lg">
          <p className="text-center ">Nome do produto </p>
          <IoIosArrowForward  />
        </div>
      </Link>
      <div className="flex justify-around items-center mb-10">
        <span className="bg-pink-300 text-lg p-2 rounded-md font-bold">R$15,00</span>
        <button>
          <BsCartPlus size={32} />
        </button>
      </div>
    </div>
  )
}