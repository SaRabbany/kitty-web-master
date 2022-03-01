import React, { useRef } from "react";
import styles from "./NFTS.module.css";

import nft1 from "assets/images/NFTS/1.png";
import nft2 from "assets/images/NFTS/2.png";
import nft3 from "assets/images/NFTS/3.png";
import nft4 from "assets/images/NFTS/4.png";
import nft5 from "assets/images/NFTS/5.png";
import nft6 from "assets/images/NFTS/6.png";
import nft7 from "assets/images/NFTS/7.png";
import nft8 from "assets/images/NFTS/8.png";
import nft9 from "assets/images/NFTS/9.png";
import nft10 from "assets/images/NFTS/10.png";
import nft11 from "assets/images/NFTS/11.png";
import nft12 from "assets/images/NFTS/12.png";
import nft13 from "assets/images/NFTS/13.png";
import nft14 from "assets/images/NFTS/14.png";
import nft15 from "assets/images/NFTS/15.png";
import nft16 from "assets/images/NFTS/16.png";

import navigationLeft from "assets/images/navigation-left.png";
import navigationRight from "assets/images/navigation-right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function NFTS() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="font-cream-shoes fs-56px black weight-5 text-center mb-35px">
          Your one-of-a-kind Kitten Clubhouse NFT
        </h1>

        <div className={`${styles.slider} mb-35px`}>
          <button className="pointer" ref={navigationPrevRef}>
            <img src={navigationLeft} alt="" />
          </button>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              1000: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              800: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              600: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              500: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              200: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <img src={nft1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft4} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft5} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft6} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft7} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft8} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft9} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft10} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft11} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft12} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft13} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft14} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft15} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft16} className="w-full" alt="" />
            </SwiperSlide>
          </Swiper>
          <button className="pointer" ref={navigationNextRef}>
            <img src={navigationRight} alt="" />
          </button>
        </div>

        <h1 className="font-cream-shoes fs-56px black weight-5 text-center mb-35px">
          will grant you access to holder benefits such as...
        </h1>
      </div>
    </div>
  );
}

export default NFTS;
