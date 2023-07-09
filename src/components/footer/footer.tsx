import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import Link from 'next/link'
import styles from '../../styles/components/footer/Footer.module.scss';
import Icon from '@/components/common/icons/icomoon';

// links
import Twitter from '../../assets/images/svg/twitter.svg'
import Facebook from '../../assets/images/svg/facebook.svg'
import Youtube from '../../assets/images/svg/youtube.svg'
import Linkedin from '../../assets/images/svg/linkedin.svg'
import Instagram from '../../assets/images/svg/instagram.svg'
// images
import footerImg from '../../assets/images/footerimg.png';
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import qrcode from '../../assets/images/qrcode.png';
import footerMbl from '../../assets/images/footermblimg.png';

export default function Footer() {

  return (
    <div className={`${styles.footerWrapper} lg:pt-[65px] lg:pb-[15px] py-[32px] bg-[#FAFBFB]`}>
      <div className="container mx-auto">
        <div className={`${styles.footerTopSec}  flex lg:flex-row flex-col  justify-center items-center lg:mb-[65px] mb-[30px] lg:py-[60px] lg:px-[25px] xl:px-[70px] pt-[40px] rounded-[20px] bg-[#EAF0F3]`}>
          <Image src={footerImg} alt={''} className='md:flex-2 lg:order-1 order-2 lg:block hidden xl:w-[346px] w-[280px]' />
          <Image src={footerMbl} alt={''} className='md:flex-2 lg:order-1 order-2 lg:hidden block' />
          <div className="lg:flex flex-col lg:justify-start justify-center lg:items-left md:order-1 lg:mb-0 mb-5">
            <div className={`flex ${styles.revolutionSec} flex-wrap lg:justify-start justify-center lg:mb-[0] mb-[20px]`} >
              <h6 className="flex xl:text-[47px] lg:text-[35px] text-[25px] font-bold md:px-[10px] px-[5px]">Join The </h6>
              <Image src={logo}
                alt="logo-coffe"
                className={`${styles.footerlogoImg} flex h-auto xl:w-[130px] lg:w-[100px] md:w-[90px] sm:w-[70px]`} />
              <h6 className="flex xl:text-[47px] lg:text-[35px] text-[25px] font-bold md:px-[10px] px-[5px]">Revolution</h6>
            </div>
            <div className="flex items-center flex-wrap lg:justify-start justify-center lg:flex-row md:flex-col">
              <div className='lg:flex flex items-center'>
                <Link href="" className={`${styles.appStore} md:mx-2 mx-1`}>
                  <Image src={appstore} alt={''} className="xl:w-[188px] w-[130px]" />
                </Link>
                <Link href="" className={`${styles.appStore} md:mx-2 mx-1`}>
                  <Image src={playstore} alt={''} className="xl:w-[188px] w-[130px]" />
                </Link>
                <Link href="" className={`${styles.appStore} ${styles.qrCode} bg-white md:mx-2 mx-1`}>
                  <Image src={qrcode} alt={''} className="xl:w-[75px] w-[60px]" />
                </Link>
              </div>
              <div className='flex items-center lg:flex-row flex-col'>
                <Link href="" className={`${styles.footerOrSeparator} xl:mx-3 lg:mx-2 my-3 font-bold xl:text-[18px] lg:text-[16px] text-[12px]`}>or</Link>
                <Link href="" className='btn btn-lg inline-flex items-center btn-primary justify-center lg:ml-2 lg:rounded-[12px] rounded-[6px] font-bold xl:text-[24px] md:text-[20px] text-[13px] md:w-[auto] w-[180px]'>Become A Partner</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.footerBottomWrapper} md:order-first text-[12px]`}>
          <div className="lg:flex md:items-center lg:justify-between">
            <div className={`${styles.leftSec} lg:flex gap-8 grid-cols-2 grid-rows-3 grid text-[16px]`}>
              <Link href="/about">
                About Us
              </Link>
              <Link href="">
                News
              </Link>
              <Link href="">
                Careers
              </Link>
              <Link href="">
                Features
              </Link>
              <Link href="/help-page">
                Help Center
              </Link>
              <Link href="/contact-us">
                Contact
              </Link>
            </div>
            <div className={`${styles.rightSec}  flex items-center justify-between lg:py-[0] py-[40px]`}>
              <div className="lg:hidden">
                <Link href="" className=''>
                  <Image src={logo}
                    alt="logo-coffe"
                    className={`${styles.footerBottomlogoImg} flex w-[88px]`} />
                </Link>
              </div>
              <div className={`${styles.socialLinks} flex text-[14px] items-center leading-[14px]`}>
                <span className='pr-[10px] text-[12px]'>Follow Us:</span>
                <Link href="#" className='mr-2'>
                  <Icon icon="icon-twitter" />
                </Link>
                <Link href="#" className='mr-2'>
                  <Icon icon="icon-facebook" />
                </Link>
                <Link href="#" className='mr-2'>
                  <Icon icon="icon-instagram" />
                </Link>
                <Link href="#" className='mr-2'>
                  <Icon icon="icon-linkedin" />
                </Link>
                <Link href="#" className='mr-2'>
                  <Icon icon="icon-youtube" />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.copyrightsSec} lg:pt-[20px]`}>
            <div className="flex md:justify-between items-center justify-center md:flex-row flex-col ">
              <p className='md:order-1 order-2'>COFE App © 2023 All rights reserved.</p>
              <div className="md:order-2 order-1 lg:mb-[0] mb-[15px]">
                <Link href="/terms-and-condition">
                  Terms & Conditions
                </Link>
                <span className='md:px-3 px-2'>|</span>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
                <span className='md:px-3 px-2'>|</span>
                <Link href="">
                  Cookies Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
