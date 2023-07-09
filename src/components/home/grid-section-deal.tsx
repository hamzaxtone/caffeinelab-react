import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import gridDealImg from '../../assets/images/grid-deal-img.png';
import reasonToShop from '../../../public/assets/images/reason-to-shop.png';
import newArrival from '../../../public/assets/images/new-arrival.png';
import megaDeals from '../../../public/assets/images/mega-deals.png';
import reasonToShopMbl from '../../../public/assets/images/reason-to-shop-mbl.png';
import newArrivalMbl from '../../../public/assets/images/new-arrival-mbl.png';
import megaDealsMbl from '../../../public/assets/images/mega-deals-mbl.png';
import styles from '../../styles/home/GridSectionDeal.module.scss';

export default function GridSectionDeal() {
  return (
    <div className={`py-10 -px-4 section ${styles.sectionGridDeal}`}>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
          <div className={`p-4 bg-white rounded-xl ${styles.gridDealBx}`}>
            <h4 className='lg:text-2xl md:text-lg font-semibold mb-0.5'>More Reason to Shop</h4>
            <div className='flex flex-wrap'>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-4 bg-white rounded-xl ${styles.gridDealBx}`}>
            <h4 className='lg:text-2xl md:text-lg font-semibold mb-0.5'>Mega Deals</h4>
            <div className='flex flex-wrap'>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>Upto 40% Off</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>Upto 40% Off</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>Upto 40% Off</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-4 bg-white rounded-xl ${styles.gridDealBx}`}>
            <h4 className='lg:text-2xl md:text-lg font-semibold mb-0.5'>New Arrival</h4>
            <div className='flex flex-wrap'>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className={`mt-4 relative ${styles.gridDealContent}`}>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className={`rounded-b-md p-2 ${styles.desc}`}>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
            </div>
          </div>
          {/* <Link href="">
            <Image src={reasonToShop} className='w-full md:block hidden' alt={''}/>
            <Image src={reasonToShopMbl} className='w-full md:hidden block' alt={''}/>
          </Link>
          <Link href="">
            <Image src={newArrival} className='w-full md:block hidden' alt={''}/>
            <Image src={newArrival} className='w-full md:hidden block' alt={''}/>
          </Link>
          <Link href="">
            <Image src={megaDeals} className='w-full md:block hidden' alt={''}/>
            <Image src={megaDealsMbl} className='w-full md:hidden block' alt={''}/>
          </Link> */}
        </div>
      </div>
    </div>
  )
}