import React from 'react'
import Image from 'next/image'
import banner1 from '../../assets/images/presents-near-tray-with-breakfast 1.png';
import banner1Mob from '../../assets/images/presents-near-tray-with-breakfast-1-mob.png';
import banner2 from '../../assets/images/presents-near-tray-with-breakfast-2.png';
import banner2Mob from '../../assets/images/presents-near-tray-with-breakfast-2-mob.png';
import bannerLeft from '../../../public/assets/images/flash-deals.png';
import bannerRight from '../../../public/assets/images/freegift.png';
import bannerLeftMob from '../../../public/assets/images/flash-deals-mbl.png';
import bannerRightMob from '../../../public/assets/images/freegift-mbl.png';
import styles from '../../styles/home/FlashDeal.module.scss';

export default function FlashDeal() {
  return (
    <div className='section-flash-deal section -px-4'>
      <div className='container mx-auto'>
        <div className="grid grid-cols-2  gap-4">
          <div className="left">
             <Image src={bannerLeft} className=' md:block hidden' alt={''} loading="eager" priority={true} />
             <Image src={bannerLeftMob} className=' md:hidden block w-full' alt={''} loading="eager" priority={true} />
          </div>
          <div className="right">
             <Image src={bannerRight} className=' md:block hidden' alt={''} loading="eager" priority={true} />
             <Image src={bannerRightMob} className=' md:hidden block w-full' alt={''} loading="eager" priority={true} />
          </div>
        </div>
      </div>
    </div>
  )
}