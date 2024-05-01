import { CartItem } from "../../components/CartItem";

export function Cart() {
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-10">Meu pedido</h1>
      <section className="flex flex-col items-center gap-14">
        <CartItem />
        <CartItem />
      </section>
      <p className="text-xl text-center mt-8 font-bold">Total Geral: R$ 30,00</p>
    </main>
  )
}