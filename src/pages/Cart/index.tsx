import { CartItem } from "../../components/CartItem";

import { FaWhatsapp } from "react-icons/fa";

export function Cart() {
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-10">Meu pedido</h1>
      <section className="flex flex-col items-center gap-14">
        <CartItem />
      </section>
      <div className="flex justify-between my-10">
        <p className="text-xl text-center font-bold">Total Geral: <br /> R$ 30,00</p>
        <a
          className="bg-green-400 text-lg p-2 rounded-md flex items-center gap-2 active:bg-green-600">
          <FaWhatsapp size={28} />
          Enviar pedido
        </a>
      </div>
    </main>
  )
}