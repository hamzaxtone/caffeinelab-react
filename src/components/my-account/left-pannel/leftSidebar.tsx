import React, { useState, useEffect, Component, useRef } from "react";
import Link from "next/link";
import styles from '../../../styles/myaccount/myaccount.module.scss'
import Icon from '@/components/common/icons/icomoon';
import GetLang from '@/hooks/getLang';
import Image from 'next/image';

// svg
import profileAvatar from '../../../../src/assets/profile-avatar.svg'
import profile from '../../../../src/assets/profile.svg'
import orders from '../../../../src/assets/orders.svg'
import home from '../../../../src/assets/address.svg'
import logout from '../../../../src/assets/logout.svg'
import useIsDevice from "@/hooks/is-device";
// type Props = {
//     toggleState: (title: string) => void;
// }
type ChildProps = {
    SetPanel: (tabTitle: string,show: boolean) => void;
}

const LeftSidebar: React.FC<ChildProps> = (props:any) => {
    const lang = GetLang();
    const isIPadMobileScreen = useIsDevice("ipad-mobile");
    const isMobileScreen = useIsDevice("mobile");
    const isIpadScreen = useIsDevice("ipad");
    const isDesktop = useIsDevice("desktop");


//const LeftSidebar = (props:any) => {
    //const open = props.isActive;
    //const [ isShow , setIsShow ] = useState(open);
    const [myTab, setMyTab] = useState("profile");
    const toggleTab = (tab: any) => {
        setMyTab(tab);
        props.SetPanel(tab,true);
    }
      
   

  return (
    <div className={`${styles.leftWrapper} bg-[#FFFFFF] lg:py-[32px] lg:px-[16px] rounded-[12px]`}>
        <div className="lg:hidden flex-col justify-center items-center flex lg:my-[0] my-[40px]">
            <h2>Account</h2>
            <span className="my-[12px]">
            <Image 
               src={profileAvatar}
               alt='profile'
            />
            </span>
            <p>Testing User</p>
        </div>
        <ul>    
            <li onClick={() => toggleTab("profile")} className={ myTab == "profile" ? `${styles.active}` : ""}>
                <div className={`cursor-pointer flex justify-between items-center py-[12px] px-[8px] rounded-[8px]`}>
                    {/* <Icon icon="icon-heart" className="text-[#444B54] text-[10px] basis-[23px] items-center flex justify-center" /> */}
                    <div className="left flex">
                        <span className='w-[25px]'>
                            <Image  src={profile} alt="profile" />
                        </span>
                        <span className='text-[#212121] text-[18px] px-[8px]'>Profile</span>
                    </div>
                    <div className="right lg:hidden ">
                        <Icon className={`${lang == "en" ? "" : "rotate-180"} icon-menuback text-[#979797]`}></Icon>
                    </div>
                </div>
            </li>
            <li onClick={() => toggleTab("order")} className={ myTab == "order" ? `${styles.active}` : ""}>
                <div className={`cursor-pointer flex justify-between items-center py-[12px] px-[8px] rounded-[8px]`}>
                    {/* <Icon icon="icon-heart" className="text-[#444B54] text-[10px] basis-[23px] items-center flex justify-center " /> */}
                    <div className="left flex">
                        <span className='w-[25px]'>
                            <Image  src={orders} alt="orders" />
                        </span>
                        <span className='text-[#212121] text-[18px] px-[8px]'>Orders</span>
                    </div>
                    <div className="right lg:hidden ">
                        <Icon className={`${lang == "en" ? "" : "rotate-180"} icon-menuback text-[#979797]`}></Icon>
                    </div>
                </div>
            </li>
            <li onClick={() => toggleTab("address")} className={ myTab == "address" ? `${styles.active}` : ""}>
                <div className={`cursor-pointer flex justify-between items-center py-[12px] px-[8px] rounded-[8px]`}>
                    {/* <Icon icon="icon-heart" className="text-[#444B54] text-[10px] basis-[23px] items-center flex justify-center" /> */}
                    <div className="left flex">
                        <span className='w-[25px]'>
                            <Image  src={home} alt="home" />
                        </span>
                        <span className='text-[#212121] text-[18px] px-[8px]'>Address Management</span>
                    </div>
                    <div className="right lg:hidden ">
                    <Icon className={`${lang == "en" ? "" : "rotate-180"} icon-menuback text-[#979797]`}></Icon>
                    </div>
                </div>
            </li>
            <li onClick={() => toggleTab("logout")} className={styles.logoutMbl}>
                <div className={`cursor-pointer flex items-center py-[12px] px-[8px] rounded-[8px]`}>
                    {/* <Icon icon="icon-heart" className="text-[#444B54] text-[10px] basis-[23px] items-center flex justify-center " /> */}
                    <span className='w-[25px]'>
                    <Image  src={logout} alt="logout" />
                    </span>
                    <span className='text-[#212121] text-[18px] px-[8px]'>Log out</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default LeftSidebar