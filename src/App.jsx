import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [onClicked, setOnClicked] = useState(null);

  const clickSwperslide = (e) => {
    
    for( let el of document.querySelectorAll("img")){
      el.classList.remove("swiper-active");
    }
    e.target.classList.add("swiper-active");
    console.log(e.target);

    document.querySelector("#bigImg").src=e.target.src
  };


  return (
    <>
      <img id="bigImg" src="https://swiperjs.com/demos/images/nature-1.jpg" />
       
      <Swiper
        loop={true}
        spaceBetween={2}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide
          onClick={clickSwperslide}
        >
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide  onClick={clickSwperslide}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide  onClick={clickSwperslide}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
