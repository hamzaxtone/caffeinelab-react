import React from "react";
import Image from "next/image";
import Icon from "@/components/common/icons/icomoon";
import GetLang from "@/hooks/getLang";
import styles from "../../styles/trackOrder/trackOrder.module.scss";

import productImage from "../../assets/images/productImage.png";
import outDelivery from "../../assets/outDelivery.svg";
import paidWith from "../../assets/paidWith.svg";

const OutforDelivery = () => {
  const lang = GetLang();
  return (
    <div className="flex flex-wrap -mx-[15px]">
      <div className="w-[100%] lg:w-[59.5%] md:w-[100%] p-[15px] ">
        <div className="bg-white rounded-[12px] px-[0px] lg:px-[24px] py-[0px] lg:py-[30px]">
          <div className="flex justify-center items-center py-[10px]">
            <div className="bg-[#D8D8D833] w-[112px] h-[112px] flex flex-col justify-center items-center rounded-[50%]">
              <Image src={outDelivery} alt="outDelivery" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h6 className="text-[#212121] text-[24px] font-semibold">
              Out for Delivery
            </h6>
            <span className="text-[#4D4D4D] text-[18px] font-medium leading-[18px]">
              Next: Out for Delivery
            </span>
          </div>
          <div className="flex justify-between my-[7px] stepper">
            <div className="step w-[162px] h-[6px] rounded-[8px] bg-[#08BFB0] ml-[0] mx-[8px] active"></div>
            <div className="step w-[162px] h-[6px] rounded-[8px] bg-[#08BFB0]  mx-[8px] active"></div>
            <div className="step w-[162px] h-[6px] rounded-[8px] bg-[#08BFB0]  mx-[8px]  active"></div>
            <div className="step w-[162px] h-[6px] rounded-[8px] bg-[#86CDD733] mx-[8px] mr-[0]"></div>
          </div>
          <div className="w-full my-[30px]">
            <button className="block w-full py-[12px] px-[15px] bg-[#08BFB0] border border-[#08BFB0] rounded-[12px] text-[#FFFFFF] text-[16px] font-medium">
              Track Order
            </button>
          </div>
          <div className={`${styles.orderDetailsWrapper}`}>
            <h2 className="text-[24px] text-[#212121] font-semibold leading-[28px]">
              Order Details
            </h2>
          </div>
          <ul className={`${styles.orderDetailsList}`}>
            <li className="py-[16px]">
              <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
                Order Number
              </p>
              <h6 className="text-[18px] text-[#212121] font-semibold">
                2749hB
              </h6>
            </li>
            <li className="py-[16px] border-t-[0.5px] border-[#D8D8D8]">
              <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
                Delivering to
              </p>
              <h6 className="text-[18px] text-[#212121] font-semibold">
                Goldcrest Views 1, Apartment 2501, JLT, Cluster V
              </h6>
            </li>
            <li className="py-[16px] border-t-[0.5px] border-[#D8D8D8]">
              <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
                Est. Delivery Date
              </p>
              <h6 className="text-[18px] text-[#212121] font-semibold">
                Monday 23rd July 2022
              </h6>
            </li>
          </ul>
          <div className="w-full my-[30px]">
            <button className="block w-full py-[12px] px-[15px] bg-transparent border border-[#08BFB0] rounded-[12px] text-[#212121] text-[16px] font-medium">
              View Tax Invoice
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[40.5%] md:w-[100%] p-[15px]">
        {/* your Order */}
        <div className="bg-white rounded-[12px] mb-[32px] px-[0px] lg:px-[24px] py-[0px] lg:py-[30px]">
          <h3 className="text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold mb-[22px] dark:text-white">
            Your Order
          </h3>
          <ul className={`flex flex-wrap items-center`}>
            <li className="w-full py-[10px]">
              <div className="flex items-center">
                <div className="flex flex-col justify-center items-center productImg lg:w-2/5 md:w-[130px] h-[124px] bg-[#f7f7f7] border border-[#d5d5d5] rounded-[13px]">
                  <Image
                    src={productImage}
                    alt=""
                    className="m-auto max-h-[124px] max-w[100%] object-contain w-auto object-center"
                  />
                </div>
                <div
                  className={`productDetail w-auto ${
                    lang == "en" ? "pl-[24px]" : "pr-[24px]"
                  }  flex items-start flex-row-reverse lg:flex-row`}
                >
                  <span className="mr-[0px] lg:mr-[14px] ml-[14px] lg:ml-[0px] quantity text-[#212121] text-[16px] font-bold mb-[15px] dark:text-white">
                    3X
                  </span>
                  <div className="flex flex-col ">
                    <div className="proTitle text-[#212121] text-[16px] font-semibold mb-[5px] dark:text-white">
                      Premium Arabic Coffee Grounds Saudi
                    </div>
                    <div className="proMeta text-[#212121] text-[14px] font-normal mb-[8px] dark:text-white">
                      Blend 250g
                    </div>
                    <div className="proPrice text-[#212121] text-[16px] font-bold dark:text-white">
                      100.00 SAR
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* your Order */}
        {/* Order Summary */}

        <div className="bg-white rounded-[12px] mb-[32px] px-[0px] lg:px-[24px] py-[0px] lg:py-[30px]">
          <ul>
            <li className="flex items-center mb-[30px]">
              <div className="w-full w-1/2">
                <h3 className="text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold  dark:text-white">
                  Order Summary
                </h3>
              </div>
              <div className="w-full w-1/2 text-right">
                <p className="text-[#212121] text-[16px] dark:text-white">
                  Sub Total (3 items)
                </p>
              </div>
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="w-full w-1/2">
                <h3 className="text-[#4D4D4D] font-semibold text-[16px] lg:text-[20px] md:text-[18px] dark:text-white">
                  Sub Total (3 items)
                </h3>
              </div>
              <div className="w-full w-1/2 text-right">
                <p className="text-[#212121] font-semibold text-[16px] lg:text-[20px] md:text-[18px] dark:text-white">
                  SAR 300
                </p>
              </div>
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="w-full w-1/2">
                <h3
                  className={`text-[#08BFB0] font-semibold text-[16px] lg:text-[20px] md:text-[18px] dark:text-white`}
                >
                  GET6
                </h3>
              </div>
              <div className="w-full w-1/2 text-right">
                <p className="text-[#08BFB0] font-semibold text-[16px] lg:text-[20px] md:text-[18px] dark:text-white">
                  SAR 10
                </p>
              </div>
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="w-full w-1/2">
                <h3 className="text-[#4D4D4D] font-semibold text-[16px] lg:text-[20px] md:text-[18px] dark:text-white">
                  Delivery Fee
                </h3>
              </div>
              <div className="w-full w-1/2 text-right">
                <p className="text-[#212121] font-semibold text-[16px] lg:text-[20px] md:text-[18px] dark:text-white">
                  SAR 26
                </p>
              </div>
            </li>
            <li className="flex items-center py-[22px]">
              <div className="w-full">
                <hr />
              </div>
            </li>
            <li className="flex items-center mb-[18px]">
              <div className="w-full w-1/2">
                <h3 className="text-[#4D4D4D] font-semibold text-[18px] lg:text-[24px] md:text-[18px] dark:text-white">
                  Order Total
                </h3>
              </div>
              <div className="w-full w-1/2 text-right">
                <h3 className="text-[#212121] font-semibold text-[18px] lg:text-[24px] md:text-[18px] dark:text-white">
                  SAR 326
                </h3>
              </div>
            </li>
            <li className="flex items-center mb-[18px]">
              <div className="w-full">
                <hr />
              </div>
            </li>
          </ul>
          <div className="flex justify-end">
            <div className="flex items-center justify-between">
              <p className="mr-[5px] text-[#212121] text-[14px]">Paid with </p>
              <Image className="mr-auto" src={paidWith} alt={paidWith} />
            </div>
          </div>
          <div className="flex justify-center my-[16px]">
            <a
              href=""
              className="underline text-[16px] text-[#212121] font-normal"
            >
              Need help? Chat with us
            </a>
          </div>
        </div>
        {/* Order Summary */}
      </div>
    </div>
  );
};

export default OutforDelivery;
