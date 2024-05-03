export function CartItem() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border-b border-secondary pb-8 w-full md:flex-row md:justify-between">
      <div className="w-32 h-32 bg-primary"></div>
      <p className="text-xl">R$ 15,00</p>
      <div className="flex gap-8 items-center text-white font-bold text-2xl p-4 bg-secondary rounded-md">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
      <p className="text-xl">Subtotal: R$ 15,00</p>
    </div>
  )
}