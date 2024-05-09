import toast from 'react-hot-toast';

import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { ProductsProps } from "../Home";
import { api } from "../../services/api";
import { CartContext } from "../../context/CartContext";

import { IoIosArrowBack } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";

export function Details() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { addItemCart } = useContext(CartContext);
  const [product, setProduct] = useState<ProductsProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProduct();

  }, [id])

  function handleAddCartItem(product: ProductsProps) {
    toast.success('Adicionado ao carrinho!');
    addItemCart(product);
    navigate('/cart');
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto mb-12 ">
      <Link to="/" className='flex items-center mt-8'>
        <IoIosArrowBack className='mt-1' size={28} />
      </Link>
      {product && (
        <section className='p-4'>
          <img className='w-full max-h-56 object-contain mb-4' src={product?.cover} alt={product.title} />
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-2xl">{product.title}</p>
            <p className='text-center text-lg'>{product.description}</p>
          </div>
          <div className="flex justify-evenly items-center mt-8">
            <span className="text-2xl p-1 rounded-md font-semibold">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
            <button
              className='flex p-4 bg-secondary rounded-full active:opacity-80 shadow-2xl'
              onClick={() => handleAddCartItem(product)}
            >
              <BsCartPlus  className='text-white' size={30}/>
            </button>
          </div>
        </section>
      )
      }
    </main>
  )
}