import { useContext } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function Cart() {

  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
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
          <section key={product.id} className="flex flex-col items-center gap-14">
            <div className="flex flex-col items-center justify-center gap-4 border-b border-zinc-400 pb-8 w-full md:flex-row md:justify-between">
              <img src={product.cover} alt={`Imagem do bolo de ${product.title}`} className="w-32 h-32 m-6" />
              <p className="text-xl">{product.title}</p>
              <div className="flex gap-8 items-center text-white font-bold text-2xl p-4 bg-secondary rounded-md">
                <button onClick={() => removeItemCart(product)}>-</button>
                <span>{product.amount}</span>
                <button onClick={() => addItemCart(product)}>+</button>
              </div>
              <p className="text-xl">Subtotal: {product.total.toLocaleString("pt-BR", {
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
            <p className="text-xl text-center font-bold">Total Geral: <br />{total}</p>
            <a
              className="bg-green-400 text-lg p-2 rounded-md flex items-center gap-2 active:bg-green-600">
              <FaWhatsapp size={28} />
              Enviar pedido
            </a>
          </div>
        )
      }
    </main>
  )
}