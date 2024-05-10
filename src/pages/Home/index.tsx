import { useEffect, useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "../../services/api";
import { Link } from "react-router-dom";

import grafismo from '../../assets/grafismo.png';
import { Footer } from "../../components/Footer";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
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
    <main className="w-full">
      <div className="my-8 px-4 lg:mb-[116px] flex flex-col mx-auto ">
        <section className="flex items-center self-center w-full p-6  rounded-md  max-w-lg justify-between mb-10 shadow-2xl h-36 bg-secondary">
          <div className="text-white text-xl font-bold">
            <h1 className="text-2xl">Confeitaria Kamel</h1>
            <p className="ml-2">Sua vida mais doce!</p>
          </div>
          <img className="w-20" src={grafismo} alt="" />
        </section>
        <section>
          <h2 className="text-xl text-center font-semibold">Bolo mini vulcão</h2>
          <Swiper
            modules={[Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            pagination
          >
            {
              products.map((product) => (
                <SwiperSlide key={product.id}>
                  <section className="flex flex-col my-10">
                    <div className="flex flex-col items-center gap-4 justify-center">
                      <Link to={`/details/${product.id}`}>
                        <img src={product.cover} alt={`imagem do bolo de ${product.title}`} className="w-56" />
                      </Link>
                      <p className="text-center text-lg font-semibold ">{product.title}</p>
                      <span className="bg-secondary text-lg p-1 rounded-md font-bold text-white">
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </span>
                    </div>
                  </section>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
      </div>
      <Footer/>
    </main>
  )
}