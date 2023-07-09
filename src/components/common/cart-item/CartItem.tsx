import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import styles from './cartItem.module.scss'
import {useState} from "react";
import productImage from '../../../assets/images/productNav.png';
import Icon from '@/components/common/icons/icomoon';
import GetLang from '@/hooks/getLang';

export default function CartItem() {
  
  const [count, setCount] = useState(0);
	const lang = GetLang();
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
	<div className={`${styles.cartItemWrapper} border-b-[1px] py-[24px] cursor-pointer mt-[15px]`}>
	     <div className="flex">
           <div className={`${styles.leftSec} relative md:h-[197px] sm:h-[140px] h-[100px] flex md:basis-[205px] sm:basis-[180px] basis-[140px] justify-center items-center  cursor-pointer bg-[#F7F7F7] rounded-[20px] `}>
             <Image
                src={productImage}
                alt="productImage"
              />
              <div className={`md:hidden absolute sm:top-[15px] top-[10px] sm:left-[15px]  ${lang == "en" ? " left-[10px] " : "right-[10px] "}`}>
               <Icon icon="icon-heart" className="iconHeartCustomClass text-[#A6A6A6] text-[10px]" />
              </div>
           </div>
           <div className={`${styles.rightSec} flex justify-between md:w-full md:py-[20px] md:py-[12px] w-full`}>
               <div className={`flex flex-col justify-between sm:pl-[24px] pl-[10px] ${lang == "en" ? " sm:pl-[24px] pl-[10px] " : "sm:pr-[24px] pr-[10px]" }`}>
                 <h4 className={`${styles.prdTitle} md:w-full md:text-[18px] text-[14px] leading-[22px] leading-[30px] block md:w-[350px] w-full font-semibold`}>Premium Arabic Coffee Grounds Saudi Blend -250g</h4>
                 <h6 className='text-[16px] leading-[24px] md:block hidden'>Saudi coffee</h6>
                 <h5 className={`${styles.price} flex flex-wrap items-center md:text-[16px] text-[14px] font-normal text-[#4D4D4D]` }> <span className='md:pr-[0] pr-[5px]'>100.00 SAR</span> <s className='md:text-[18px] text-[14px] sm:px-[10px] text-[#08BFB0] font-bold'>100.00 SAR</s> </h5>
                 <button type="button" className={`underline md:block hidden text-[#08BFB0] text-[14px] leading-[20px] inline-block  ${lang == "en" ? " text-left " : "text-right"}`}>Add to wishlist</button>
               </div>
               <div className="md:flex-row md:block flex flex-col justify-end">
                  <div className={`flex md:items-center md:w-[138px] w-[110px] md:px-[18px] px-[12px] md:pt-[12px] pt-[6px] md:pb-[11px] pb-[6px] rounded-md quantitySelector ${styles.quantitySelector}`}>
                      <button onClick={handleDecrement} className={ count > 0 ? '' : 'disabled' }><i className='icon-minus-circle'></i></button>
                      <input type="number" value={count} onChange={handleInputChange} className='w-full text-center' />
                      <button onClick={handleIncrement}><i className='icon-plus-circle'></i></button>
                   </div>
               </div>
           </div>
       </div>
	</div>
  );
};

