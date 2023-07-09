import Head from "next/head";
import { MyPage } from "@/components/layouts/types";
import React, { useState, useEffect, Component, useRef } from "react";
import Image from "next/image";
import GetLang from "@/hooks/getLang";
import Link from "next/link";

import styles from "../../styles/faq/faq.module.scss";

import finishflag1 from '../../assets/images/finishflag1.png';
import wallet1 from '../../assets/images/wallet1.png';
import sellwithus from '../../assets/images/sellwithus.png';
import signpost1 from '../../assets/images/signpost1.png';


const Hello: MyPage = () => {
  const lang = GetLang();
  const [proTab, setproTab] = useState("proDesc");
  const [proTabShow, setProTabShow] = useState(true);
  const [istoggled, setIsToggled] = useState(false);

  const toggleTab = (tab: any) => {
    setproTab(tab);
    setProTabShow(!proTabShow);
    setIsToggled(!istoggled);
  };

  return (
    <>
      <Head>
        <title>Cofeapp | Hello,how can we help?</title>
      </Head>
      <div>
        <main className="container">
          <div className="w-full text-center m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] mb-[50px]">
            <h2 className="text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold mb-[20px]">
              Hello, how can we help?
            </h2>
            <div className="border-[#D5D5D5] border-solid border rounded-[32px]  lg:max-w-[636px] w-[100%] m-[auto] p-[5px] flex justify-between items-center">
              <span className={` ${lang == "en" ? "pl-[15px]" : "pr-[15px]"} `}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <input type="text" placeholder="Ask a question . . . ." className="focus-visible:outline-none text-[14px] mx-[20px] flex-1" />
              <button  className="btn-primary  max-w-[106px] md:max-w-[226px] lg:max-w-[118px] w-[100%] h-[48px] text-[14px] rounded-[32px]">Search</button>

            </div>
            <p className="text-[#4D4D4D] text-[16px] leading-[24px] mt-[35px]">or Choose a category to quickly find the help you need</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-[24px]'>
            <div className={` bg-white text-center px-[27px] py-[35px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                <span className='flex items-center m-[auto]  justify-center mb-[30px] w-[108px] h-[108px] bg-[#CEF2EF] rounded-full'>
                    <Image
                        src={finishflag1}
                        alt="finishflag1"
                        className='m-[auto]'
                    />
                </span>
                <h3 className='text-[#4D4D4D] text-[20px] font-medium mb-[0px]'>Getting Started</h3>
            </div>
            <div className={` bg-white text-center px-[27px] py-[35px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                <span className='flex items-center m-[auto]  justify-center mb-[25px] w-[108px] h-[108px] bg-[#CEF2EF] rounded-full'>
                    <Image
                        src={wallet1}
                        alt="wallet1"
                        className='m-[auto]'
                    />
                </span>
                <h3 className='text-[#4D4D4D] text-[20px] font-medium mb-[0px]'>Payment</h3>
            </div>
            <div className={` bg-white text-center px-[27px] py-[35px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                <span className='flex items-center m-[auto]  justify-center mb-[25px] w-[108px] h-[108px] bg-[#CEF2EF] rounded-full'>
                    <Image
                        src={sellwithus}
                        alt="sellwithus"
                        className='m-[auto]'
                    />
                </span>
                <h3 className='text-[#4D4D4D] text-[20px] font-medium mb-[0px]'>Sale with us</h3>
            </div>
            <div className={` bg-white text-center px-[27px] py-[35px] rounded-[10px] border border-solid border-[#EFEFEF] hover:border-[#6BD9D0] ${styles.boxShadow} `}>
                <span className='flex items-center m-[auto]  justify-center mb-[25px] w-[108px] h-[108px] bg-[#CEF2EF] rounded-full'>
                    <Image
                        src={signpost1}
                        alt="signpost1"
                        className='m-[auto]'
                    />
                </span>
                <h3 className='text-[#4D4D4D] text-[20px] font-medium mb-[0px]'>Usage Guide</h3>
            </div>
          </div>
          <div className="my-[44px] md:my-[60] lg:my-[80px]">
            <h6 className="text-center text-[32px] leading-[38px] text-[#212121] font-semibold lg:mb-[40px] md-[40px]">
              Getting Started
            </h6>
            <div className="border-b-[#D5D5D5] border-b-[1px]">
              <h3
                onClick={() => toggleTab("onBoarding")}
                className={`${
                  proTabShow ? `${styles.active}` : ""
                } font-semibold text-lg lg:text-[22px] text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}
              >
                What is the onboarding process with COFE App?
                <i className="icon-arrow-down text-[12px]"></i>
              </h3>
              {proTab == "onBoarding" && proTabShow && (
                <div
                  className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}
                >
                  <div className={` ${styles.productDescInner}`}>
                    <p className="text-[#4D4D4D] text-base  mb-6 lg:mb-8">
                      ICOFE App supports all its partners to run promotions on
                      the app. Partners can run joint promotions with us – with
                      multiple options (price slash on items, buy-one -get -one
                      offers, combo items discounts etc.). We promote our
                      partner promotions, in our social channels- free of cost
                      (of course).
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="border-b-[#D5D5D5] border-b-[1px]">
              <h3
                onClick={() => toggleTab("promotions")}
                className={`${
                  proTabShow ? `${styles.active}` : ""
                } font-semibold text-lg lg:text-[22px] text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}
              >
                How can we do promotions with COFE App?
                <i className="icon-arrow-down text-[12px]"></i>
              </h3>
              {proTab == "promotions" && proTabShow && (
                <div
                  className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}
                >
                  <div className={` ${styles.productDescInner}`}>
                    <p className="text-[#4D4D4D] text-base  mb-6 lg:mb-8">
                      ICOFE App supports all its partners to run promotions on
                      the app. Partners can run joint promotions with us – with
                      multiple options (price slash on items, buy-one -get -one
                      offers, combo items discounts etc.). We promote our
                      partner promotions, in our social channels- free of cost
                      (of course).
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="border-b-[#D5D5D5] border-b-[1px]">
              <h3
                onClick={() => toggleTab("details")}
                className={`${
                  proTabShow ? `${styles.active}` : ""
                } font-semibold text-lg lg:text-[22px] text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}
              >
               Will the customer details be shared with us?
                <i className="icon-arrow-down text-[12px]"></i>
              </h3>
              {proTab == "details" && proTabShow && (
                <div
                  className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}
                >
                  <div className={` ${styles.productDescInner}`}>
                    <p className="text-[#4D4D4D] text-base  mb-6 lg:mb-8">
                      ICOFE App supports all its partners to run promotions on
                      the app. Partners can run joint promotions with us – with
                      multiple options (price slash on items, buy-one -get -one
                      offers, combo items discounts etc.). We promote our
                      partner promotions, in our social channels- free of cost
                      (of course).
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="border-b-[#D5D5D5] border-b-[1px]">
              <h3
                onClick={() => toggleTab("support")}
                className={`${
                  proTabShow ? `${styles.active}` : ""
                } font-semibold text-lg lg:text-[22px] text-[#212121] py-[20px] cursor-pointer flex justify-between items-center`}
              >
                What is the customer support process for COFE App?
                <i className="icon-arrow-down text-[12px]"></i>
              </h3>
              {proTab == "support" && proTabShow && (
                <div
                  className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}
                >
                  <div className={` ${styles.productDescInner}`}>
                    <p className="text-[#4D4D4D] text-base  mb-6 lg:mb-8">
                      ICOFE App supports all its partners to run promotions on
                      the app. Partners can run joint promotions with us – with
                      multiple options (price slash on items, buy-one -get -one
                      offers, combo items discounts etc.). We promote our
                      partner promotions, in our social channels- free of cost
                      (of course).
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Hello;
Hello.Layout = "Default";
