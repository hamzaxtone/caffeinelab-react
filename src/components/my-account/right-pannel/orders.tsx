import React, { useState, useEffect, Component, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/myaccount/myaccount.module.scss";
import Icon from "@/components/common/icons/icomoon";

import Image from "next/image";
import GetLang from "@/hooks/getLang";

import productImage from "../../../assets/images/productImage.png";
import productOtherImage from "../../../assets/images/productOtherImage.jpg";

const Order = () => {
  const lang = GetLang();
  const [proTab, setproTab] = useState("activeOrder");
  const [proTabShow, setProTabShow] = useState(true);

  const toggleTab = (tab: any) => {
    setproTab(tab);
    setProTabShow(!proTabShow);
  };
  return (
    <div
      className={`${styles.rightWrapper} ${styles.orders} bg-[#FFFFFF] py-[32px]  lg:px-[32px] px-[16px] rounded-[12px]`}
    >
      <div className="lg:flex justify-between items-center">
        <h2 className="text-[24px] text-[#212121] leading-[28px] font-semibold lg-mb-[0] mb-[10px]">
          Orders
        </h2>
        <div className="lg:flex items-center">
          <p className={`text-[#7A7A7A] text-[14px] ${lang == "en" ? "lg:pr-[8px]" : "lg:pl-[8px]"}  items-center lg:mb-[0] mb-[10px]`}>
            Select Market
          </p>
          <div className="relative">
            <select
              className="appearance-none  lg:w-[217px] w-[100%] py-[12px] pr-[20px] pl-[8px] rounded-[8px] text-[#212121] font-semibold  border border-[#EAEAEA]"
              name=""
              id=""
            >
              <option value="0">United Arab Emirated</option>
              <option value="1">Saudia Arabia</option>
              <option value="2">Kuwait</option>
            </select>
            <div className={`absolute top-0 flex flex-col justify-center bottom-0 ${lang == "en" ? "right-[16px]" : "left-[16px]"}`}>
                <Icon icon="icon-arrow-down" className="iconArrowDownCustomClass text-[#A6A6A6] text-[7px]" />
            </div>
           </div>
        </div>
      </div>
      <div
        className={`flex flex-wrap border-b mt-[51px] w-full  justify-start`}
      >
        <h3
          onClick={() => setproTab("activeOrder")}
          className={`${
            styles.tabStyle1
          } font-semibold text-[18px] text-[#212121]  pb-[16px] cursor-pointer border-b-[2px] ${
            proTab == "activeOrder"
              ? "border-b-[#08BFB0]"
              : "border-b-transparent"
          }  `}
        >
          Active Order
        </h3>
        <h3
          onClick={() => setproTab("pastOrder")}
          className={`${
            styles.tabStyle1
          } font-semibold text-[18px] text-[#212121] pb-[16px]  cursor-pointer border-b-[2px] ${
            proTab == "pastOrder"
              ? "border-b-[#08BFB0]"
              : "border-b-transparent"
          } `}
        >
          Past Order
        </h3>
      </div>
      <div className={`lg:mt-6 my-[24px] ${styles.productTabBody}`}>
        <div>
          {proTab == "activeOrder" && proTabShow && (
            <div className={``}>
              <div
                className={`relative lg:mb-[16px] my-[14px] px-[16px] pt-[16px] md:pt-[18px] pb-[16px] border-[1px] border-[#D5D5D5] rounded-[12px] ${styles.TrackingListInner}`}
              >
                <div className="md:border-b-[1px] border-[#EFEFEF] md:pb-[16px] lg:px-[10px] mb-[16px] lg:flex justify-between items-center">
                  <div className="lg:-mt-[5px]">
                    <h3
                      className={`text-[#212121] text-[18px] md:text-[18px] font-semibold leading-[24px] `}
                    >
                      Order :
                      <span className="text-[#08BFB0] font-normal ml-[10px] align-middle">
                        237462
                      </span>
                    </h3>
                    <h3
                      className={`mb-[5px]  text-[#212121] text-[18px] md:text-[18px] font-semibold leading-[24px]`}
                    >
                      Order Placed :
                      <span className="text-[#7A7A7A] font-normal ml-[10px] align-middle">
                        2/3/23, 12:00pm
                      </span>
                    </h3>
                  </div>
                  <div>
                    <span className="bg-[#EFEFEF] lg:w-[191px] lg:my[0] my-[20px] w-full border-[#08BFB0] border bg-transparent text-[#212121] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px]  font-semibold">
                      Track Order
                    </span>
                  </div>
                </div>
                <div className="lg:flex justify-between items-center md:mb-[10px]">
                  <div className="flex items-center basis-[400px] mb-[14px] lg:mb-[0px]">
                    <div className="flex">
                      <div className={`bg-[#F7F7F7] flex basis-[80px] h-[80px] rounded-[8px]  p-[7px] md:p-[20px] ${lang == "en" ? "mr-[10px] lg:mr-[20px]" : "ml-[10px] lg:ml-[20px]"}`}>
                        {/* <Image
                          src=""
                          alt=""
                          className="m-[auto] max-h-[66px] md:max-h-[56px]"
                        /> */}
                      </div>
                      <h2 className="lg:block hidden text-[16px] leading-[24px] text-[#212121] font-semibold flex lg:basis-[300px] md:basis-[30px]">
                        Premium Arabic Coffee Grounds Saudi Blend -250g
                      </h2>
                      <div className="flex flex-col flex-1">
                        <h2 className="lg:hidden block text-[16px] leading-[24px] text-[#212121] font-semibold flex lg:basis-[300px] md:basis-[30px]">
                          Premium Arabic Coffee Grounds Saudi Blend -250g
                        </h2>
                        <div className={`${styles.quantity} lg:hidden block`}>
                          <span className="text-[#7A7A7A] text-[16px] leading-[24px]">
                            Qty:{" "}
                            <strong className="text-[16px] font-semibold text-[#212121]">
                              3
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <div className={`${styles.quantity} lg:hidden block`}>
                       <span className="text-[#7A7A7A] text-[16px] leading-[24px]">Qty: <strong className="text-[16px] font-semibold text-[#212121]">3</strong></span>
                   </div> */}
                  </div>
                  <div className={`${styles.quantity} lg:block hidden`}>
                    <span className="text-[#7A7A7A] text-[16px] leading-[24px]">
                      Qty:{" "}
                      <strong className="text-[16px] font-semibold text-[#212121]">
                        3
                      </strong>
                    </span>
                  </div>
                  <div className="flex basis-[235px] justify-end">
                    <span className="bg-[#F2FBF4] lg:w-[206px] w-full border-[#F2FBF4] border text-[#212121] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px]  font-semibold">
                      We’re Processing it
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`relative lg:mb-[16px] md:my-[14px] px-[16px] pt-[16px] md:pt-[18px] pb-[12px] border-[1px] border-[#D5D5D5] rounded-[12px] ${styles.TrackingListInner}`}
              >
                <div className="md:border-b-[1px] border-[#EFEFEF] md:pb-[16px] lg:px-[10px] mb-[16px] lg:flex justify-between items-center">
                  <div className="-mt-[5px]">
                    <h3
                      className={`text-[#212121] text-[18px] md:text-[18px] font-semibold leading-[24px]`}
                    >
                      Order :
                      <span className="text-[#08BFB0] font-normal ml-[10px] align-middle">
                        237462
                      </span>
                    </h3>
                    <h3
                      className={`text-[#212121] text-[14px] md:text-[18px] font-semibold leading-[24px] `}
                    >
                      Order Placed :
                      <span className="text-[#7A7A7A] font-normal ml-[10px] align-middle">
                        2/3/23, 12:00pm
                      </span>
                    </h3>
                  </div>
                  <div>
                    <span className="bg-[#EFEFEF] lg:w-[191px] lg:my[0] my-[20px] w-full border-[#08BFB0] border bg-transparent text-[#212121] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px]  font-semibold">
                      Reorder
                    </span>
                  </div>
                </div>
                <div className="lg:flex justify-between items-center md:mb-[10px]">
                  <div className="flex items-center basis-[400px] mb-[14px] lg:mb-[0px]">
                    <div className="flex">
                      <div className={`bg-[#F7F7F7] flex basis-[80px] h-[80px] rounded-[8px]  p-[7px] md:p-[20px]  ${lang == "en" ? "mr-[10px] lg:mr-[20px]" : "ml-[10px] lg:ml-[20px]"} `}>
                        {/* <Image
                          src=""
                          alt=""
                          className="m-[auto] max-h-[66px] md:max-h-[56px]"
                        /> */}
                      </div>
                      <h2 className="lg:block hidden text-[16px] leading-[24px] text-[#212121] font-semibold flex lg:basis-[300px] md:basis-[30px]">
                        Premium Arabic Coffee Grounds Saudi Blend -250g
                      </h2>
                      <div className="flex flex-col flex-1">
                        <h2 className="lg:hidden block text-[16px] leading-[24px] text-[#212121] font-semibold flex lg:basis-[300px] md:basis-[30px]">
                          Premium Arabic Coffee Grounds Saudi Blend -250g
                        </h2>
                        <div className={`${styles.quantity} lg:hidden block`}>
                          <span className="text-[#7A7A7A] text-[16px] leading-[24px]">
                            Qty:{" "}
                            <strong className="text-[16px] font-semibold text-[#212121]">
                              3
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <div className={`${styles.quantity} lg:hidden block`}>
                       <span className="text-[#7A7A7A] text-[16px] leading-[24px]">Qty: <strong className="text-[16px] font-semibold text-[#212121]">3</strong></span>
                   </div> */}
                  </div>
                  <div className={`${styles.quantity} lg:block hidden`}>
                    <span className="text-[#7A7A7A] text-[16px] leading-[24px]">
                      Qty:{" "}
                      <strong className="text-[16px] font-semibold text-[#212121]">
                        3
                      </strong>
                    </span>
                  </div>
                  <div className="lg:flex basis-[235px] justify-end hidden">
                    <span className="bg-[#FFD8D9] lg:w-[206px] w-full border-[#FFD8D9] border text-[#FE3D40] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px]  font-semibold">
                      Order Cancellled
                    </span>
                  </div>
                </div>
                {/* <div className="flex justify-between items-center md:mb-[8px] mb-[39px]">
                  <div className="flex items-center basis-[400px]">
                    <div className="bg-[#F7F7F7] flex h-[80px] rounded-[4px] md:rounded-[14px] p-[7px] md:p-[20px]  md:mr-[10px] lg:mr-[20px]">
                      <Image
                        src=""
                        alt=""
                        className="m-[auto] max-h-[66px] md:max-h-[56px]"
                      />
                     </div>
                   <h2 className="text-[16px] leading-[24px] text-[#212121] font-semibold flex flex-wrap">Premium Arabic Coffee Grounds Saudi Blend -250g</h2>
                  </div>
                  <div className={`${styles.quantity}`}>
                    <span className="text-[#7A7A7A] text-[16px] leading-[24px]">Qty: <strong className="text-[16px] font-semibold text-[#212121]">3</strong></span>
                   </div>
                  <div className="flex basis-[235px]">
                    <span className="bg-[#FFD8D9] w-full border-[#FFD8D9] border text-[#FE3D40] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px]  font-semibold">
                       Order Cancellled
                    </span>
                  </div>
                </div> */}
                <div className="lg:flex justify-between items-center md:mb-[10px]">
                  <div className="flex items-center basis-[400px] mb-[14px] lg:mb-[0px]">
                    <div className="flex">
                      <div className={`bg-[#F7F7F7] flex basis-[80px] h-[80px] rounded-[8px]  p-[7px] md:p-[20px] ${lang == "en" ? "mr-[10px] lg:mr-[20px]" : "ml-[10px] lg:ml-[20px]"}`}>
                        {/* <Image
                          src=""
                          alt=""
                          className="m-[auto] max-h-[66px] md:max-h-[56px]"
                        /> */}
                      </div>
                      <h2 className="lg:block hidden text-[16px] leading-[24px] text-[#212121] font-semibold flex lg:basis-[300px] md:basis-[30px]">
                        Premium Arabic Coffee Grounds Saudi Blend -250g
                      </h2>
                      <div className="flex flex-col flex-1">
                        <h2 className="lg:hidden block text-[16px] leading-[24px] text-[#212121] font-semibold flex lg:basis-[300px] md:basis-[30px]">
                          Premium Arabic Coffee Grounds Saudi Blend -250g
                        </h2>
                        <div className={`${styles.quantity} lg:hidden block`}>
                          <span className="text-[#7A7A7A] text-[16px] leading-[24px]">
                            Qty:{" "}
                            <strong className="text-[16px] font-semibold text-[#212121]">
                              3
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <div className={`${styles.quantity} lg:hidden block`}>
                       <span className="text-[#7A7A7A] text-[16px] leading-[24px]">Qty: <strong className="text-[16px] font-semibold text-[#212121]">3</strong></span>
                   </div> */}
                  </div>
                  <div className={`${styles.quantity} lg:block hidden`}>
                    <span className="text-[#7A7A7A] text-[16px] leading-[24px]">
                      Qty:{" "}
                      <strong className="text-[16px] font-semibold text-[#212121]">
                        3
                      </strong>
                    </span>
                  </div>
                  <div className="flex basis-[235px]"></div>
                </div>
                <div className="flex flex-1 block lg:hidden">
                  <span className="bg-[#FFD8D9] w-full border-[#FFD8D9] border text-[#FE3D40] text-[14px] md:text-[18px] leading-[24px] inline-block rounded-[8px] text-center py-[8px] md:py-[16px]  font-semibold">
                    Order Cancellled
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {proTab == "pastOrder" && proTabShow && (
            <div
              className={`product-return ${styles.productTabDelivery} ${styles.borderBottom}`}
            >
              pastORder
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
