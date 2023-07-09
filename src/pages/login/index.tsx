import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import Logo from '../../assets/Logo.svg';

import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/material.css';

import styles from '../../styles/login/loginSign.module.scss';

import coffeeVector from '../../assets/images/coffeeVector.png';

import LoginLeft from '../../components/common/login/loginLeft';


const LoginSignUp: MyPage = () => {
  const lang = GetLang();

  const [phone, setPhone] = useState('');
  const [phoneVal, setphoneVal] = useState('');
  
  const phoneCode = (value:any) => {
    setPhone(value);
    const selectedFlag = document.querySelector<HTMLElement>('.flag-dropdown .flag');
    //setphoneVal("");
    //selectedFlag.innerText = "+ "+value;
  };

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
                  <h2 className='text-[#212121] text-[24px] font-bold mt-[40px]  lg:mt-[90px] mb-[10px]'>Login / Sign up</h2>
                  <p className='text-[#4D4D4D] text-[14px] md:text-base mb-[30px] lg:mb-[40px]'>Enter your Phone Number, you will recieve an OTP via SMS to verify your number.</p>
            
                    <label className='text-[#212121] text-[16px] font-semibold mb-[16px] block'>Enter Phone Number</label>
                    <div className="phoneNumberWrp lg:max-w-[478px] w-[100%]">
                      <PhoneInput
                        country={'ae'}
                        inputProps={{
                          name: 'phone',
                          required: true,
                          autoFocus: true
                        }}
                        specialLabel={phone}
                        onChange={phoneCode}
                        enableSearch={true}
                      />
                    </div>

                </div>
               
                  <button className='bg-[#08BFB0] lg:max-w-[478px] w-[100%] py-[15px] text-[18px] font-bold mt-[24px] text-white rounded-[12px]' >Continue</button>
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