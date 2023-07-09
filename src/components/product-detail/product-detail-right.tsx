import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import GetLang from '@/hooks/getLang';
import {useState} from "react";

import styles from '../../styles/productDetail/productDetail.module.scss';

import origin from '../../assets/images/origin.png';

export default function ProductDetailRight() {

  const lang = GetLang();


  const [count, setCount] = useState(0);

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
    <div className={`lg:mt-0 mt-[24px] ${styles.productDetailRight}`}>
      <h2 className={` text-[24px] leading-[28px] md:text-[40px] md:leading-[48px] font-bold text-gray-900  ${styles.productTitle}`}>Premium Arabic Coffee Grounds Saudi Blend</h2>
      <div className={`flex items-center my-[18px] gap-x-1.5 ${styles.ProductRatingArea}`}>
        <i className={` icon-star `}></i>
        <i className={` icon-star `}></i>
        <i className={` icon-star `}></i>
        <i className={` icon-star `}></i>
        <i className={` icon-star `}></i>
      </div>
      <span className={`text-lg ${styles.productCategory}`}>Saudicoffee</span>
      <div className={` gap-x-4 flex md:my-6 my-5 ${styles.productPrice}`}>
        <span className={`text-[18px] md:text-[24px] leading-[28px] font-semibold ${styles.discountPrice}`}>SAR 100.00</span>
        <span className={`text-[18px] md:text-[24px] leading-[28px]  font-bold`}>SAR 100.00</span>
      </div>
      <p className={`text-base ${styles.productDescription}`}>Experience a premium coffee brand sourced from the finest regions around the world, roasted to perfection for a bold and flavorful cup every time. Indulge in a satisfying and delicious cup that will awaken your senses and brighten your day.</p>
      <div className={` my-8 ${styles.radioWieghtSelect}`}>
        <h4 className="text-[24px] leading-[28px] font-semibold mb-4">Choose Weight</h4>
        <div className="inline-flex gap-x-4">
          <label className="group relative flex items-center justify-center px-3 py-[11px;] w-[96px;] cursor-pointer ">
            <input type="radio" name="size-choice" value="250 g" className="sr-only" aria-labelledby="size-choice-0-label" />
            <span id="size-choice-0-label" className='text-lg z-10'>250 g</span>
            <span className={` pointer-events-none absolute -inset-px rounded-xl ${styles.radioWieghtBx}`} aria-hidden="true"></span>
          </label>
          <label className="group relative flex items-center justify-center  px-3 py-[11px;] w-[96px;] cursor-pointer ">
            <input type="radio" name="size-choice" value="500 g" className="sr-only" aria-labelledby="size-choice-1-label" />
            <span id="size-choice-1-label" className='text-lg z-10'>500 g</span>
            <span className={` pointer-events-none absolute -inset-px rounded-xl ${styles.radioWieghtBx}`} aria-hidden="true"></span>
          </label>
          <label className="group relative flex items-center justify-center  px-3 py-[11px;] w-[96px;] cursor-pointer">
            <input type="radio" name="size-choice" value="1 kg" className="sr-only" aria-labelledby="size-choice-2-label" />
            <span id="size-choice-2-label" className='text-lg z-10'>1 kg</span>
            <span className={` pointer-events-none absolute -inset-px rounded-xl ${styles.radioWieghtBx}`} aria-hidden="true"></span>
          </label>
        </div>
      </div>
      <div className={`${styles.radioColorSelect}`}>
        <h4 className="text-[24px] leading-[28px] font-semibold text-gray-900 mb-4">Choose Color</h4>
        <div className="flex items-center gap-x-3">
          <label className="relative  flex cursor-pointer items-center justify-center">
            <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
            <span aria-hidden="true" className="h-[40px] w-[40px] relative bg-[#D3D3D3] border-[1px] border-[#D3D3D3] rounded-full p-1"></span>
          </label>
          <label className="relative  flex cursor-pointer items-center justify-center ">
            <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
            <span aria-hidden="true" className="h-[40px] w-[40px] p-1 relative bg-white border-[1px] border-[#EAEAEA] rounded-full"></span>
          </label>
          <label className="relative  flex cursor-pointer items-center justify-center ">
            <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
            <span aria-hidden="true" className="h-[40px] w-[40px] p-1 relative bg-[#212121] border-[1px] border-[#212121] rounded-full"></span>
          </label>
        </div>
      </div>
      <div className={`flex items-center justify-between mt-10 mb-12 ${styles.addToCar}`}>
        <div className={` flex items-center w-[138px] px-[18px] pt-[12px] pb-[11px] rounded-xl ${lang == "en" ? "mr-[8px] md:mr-[24px]" : "ml-[8px] md:ml-[24px]"}  quantitySelector ${styles.quantitySelector}`}>
          <button onClick={handleDecrement} className={ count > 0 ? '' : 'disabled' }><i className='icon-minus-circle'></i></button>
          <input type="number" value={count} onChange={handleInputChange} className='w-full text-center' />
          <button onClick={handleIncrement}><i className='icon-plus-circle'></i></button>
         
        </div>
        <button type='button' className={`btn btn-lg btn-primary text-lg font-bold rounded-xl flex-1  py-[11px!important] ${styles.addToCar}`}>Add to Cart</button>
      </div>
      <div className={`grid grid-cols-3 text-center mb-8 lg:mb-11 ${styles.iconListBorder}`}>
        <span className={` ${lang == "en" ? "border-r-[1px]" : "border-l-[1px]"}  border-[#D3D3D3]`}><i className='icon-best-for block text-[31px] mb-[9px]'></i> <span className='text-lg font-semibold'> Best for</span></span>
        <span className={` ${lang == "en" ? "border-r-[1px]" : "border-l-[1px]"}  border-[#D3D3D3]`}>
          <span className='flex items-center justify-center  mt-[4px] mb-[13px] gap-x-1'>
            <i className='icon-beans-fill text-[20px]'></i>
            <i className='icon-beans-fill text-[20px]'></i>
            <i className='icon-beans-fill text-[20px]'></i>
            <i className='icon-beans-fill text-[20px]'></i>
            <i className='icon-beans-fill text-[20px]'></i>
          </span>
          <span className='text-lg font-semibold'>Roast level</span>
        </span>
        <span>
          <Image
            src={origin}
            alt="productImage"
            className='m-[auto] mb-[9px]'
          />
          <span className='text-lg font-semibold'>Origin</span>
        </span>
      </div>
      <div className={`hidden lg:flex items-center mb-[50px]  ${styles.socialShareWrp}`}>
        <span className={`text-lg font-semibold ${lang == "en" ? "mr-5" : "ml-5"}  ${styles.socialTitle}`}>Share Via :</span>
        <div className={`flex items-center ${styles.socialShareIcon}`}>
          <Link href="#" className='flex justify-center items-center w-[38px] h-[38px] border-[1px] rounded-full mx-1'>
            <i className='icon-facebook text-[12px]'></i>
          </Link>

          <Link href="#" className='flex justify-center items-center w-[38px] h-[38px] border-[1px] rounded-full mx-1'>
            <i className='icon-linkedin text-[12px]'></i>
          </Link>


          <Link href="#" className='flex justify-center items-center w-[38px] h-[38px] border-[1px] rounded-full mx-1'>
            <i className='icon-twitter text-[12px]'></i>
          </Link>


          <Link href="#" className='flex justify-center items-center w-[38px] h-[38px] border-[1px] rounded-full mx-1'>
            <i className='icon-instagram text-[12px]'></i>
          </Link>


          <Link href="#" className='flex justify-center items-center w-[38px] h-[38px] border-[1px] rounded-full mx-1'>
            <i className='icon-youtube text-[12px]'></i>
          </Link>
        </div>

      </div>
    </div>
  )
}