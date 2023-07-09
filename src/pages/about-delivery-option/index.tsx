import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';
import Link from "next/link";

import styles from '../../styles/form/form.module.scss';

import call from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import chat from '../../assets/message-envelope.svg';



const DeliveryOptions: MyPage = () => {

	  const lang = GetLang();


	return (
	<> 
	<Head>
		<title>Cofeapp | Shipping & Delivery Details</title>
	</Head>
	<div>
		<main
		className="container"
		>
			<div className='w-full  m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] mb-[40px]'>
				<h2 className='text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold'>About our delivery options</h2>
                <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We currently offer the following options for getting your order to you.</p>
            </div>
         
           <div className="mb-[32px]">
                <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] uppercase">Standard delivery:</h6>
                <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
           </div>
           
            <div className="mb-[32px]">
                <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] uppercase">Premium delivery:</h6>
                <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur </p>
            </div>

            <div className="mb-[32px]">
                <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">Important Note</h6>
                 <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D] mb-[32px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br></br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            </div>

            <ul>
                <li>
                    <Link href="" className="text-[24px] leading-[28px] font-semibold text-[#212121] mb-[32px] underline inline-block">
                        More About DHL
                    </Link>
                </li>
                <li>
                    <Link href="" className="text-[24px] leading-[28px] font-semibold text-[#212121] mb-[32px] underline inline-block">
                         More About Hermes
                     </Link>
                </li>
                <li>
                     <Link href="" className="text-[24px] leading-[28px] font-semibold text-[#212121] mb-[32px] underline inline-block">
                         More About Shipping
                      </Link>
                </li>
            </ul>
             
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">Can`t find the answer you are looking for? <br></br>Contact us directly </h6>
            <div className="grid lg:grid-cols-3 gap-6 mb-[80px]">
                <div className="p-[10px]">
                    <div className="mb-[32px] w-[100px] h-[100px] flex flex-col justify-center items-center rounded-[50px] bg-[#CEF2EF]">
                        <Image src={call} alt="Call" className='w-[45px]'></Image>
                    </div>
                    <h6 className='text-[24px] leading-[28px] text-[#212121] font-semibold mb-[11px]'>Call us</h6>
                    <p className='text-[18px] leading-[26px] text-[#212121] font-normal  mb-[33px] md:min-h-[52px]'>Our specialists are ready to assist you. Waiting time may take up to 2 minutes.</p>
                    <button type="button" className='w-full bg-[#08BFB0] text-[#fff] rounded-[12px] py-[12px] px-[32px] capitalize text-center'>Call us </button>
                </div>
                <div className="p-[10px]">
                    <div className="mb-[32px] w-[100px] h-[100px] flex flex-col justify-center items-center rounded-[50px] bg-[#CEF2EF]">
                        <Image src={email} alt="email" className='w-[45px]'></Image>
                    </div>
                    <h6 className='text-[24px] leading-[28px] text-[#212121] font-semibold mb-[11px]'>Send us an email</h6>
                    <p className='text-[18px] leading-[26px] text-[#212121] font-normal  mb-[33px] md:min-h-[52px]'>The quickest way to check on your orders, returns, refunds, and more</p>
                    <button type="button" className='w-full bg-[#08BFB0] text-[#fff] rounded-[12px] py-[12px] px-[32px] capitalize text-center'>Send Email </button>
                </div>
                <div className="p-[10px]">
                     <div className="mb-[32px] w-[100px] h-[100px] flex flex-col justify-center items-center rounded-[50px] bg-[#CEF2EF]">
                        <Image src={chat} alt="chat" className='w-[45px]'></Image>
                    </div>
                    <h6 className='text-[24px] leading-[28px] text-[#212121] font-semibold mb-[11px]'>Chat with us</h6>
                    <p className='text-[18px] leading-[26px] text-[#212121] font-normal mb-[33px] mdmin-h-[52px]'>We might take a day or two to answer your email.</p>
                    <button type="button" className='w-full bg-[#08BFB0] text-[#fff] rounded-[12px] py-[12px] px-[32px] capitalize text-center'>Start Chat </button>
                </div>
            </div>
		</main>
	</div>
    
</>
	);
};
export default DeliveryOptions;
DeliveryOptions.Layout = "Default";