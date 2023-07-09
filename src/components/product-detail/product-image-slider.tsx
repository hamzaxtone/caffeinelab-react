import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import React, { useState, useEffect, Component, useRef } from 'react';
import GetLang from '@/hooks/getLang';
// slick slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../../styles/productDetail/productDetail.module.scss';

import productImage from '../../assets/images/productImage.png';
import productNav from '../../assets/images/productNav.png';

export default function ProductImageSlider() {

  const lang = GetLang();

  const slider1 = useRef(null)
  const slider2 = useRef(null)

  var settings = {
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
    ]
  };

  return (
    <div className={`${styles.productDetailLeft}`}>
      <div className={`dots-slide-custom mb-6 rounded-3xl relative ${styles.productSliderWrp}`}>
        <Slider
          // asNavFor={slider2.current}
          ref={slider1}
          arrows={false}
          {...settings}
        >
          <div className={`${styles.productSliderInner}`}>
            <Image
              src={productImage}
              alt="productImage"
            />
          </div>
          <div className={`${styles.productSliderInner}`}>
            <Image
              src={productImage}
              alt="productImage"
            />
          </div>
          <div className={`${styles.productSliderInner}`}>
            <Image
              src={productImage}
              alt="productImage"
            />
          </div>
          <div className={`${styles.productSliderInner}`}>
            <Image
              src={productImage}
              alt="productImage"
            />
          </div>
        </Slider>
        <span className={` absolute ${lang == "en" ? "right-[30px]" : "left-[30px]"}  top-[30px] ${styles.heartIcon}`}>
          <i className='icon-heart text-[22px] cursor-pointer'></i>
        </span>
        <div className={` new-arrival  top-[25px!important]`}>
          <span>New Arrival </span>
        </div>
      </div>
      <div className={`md:block hidden ${styles.productNavWrp}`}>
        <Slider
          // asNavFor={slider1.current}
          ref={slider2}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className={`${styles.productImageNav}`}>
            <div className={`h-[135px] flex justify-center items-center rounded-md cursor-pointer ${styles.productNavBx}`}>
              <Image
                src={productNav}
                alt="productNav"
              />
            </div>
          </div>
          <div className={`${styles.productImageNav}`}>
            <div className={`h-[135px] flex justify-center items-center rounded-md cursor-pointer ${styles.productNavBx}`}>
              <Image
                src={productNav}
                alt="productNav"
              />
            </div>
          </div>
          <div className={`${styles.productImageNav}`}>
            <div className={`h-[135px] flex justify-center items-center rounded-md cursor-pointer ${styles.productNavBx}`}>
              <Image
                src={productNav}
                alt="productNav"
              />
            </div>
          </div>
          <div className={`${styles.productImageNav}`}>
            <div className={`h-[135px] flex justify-center items-center  rounded-md cursor-pointer ${styles.productNavBx}`}>
              <Image
                src={productNav}
                alt="productNav"
              />
            </div>
          </div>
        </Slider>

      </div>
    </div>
  )
}