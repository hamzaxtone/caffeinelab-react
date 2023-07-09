import Head from "next/head";
import { MyPage } from "@/components/layouts/types";
import Image from "next/image";
import GetLang from "@/hooks/getLang";
import Link from "next/link";
import Icon from '@/components/common/icons/icomoon';
import styles from "../../styles/form/form.module.scss";

import call from "../../assets/phone.svg";
import web from "../../assets/web.svg";
import email from "../../assets/message-envelope-sm.svg";

import Twitter from '../../assets/images/svg/twitter.svg'
import Facebook from '../../assets/images/svg/facebook.svg'
import Youtube from '../../assets/images/svg/youtube.svg'
import Linkedin from '../../assets/images/svg/linkedin.svg'
import Instagram from '../../assets/images/svg/instagram.svg'

const ContactUs: MyPage = () => {
  const lang = GetLang();

  return (
    <>
      <Head>
        <title>Cofeapp | Contact Us</title>
      </Head>
      <div>
        <main className={`container`}>
          <div className="w-full  m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] mb-[40px]">
            <h2 className="text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold">
              Contact Us
            </h2>
          </div>
        </main>
        <div className="grid lg:grid-cols-2  mb-[80px]">
          <div className="bg-[#FAFBFB] py-[90px] px-[32px] lg:my-[100px]">
            <h5 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[8px]">
              Hey there
            </h5>
            <h3 className="text-[#212121] text-[40px] leading-[48px] font-[700] mb-[40px]">
              Lets get in touch
            </h3>
            <ul>
              <li className="mb-[24px]">
                <Link className="flex items-center" href="">
                  <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-[50px] bg-[#CEF2EF]">
                    <Image src={call} alt="Call" className="w-[25px]"></Image>
                  </div>
                  <span
                    className={`{'text-[#212121] text-[18px]  ${
                      lang == "en" ? " ml-[19px] " : "mr-[19px] "
                    }`}
                  >
                    000-000-0000
                  </span>
                </Link>
              </li>
              <li className="mb-[24px]">
                <Link className="flex items-center" href="">
                  <div className=" w-[50px] h-[50px] flex flex-col justify-center items-center rounded-[50px] bg-[#CEF2EF]">
                    <Image src={web} alt="web" className="w-[25px]"></Image>
                  </div>
                  <span
                    className={`{'text-[#212121] text-[18px]  ${
                      lang == "en" ? " ml-[19px] " : "mr-[19px] "
                    }`}
                  >
                    cofeapp.com
                  </span>
                </Link>
              </li>
              <li className="mb-[24px]">
                <Link className="flex items-center" href="">
                  <div className=" w-[50px] h-[50px] flex flex-col justify-center items-center rounded-[50px] bg-[#CEF2EF]">
                    <Image src={email} alt="email" className="w-[25px]"></Image>
                  </div>
                  <span
                    className={`{'text-[#212121] text-[18px]  ${
                      lang == "en" ? " ml-[19px] " : "mr-[19px] "
                    }`}
                  >
                    cofeapp.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-[#08BFB0] pt-[107px] pb-[30px] px-[48px] rounded-[20px]">
            <h5 className="text-[#fff] text-[24px] leading-[28px] font-semibold mb-[8px]">
              Hey there
            </h5>
            <h3 className="text-[#fff] text-[40px] leading-[48px] font-[700] mb-[40px]">
              Lets get in touch
            </h3>
            <div className="">
              <div className="inputFormGroup mb-[15px] w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 text-[16px] leading-[24px] font-medium text-[#fff]"
                >
                  Name
                </label>
                <div className="relative flex items-end">
                  <input
                    type="text"
                    id="name"
                    className="pl-[10px] mb-[4px] bg-[#fff] border border-[#fff] text-[16px] rounded-[8px] focus:ring-[#08bfb0] focus:border-[#08bfb0] block w-full p-2.5 dark:bg-[#fff] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#08bfb0] dark:focus:border-[#08bfb0]"
                    placeholder="Name"
                  />
                </div>
                {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                            Invalid Expiry Date
                        </span> */}
              </div>
              <div className="inputFormGroup mb-[15px] w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-[16px] leading-[24px] font-medium text-[#fff]"
                >
                  Email
                </label>
                <div className="relative flex items-end">
                  <input
                    type="email"
                    id="email"
                    className="pl-[10px] mb-[4px] bg-[#fff] border border-[#fff] text-[16px] rounded-[8px] focus:ring-[#08bfb0] focus:border-[#08bfb0] block w-full p-2.5 dark:bg-[#fff] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#08bfb0] dark:focus:border-[#08bfb0]"
                    placeholder="Email"
                  />
                </div>
                {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                            Invalid Expiry Date
                        </span> */}
              </div>
              <div className="inputFormGroup mb-[15px] w-full">
                <label
                  htmlFor="message"
                  className="block mb-2 text-[16px] leading-[24px] font-medium text-[#fff]"
                >
                  Message
                </label>
                <div className="relative flex items-end">
                  <input
                    type="text"
                    id="message"
                    className="pl-[10px] mb-[4px] bg-[#fff] border border-[#fff] text-[16px] rounded-[8px] focus:ring-[#08bfb0] focus:border-[#08bfb0] block w-full p-2.5 dark:bg-[#fff] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#08bfb0] dark:focus:border-[#08bfb0]"
                    placeholder="Your Message"
                  />
                </div>
                {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                            Invalid Expiry Date
                        </span> */}
              </div>
              <button type="button" className="bg-[#fff] w-[222px] text-[#08BFB0] text-[18px] font-[700] rounded-[12px] text-center capitalize py-[12px] px-[32px] my-[40px]">
                <span>Send Message</span> 
              </button>
              <div className="flex justify-end py-[20px]">
                <ul className="flex">
                  <li className="mx-[4px] flex justify-center items-center w-[37px] h-[37px] border-[1px] border-[#fff] rounded-[50px] text-[#fff] text-[11px]">
                  <Link href="#" className='flex justify-center items-center'>
                    <Icon icon="icon-twitter" />
                  </Link>
                  </li>
                  <li className="mx-[4px] flex justify-center items-center w-[37px] h-[37px] border-[1px] border-[#fff] rounded-[50px] text-[#fff] text-[11px]">
                  <Link href="#" className='flex justify-center items-center'>
                    <Icon icon="icon-facebook" />
                  </Link>
                  </li>
                  <li className="mx-[4px] flex justify-center items-center w-[37px] h-[37px] border-[1px] border-[#fff] rounded-[50px] text-[#fff] text-[11px]">
                  <Link href="#" className='flex justify-center items-center'>
                    <Icon icon="icon-instagram" />
                  </Link>
                  </li>
                  <li className="mx-[4px] flex justify-center items-center w-[37px] h-[37px] border-[1px] border-[#fff] rounded-[50px] text-[#fff] text-[11px]">
                  <Link href="#" className='flex justify-center items-center'>
                    <Icon icon="icon-linkedin" />
                  </Link>
                  </li>
                  <li className="mx-[4px] flex justify-center items-center w-[37px] h-[37px] border-[1px] border-[#fff] rounded-[50px] text-[#fff] text-[11px]">
                  <Link href="#" className='flex justify-center items-center'>
                    <Icon icon="icon-youtube" />
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
ContactUs.Layout = "Default";
