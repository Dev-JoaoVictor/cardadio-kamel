import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

interface FoodProps {
  id: number;
  title: string;
  price: number;
  cover: string;
}

export function Food({ cover, price, title }: FoodProps) {
  return (
    <section className="flex flex-col gap-4 my-10">
      <div className="flex justify-center">
        <Link to="/details">
          <img src={cover} alt={`imagem do bolo de ${title}`} className="w-56" />
          <div className="flex items-center justify-center gap-3 mt-6 text-lg">
            <p className="text-center ">{title}</p>
            <IoIosArrowForward />
          </div>
        </Link>
      </div>
      <div className="flex justify-around">
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
    </section>
  )
}