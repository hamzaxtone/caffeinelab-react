import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '../../styles/form/form.module.scss';

import customerreach from '../../assets/images/customerreach.png';
import brandexposure from '../../assets/images/brandexposure.png';
import analyticsdashboard from '../../assets/images/analyticsdashboard.png';
import frontViewCoffee from '../../assets/images/frontViewCoffee.jpg';


const About: MyPage = () => {

	  const lang = GetLang();


	return (
	<> 
	<Head>
		<title>Cofeapp | Sell with us</title>
	</Head>
	<div>
		<main
		className={`container`}
		>
			<div className='max-w-[795px] w-[100%] text-center m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] md:mb-[60px] lg:mb-[100px]'>
				<h2 className='text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold'>Sell with us</h2>
				<p className='text-[#4D4D4D] text-[16px] leading-[24px] mb-[60px] md:mb-0 mt-[15px]'>COFE App helps cafés grow their business with easy mobile ordering and one-stop-shop supply deliveries. 
                Happier customers and lower costs await you.</p>
			</div>
            <div className='my-[60px] lg:my-[80px]'>
                <h3 className='text-[#212121] text-[24px] lg:text-[40px] leading-[28px] lg:leading-[45px] font-bold mb-[15px] md:mb-[8px] lg:mb-[5px]'>Interested in becoming a partner?</h3>
                <p className='text-[#4D4D4D] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]'>Fill out this form below and a COFE representive will contact you within 48 hours (excluding weekends). touch</p>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[32px] lg:mt-[40px]'>
                        <div>
                            <label className='text-[#4D4D4D] text-[16px] font-semibold block mb-[5px]'>Contact No</label>
                            <input  type="text" placeholder='Contact No' className={`text-[#AFAFAF] w-[100%] h-[44px] py-[8px] px-[16px] text-[16px] rounded-[8px] border border-solid border-[#D5D5D5] ${styles.formControl} `}/>
                        </div>
                        <div>
                            <label className='text-[#4D4D4D] text-[16px] font-semibold block mb-[5px]'>Select City</label>
                            <div className={`relative ${styles.hasIconSelect}`}>
                                <select className={`text-[#AFAFAF] w-[100%] h-[44px] py-[8px] px-[16px] text-[16px] rounded-[8px] border border-solid border-[#D5D5D5] ${styles.formControl} `}>
                                    <option selected>UAE</option>
                                    <option>SA</option>
                                </select>
                                <i className={`icon-arrow-down absolute ${lang == "en" ? "right-[16px]" : "left-[16px]"}  top-[19px] text-[8px] text-[#4D4D4D]`}></i>
                            </div>
                           
                        </div>
                        <div>
                            <label className='text-[#4D4D4D] text-[16px] font-semibold block mb-[5px]'>Business Name</label>
                            <input  type="text" placeholder='Business Name' className={`text-[#AFAFAF] w-[100%] h-[44px] py-[8px] px-[16px] text-[16px] rounded-[8px] border border-solid border-[#D5D5D5] ${styles.formControl} `}/>
                        </div>
                        <div>
                            <label className='text-[#4D4D4D] text-[16px] font-semibold block mb-[5px]'>Business Type</label>
                            <div className={`relative ${styles.hasIconSelect}`}>
                                <select className={`text-[#AFAFAF] w-[100%] h-[44px] py-[8px] px-[16px] text-[16px] rounded-[8px] border border-solid border-[#D5D5D5] ${styles.formControl} `}>
                                    <option selected>Business Type</option>
                                    <option>Coffee</option>
                                    <option>Coffee</option>
                                </select>
                                <i className={` icon-arrow-down absolute ${lang == "en" ? "right-[16px]" : "left-[16px]"} top-[19px] text-[8px] text-[#4D4D4D]`}></i>
                            </div>
                           
                        </div>
                        <div>
                            <label className='text-[#4D4D4D] text-[16px] font-semibold block mb-[5px]'>Email Address</label>
                            <input  type="text" placeholder='Email Address' className={`text-[#AFAFAF] w-[100%] h-[44px] py-[8px] px-[16px] text-[16px] rounded-[8px] border border-solid border-[#D5D5D5] ${styles.formControl} `}/>
                        </div>
                        <div>
                            <label className='text-[#4D4D4D] text-[16px] font-semibold block mb-[5px]'>Number of Location</label>
                            <div className={`relative ${styles.hasIconSelect}`}>
                                <select className={`text-[#AFAFAF] w-[100%] h-[44px] py-[8px] px-[16px] text-[16px] rounded-[8px] border border-solid border-[#D5D5D5] ${styles.formControl} `}>
                                    <option selected>Choose a tag</option>
                                    <option >Dubai</option>
                                    <option>Abu Dahabi</option>
                                </select>
                                 <i className={`icon-arrow-down absolute ${lang == "en" ? "right-[16px]" : "left-[16px]"} top-[19px] text-[8px] text-[#4D4D4D]`}></i>
                            </div>
                        </div>
                    </div>
                    <button className='btn-primary btn  w-[100%] md:w-[auto] md:min-w-[227px] h-[50px] rounded-[12px] mt-[40px] text-[18px] ml-[auto] block'>Submit</button>
                </form>
            </div>
            <div className='mb-[60px] lg:mb-[80px]'>
                <h3 className='text-[#212121] text-[24px] lg:text-[32px] leading-[28px] lg:leading-[38px] font-semibold text-center'>Why Sale with COFE App?</h3>
                <p className='text-[#4D4D4D] text-[16px] leading-[24px] mt-[10px] text-center mb-[32px] lg:mb-[45px]'>Get on board and be a part of a caffeinated digital ecosystem.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[24px]'>
                    <div className={` bg-white text-center px-[27px] py-[49px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                        <span className='flex items-center m-[auto]  justify-center mb-[38px] w-[144px] h-[144px] bg-[#CEF2EF] rounded-full'>
                            <Image
                                src={customerreach}
                                alt="customerreach"
                                className='m-[auto]'
                            />
                        </span>
                        <h3 className='text-[#4D4D4D] text-[24px] font-medium mb-[10px]'>Expand customer reach</h3>
                        <p className='text-[#4D4D4D] text-[16px] leading-[24px]'>Increase your loyal customers and fuel up your sales like never before.</p>
                    </div>
                    <div className={` bg-white text-center px-[27px] py-[49px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                        <span className='flex items-center m-[auto]  justify-center mb-[38px] w-[144px] h-[144px] bg-[#CEF2EF] rounded-full'>
                            <Image
                                src={brandexposure}
                                alt="brandexposure"
                                className='m-[auto]'
                            />
                        </span>
                        <h3 className='text-[#4D4D4D] text-[24px] font-medium mb-[10px]'>Increase Brand Exposure</h3>
                        <p className='text-[#4D4D4D] text-[16px] leading-[24px]'>Gain higher exposure and boost your brand to its fullest potential.</p>
                    </div>
                    <div className={` bg-white text-center px-[27px] py-[49px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                        <span className='flex items-center m-[auto]  justify-center mb-[38px] w-[144px] h-[144px] bg-[#CEF2EF] rounded-full'>
                            <Image
                                src={analyticsdashboard}
                                alt="analyticsdashboard"
                                className='m-[auto]'
                            />
                        </span>
                        <h3 className='text-[#4D4D4D] text-[24px] font-medium mb-[10px]'>Analytics & Dashboard Access</h3>
                        <p className='text-[#4D4D4D] text-[16px] leading-[24px]'>Increase visibility and business efficiency at all times.</p>
                    </div>

                </div>
            </div>
            <div className='mb-[60px] lg:mb-[80px]'>
                <div className='md:flex gap-[24px]'>
                    <div className={` w-[100%] md:w-[63%] ${lang == "en" ? "md:pr-[25px] lg:pr-[50px]" : "md:pl-[25px] lg:pl-[50px]"} `}>
                        <h3 className='text-[#212121] text-[24px] lg:text-[32px] leading-[28px] lg:leading-[38px] font-semibold mb-[24px] lg:mt-[15px]'>How it works</h3>
                        <div className='md:flex mb-[26px]'>
                            <span className={`flex items-center justify-center w-[50px] h-[50px] bg-[#CEF2EF] rounded-full ${lang == "en" ? "mr-[18px]" : "ml-[18px]"}  font-semibold `}>1</span>
                            <div className='flex-1 md:mt-0 mt-[15px]'>
                                <h4 className='text-[#212121] text-[18px] lg:text-[24px] leading-[24px] lg:leading-[28px] font-semibold mb-[12px] md:mb-[5px]'>Complete the form above</h4>
                                <p className='text-[#212121] text-[18px] leading-[30px]'>Fill out the details in the simple form to register your interest to be a partner with COFE App 
                                    and a member of our team will get in touch!</p>
                            </div>

                        </div>
                        <div className='md:flex mb-[26px]'>
                            <span className={`flex items-center justify-center w-[50px] h-[50px] bg-[#CEF2EF] rounded-full ${lang == "en" ? "mr-[18px]" : "ml-[18px]"}  font-semibold `}>2</span>
                            <div className='flex-1 md:mt-0 mt-[15px]'>
                                <h4 className='text-[#212121] text-[18px] lg:text-[24px] leading-[24px] lg:leading-[28px] font-semibold mb-[12px] md:mb-[5px]'>Onboarding on the COFE App</h4>
                                <p className='text-[#212121] text-[18px] leading-[30px]'>Our sales team will brief you on the COFE App value proposition and assist
                                 you in your onboarding of platform.</p>
                            </div>

                        </div>
                        <div className='md:flex'>
                            <span className={`flex items-center justify-center w-[50px] h-[50px] bg-[#CEF2EF] rounded-full ${lang == "en" ? "mr-[18px]" : "ml-[18px]"}  font-semibold `}>3</span>
                            <div className='flex-1 md:mt-0 mt-[15px]'>
                                <h4 className='text-[#212121] text-[18px] lg:text-[24px] leading-[24px] lg:leading-[28px] font-semibold mb-[12px] md:mb-[5px]'>Dedicated Account Management</h4>
                                <p className='text-[#212121] text-[18px] leading-[30px]'>We will assign an account manager to assist with your day-to-day operations. 
                                Our account manager will train your baristas on the COFE App 
                                and Merchant portal and share detailed insights on customers who transacts with you on the COFE platform.</p>
                            </div>

                        </div>
                    </div>
                    <div className='w-[100%] md:w-[37%] md:mt-0 mt-[67px]'>
                        <Image
                            src={frontViewCoffee}
                            alt="frontViewCoffee"
                            className='rounded-[13px] ml-[auto]'
                        />
                    </div>
                </div>
                
            </div>
		</main>
	</div>
    
</>
	);
};
export default About;
About.Layout = "Default";