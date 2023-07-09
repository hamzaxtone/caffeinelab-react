import React,{ useState, useEffect, Component, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/myaccount/myaccount.module.scss";
import Icon from "@/components/common/icons/icomoon";
import GetLang from "@/hooks/getLang";
import Image from "next/image";
import VerificationModal from '../../common/modal/phone-number-verification-modal/verificationModal'
// svg
import profile from "../../../../src/assets/profile-avatar.svg";
import camera from "../../../../src/assets/camera.svg";
import edit from "../../../../src/assets/edit.svg";

type ChildProps = {
  SetPanel: (tabTitle: string,show: boolean) => void;
}
const EditProfile: React.FC<ChildProps> = (props:any) => {
//const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
	const lang = GetLang();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const toggleTab = (tab: any) => {
    props.SetPanel(tab,true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className={`${styles.rightWrapper} ${styles.profileSec} bg-[#FFFFFF] py-[32px] lg:px-[32px] rounded-[12px]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] text-[#212121] leading-[28px] font-semibold">
          Edit Profile
        </h2>
      </div>
      <div className="flex justify-start my-[40px]">
        <div className="relative border-[5px] rounded-[50%] border-[#d3d3d3]">
          <Image
            src={profile}
            alt=""
            className="w-[112px] h-[112px] rounded-[50%]"
          />
          <label
            html-for="upload"
            className={`absolute bottom-[0px] ${lang == "en" ? "right-[0px]" : "left-0"}  w-[32px] h-[32px] rounded-[50px] bg-[#08BFB0] flex flex-col justify-center items-center`}
          >
            <input type="file" id="upload" className="hidden flex" />
            <Image src={camera} alt="" />
          </label>
        </div>
        <div className="flex flex-col items-start justify-center px-[24px]">
          <h2 className="text-[24px] font-semibold">Testing user</h2>
          <p className="text-[14px] text-[#212121]">Customer</p>
        </div>
      </div>
      <div className="flex flex-wrap px-[16px]">
        <div className="inputFormGroup mb-[15px]  w-full">
          <label
            htmlFor="Name"
            className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
          >
            Name
          </label>
          <div className="relative flex items-end">
            <input
              type="text"
              id="Name"
              className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Testing User"
            />
          </div>
          {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                    Invalid Expiry Date
               </span> */}
        </div>
        <div className="inputFormGroup mb-[15px]  w-full">
          <label
            htmlFor="Number"
            className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
          >
            Phone Number
          </label>
          <div className="relative flex items-end">
            <input
              type="number"
              id="Number"
              className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="000-000-0000"
            />
          </div>
          {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                    Invalid Expiry Date
               </span> */}
        </div>
        <div className="inputFormGroup mb-[15px]  w-full">
          <label
            htmlFor="Email Address"
            className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
          >
            Email Address
          </label>
          <div className="relative flex items-end">
            <input
              type="email"
              id="EmailAddress"
              className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Usertesting@cofe.com"
            />
          </div>
          {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                    Invalid Expiry Date
               </span> */}
        </div>
        <div className="inputFormGroup mb-[15px]  w-full">
          <label
            htmlFor="Birthday"
            className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white"
          >
            Birthday
          </label>
          <div className="relative flex items-end">
            <input
              type="date"
              id="Birthday"
              className="pl-[10px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="DD-MM-YYYY"
            />
          </div>
          {/* <span className="errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal">
                    Invalid Expiry Date
               </span> */}
        </div>
        <div className="flex flex-row lg:justify-end  lg:my-[40px] my-[20px] lg:flex-0 flex-1  w-full">
          <button
          onClick={() => toggleTab("profile")} 
            type="button"
            className={`${lang == "en" ? "lg:ml-[6px] ml-[3px]" : "lg:mr-[6px] mr-[3px]"} lg:mr-[6px] block lg:w-[160px] w-full py-[6px] px-[15px] bg-transparent border border-[#08BFB0] rounded-[12px] text-[#212121] text-[16px] font-medium lg:order-1 order-2 `}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={openModal}
            className={`${lang == "en" ? "lg:ml-[6px] mr-[3px]" : "lg:mr-[6px] mr-[3px]"} block lg:w-[160px] w-full py-[6px] px-[15px] bg-[#08BFB0] border border-[#08BFB0] rounded-[12px] text-[#ffffff] text-[16px] font-medium lg:order-2 order-1 lg:mb-[0]`}
          >
            Save
          </button>
        </div>
      </div>
      <VerificationModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default EditProfile;
