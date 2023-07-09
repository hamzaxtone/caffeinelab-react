import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '../../styles/form/form.module.scss';




const PrivacyAndPolicy: MyPage = () => {

	  const lang = GetLang();


	return (
	<> 
	<Head>
		<title>Cofeapp | Privacy Policy</title>
	</Head>
	<div>
		<main
		className={`container`}
		>
			<div className='w-full  m-[auto] pt-[50px] md:pt-[40px] lg:pt-[60px] mb-[40px]'>
				<h2 className='text-[#212121] text-[32px] lg:text-[56px] leading-[38px] lg:leading-[67px] font-bold'>Privacy & Policy</h2>
			</div>
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] uppercase font-bold">OUR APPROACH TO PRIVACY</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">COFE APP UK LTD, COFE DISTRICT LIMITED and any affiliate or related party to these companies and the group of companies (“COFE App“, “we“, “our” or “us“) is committed to protecting and respecting your privacy. This Privacy Policy sets out how we collect, store, process, transfer, share and use data that identifies or is associated with you (“personal information“) and information regarding our use of cookies and similar technologies.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We operate an online marketplace for ordering coffee and food products (the “COFE App Service“) which COFE App makes available as a service to vendors through our website at www.cofeapp.com and to end users through our mobile application that is available to download on your device (the “App“).</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">This Privacy Policy applies to the COFE App Service (including the App).</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Please ensure that you have read this Privacy Policy and understood how we collect, store, use and disclose your personal information before accessing or using the COFE App Service.</li>
            </ul>
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] uppercase">WHO IS RESPONSIBLE FOR THE USE OF YOUR PERSONAL INFORMATION</h6>
            <ul className='pl-[25px] list-disc mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">COFE App is the controller of the personal information we hold about you in connection with your use of the COFE App Service. This means that we determine and are responsible for how your personal information is used.</li>
            </ul>
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">PERSONAL INFORMATION WE COLLECT FROM YOU WHEN YOU USE THE SERVICE, AND HOW WE USE IT</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We collect personal information that you voluntarily submit directly to us when you use the COFE App Service. This can include information you provide to us when you set up an account on the COFE App Service, fill in a form on the COFE App Service, purchase a product, correspond with us by phone, e-mail or otherwise, subscribe to our mailing lists, newsletters or other forms of marketing communications, or use some other feature of the COFE App Service.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">This information may include, for example, your contact and payment details. If you choose not to provide such personal information, we may not be able to provide those parts of the COFE App Service to you or respond to your other requests.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The table at Annex 1 [link to Annex 1 below] sets out in detail the categories of personal information we collect about you and how we use that information when you use the COFE App Service, as well as the legal basis which we rely on to process the personal information and recipients of that personal information.</li>
            </ul>
            
            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">INFORMATION WE COLLECT ABOUT YOU AUTOMATICALLY</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We also automatically collect personal information indirectly about how you access and use the COFE App Service, and information about the device you use to access the COFE App Service when you visit our COFE App Service, read our emails, or otherwise engage with us. We use this information to provide you the features and functionality of the COFE App Service, to monitor and improve the COFE App Service and to develop new products and services. We typically collect this information through a variety of tracking technologies, including cookies, web beacons, embedded scripts, location-identifying technologies, file information, and similar tracking technologies.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The table at Annex 2 [link to Annex 2 below] sets out in detail the categories of personal information we collect about you automatically and how we use that information. The table also lists the legal basis which we rely on to process the personal information and recipients of that personal information. For more information on cookies and other tracking technologies we use, please see Section 10 below.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We may link or combine the personal information we collect about you and the information we collect automatically. This allows us to provide you with a personalised experience regardless of how you interact with us.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We may anonymise and aggregate any of the personal information we collect (so that it does not directly identify you). We may use anonymised information for purposes that include testing our IT systems, research, data analysis, improving the COFE App Service and developing new products and features. We may also share such anonymised and aggregated information with others.</li>
            </ul>

            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">HOW LONG WILL WE STORE YOUR PERSONAL INFORMATION</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We will only retain your personal information for as long as necessary to fulfil the purposes we collected it for, including for the purposes of our legitimate business interests and satisfying any legal or reporting requirements.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorised use or disclosure of your personal information, the purposes for which we process your personal information and the applicable legal requirements.</li>
            </ul>

            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">RECIPIENTS OF PERSONAL INFORMATION</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We may share your personal information with the following (as required in accordance with the purposes set out in Annexes 1 and 2):</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Third party food and beverage provider partners: we may share your personal information with third party partners such as food and beverage providers in order to facilitate the orders your place with the COFE App Service.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Service providers and advisors: we may share your personal information with third party vendors and other service providers that perform services for us or on our behalf, which may include providing professional services, such as legal and accounting services, mailing, email or chat services, fraud prevention, web hosting, or providing analytic services.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Purchasers and third parties in connection with a business transaction: your personal information may be disclosed to third parties in connection with a transaction, such as a merger, sale of assets or shares, reorganisation, financing, change of control or acquisition of all or a portion of our business.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Law enforcement, regulators and other parties for legal reasons: we may share your personal information with third parties as required by law or if we reasonably believe that such action is necessary to (i) comply with the law and the reasonable requests of law enforcement; (ii) detect and investigate illegal activities and breaches of agreements, including our Terms of Service; and/or (iii) exercise or protect the rights, property, or personal safety of COFE App, its users or others.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Business Partners:we may also share your personal information with our business partners so that they can provide services, contact you directly with special offers, discounts or other benefits. In any event, we will take reasonable precautions that all third parties listed above are obligated to keep confidential any of the personal data that they receive from us.</li>

            </ul>

            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">MARKETING AND ADVERTISING</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">From time to time we may contact you with information about our products and services, including sending you marketing messages and asking for your feedback on our products and services.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Most marketing messages we send will be via the COFE App Service in the form of push notifications. For some marketing messages, we may use personal information we collect about you to help us determine the most relevant marketing information to share with you. You can unsubscribe from receiving promotional email communications from us by switching marketing push notifications off via the profile settings page on the COFE App Service (you can switch these back on at any time via the same process). We make every effort to promptly process all unsubscribe requests. You may not opt out of service-related communications (e.g., account verification, transactional communications, changes/updates to features of the COFE App Service, technical and security notices).</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We will only send you marketing messages if you have given us your consent to do so. You can withdraw your consent at a later date by updating your preferences via your account profile settings on the COFE App Service</li>

            </ul>

            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">STORING AND TRANSFERRING YOUR PERSONAL INFORMATION</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Security,. We implement appropriate technical and organisational measures to protect your personal information against accidental or unlawful destruction, loss, change or damage. All personal information we collect will be stored by our cloud hosting provider on secure servers. We will never send you unsolicited emails or contact you by phone requesting your account ID, password, credit or debit card information or national identification numbers.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">International Transfers of your Personal Information.. The personal information we collect may be transferred to and stored in countries outside of the jurisdiction you are in where we and our third-party service providers have operations. If you are accessing our COFE App Service from the European Economic Area (“EEA“) (and the UK), your personal information will be processed outside of the <b>EEA</b> (and the UK) including in third party cloud providers based in the United States and Middle East.</li>

            </ul>
            <p className="text-[16px] leading-[28px] font-normal text-[#4D4D4D] mb-[32px]">In the event of such a transfer, we ensure that: (i) the personal information is transferred to countries recognised as offering an equivalent level of protection; or (ii) the transfer is made pursuant to appropriate safeguards, such as standard data protection clauses adopted by the European Commission; or (iii) such transfer shall be to a third party that is a member of a compliance scheme recognised by the European Commission as offering adequate protection for the rights and freedoms of data subjects, such as the EU-U.S. Privacy Shield. If you wish to enquire further about these safeguards used, please contact us using the details set out at the end of this Privacy Policy.</p>

            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">RIGHTS FOR EEA USERS</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">If you are accessing our COFE App Service from the EEA, in accordance with applicable privacy law, you have the following rights in respect of your personal information that we hold:
                     <ul className='pl-[25px] list-disc mb-[32px]'>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Right of access. . The right to obtain access to your personal information along with certain related information.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Right of portability. . You have the right, in certain circumstances, to receive a copy of the personal information you have provided to us in a structured, commonly used, machine-readable format that supports re-use, or to request the transfer of your personal data to another person.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Right to rectification. . You have the right to obtain rectification of any inaccurate or incomplete personal information we hold about you without undue delay.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Right to erasure. . You have the right, in some circumstances, to require us to erase your personal information without undue delay if the continued processing of that personal information is not justified.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Right to restriction. . You have the right, in some circumstances, to require us to limit the purposes for which we process your personal information if the continued processing of the personal information in this way is not justified, such as where the accuracy of the personal information is contested by you.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Right to withdraw consent. . If you have provided consent for the processing of your personal information, you have the right to withdraw your consent. If you withdraw your consent, this will not affect the lawfulness of our use of your personal information before your withdrawal</li>
                     </ul>
                </li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">You also have the right to object to any processing based on our legitimate interests where there are grounds relating to your particular situation. There may be compelling reasons for continuing to process your personal information, and we will assess and inform you if that is the case. You can object to marketing activities for any reason.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">If you wish to exercise one of these rights, please contact us using the contact details at the end of this Privacy Policy.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">You also have the right to lodge a complaint to your local data protection authority. If you are based in the European Union, information about how to contact your local data protection authority is available here.</li>
            </ul>

            <h6 className="text-[#212121] text-[24px] leading-[28px] font-semibold mb-[16px] capitalize">COOKIES AND SIMILAR TECHNOLOGIES USED ON OUR APP</h6>
            <ul className='pl-[25px] list-decimal mb-[32px]'>
                <li className='text-[16px] leading-[28px] font-normal text-[#4D4D4D]'>Our App uses cookies and similar technologies such as pixels and Local Storage Objects (LSOs) like HTML5 (together “cookies”) to distinguish you from other users of our App. This helps us to provide you with a good experience when you browse our App and also allows us to monitor and analyse how you use and interact with our App so that we can continue to improve our App. It also helps us and our advertising partners to determine products and services that may be of interest to you, in order to serve you targeted advertisements.</li>
                <li className='text-[16px] leading-[28px] font-normal text-[#4D4D4D]'>Cookies are pieces of code that allow for personalisation of our App experience by saving your information such as user ID and other preferences. A cookie is a small data file that we transfer to your computer’s hard disk for record-keeping purposes.</li>
                <li className='text-[16px] leading-[28px] font-normal text-[#4D4D4D]'>Although we do our best to honor the privacy preferences of our users, we are unable to respond to Do Not Track signals set by your browser at this time.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">We use the following types of cookies:
                     <ul className='pl-[25px] list-disc mb-[32px]'>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Strictly necessary cookies. . These are cookies that are required for the operation of our COFE App Service. They include, for example, cookies that enable you to log into secure areas of our COFE App Service, use a shopping cart or make use of e-billing services.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Analytical/performance cookies. . They allow us to recognise and count the number of visitors and to see how visitors move around our COFE App Service when they are using it. This helps us to improve the way our COFE App Service works, for example, by ensuring that users are finding what they are looking for easily.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Functionality cookies. . These are used to recognise you when you return to our COFE App Service. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Targeting cookies. . These cookies record your visit to our COFE App Service, the pages you have visited and the links you have followed. We will use this information to make our COFE App Service and the advertising displayed on it, and the marketing messages we send to you more relevant to your interests. We may also share this information with third parties who provide a service to us for this purpose.</li>
                         <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Third party cookies. . Please be aware that advertisers and other third parties may use their own cookies tags when you click on an advertisement or link on our COFE App Service. These third parties are responsible for setting out their own cookie and privacy policies.</li>
                     </ul>
                </li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Please see Annex 3 for more information about the cookies we use on the COFE App Service.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">The cookies we use are designed to help you get the most from the COFE App Service but if you do not wish to receive cookies, most browsers allow you to change your cookie settings. Depending on your mobile device and operating system, you may not be able to delete or block all cookies. Please note that if you choose to refuse all cookies you may not be able to use the full functionality of our COFE App Service. These settings will typically be found in the “options” or “preferences” menu of your browser. In order to understand these settings, the following links may be helpful, otherwise you should use the “Help” option in your browser for more details.
                     <ul className='pl-[25px] list-disc mb-[32px]'>
                        <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Cookie settings in Internet Explorer</li>
                        <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Cookie settings in Firefox</li>
                        <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Cookie settings in Chrome</li>
                        <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Cookies settings in Safari web and iOS.</li>
                     </ul>
                </li>
               
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">For mobile users, you have controls in your device Operating System that enables you to choose whether to allow cookies or share your advertising ID with COFE App or our advertising service providers. To block the IDFA on your iOS mobile device, you should follow this path: Settings   General  About  Advertising and then turn on ‘Limit Ad Tracking’. To block Android ID on your Android device, you should follow this path: Google Settings Ads and then turn on ‘Opt out of interest-based ads’.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">If you would like to find out more about cookies and other similar technologies, please visit www.allaboutcookies.org or the Network Advertising Initiative’s online sources at www.networkadvertising.org. We and our third-party partners may also use cookies and tracking technologies for advertising purposes. For more information about tracking technologies, please see Section 12 below.</li>
                <li className="text-[16px] leading-[28px] font-normal text-[#4D4D4D]">Please note that deleting or blocking cookies may not be effective for all types of tracking technologies, such as Local Storage Objects (LSOs) like HTML5.</li>
            </ul>
         
		</main>
	</div>
    
</>
	);
};
export default PrivacyAndPolicy;
PrivacyAndPolicy.Layout = "Default";