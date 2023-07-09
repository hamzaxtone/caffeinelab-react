import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import {useState, useEffect, Component, useRef} from "react";
import styles from '../../../styles/login/loginSign.module.scss';

import OtpInput from 'react-otp-input';

import 'react-phone-input-2/lib/material.css';


import GetLang from '@/hooks/getLang';

import coffeeVector from '../../../assets/images/coffeeVector.png';

export default function Otp() {
  
    const lang = GetLang();

    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            // Timer has expired, perform necessary actions here (e.g., show a message, trigger a callback)
          }
          return prevTimer - 1;
        });
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    // Convert remaining seconds to minutes and seconds format
    const minutes = Math.max(Math.floor(timer / 60), 0);
    const seconds = Math.max(timer % 60, 0);

  return (
    <div>
        <div className="lg:max-w-[478px] w-[100%] ">
            <div className='flex justify-between mb-[24px]'>
                <span className='text-[#212121] text-[18px] font-semibold'>+ 000-000-0000</span>
                <Link href="/" className='text-[#08BFB0] text-base'>Edit Phone Number</Link>
            </div>
            <div className={`${styles.otpNumberWrp}`}>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputType={'number'}
                    placeholder={'000000'}
                    shouldAutoFocus={true}
                    //renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    
                />
            </div>
            <div className='flex flex-col  mb-[40px]  mt-[24px]'>
                <span className='text-[#212121] text-[16px]  text-center' >Verification Code
                    <span>
                        <i className='icon-info mx-[9px] text-[#B7B7BC]'></i>{minutes}:{seconds < 10 ? '0' : ''}
                    </span>
                    {seconds} 
                </span>
                <Link href="/" className='text-[#08BFB0] text-base text-center mt-[5px]'>Resend OTP</Link>
            </div>
        </div>
    </div>
  );
};

