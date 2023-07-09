import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '../../styles/form/form.module.scss';

import customerreach from '../../assets/images/customerreach.png';
import brandexposure from '../../assets/images/brandexposure.png';
import analyticsdashboard from '../../assets/images/analyticsdashboard.png';
import frontViewCoffee from '../../assets/images/frontViewCoffee.jpg';


const Terms: MyPage = () => {

	  const lang = GetLang();


	return (
	<> 
	<Head>
		<title>Cofeapp | Terms And Conditon</title>
	</Head>
	<div>
		<main
		className={`container`}
		>
			<div className='w-full  m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] mb-[40px]'>
				<h2 className='text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold'>Terms & Conditions</h2>
			</div>
            <h5 className="text-[#212121] text-[32px] leading-[38px] font-semibold mb-[16px]">General</h5>
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">This Application is owned and operated by the Company and its associates, related parties, successors, and assignees/agents (collectively hereinafter referred to as “Provider”, “us”, “we” or “our” </p>
            <br />
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The Terms and Conditions set below apply to: </p>
            <ul className='pl-[25px] list-disc mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Any person accessing and downloading the Application (“Visitor”); and</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Any person supplying in any way the following information: full name, email address, contact number, delivery address.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">As part of the registration process you will need to create an account, including a username & password. It is your responsibility to ensure that the information you provide is accurate, not misleading and relates to you.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">If for any reason you suspect that your username & password has been disclosed to or obtained by another party you should contact us immediately. Please note that we never contact users requesting them to confirm their username & password or other details.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The User’s personal information would not be shared with third parties.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Users are collectively referred to as “Users”, “you” in this Terms of Service.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Please read our customer data privacy policy, which explains how we protect your details, and how your personal information is governed by our privacy policy.</li>
            </ul>
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] uppercase">ELIGIBILITY FOR REGISTRATION & ACCOUNT SAFETY</h6>
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The user presents and warrants that: </p>
            <ul className='pl-[25px] list-disc mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">They are 18 years of age or older;</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">They have the capacity to form a binding contract;</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The User is not a person barred from accessing or using the software under the governing laws of the Terms and Conditions;</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The User’s access or use of the Software does not violate any applicable law or regulation;</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The User will keep their contact information accurate and up-to-date;.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The User may not use COFE App’s products for any illegal or unauthorized purpose nor may they, in the use of the Service, violate any laws in the jurisdiction (including but not limited to copyright laws).</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">A breach or violation of any of the Terms will result in an immediate termination of the Services.</li>
            </ul>
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">Services</h6>
            <ul className='pl-[25px] list-disc mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">At Counter Pick-up Service: Users will be able to order for pick up through the in-app services. Orders will be placed to COFE App’s Partners hereinafter referred to as “COFE Vendors” providing the User the option to pick up at the counter. The User has to collect their coffee from the counter of the COFE Vendor store they have selected. The COFE vendor/s will have the right to refuse delivery at their own discretion in this case there is no fee for such orders.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Car Pick-up Service: Users will be able to order for pick up through the in-app services through any of COFE Vendors offering this service and can receive their pickup order within their vehicles. For the order to be delivered to the User’s parked motor vehicle. All vehicles must be parked in a legal parking zone with close proximity to our COFE Vendor’s establishment. The User must disclose their car model, color and plate number. The COFE Vendor/s will have the right to refuse delivery at their own discretion in such case there is no fee for such orders.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The User is not a person barred from accessing or using the software under the governing laws of the Terms and Conditions;</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Delivery Services: The User has the option to place orders that will be delivered promptly. The time of delivery will be clearly stated in the order statement, and will be delivered by one of COFE App’s service providers to fulfill the delivery service as COFE App is not a logistic company.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Express Delivery: The User has the option of ordering from any COFE Vendor offering short distance (on foot) delivery within a 100 meter radius.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Office Delivery</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Hospital Room Delivery</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Hotel Room Delivery</li>
            </ul>
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D] mb-[32px]">All COFE App services aim to link the Users to COFE Vendors, by advertising food and beverages on behalf of the COFE Vendors. COFE App does not guarantee the quality of the food and/or beverages prepared by the COFE Vendors, nor does it guarantee that the food and/or beverages available match the information provided by the COFE Vendors displayed on the COFE App.</p>
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">COFE Credits</h6>
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Use of credits and other offers:</p>
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">COFE Credits is the Users in-app wallet.</p>
            <ul className='pl-[25px] list-disc mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Any Credit in your wallet is not redeemable for cash or any other currency or benefit.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We reserve the right to review, cancel and reverse any transaction in the event of fraud, a charge back of any transaction fee paid by credit card, or an error or mistake made by us. You hereby consent to the removal of credit from your wallet as required by us to reverse a canceled transaction.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We reserve the right to terminate and delete any accounts at our sole discretion at any time and without notice.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Users may use all credits for personal purpose/s only and not for any business, commercial or other use.</li>
            </ul>
		</main>
	</div>
    
</>
	);
};
export default Terms;
Terms.Layout = "Default";