import { useEffect, useState } from "react";
import { Food } from "../../components/Food";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Home() {

  const [slidesPerView, setSlidesPerView] = useState<number>(3);

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

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="text-center mb-10 w-full h-40 border-2 border-blue-300">Banner</h1>
      <section className="">
        <h2 className="text-xl font-bold mb-4">Bolo vulcão</h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          pagination
        >
          <SwiperSlide><Food /></SwiperSlide>
          <SwiperSlide><Food /></SwiperSlide>
          <SwiperSlide><Food /></SwiperSlide>
        </Swiper>
      </section>
    </main>
  )
}