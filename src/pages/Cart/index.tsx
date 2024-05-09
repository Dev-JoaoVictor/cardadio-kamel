import { useContext, useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatCart } from "../../utils/formatCart";
import { generateWhatsAppLink } from "../../utils/generateWhatsAppLink";


export function Cart() {

  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  const [whatsappMessage, setWhatsappMessage] = useState("");

  useEffect(() => {
    if (total !== "") {
      const message = formatCart(cart, total);
      setWhatsappMessage(message);
    }
  }, [total, cart]);

  const handleWhatsAppClick = () => {
    if (whatsappMessage !== "") {
      const whatsappLink = generateWhatsAppLink(whatsappMessage);
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">

      {
        cart.length !== 0 && (
          <Link to="/" className='flex items-center my-6'>
            <IoIosArrowBack size={28} />
          </Link>
        )
      }

      <h1 className="text-2xl font-semibold text-center m-10">Meu pedido</h1>

      {cart.length === 0 && (
        <div className="flex items-center flex-col gap-4">
          <p className="text-xl">Ops! Seu carrinho está vazio....</p>
          <Link to='/' className="bg-secondary p-4 rounded-md text-lg text-white font-bold">
            Acessar produtos
          </Link>
        </div>
      )}
      {
        cart.map((product) => (
          <section key={product.id} className="flex flex-col items-center justify-center gap-14">
            <div className="flex flex-col pb-2 mb-6 items-center justify-center gap-4 border-b border-zinc-400 w-full md:flex-row md:justify-between">
              <img src={product.cover} alt={`Imagem do bolo de ${product.title}`} className="w-44 h-44" />
              <p className="text-xl font-semibold">{product.title}</p>
              <div className="flex gap-8 items-center text-white font-bold text-xl p-2 bg-secondary rounded-md">
                <button onClick={() => removeItemCart(product)}>-</button>
                <span>{product.amount}</span>
                <button onClick={() => addItemCart(product)}>+</button>
              </div>
              <p className="text-lg">Subtotal: {product.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</p>
            </div>
          </section>
        ))
      }

      {
        cart.length !== 0 && (
          <div className="flex justify-between my-10">
            <p className="text-xl text-center font-semibold">Total Geral: <br />{total}</p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-400 text-white font-semibold shadow-2xl text-lg p-2 rounded-md flex items-center gap-2 active:bg-green-600">
              <FaWhatsapp size={28} />
              Enviar pedido
            </button>
          </div>
        )
      }
    </main>
  )
}