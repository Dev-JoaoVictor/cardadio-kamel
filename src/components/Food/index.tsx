import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

interface FoodProps {
  id: number;
  title: string;
  price: number;
  cover: string;
}

export function Food({ id, cover, price, title }: FoodProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      <Link to="/cart">
        <img src={cover} alt="" />
        <div className="flex items-center justify-center gap-3 mt-6 text-lg">
          <p className="text-center ">{title}</p>
          <IoIosArrowForward />
        </div>
      </Link>
      <div className="flex justify-around items-center mb-10">
        <span className="bg-secondary text-lg p-2 rounded-md font-bold text-white">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </span>
        <button>
          <BsCartPlus size={32} />
        </button>
      </div>
    </div>
  )
}