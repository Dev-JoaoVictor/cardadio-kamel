import toast from 'react-hot-toast';
import { BsCartPlus } from "react-icons/bs";

import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { ProductsProps } from "../Home";
import { api } from "../../services/api";
import { CartContext } from "../../context/CartContext";

import { IoIosArrowBack } from "react-icons/io";

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
        <IoIosArrowBack className='mt-1' size={20} />
        <p className='text-xl'>menu</p>
      </Link>
      {product && (
        <section className='my-10 p-4'>
          <img className='w-full max-h-72 object-contain mb-4' src={product?.cover} alt={product.title} />
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-2xl">{product.title}</p>
            <p className='text-justify'>{product.description}</p>
          </div>
          <div className="flex justify-around mt-10">
            <span className="bg-secondary text-lg p-2 rounded-md font-bold text-white">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
            <button
              onClick={() => handleAddCartItem(product)}
            >
              <BsCartPlus size={32} />
            </button>
          </div>
        </section>
      )
      }
    </main>
  )
}