import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import {useState} from "react";
import styles from '../../../styles/login/loginSign.module.scss';


import GetLang from '@/hooks/getLang';

import coffeeVector from '../../../assets/images/coffeeVector.png';

export default function LoginLeft() {
  
    const lang = GetLang();

  return (
    <div className={`bg-[#08BFB0] lg:pt-[20px] lg:pb-[20px] ${lang == "en" ? "lg:pl-[40px] lg:pr-[40px] xl:pl-[72px] xl:pr-[58px]" : "lg:pr-[40px] lg:pl-[40px] xl:pr-[72px] xl:pl-[58px]"}   relative lg:h-[100vh]  lg:flex items-center hidden  ${styles.loginSignLeft}`}>
    <div className={`rounded-[24px] px-[35px] pt-[25px] pb-[105px] h-[90%] flex flex-col justify-between ${styles.loginLeftInner}`}>
        <div>
          <Image
            src={coffeeVector}
            alt="coffeeVector"
            />
        </div>
        <div>
          <h2 className='text-[32px] text-white font-semibold mt-[0px] '>Your very own</h2>
          <h1 className='lg:text-[48px] lg:leading-[58px] xl:text-[64px] text-white font-bold xl:leading-[76px]'>Online Coffee Marketplace</h1>
        </div>

    </div>

</div>
  );
};

