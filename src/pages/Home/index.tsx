import { useEffect, useState } from "react";
import { Food } from "../../components/Food";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../services/api";


interface ProductsProps {
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
            products.map((item) => (
              <SwiperSlide key={item.id}>
                <Food
                  id={item.id}
                  cover={item.cover}
                  title={item.title}
                  price={item.price} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </main>
  )
}