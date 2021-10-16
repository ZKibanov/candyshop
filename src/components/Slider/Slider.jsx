// Import Swiper React components
import React from 'react';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Autoplay,
} from 'swiper';
import img1 from '../../assets/photos/photo1.jpg'
import img2 from '../../assets/photos/photo2.jpg'
import img3 from '../../assets/photos/photo3.jpg'
import img4 from '../../assets/photos/photo4.jpg'
import img5 from '../../assets/photos/photo5.jpg'

// import img5 from '../../assets/photos/photo5.jpg'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from './styles.module.scss';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => (
  <div className={styles['swiper-container']}>
    <Swiper
      autoplay
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides
      navigation
      loop
      // const pagination = {
//   clickable: true,
// }
        // pagination={pagination}
      className={`mySwiper ${styles.swiper}`}
    >
      <SwiperSlide className={styles['swiper-slide']}>
        <img src={img1} alt="картина из еды" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <img src={img2} alt="картина из еды" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <img src={img3} alt="картина из еды" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <img src={img4} alt="картина из еды" />
      </SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>
        <img src={img5} alt="картина из еды" />
      </SwiperSlide>
    </Swiper>
  </div>
)

export default ImageSlider;
