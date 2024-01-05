// components/Slider.js
import { useState, useEffect } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import sliderData from './MasterData'; // Replace with the actual path to your data file
import styles from '../MasterClass/MasterClass.module.css'

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {

    
  return (

    <div className={styles.conteiner}>
        <h2> <span className={styles.freegreen}>Free</span> Masterclasses</h2>
    <Swiper
    className={styles.Swiper}
    pagination={{
        clickable: true,
        customClass: 'custom-pagination ' + styles.pag, 
      }}
      
      
    //   autoplay={{ delay: 5000 }}
    //   initialSlide={3} // Start from the third slide (0-based index)
    breakpoints={{
       481: {
          slidesPerView: 1, 
        },
        641 : {
          slidesPerView: 2, 
        },

       772: {
          slidesPerView: 2, 
        },
        992: {
          slidesPerView: 3,
        },
        1281: {
          slidesPerView: 3,
        },
      }}
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index} className={styles.masterswiper}>


<div className={`slider-item ${styles.slideritem}`}>
            <img src={slide.image} alt={`Card ${index + 1}`}
            width="100%"
            height={150} />
            <div className={`slider-content ${styles.slideContent}`}>
                <div  className={styles.content}>
              <p className={styles.title}>{slide.title}</p>
              <p className={styles.para}>{slide.content}</p>
              </div> 
              <div className={styles.masterbtn}>
              <button >Register Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Slider;


