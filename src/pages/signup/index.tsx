import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import Logo from '../../assets/Logo.svg';



import styles from '../../styles/login/loginSign.module.scss';

import coffeeVector from '../../assets/images/coffeeVector.png';
import LoginLeft from '../../components/common/login/loginLeft';
import Otp from '../../components/common/login/otp';




const LoginSignUp: MyPage = () => {
  const lang = GetLang();

 


  return (
    <>
      <Head>
        <title>Cofeapp | Login / Sign up</title>
      </Head>
      <div>
        <div className={`${styles.loginSignWrp}`}>
          <div className='lg:grid lg:grid-cols-2'>
            <LoginLeft />
            <div className={`flex items-start lg:items-center h-[100vh]  ${lang == "en" ? "pl-[16px] pr-[16px]  lg:pl-[45px] lg:pr-[40px] xl:pl-[89px] xl:pr-[65px]" : "pr-[16px] pl-[16px]  lg:pr-[45px] lg:pl-[40px] xl:pr-[89px] xl:pl-[65px]"}  pt-[45px] lg:pt-[20px] lg:pb-[20px] mb-[0px] lg:mb-[0] ${styles.loginSignRight}`}>
              <div className='h-[90%] lg:mt-[0px] w-[100%] flex flex-col justify-between'>
                <div>
                  <Image
                        src={Logo}
                        alt="CofeApp"
                  />
                  <h2 className='text-[#212121] text-[24px] font-bold mt-[40px]  lg:mt-[90px] mb-[10px]'>Verify Number</h2>
                  <p className='text-[#4D4D4D] text-base md:text-base mb-[30px] lg:mb-[40px]'>Please Enter the 6 digit verification code to sent to your phone. This helps us keep your account safe.</p>
                  <Otp />

                </div>
                <button className='bg-[#08BFB0] lg:max-w-[478px] w-[100%] py-[15px] text-[18px] font-bold  mb-[0px] text-white rounded-[12px]'>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
LoginSignUp.Layout = "WithoutHeaderFooter";