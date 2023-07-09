import React, { PropsWithChildren } from "react";
import { nunitoFont,tajawalFont } from '../../styles/fonts/fonts';
import { useRouter } from "next/router";

const WithoutHeaderFooter = ({ children }: PropsWithChildren) => {
	const router = useRouter();
	let language = router.locale;
  return (
    <>
		<div className={`${language == "ar" ? `${tajawalFont.className}` : `${nunitoFont.className}` } `}>
		  	<main>{children}</main>
		</div>
    </>
  );
};
export default WithoutHeaderFooter;