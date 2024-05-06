import { useContext, useEffect, useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { CartContext } from "../../context/CartContext";

import toast from "react-hot-toast";


export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext)
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;

    let slidesToShow = 3;
    if (screenWidth <= 425) {
      slidesToShow = 1;
    } else if (screenWidth <= 768) {
      slidesToShow = 2;
    } else {
      slidesToShow = 3;
    }
    setSlidesPerView(slidesToShow);
  };

  function handleAddCart(product: ProductsProps) {
    addItemCart(product)
    toast.success("Adicionado ao carrinho.")
  }

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts()
  }, [])

  return (
    <main className="w-full max-w-7xl mt-6 px-4 mx-auto">
      <h1 className="text-center mb-10 w-full h-40 border-2 bg-secondary"></h1>
      <section className="">
        <h2 className="text-xl font-semibold mb-4">Bolo mini vulcão</h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          pagination
        >
          {
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <section className="flex flex-col gap-4 my-10">
                  <div className="flex justify-center">
                    <Link to={`/details/${product.id}`}>
                      <img src={product.cover} alt={`imagem do bolo de ${product.title}`} className="w-56" />
                      <div className="flex products-center justify-center gap-3 mt-6 text-lg">
                        <p className="text-center ">{product.title}</p>
                        <IoIosArrowForward />
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-around">
                    <span className="bg-secondary text-lg p-2 rounded-md font-bold text-white">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                      })}
                    </span>
                    <button
                      onClick={() => handleAddCart(product)}
                    >
                      <BsCartPlus size={32} />
                    </button>
                  </div>
                </section>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </main>
  )
}