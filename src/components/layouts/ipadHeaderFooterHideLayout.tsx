import React, { PropsWithChildren } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
//import { Nunito } from 'next/font/google';
import { nunitoFont,tajawalFont } from '../../styles/fonts/fonts';
import { useRouter } from "next/router";
import useIsDevice from "@/hooks/is-device";


const IpadHeaderFooterHideLayout = ({ children }: PropsWithChildren) => {
    const isIPadMobileScreen = useIsDevice("ipad-mobile");
	const router = useRouter();
	let language = router.locale;
  return (
    <>
		<div className={`${language == "ar" ? `${tajawalFont.className}` : `${nunitoFont.className}` } `}>
		  { !isIPadMobileScreen &&
            <Header />
          }
		  	<main>{children}</main>
          { !isIPadMobileScreen &&
            <Footer />
          }
		</div>
    </>
  );
};
export default IpadHeaderFooterHideLayout;