import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bestDealImg from '../../../public/assets/images/bestdeal.png';
import bestDealMbl from '../../../public/assets/images/best-deal-mbl.png';
import styles from '../../styles/home/FindBestDeal.module.scss';

export default function FindBestDeal() {
  return (
    <>
      <div className='section-best-deal section'>
        <div className='container mx-auto'>
          {/* <div className='grid md:grid-cols-5 grid-cols-1  gap-4 items-center'>
            <div className='best-deal-left md:col-span-3'>
              <h3 className='lg:text-2xl md:text-xl text-lg font-semibold'>Find the best Deal</h3>
              <h2 className='xl:text-6xl lg:text-5xl  md:text-4xl text-3xl font-bold'>In your very own COFE store</h2>
              <Link href="" className=' hidden btn btn-md md:inline-flex items-center btn-primary rounded-xl justify-center'>
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.33318 0.716266C1.75521 0.314979 2.41773 0.314979 2.83976 0.716265L10.5 8L2.83976 15.2837C2.41773 15.685 1.75521 15.685 1.33318 15.2837C0.879975 14.8528 0.879975 14.1302 1.33318 13.6993L7.32706 8L1.33318 2.30072C0.879976 1.86979 0.879975 1.14719 1.33318 0.716266Z" fill="white" />
                </svg>
              </Link>
            </div>
            <div className='best-deal-right md:col-span-2'>
              <Image src={bestDealImg} alt={''}/>
              <Link href="" className='btn btn-md inline-flex items-center btn-primary rounded-xl justify-center md:hidden' >
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.33318 0.716266C1.75521 0.314979 2.41773 0.314979 2.83976 0.716265L10.5 8L2.83976 15.2837C2.41773 15.685 1.75521 15.685 1.33318 15.2837C0.879975 14.8528 0.879975 14.1302 1.33318 13.6993L7.32706 8L1.33318 2.30072C0.879976 1.86979 0.879975 1.14719 1.33318 0.716266Z" fill="white" />
                </svg>
              </Link>
            </div>

          </div> */}
          <Link href="">
            <Image  src={bestDealImg}  className='w-full md:block hidden' alt={''}/>
            <Image src={bestDealMbl}  className='w-full md:hidden block' alt={''}/>
          </Link>
        </div>
      </div>
    </>
  )
}