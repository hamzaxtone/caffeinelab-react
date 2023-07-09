import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '../../styles/trackOrder/trackOrder.module.scss';
import tracking1 from '../../assets/images/tracking1.png';
import tracking2 from '../../assets/images/tracking2.png';
import tracking3 from '../../assets/images/tracking3.png';


const OrderTracking: MyPage = () => {
  const lang = GetLang();



  return (
    <>
      <Head>
        <title>Cofeapp | Tracking</title>
      </Head>
      <div>
        <div className='container'>
           <div className={`pt-[40px] mb-[80px] ${styles.orderTracking}`}>
             <h1 className='text-[#212121] text-[24px] font-semibold  mb-[32px] md:block flex justify-between items-center'>Tracking <span className='text-[16px] font-medium'>( 3 Shipments )</span></h1>
             <div className={` ${styles.orderTrackingList}`}>
              <div className={`relative mb-[16px] px-[16px] pt-[16px] md:pt-[18px] pb-[16px] border-[1px] border-[#D5D5D5] rounded-[12px] ${styles.TrackingListInner}`}>
                <div className='md:border-b-[1px] border-[#EFEFEF] md:pb-[16px] mb-[16px] flex justify-between'>
                  <div className='-mt-[5px]'>
                    <h2 className='mb-[6px] text-[#212121] text-[16px] md:text-[24px] font-semibold'>Shipments 1 of 3<span className={` text-[14px] md:text-[16px] text-[#4D4D4D] font-medium ${lang == "en" ? "md:ml-[20px]" : "md:mr-[20px]"}   md:inline-block block `}>4 items</span></h2>
                    <h3 className={` absolute bottom-[14px] ${lang == "en" ? "left-[16px] md:left-[0]" : "right-[16px] md:right-[0]"} left-[16px] md:left-[0] md:top-[0] md:relative text-[#212121] text-[14px] md:text-[18px] font-semibold leading-[24px] `}>Out of Delivery :<span className='text-[#7A7A7A] font-normal ml-[10px] align-middle'>2/3/23, 12:00pm</span></h3>
                  </div>
                  <div> 
                    <span className='bg-[#FBF8F0] w-[130px] md:w-[222px] text-[#212121] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px] md:mt-[12px] font-semibold'>Out of Delivery</span>
                  </div>
                </div>
                <div className='flex -mx-[4px] md:-mx-[10px] lg:-mx-[20px] md:mb-[0] mb-[39px]'>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking1}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking2}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking3}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>

                </div>

              </div>
              <div className={`relative mb-[16px] px-[16px] pt-[16px] md:pt-[18px] pb-[16px] border-[1px] border-[#D5D5D5] rounded-[12px] ${styles.TrackingListInner}`}>
                <div className='md:border-b-[1px] border-[#EFEFEF] md:pb-[16px] mb-[16px] flex justify-between'>
                  <div className='-mt-[5px]'>
                    <h2 className='mb-[6px] text-[#212121] text-[16px] md:text-[24px] font-semibold'>Shipments 1 of 3<span className={` text-[14px] md:text-[16px] text-[#4D4D4D] font-medium ${lang == "en" ? "md:ml-[20px]" : "md:mr-[20px]"}   md:inline-block block `}>4 items</span></h2>
                    <h3 className={` absolute bottom-[14px] ${lang == "en" ? "left-[16px] md:left-[0]" : "right-[16px] md:right-[0]"} left-[16px] md:left-[0] md:top-[0] md:relative text-[#212121] text-[14px] md:text-[18px] font-semibold leading-[24px] `}>Order Delivered :<span className='text-[#7A7A7A] font-normal ml-[10px] align-middle'>2/3/23, 12:00pm</span></h3>
                  </div>
                  <div> 
                    <span className='bg-[#F2FBF4] w-[130px] md:w-[222px] text-[#212121] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px] md:mt-[12px] font-semibold'>Order Delivered</span>
                  </div>
                </div>
                <div className='flex -mx-[4px] md:-mx-[10px] lg:-mx-[20px] md:mb-[0] mb-[39px]'>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking1}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking2}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking3}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>

                </div>

              </div>
              <div className={`relative mb-[16px] px-[16px] pt-[16px] md:pt-[18px] pb-[16px] border-[1px] border-[#D5D5D5] rounded-[12px] ${styles.TrackingListInner}`}>
                <div className='md:border-b-[1px] border-[#EFEFEF] md:pb-[16px] mb-[16px] flex justify-between'>
                  <div className='-mt-[5px]'>
                    <h2 className='mb-[6px] text-[#212121] text-[16px] md:text-[24px] font-semibold'>Shipments 1 of 3<span className={` text-[14px] md:text-[16px] text-[#4D4D4D] font-medium ${lang == "en" ? "md:ml-[20px]" : "md:mr-[20px]"}   md:inline-block block `}>4 items</span></h2>
                    <h3 className={` absolute bottom-[14px] ${lang == "en" ? "left-[16px] md:left-[0]" : "right-[16px] md:right-[0]"} left-[16px] md:left-[0] md:top-[0] md:relative text-[#212121] text-[14px] md:text-[18px] font-semibold leading-[24px] `}>Not Dispatched :<span className='text-[#7A7A7A] font-normal ml-[10px] align-middle'>2/3/23, 12:00pm</span></h3>
                  </div>
                  <div> 
                    <span className='bg-[#EFEFEF] w-[130px] md:w-[222px] text-[#7A7A7A] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px] md:mt-[12px] font-semibold'>Not Dispatched</span>
                  </div>
                </div>
                <div className='flex -mx-[4px] md:-mx-[10px] lg:-mx-[20px] md:mb-[0] mb-[39px]'>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking1}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking2}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>
                  <div className='bg-[#F7F7F7] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px] w-[50px] h-[50px] md:w-[135px] md:h-[135px] mx-[4px] md:mx-[10px] lg:mx-[20px]'>
                    <Image
                      src={tracking3}
                      alt="tracking1"
                      className='m-[auto] max-h-[35px] md:max-h-[95px]'
                    />
                  </div>

                </div>

              </div>
             </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
OrderTracking.Layout = "Default";