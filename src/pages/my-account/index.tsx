import { MyPage } from "@/components/layouts/types";
import Head from "next/head";
import React, { useState, useEffect, Component, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from '@/components/common/icons/icomoon';
import GetLang from '@/hooks/getLang';
import styles from "../../styles/myaccount/myaccount.module.scss";

// components
import AddressManagement from '../../components/my-account/right-pannel/addressManagement';
import Orders from '../../components/my-account/right-pannel/orders';
import Profile from '../../components/my-account/right-pannel/profile';
import LeftPannel from '../../components/my-account/left-pannel/leftSidebar';


import productImage from "../../assets/images/productImage.png";
import paidWith from "../../assets/paidWith.svg";
import productOtherImage from "../../assets/images/productOtherImage.jpg";
import delivery from "../../assets/images/svg/delivery.svg";
import Back from "../../assets/back-menu.svg";
import close from "../../assets/close-circle.svg";
import logo from "../../assets/Logo.svg";
import EditProfile from "@/components/my-account/right-pannel/editProfile";
import useIsDevice from "@/hooks/is-device";

const MyAccount: MyPage = () => {
  const isIPadMobileScreen = useIsDevice("ipad-mobile");
  const isMobileScreen = useIsDevice("mobile");
  const isIpadScreen = useIsDevice("ipad");
  const isDesktop = useIsDevice("isdesktop");
  const lang = GetLang();
  const [accountTab, setAccountTab] = useState("profile");
  var sooo = "show";
  if( isIPadMobileScreen ){
    sooo = "hide";
  }
//console.log(isDesktop);
  const [accountTabShow, setAccountTabShow] = useState( true );

  const [panelTabShow, setpanelTabShow] = useState( true );
  const [checked, setchecking] = useState( true );

  useEffect(() => {
    if(isIPadMobileScreen && checked){
      setAccountTabShow(false);
      setchecking(false);
    }
  },[isIPadMobileScreen,checked]);
  const SetPanel = (tabTitle: string,show: boolean) => {
    setAccountTabShow(show);
    if( isIPadMobileScreen && tabTitle ==  "main-account"){
      setpanelTabShow(true);
    }else{
      setpanelTabShow(false);
    }
   if(isDesktop){
    setpanelTabShow(true);
   }
    //setAccountTabShow();

    //setAccountTabShow(show);
    setAccountTab(tabTitle);
    //console.log("default");
  }

  return (
    
    <>
      <Head>
        <title>Cofeapp | My Account</title>
      </Head>
      <div className={`${styles.myaccountWrapper}bg-[#ffffff] lg:bg-[#FAFBFB] md:bg-[#ffffff]`}>
        <div className="container">
            <h2 className="lg:block hidden text-[24px] text-[#212121] font-semibold pt-[38px] pb-[24px]">My Account</h2>
             {/* mbl header */}
             <div className={`${styles.mblHeader} lg:hidden block flex justify-between items-center`}>
                 <Link href="" onClick={()=>SetPanel("main-account",false)}>
                    <Icon className={`${lang == "en" ? "rotate-180" : "rotate-360"} icon-menuback`} ></Icon>
                 </Link>
                 <Link href="">
                     <Image  src={logo} alt="logo" width={69} height={28}></Image>
                 </Link>
                <div>
                
                 {panelTabShow == true &&
                  <Link href="">
                    <Image className={``} src={close} alt="Back" onClick={()=>SetPanel("main-account",false)}></Image>
                  </Link>
                  }
                </div>
             </div>
             {/* mbl header */} 
            <div className="flex flex-wrap -mx-[15px]">
              {panelTabShow == true &&
                <div className={`${styles.leftpannelwrapper} w-[100%] lg:w-[24%] md:w-[100%] p-[15px]`}>
                    <LeftPannel SetPanel={(tabTitle,show) => SetPanel(tabTitle,show)} />
                </div>
              }

                <div className={`${styles.rightpannelWrapper} w-[100%] lg:w-[76%] md:w-[100%] p-[15px] `}>
                    {accountTabShow}
                    {accountTabShow == true && 
                    <>
                      {accountTab == "profile" && 
                        <Profile SetPanel={(tabTitle,show) => SetPanel(tabTitle,show)} />
                      }
                      {accountTab == "editProfile" && 
                        <EditProfile SetPanel={(tabTitle,show) => SetPanel(tabTitle,show)} />
                      }
                      {accountTab == "order" && 
                        <Orders />
                      }
                      {accountTab == "address" && 
                        <AddressManagement />
                      }
                    </>
                    }
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default MyAccount;
MyAccount.Layout = "IpadHeaderFooterHideLayout";
