import React, { PropsWithChildren } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
//import { Nunito } from 'next/font/google';
import { nunitoFont,tajawalFont } from '../../styles/fonts/fonts';
import { useRouter } from "next/router";


const Default = ({ children }: PropsWithChildren) => {
	const router = useRouter();
	let language = router.locale;
  return (
    <>
		<div className={`${language == "ar" ? `${tajawalFont.className}` : `${nunitoFont.className}` } `}>
		  <Header />
		  	<main>{children}</main>
		  <Footer />
		</div>
    </>
  );
};
export default Default;