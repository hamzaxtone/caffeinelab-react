import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductRelated from '../../components/product-detail/product-related';
import styles from '../../styles/wishList/wishList.module.scss';

import productImage from '../../assets/images/productImage.png';
import productOtherImage from '../../assets/images/productOtherImage.jpg';
import delivery from '../../assets/images/svg/delivery.svg';
import Item from '../../components/common/wishlist-item/WishListItem';

const wishList: MyPage = () => {
 
  return (
    <>
      <Head>
        <title>Cofeapp | WishList</title>
      </Head>
      <div className={`${styles.wishListWrapper}`}>
        <div className='container'>
            <div className="pb-[19px] border-b-[1px]">
                <div className="flex items-center md:justify-normal justify-between">
                    <h6 className='xl:text-[24px] leading-[28px] font-bold'> WishList </h6>
                    <span className='xl:text-[16px] leading-[19.2px] px-[5px]'>(3 items)</span>
                </div>
            </div>
            <hr />
            <div className={`${styles.itemListWrapper}`}>
                <Item/>
                <Item/>
                <Item/>
            </div>
         </div>
      </div>
    </>
  );
};

export default wishList;
wishList.Layout = "Default";