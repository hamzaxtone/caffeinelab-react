import React from "react";
import Link from "next/link";
import styles from "../../../styles/myaccount/myaccount.module.scss";
import Icon from "@/components/common/icons/icomoon";
import GetLang from "@/hooks/getLang";
import Image from "next/image";

// svg
import profile from "../../../../src/assets/profile-avatar.svg";
import camera from "../../../../src/assets/camera.svg";
import edit from "../../../../src/assets/edit.svg";

type ChildProps = {
  SetPanel: (tabTitle: string,show: boolean) => void;
}

const Profile: React.FC<ChildProps> = (props:any) => {
  const lang = GetLang();
//const Profile = () => {
  const toggleTab = (tab: any) => {
    props.SetPanel(tab,true);
  }
  return (
    <div
      className={`${styles.rightWrapper} ${styles.profileSec} bg-[#FFFFFF] py-[32px] lg:px-[32px] rounded-[12px]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] text-[#212121] leading-[28px] font-semibold">
          Profile
        </h2>
        <button
         onClick={() => toggleTab("editProfile")} 
        type="button" className="bg-[#F1F8FA] justify-center py-[10px] rounded-[56px] w-[160px] flex items-center text-[16px] text-[#212121] font-medium"> 
           {/* <i></i> */}
           <Image src={edit} alt="edit"></Image>
           <span className={`${lang == "en" ? "pl-[15px]" : "pr-[15px]"}`}>Edit Profile</span>
        </button>
      </div>
      <div className="flex justify-start lg:my-[40px] my-[20px]">
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
      <ul className={`${styles.profileDetailsList}`}>
        <li className="py-[16px]">
          <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
            Name
          </p>
          <h6 className="text-[18px] text-[#212121] font-semibold">
            Testing User
          </h6>
        </li>
        <li className="py-[16px] border-t-[0.5px] border-[#D8D8D8]">
          <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
            Phone Number
          </p>
          <h6 className="text-[18px] text-[#212121] font-semibold">
            000-000-0000
          </h6>
        </li>
        <li className="py-[16px] border-t-[0.5px] border-[#D8D8D8]">
          <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
            Email Address
          </p>
          <h6 className="text-[18px] text-[#212121] font-semibold">
            Usertesting@cofe.com
          </h6>
        </li>
        <li className="py-[16px] border-t-[0.5px] border-[#D8D8D8]">
          <p className="mb-[16px] text-[18px] leading-[26px] text-[#4D4D4D] font-normal">
            Birthday
          </p>
          <h6 className="text-[18px] text-[#212121] font-semibold">
            DD-MM-YYYY
          </h6>
        </li>
      </ul>
      <div className="flex justify-end">
        <button className="block lg:w-[35%] w-[100%] py-[8px] px-[15px] bg-transparent border border-[#08BFB0] rounded-[12px] text-[#212121] text-[16px] font-medium">
          Delete Option
        </button>
      </div>
    </div>
  );
};

export default Profile;
