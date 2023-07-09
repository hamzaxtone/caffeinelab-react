import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import React, { useState, useEffect, Component, useRef } from 'react';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';
import Link from "next/link";


import styles from '../../styles/faq/faq.module.scss';




const Faq: MyPage = () => {

	  const lang = GetLang();
      const [proTab, setproTab] = useState('onBoarding');
      const [proTabSame, setproTabSame] = useState('');
      const [proTabShow, setProTabShow] = useState(false);

      const toggleTab = (tab: any) => {
        
        setproTab(tab);

        

// if( proTab != ""  ){
//   setproTab("");
// }else{
//   setproTab(tab);
// }
        
        // if( proTabShow ){
        //   setproTab("");
        //   setProTabShow(false);
        // }else{
        //   setproTab(tab);
        //   setProTabShow(true);
        // }

}

	return (
	<> 
	<Head>
		<title>Cofeapp | FAQ</title>
	</Head>
	<div>
		<main
		className="container"
		>
			<div className='w-full text-center m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] mb-[40px]'>
				<h2 className='text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold'>Frequently Asked Question</h2>
            </div>
                <div className='border-b-[#D5D5D5] border-b-[1px]'>
                  <h3 onClick={() => toggleTab("onBoarding")} className={`${proTab == "onBoarding" ? `${styles.active}` : ''} font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}>What is the onboarding process with COFE App?<i className='icon-arrow-down text-[12px]'></i></h3>
                  {proTab == "onBoarding" &&
                    <div className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}>

                      <div className={` ${styles.productDescInner}`}>
                        <p className='text-[#4D4D4D] text-base  mb-6 lg:mb-8'>ICOFE App supports all its partners to run promotions on the app. Partners can run joint promotions with us – with multiple options (price slash on items, buy-one -get -one offers, combo items discounts etc.). We promote our partner promotions, in our social channels- free of cost (of course).</p>
                      </div>
                    </div>
                  }
                </div>
                <div className='border-b-[#D5D5D5] border-b-[1px]'>
                  <h3 onClick={() => toggleTab("promotions")} className={`${proTab == "promotions"? `${styles.active}` : ''} font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}>How can we do promotions with COFE App?<i className='icon-arrow-down text-[12px]'></i></h3>
                  {proTab == "promotions" &&
                    <div className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}>

                      <div className={` ${styles.productDescInner}`}>
                        <p className='text-[#4D4D4D] text-base  mb-6 lg:mb-8'>ICOFE App supports all its partners to run promotions on the app. Partners can run joint promotions with us – with multiple options (price slash on items, buy-one -get -one offers, combo items discounts etc.). We promote our partner promotions, in our social channels- free of cost (of course).</p>
                      </div>
                    </div>
                  }
                </div>
                <div className='border-b-[#D5D5D5] border-b-[1px]'>
                  <h3 onClick={() => toggleTab("support")} className={`${proTab == "support" ? `${styles.active}` : ''} font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}>What is the customer support process for COFE App?<i className='icon-arrow-down text-[12px]'></i></h3>
                  {proTab == "support"  &&
                    <div className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}>

                      <div className={` ${styles.productDescInner}`}>
                        <p className='text-[#4D4D4D] text-base  mb-6 lg:mb-8'>ICOFE App supports all its partners to run promotions on the app. Partners can run joint promotions with us – with multiple options (price slash on items, buy-one -get -one offers, combo items discounts etc.). We promote our partner promotions, in our social channels- free of cost (of course).</p>
                      </div>
                    </div>
                  }
                </div>
		</main>
	</div>
    
</>
	);
};
export default Faq;
Faq.Layout = "Default";