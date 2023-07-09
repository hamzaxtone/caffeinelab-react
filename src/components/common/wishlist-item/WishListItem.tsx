import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import styles from './wishlistItem.module.scss'
import {useState} from "react";
import productImage from '../../../assets/images/productNav.png';
import Icon from '@/components/common/icons/icomoon';
import Modal from '../modal/wishListModal';
import GetLang from '@/hooks/getLang';

export default function WishListItem() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
	const lang = GetLang();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleInputChange = (e: any) => {
    setCount(Number(e.target.value));
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if(count>0)
    {
      setCount(count - 1);

    }
    
  };
  return (
	<div className={`${styles.wishListItemWrapper} border-b-[1px] py-[24px] cursor-pointer mt-[15px]`}>
	     <div className="flex">
           <div className={`${styles.leftSec} relative md:h-[197px] sm:h-[140px] h-[100px] flex md:basis-[205px] sm:basis-[180px] basis-[140px] justify-center items-center  cursor-pointer bg-[#F7F7F7] rounded-[20px] `}>
             <Image
                src={productImage}
                alt="productImage"
              />
           </div>
           <div className={`${styles.rightSec} md:w-full md:py-[20px] md:py-[12px] w-full ${lang == "en" ? " sm:pl-[24px] pl-[10px]" : "sm:pr-[24px] pr-[10px]"}`}>
                <div className="flex justify-end">
                    <button type="button" className="xl:block font-bold hidden">
                        <Icon icon="icon-cancel-circle" className="iconCancelCustomClass flex justify-center text-[#4D4D4D] text-[10px]" />
                    </button>
                </div>
               <div className="flex flex-col justify-between">
                    <div className="pb-[35px]">
                      <div className="xl:block">
                        <div className="flex justify-between">
                          <div className="left">
                            <h4 className={`${styles.prdTitle} text-[#212121] md:w-full text-[18px] leading-[28px]  block w-full font-semibold pb-[6px]`}>Premium Arabic Coffee Grounds Saudi Blend -250g</h4>
                            <h6 className='md:text-[18px] text-[14px] leading-[26px] '>Saudi coffee</h6>
                          </div>
                          <div className="right xl:hidden block">
                            <button type="button" onClick={openModal} className={`xl:block  bg-[#fff] border border-[#08BFB0] text-[14px] text-[#fff] w-[42px] h-[40px] lg:py-[0]  rounded-[50px] font-bold xl:mr-[10px]`}>
                                <Icon icon="icon-share"  className="iconHeartCustomClass flex justify-center text-[#4D4D4D] text-[20px]" />
                            </button>
                          </div>
                        </div>
                      </div>
                       <div className="hidden">
                        <h4 className={`${styles.prdTitle} text-[#212121] md:w-full md:text-[18px] text-[24px] leading-[28px]  block w-full font-semibold pb-[12px]`}>Premium Arabic Coffee Grounds Saudi Blend -250g</h4>
                        <h6 className='text-[18px] leading-[26px] md:block hidden'>Saudi coffee</h6>
                       </div>
                    </div>
                    <div className="flex justify-between">
                        <h5 className={`${styles.price} flex flex-wrap items-center md:text-[18px] text-[14px] font-bold text-[#212121]` }> 100.00 SAR </h5>
                        <div className="flex xl:basis-[400px] justify-end">
                            <button type="button" onClick={openModal} className={`xl:block hidden bg-[#fff] border border-[#08BFB0] text-[18px] text-[#fff] w-[52px] h-[50px] py-[12px] rounded-[50px] font-bold ${lang == "en" ? " xl:mr-[10px] " : "xl:ml-[10px] "}`}>
                            <Icon icon="icon-share"  className="iconHeartCustomClass text-[#4D4D4D] text-[20px]" />
                            </button>
                            <button type="button" className="xl:block hidden bg-[#08BFB0] text-[18px] text-[#fff] xl:w-[317px] w-full py-[12px] rounded-[12px] font-bold ">Proceed to Check out</button>
                        </div>
                    </div>
               </div>
           </div>
       </div>
       <button type="button" className="xl:hidden block bg-[#fff] text-[18px] text-[#08BFB0] xl:w-[317px] w-full py-[12px] rounded-[12px] font-bold border mt-[15px] border-[#08BFB0]">Proceed to Check out</button>

       
       {/* modal */}
       
       <Modal isOpen={isModalOpen} closeModal={closeModal} />
     
       {/* modal */}
	</div>
  );
};

