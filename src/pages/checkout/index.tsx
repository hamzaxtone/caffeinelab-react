import styles from '../../styles/checkout/Checkout.module.scss';
import Icon from '@/components/common/icons/icomoon';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Image from 'next/image';

const Checkout: MyPage = () => {
	const [newCard, setNewCard] = useState(false);
	const [showMapModal, setShowMapModal] = useState(false);
	const addNewCard = (e: any) => {
    setNewCard(true);
  };
	return (
		<>
			<Head>
				<title>Cofeapp | Checkout</title>
			</Head>
			<div
				className={`component-sec checkout-compo bg-[#ffffff] lg:bg-[#FAFBFB] md:bg-[#ffffff] `}
			>
				<div className='py-[24px] lg:py-[32px]'>
					<div className="container category-page-sec mx-auto px-[0px]">
						<div className="flex flex-wrap -mx-[15px]">
							<div className='w-[100%] lg:w-[59.5%] md:w-[100%] p-[15px] '>
								<div className="bg-white rounded-[12px] px-[0px] lg:px-[24px] py-[0px] lg:py-[30px]">
									<div className="pageHeading block lg:hidden mb-[37px]">
										<div className="flex items-center">
											<h3 className='w-1/2 text-[#212121] text-[24px] font-semibold dark:text-white'>Checkout</h3>
											<p className='w-1/2 text-[#212121] text-[14px] dark:text-white text-right'>(3 items)</p>
										</div>
									</div>
									<div className="addressSec">
										<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold mb-[18px] dark:text-white'>Delivery Address</h3>
										<div className="inputFormGroup mb-6">
											<label htmlFor="addressInput" className="block mb-2 font-medium text-[16px] leading-[24px] text=[#4D4D4D] dark:text-white">Add Address</label>
											<div className="flex items-end">
												<input type="text" id="addressInput" className="bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
												<button className="ml-[8px]"><Icon className="text-[#08BFB0]" icon="icon-twitter" /></button>
											</div>
										</div>
										<div className="flex items-center">
											<hr className="w-full" />
											<span className="px-[25px] text-[#212121] text-[16px] font-semibold dark:text-white">or</span>
											<hr className="w-full" />
										</div>
										<div className="w-full mt-[25px]">
											<button onClick={() => setShowMapModal(true)} className="block w-full py-[12px] px-[15px] bg-transparent border border-[#08BFB0] rounded-[12px] text-[#212121] text-[16px] font-medium">Add New Address</button>
										</div>
										{showMapModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed cursor-pointer inset-0 w-full h-full bg-[#212121] opacity-20"
                            onClick={() => setShowMapModal(false)}
                        ></div>
                        <div className="flex cursor-auto items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-[10px] border-[3.5px] border-[#08BFB0] shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-red-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            GOOGLE MAP ?
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
																									setShowMapModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

									</div>
									<div className="deliveryOptions w-full mt-[25px]">
										<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold mb-[18px] dark:text-white'>Choose your Delivery options</h3>
										<ul className="deliveryOptions">
											<li className='mb-[8px]'>
												<label className="flex flex-wrap items-center bg-transparent border-[0px] lg:border border-[#EAEAEA] rounded-[13px] px-[8px] lg:px-[16px] py-[12px]">
													<div className="inputCheckbox min-w-[40px] w-[7%] text-center">
														<input type="checkbox" />
													</div>
													<div className="labelInputCheckbox flex flex-col w-[55%] lg:w-[73%] text-[#212121]">
														<div className="title text-[18px] leading-[26px] font-semibold ">2 hours delivery</div>
														<div className="subTitle text-[14px] leading-[20px] font-normal text-[#4d4d4d]">Order before 2pm today and get it same day</div>
													</div>
													<div className="labelInputCheckboxPrice w-[30%] lg:w-[20%] text-[18px] leading-[26px] font-bold text-right">AED 10</div>
												</label>
											</li>
											<li className='mb-[8px]'>
												<label className="flex flex-wrap items-center bg-transparent border-[0px] lg:border border-[#EAEAEA] rounded-[13px] px-[8px] lg:px-[16px] py-[12px]">
													<div className="inputCheckbox min-w-[40px] w-[7%] text-center">
														<input type="checkbox" />
													</div>
													<div className="labelInputCheckbox flex flex-col w-[73%] text-[#212121]">
														<div className="title text-[18px] leading-[26px] font-semibold ">3-5 day delivery</div>
														<div className="subTitle text-[14px] leading-[20px] font-normal text-[#4d4d4d]">Delivered by DHL within 3-5 working days</div>
													</div>
													<div className="labelInputCheckboxPrice w-[20%] text-[18px] leading-[26px] font-bold text-right">Free</div>
												</label>
											</li>
										</ul>
									</div>
									<div className="saveOrder w-full mt-[32px]">
										<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] leading-[28px] font-semibold mb-[24px] dark:text-white'>Save on your order</h3>
										<ul className="saveOrderOptions">
											<li className='mb-[16px]'>
												<label className="flex flex-wrap items-center bg-transparent border border-[#EAEAEA] rounded-[13px] px-[16px] py-[12px]">
													<div className="inputCheckbox min-w-[40px] w-[7%] text-center">
														<input type="checkbox" />
													</div>
													<div className="labelInputCheckbox flex flex-col w-auto text-[#212121]">
														<div className="title text-[18px] leading-[26px] font-semibold ">AED 10 off</div>
														<div className="subTitle text-[14px] leading-[20px] font-normal text-[#4d4d4d]">When you spend AED 500</div>
													</div>
												</label>
											</li>
										</ul>
										<div className="inputFormGroup mb-6">
											<label htmlFor="promoInput" className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white">Enter a promo code</label>
											<div className="flex items-end">
												<input type="text" id="promoInput" className="mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" />
											</div>
											<span className='errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal'>Invalid Promo code</span>
										</div>
									</div>
									<div className="paymentMethod w-full mt-[32px]">
										<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold mb-[18px] dark:text-white'>Payment Method</h3>
										<div className="inputFormGroup mb-[32px]">
											<label htmlFor="promoInput" className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white">Select Payment Selection</label>
											<Menu as="div" className="dropDownMethod relative w-full block text-left">
												<Menu.Button className="w-full bg-[#ffffff] px-[16px] py-[8px] border border-[#D5D5D5] rounded-[8px]">
													<div className="flex items-center text-[16px] leading-[32px] text-[#212121]">
														<div className="w-1/2 text-left flex">
															<Icon className="text-[#08BFB0] mr-[16px]" icon="icon-twitter" />
															<span>* * * * - 6 7 4 8</span>
														</div>
														<div className="w-1/2 text-right flex justify-end">
															<span>Expiry: 00 / 00</span>
															<Icon className="ml-[18px] text-[#4d4d4d]" icon="icon-twitter" />
														</div>
													</div>
												</Menu.Button>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className={`drop-shadow-[0_14px_28px_rgba(0,0,0,0.07)] absolute w-full z-10 rounded-[8px] border border-[#dfdfdf] bg-white  ${styles.customDropdown1}  ${styles.leftArrow}`}>
														<Menu.Item>
															<div className='cursor-pointer border border-[#f7f7f7] flex items-center bg-[#ffffff] hover:bg-[#F7F7F7] p-[16px] text-[16px] leading-[26px] text-[#4d4d4d]'>
																<Icon className="text-[#08BFB0] mr-[8px]" icon="icon-twitter" />
																Visa (Saved Card)
															</div>
														</Menu.Item>
														<Menu.Item>
															<div className='cursor-pointer border border-[#f7f7f7] flex items-center bg-[#ffffff] hover:bg-[#F7F7F7] p-[16px] text-[16px] leading-[26px] text-[#4d4d4d]'>
																<Icon className="text-[#08BFB0] mr-[8px]" icon="icon-twitter" />
																Cash
															</div>
														</Menu.Item>
														<Menu.Item>
															<div onClick={addNewCard} className='cursor-pointer flex items-center bg-[#ffffff] hover:bg-[#F7F7F7] p-[16px] text-[16px] leading-[26px] text-[#4d4d4d]'>
																<Icon className="text-[#08BFB0] mr-[8px]" icon="icon-twitter" />
																Add new card
															</div>
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</Menu>




											{/* <div className="flex items-end">
												<input type="text" id="promoInput" className="bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" />
											</div> */}
										</div>
										{ newCard &&  
										<div className="cardDetails px-[16px] py-[24px] border border-[#EAEAEA] rounded-[13px] mb-[32px]">
											<div className="inputFormGroup mb-[32px]">
												<label htmlFor="cardNumber" className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white">Add Card Number</label>
												<div className="relative flex items-end">
													<Icon className="absolute left-[16px] top-[13px]" icon="icon-twitter" />
													<input type="text" id="cardNumber" className="pl-[60px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" />
												</div>
												<span className='errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal'>Invalid Card Number</span>
											</div>
											<div className="flex flex-wrap">
												<div className="inputFormGroup mb-[15px] w-1/2 pr-[8px]">
													<label htmlFor="expiryDate" className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white">Expiry Date</label>
													<div className="relative flex items-end">
														<Icon className="absolute left-[16px] top-[13px]" icon="icon-twitter" />
														<input type="text" id="expiryDate" className="pl-[60px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" />
													</div>
													<span className='errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal'>Invalid Expiry Date</span>
												</div>
												<div className="inputFormGroup mb-[15px] w-1/2 pl-[8px]">
													<label htmlFor="cardNumber" className="block mb-2 text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white">Security Code</label>
													<div className="relative flex items-end">
														<Icon className="absolute left-[16px] top-[13px]" icon="icon-twitter" />
														<input type="text" id="cardNumber" className="pl-[60px] mb-[4px] bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" />
													</div>
													<span className='errorInput text-[12px] leading-[20px] text-[#FE3D40] font-normal'>Security Code</span>
												</div>
											</div>
											<div className="mt-[17px]">
												<button className="block ml-auto w-auto min-w-[270px] py-[12px] px-[15px] bg-[#08BFB0] border border-[#08BFB0] rounded-[12px] text-[#ffffff] text-[18px] leading-[26px] font-bold">Add New Card</button>
											</div>
										</div>
									}

										<div className="inputFormGroup mb-[16px]">
											<label htmlFor="promoInput" className="block mb-[18px] text-[16px] leading-[24px] font-medium text=[#4D4D4D] dark:text-white">Order Note</label>
											<div className="flex items-end">
												<textarea rows={4} id="promoInput" className="bg-transparent border border-[#D5D5D5] text-[16px] rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000" ></textarea>
											</div>
										</div>
									</div>
									<div className="my-[40px]">
										<button className="block w-full md-w-full lg-w-auto min-w-[270px] py-[12px] px-[15px] bg-[#08BFB0] border border-[#08BFB0] rounded-[12px] text-[#ffffff] text-[18px] leading-[26px] font-bold">Continue</button>
									</div>
								</div>
							</div>
							<div className='w-[100%] lg:w-[40.5%] md:w-[100%] p-[15px]'>
								<div className="bg-white rounded-[12px] mb-[32px] px-[0px] lg:px-[24px] py-[0px] lg:py-[30px]">
									<ul>
										<li className="flex items-center mb-[30px]">
											<div className="w-full w-1/2"><h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold  dark:text-white'>Order Summary</h3></div>
											<div className="w-full w-1/2 text-right">
												<p className='text-[#212121] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>Sub Total (3 items)</p>
											</div>
										</li>
										<li className="flex items-center mb-[10px]">
											<div className="w-full w-1/2">
												<h3 className='text-[#4D4D4D] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>Sub Total (3 items)</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<p className='text-[#212121] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>SAR 300</p>
											</div>
										</li>
										<li className="flex items-center mb-[10px]">
											<div className="w-full w-1/2">
												<h3 className={`text-[#08BFB0] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white`} >GET6</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<p className='text-[#08BFB0] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>SAR 10</p>
											</div>
										</li>
										<li className="flex items-center mb-[10px]">
											<div className="w-full w-1/2">
												<h3 className='text-[#4D4D4D] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>Delivery Fee</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<p className='text-[#212121] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>SAR 26</p>
											</div>
										</li>
										<li className="flex items-center py-[22px]">
											<div className="w-full">
												<hr />
											</div>
										</li>
										<li className="flex items-center mb-[18px]">
											<div className="w-full w-1/2">
												<h3 className='text-[#4D4D4D] text-[18px] lg:text-[24px] md:text-[18px] dark:text-white'>Order Total</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] dark:text-white'>SAR 326</h3>
											</div>
										</li>
										<li className="flex items-center mb-[18px]">
											<div className="w-full">
												<hr />
											</div>
										</li>
										<li className="flex items-center mb-[10px]">
											<div className="w-full w-1/2">
												<h3 className='text-[#4D4D4D] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>COFE wallet</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<p className='text-[#212121] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>-SAR 20</p>
											</div>
										</li>
										<li className="flex items-center mb-[10px]">
											<div className="w-full w-1/2">
												<h3 className={`text-[#08BFB0] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white `} >COFE Gift Card</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<p className='text-[#212121] text-[16px] lg:text-[20px] md:text-[18px] dark:text-white'>-SAR 10</p>
											</div>
										</li>
										<li className="flex items-center py-[22px]">
											<div className="w-full">
												<hr />
											</div>
										</li>
										<li className="flex items-center mb-[18px]">
											<div className="w-full w-1/2">
												<h3 className='text-[#4D4D4D] text-[18px] lg:text-[24px] md:text-[18px] dark:text-white'>Amount Due</h3>
											</div>
											<div className="w-full w-1/2 text-right">
												<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] dark:text-white'>SAR 326</h3>
											</div>
										</li>
									</ul>
								</div>
								<div className="bg-white rounded-[12px] mb-[32px] px-[0px] lg:px-[24px] py-[0px] lg:py-[30px]">
									<h3 className='text-[#212121] text-[18px] lg:text-[24px] md:text-[18px] font-semibold mb-[22px] dark:text-white'>Your Order</h3>
									<ul className={`flex flex-wrap items-center`}>
										<li className="w-full py-[10px]">
											<div className="flex items-center">
												<div className="productImg w-2/5 h-[124px] bg-[#f7f7f7] border border-[#d5d5d5] rounded-[13px]">
													<Image src="" alt="" />
												</div>
												<div className="productDetail w-auto pl-[24px] flex items-start flex-row-reverse lg:flex-row">
													<span className="mr-[0px] lg:mr-[14px] ml-[14px] lg:ml-[0px] quantity text-[#212121] text-[16px] font-bold mb-[15px] dark:text-white">3X</span>
													<div className="flex flex-col ">
														<div className="proTitle text-[#212121] text-[16px] font-semibold mb-[5px] dark:text-white">Premium Arabic Coffee Grounds Saudi</div>
														<div className="proMeta text-[#212121] text-[14px] font-normal mb-[8px] dark:text-white">Blend 250g</div>
														<div className="proPrice text-[#212121] text-[16px] font-bold dark:text-white">100.00 SAR</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>




			</div>
		</>
	);
};
export default Checkout;
Checkout.Layout = "Default";