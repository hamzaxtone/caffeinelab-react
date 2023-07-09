import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '../../styles/staticpage/about.module.scss';

import abouttopCup1 from '../../assets/images/abouttopCup1.jpg';
import abouttopCup2 from '../../assets/images/abouttopCup2.jpg';
import aboutUsftCup from '../../assets/images/aboutUsftCup.jpg';

const About: MyPage = () => {

	  const lang = GetLang();


	return (
	<> 
	<Head>
		<title>Cofeapp | About</title>
	</Head>
	<div>
		<main
		className={`container`}
		>
			<div className='max-w-[795px] w-[100%] text-center m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] md:mb-[60px] lg:mb-[100px]'>
				<h2 className='text-[#212121] text-[40px] lg:text-[56px] leading-[48px] lg:leading-[67px] font-bold'>About us</h2>
				<p className='text-[#4D4D4D] text-[16px] leading-[24px] mb-[60px] md:mb-0 mt-[15px]'>Since 2018, we’ve focused on creating a space for coffee lovers of all kind. From those that create to those that enjoy, COFE is an online marketplace that offers a wide range of 
				products and services for everyone.</p>
			</div>
			<div className='flex flex-col md:flex-row items-center'>
				<div className={` w-[100%] md:w-[50%] lg:flex-1 ${lang == "en" ? "md:mr-[25px] lg:mr-[50px]" : "md:ml-[25px] lg:ml-[50px]"}  md:mb-0 mb-[32px] `}>
					<p className='text-[#212121] md:text-[16px] md:leading-[24px] lg:text-[18px]  lg:leading-[30px] mb-0'>
						We are a state-of-the-art application that runs on love, lots of COFE, and provides 
						quick access to a wide range of international coffee franchises and 
						artisanal coffee brands through multiple premium services and features on one platform.
					</p>
					<p className='text-[#212121] md:text-[16px] md:leading-[24px] lg:text-[18px]  lg:leading-[30px] mb-0'>
						The COFE App sensation was founded by Ali Al-Ebrahim back in 2017 and was officially launched in 
						Kuwait 2018. Our journey grew stronger and wider, with more countries and coffee industries to take over.
						We currently operate in multiple countries including KSA, 
						UAE, UK and very soon across more regional and international countries.
					</p>

				</div>
				<div className='w-[100%] md:w-[50%] lg:w-[auto]'>
					<Image
						src={abouttopCup1}
						alt="abouttopCup1"
						className='rounded-[13px]'
					/>
				</div>

			</div>
			<div className='flex flex-col md:flex-row items-center my-[50px] md:my-[60px] lg:my-[80px]'>
				<div className='w-[100%] md:w-[50%] lg:w-[auto] md:order-1 order-2'>
					<Image
						src={abouttopCup2}
						alt="abouttopCup2"
						className='rounded-[13px]'
					/>
				</div>
				<div className={`w-[100%] md:w-[50%] lg:flex-1 ${lang == "en" ? "md:ml-[25px] lg:ml-[50px]" : "md:mr-[25px] lg:mr-[50px]"}  md:order-2 order-1 md:mb-0 mb-[32px]`}>
					<p className='text-[#212121] md:text-[16px] md:leading-[24px] lg:text-[18px]  lg:leading-[30px] mb-0'>
						We are a state-of-the-art application that runs on love, lots of COFE, and provides 
						quick access to a wide range of international coffee franchises and 
						artisanal coffee brands through multiple premium services and features on one platform.
					</p>
					<p className='text-[#212121] md:text-[16px] md:leading-[24px] lg:text-[18px]  lg:leading-[30px] mb-0'>
						The COFE App sensation was founded by Ali Al-Ebrahim back in 2017 and was officially launched in 
						Kuwait 2018. Our journey grew stronger and wider, with more countries and coffee industries to take over.
						We currently operate in multiple countries including KSA, 
						UAE, UK and very soon across more regional and international countries.
					</p>
				</div>
			</div>
		</main>
		<div className='bg-[#A6DEEB] pt-[56px] md:pt-[90px] md:mb-0 mb-[56px]'>
			<h2 className={` lg:px-0 px-[17px] text-[#FFFFFF] text-[24px] leading-[28px] md:text-[40px] lg:text-[56px] md:leading-[48px] lg:leading-[67px] font-bold text-center pb-[5px] ${styles.textShadow}`}>Get caffeinated with COFE App!</h2>
			<Image
				src={aboutUsftCup}
				alt="aboutUsftCup"
				className='m-[auto]'
			/>
		</div>
	</div>
    
</>
	);
};
export default About;
About.Layout = "Default";