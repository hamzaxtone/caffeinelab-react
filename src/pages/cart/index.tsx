import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductRelated from '../../components/product-detail/product-related';
import styles from '../../styles/cart/cart.module.scss';

import productImage from '../../assets/images/productImage.png';
import productOtherImage from '../../assets/images/productOtherImage.jpg';
import delivery from '../../assets/images/svg/delivery.svg';
import Item from '../../components/common/cart-item/cartItem';

const Cart: MyPage = () => {
 
  return (
    <>
      <Head>
        <title>Cofeapp | Cart</title>
      </Head>
      <div className={`${styles.cartWrapper}`}>
        <div className='container'>
            <div className="flex justify-between items-center pb-[19px] border-b-[1px]">
                <div className="flex items-center">
                    <h6 className='xl:text-[24px] leading-[28px] font-bold'> Cart </h6>
                    <span className='xl:text-[16px] leading-[19.2px] px-[5px]'>(3 items)</span>
                </div>
                <div className={`${styles.totalItem}`}>
                    <p className='xl:text-[16px] leading-[21.82px]'> <strong>3</strong> item AED 300 (excluding delivery)</p>
                </div>
            </div>
            <hr />
            <div className="flex justify-center items-center w-full rounded-[10px] py-[14px] mt-[30px] mb-[10px] cursor-pointer text-[14px] text-[#212121] bg-[#F3F2FC]">
                    <p className="flex">
                        <Image 
                        src={delivery}
                        alt={delivery}
                        />
                        <strong className='pl-[10px] pr-[5px]'> Spend AED 50 </strong> to qualify for free shipping!
                    </p>
            </div>
            <div className={`${styles.itemListWrapper}`}>
                <Item/>
                <Item/>
                <Item/>
            </div>
            <div className="flex justify-end my-[50px]">
                <button type="button" className=" bg-[#08BFB0] text-[18px] text-[#fff] xl:w-[317px] w-full py-[12px] rounded-[12px] font-bold ">Proceed to Check out</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
Cart.Layout = "Default";