import { BsCartPlus } from "react-icons/bs"


export function Details() {
  return (
    <main className="w-full max-w-7xl mt-6 p-4 mx-auto">
      <section className="flex flex-col items-center gap-4">
        <img src="" alt="" className="" />
        <h1 className="font-semibold text-2xl border-b-2 border-secondary">Ninho com morango</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum labore nobis pariatur. Tempora repellat eum officiis nisi voluptatum cupiditate?</p>
      </section>
      <div className="flex justify-around mt-4">
        <span className="bg-secondary text-lg p-2 rounded-md font-bold text-white">
          R$ 15,00
        </span>
        <button>
          <BsCartPlus size={32} />
        </button>
      </div>
    </main>
  )
}