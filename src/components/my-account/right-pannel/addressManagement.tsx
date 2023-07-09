import styles from "../../../styles/myaccount/myaccount.module.scss";
import Head from "next/head";
import React, { useState, useEffect, Component, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GetLang from "@/hooks/getLang";
import Home from "../../../assets/home.svg";
import Office from "../../../assets/office.svg";
import Icon from "@/components/common/icons/icomoon";
import { bool } from "sharp";

const AddressManagement = () => {
  const lang = GetLang();
  const [selectedOption, setSelectedOption] = useState(false);

  const handleChange = (e: any) => {

    const checkValue = e?.target.value;
    if (selectedOption == false && checkValue == "default-radio-3") {
      setSelectedOption(true);
    } else {
      setSelectedOption(false);
    }
  };

  return (
    <div>
      <div className="">
        <div
          className={`${styles.addressManagementWrapper} bg-[#FFFFFF] py-[32px] lg:px-[32px]  rounded-[12px]`}
        >
          <div className="lg:flex justify-between items-center">
            <h2 className="text-[24px] text-[#212121] leading-[28px] font-semibold md:mb-[0] mb-[10px]">
              Address Management
            </h2>
            <div className="lg:flex items-center">
              <p className={`text-[#7A7A7A] text-[14px] ${lang == "en" ? "lg:pr-[8px]" : "lg:pl-[8px]"} items-center lg:mb-[0] mb-[10px]`}>
                Sort by
              </p>
              <div className="relative">
              <select
                className="appearance-none lg:w-[150px] w-full py-[12px] pr-[20px] pl-[8px] rounded-[8px] text-[#212121] font-semibold  border border-[#EAEAEA]"
                name=""
                id=""
              >
                <option value="0">Newest</option>
                <option value="1">Oldest</option>
              </select>
                <div className={`absolute top-0 flex flex-col justify-center bottom-0 ${lang == "en" ? "right-[16px]" : "left-[16px]"}`}>
                  <Icon icon="icon-arrow-down" className="iconArrowDownCustomClass text-[#A6A6A6] text-[7px]" />
              </div>
              </div>
            </div>
          </div>
          <ul className="pt-[40px]">
            <li className="lg:flex items-center justify-between mb-4 px-[20px] py-[15px] border border-[#EAEAEA] rounded-[10px]">
              <div className="flex lg:flex-row lg:items-start flex-col">
                <div className="radio-style-1">
                  <label html-for="default-radio-1" className="container flex ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      className=""
                      name="radio"
                      onChange={handleChange}
                    />
                    <span className="checkmark"> </span>
                    <div className="lg:flex-row md:flex lg:items-center md:flex-col">
                      <div className="flex">
                        <Image src={Home} alt="home" className="inline" />
                        <span className="text-[18px] leading-[26px]  text-[#212121] px-[10px]">
                          Home
                        </span>
                      </div>
                      <span className="text-[16px] lg:my-[0] my-[13px]  lg:leading-[27px] leading-[26px] inline-block  text-[#4D4D4D] lg:pl-[10px] md:mb-[13px]">
                        Goldcrest Views 1, Apartment 2501, JLT, Cluster V
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex">
                <Link
                  href=""
                  className="text-[#08BFB0] lg:text-[16px] text-[14px]"
                >
                  Edit
                </Link>
                <span className="text-[#08BFB0] px-[16px] lg:text-[16px] text-[14px]">
                  |
                </span>
                <Link
                  href=""
                  className="text-[#08BFB0] lg:text-[16px] text-[14px]"
                >
                  Delete
                </Link>
              </div>
            </li>
            <li className="lg:flex items-center justify-between mb-4 px-[20px] py-[15px] border border-[#EAEAEA] rounded-[10px]">
              <div className="flex lg:flex-row lg:items-start flex-col">
                <div className="radio-style-1">
                  <label html-for="default-radio-2" className="container flex ">
                    <input
                      id="default-radio-2"
                      type="radio"
                      className=""
                      name="radio"
                      onChange={handleChange}
                    />
                    <span className="checkmark"> </span>
                    <div className="lg:flex-row md:flex lg:items-center md:flex-col">
                      <div className="flex">
                        <Image src={Office} alt="Office" className="inline" />
                        <span className="text-[18px] leading-[26px]  text-[#212121] px-[10px]">
                          Office
                        </span>
                      </div>
                      <span className="text-[16px] lg:my-[0] my-[13px]  lg:leading-[27px] leading-[26px] inline-block  text-[#4D4D4D] lg:pl-[10px] md:mb-[13px]">
                        Goldcrest Views 1, Apartment 2501, JLT, Cluster V
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex">
                <Link href="" className="text-[#08BFB0] text-[16px]">
                  Edit
                </Link>
                <span className="text-[#08BFB0] px-[16px] text-[16px]">|</span>
                <Link href="" className="text-[#08BFB0] text-[16px]">
                  Delete
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex items-center my-[15px]">
            <hr className="w-full" />
            <span className="px-[25px] text-[#212121] text-[16px] font-semibold dark:text-white">
              or
            </span>
            <hr className="w-full" />
          </div>

          <div className={selectedOption ? "active" : ""}>
            <div
              className={`lg:flex items-center justify-between mb-4 px-[20px] py-[15px]`}
            >
              <div className="lg:flex items-center justify-between w-full">
                <div className="radio-style-1">
                  <label html-for="default-radio-3" className="container flex ">
                    <input
                      id="default-radio-3"
                      type="radio"
                      className=""
                      value="default-radio-3"
                      name="radio"
                      onChange={handleChange}
                    />
                    <span className="checkmark"> </span>
                    <span className="text-[#212121] text-[18px] font-semibold">
                      Select from existing Addresses
                    </span>
                  </label>
                </div>
                <div className={`flex ${selectedOption ? "block" : "hidden"}`}>
                  <button
                    type="button"
                    className="bg-[#F1F8FA] text-[#212121] lg:w-[202px] w-full lg:my-[0] my-[20px] px-[12px] py-[8px] text-[16px] rounded-[50px]"
                  >
                    Pick Location on map
                  </button>
                </div>
              </div>
            </div>
            {selectedOption ? (
              <div className="flex flex-wrap px-[16px]">
                <div className={`inputFormGroup mb-[15px] lg:w-1/2 w-full ${lang == "en" ? "lg:pr-[8px]" : "lg:pl-[8px]"}`}>
                  <label
                    htmlFor="Unit No"
                    className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
                  >
                    Unit No
                  </label>
                  <div className="relative flex items-end">
                    <input
                      type="number"
                      id="Unit No"
                      className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0000"
                    />
                  </div>
                  {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                    Invalid Expiry Date
               </span> */}
                </div>
                <div className={`inputFormGroup mb-[15px] lg:w-1/2 w-full ${lang == "en" ? "lg:pl-[8px]" : "lg:pr-[8px]"}`}>
                  <label
                    htmlFor="Floor"
                    className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
                  >
                    Floor
                  </label>
                  <div className="relative flex items-end">
                    <input
                      type="number"
                      id="cardNumber"
                      className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Floor number"
                    />
                  </div>
                  {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                        Security Code
                    </span> */}
                </div>
                <div className={`inputFormGroup mb-[15px] lg:w-1/2 w-full ${lang == "en" ? "lg:pr-[8px]" : "lg:pl-[8px]"}`}>
                  <label
                    htmlFor="Building"
                    className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
                  >
                    Building
                  </label>
                  <div className="relative flex items-end">
                    <input
                      type="number"
                      id="Building"
                      className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Building number"
                    />
                  </div>
                  {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                         Invalid Expiry Date
                   </span> */}
                </div>
                <div className={`inputFormGroup mb-[15px] lg:w-1/2 w-full ${lang == "en" ? "lg:pl-[8px]" : "lg:pr-[8px]"}`}>
                  <label
                    htmlFor="Area"
                    className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
                  >
                    Area
                  </label>
                  <div className="relative flex items-end">
                    <input
                      type="number"
                      id="cardNumber"
                      className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Area"
                    />
                  </div>
                  {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                      Security Code
                 </span> */}
                </div>
                <div className={`inputFormGroup mb-[15px] lg:w-1/2 w-full ${lang == "en" ? "lg:pr-[8px]" : "lg:pl-[8px]"}`}>
                  <label
                    htmlFor="Landmark"
                    className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
                  >
                    Landmark
                  </label>
                  <div className="relative flex items-end">
                    <input
                      type="text"
                      id="Landmark"
                      className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Landmark "
                    />
                  </div>
                  {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                          Invalid Expiry Date
                </span> */}
                </div>
                <div className={`inputFormGroup mb-[15px] lg:w-1/2 w-full ${lang == "en" ? "lg:pl-[8px]" : "lg:pr-[8px]"}`}>
                  
                  <label
                    htmlFor="Tags"
                    className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
                  >
                    Tags
                  </label>
                  <div className={`${styles.tagSec} flex flex-wrap mb-[10px]`}>
                     <div className={`flex items-center ${styles.tag} bg-[#F1F8FA] w-fit py-[10px] px-[16px] justify-center rounded-[50px] ${lang == "en" ? "" : ""}`}>
                        <Image src={Home} alt="home" className="inline" width={17} height={16} />
                        <span className="text-[18px] leading-[24px] text-[16px] text-[#4D4D4D] px-[10px]">
                          Home
                        </span>
                     </div>
                     <div className={`flex items-center ${styles.tag} bg-[#F1F8FA] w-fit py-[10px] px-[16px] justify-center rounded-[50px] ${lang == "en" ? "" : ""}`}>
                        <Image src={Office} alt="office" className="inline" width={17} height={16} />
                        <span className="text-[18px] leading-[24px] text-[16px] text-[#4D4D4D] px-[10px]">
                          office
                        </span>
                     </div>
                     <div className={`flex items-center ${styles.tag} bg-[#F1F8FA] w-fit py-[10px] px-[16px] justify-center rounded-[50px] ${lang == "en" ? "" : ""}`}>
                        <Image src={Home} alt="home" className="inline" width={17} height={16} />
                        <span className="text-[18px] leading-[24px] text-[16px] text-[#4D4D4D] px-[10px]">
                          Custom
                        </span>
                     </div>
                  </div>
                  <div className="relative flex items-end">
                    <input
                      type="text"
                      id="Tags"
                      className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="e.g Sheikh's house"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:my-[40px] my-[15px] lg:flex-0 flex-1  w-full">
                  <button
                    type="button"
                    className={`${lang == "en" ? "lg:mr-[6px]" : "lg:ml-[6px]"} block lg:w-[120px] w-full py-[6px] px-[15px] bg-transparent border border-[#08BFB0] rounded-[12px] text-[#212121] text-[16px] font-medium lg:order-1 order-2`}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="lg:ml-[6px] block lg:w-[190px] w-full py-[6px] px-[15px] bg-[#08BFB0] border border-[#08BFB0] rounded-[12px] text-[#ffffff] text-[16px] font-medium lg:order-2 order-1 lg:mb-[0] mb-[15px]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressManagement;
