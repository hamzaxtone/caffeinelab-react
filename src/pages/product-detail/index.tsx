import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductImageSlider from '../../components/product-detail/product-image-slider';
import ProductDetailRight from '../../components/product-detail/product-detail-right';
import ProductRelated from '../../components/product-detail/product-related';
import GetLang from '@/hooks/getLang';
import Tabs from "@/components/common/Tab-content/Tabs"
import Tab from "@/components/common/Tab-content/Tab"
import styles from '../../styles/productDetail/productDetail.module.scss';

import productImage from '../../assets/images/productImage.png';
import productOtherImage from '../../assets/images/productOtherImage.jpg';
import ProductVideo from '../../assets/images/ProductVideo.jpg';
import videocircle from '../../assets/images/svg/videocircle.svg';

const ProductDetail: MyPage = () => {
  const lang = GetLang();
  const [proTab, setproTab] = useState('proDesc');
  const [proTabShow, setProTabShow] = useState(true);

  const toggleTab = (tab: any) => {
    setproTab(tab);
    setProTabShow(!proTabShow);
  }
  const [showIframe, setShowIframe] = useState(false);
  const handlePlayClick = () => {
    setShowIframe(true);
  };


  return (
    <>
      <Head>
        <title>Cofeapp | Product Detail</title>
      </Head>
      <div>
        <div className='container'>
          <nav aria-label="breadcrumb" className='lg:mt-0 mt-6'>
            <ol className="flex flex-wrap items-center breadCrumb ">
              <li className="breadcrumbItem">
                <Link href="/" className='text-sm'>Homepage</Link>
              </li>
              <li className="breadcrumbItem">
                <Link href="" className='text-sm'>Category</Link>
              </li>
              <li className="breadcrumbItem">
                <Link href="" className='text-sm'>Coffee</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className={`mt-5 ${styles.productDetaiWrp}`}>
        <div className='container'>
          <div className="lg:grid  lg:grid-cols-2 items-start gap-x-6">
            <ProductImageSlider />
            <ProductDetailRight />
          </div>
          <div className={` ${styles.productDetaiOther}`}>
            <div className={` ${styles.productDetaiTab}`}>
              {/*  */}
              {/* <Tabs className={` hidden lg:flex flex-wrap ${styles.productTabMenu}`}>
                  <Tab title="Product Description" titleClassName={`font-semibold text-2xl text-[#212121] ${lang == "en" ? "mr-[35px]" : "ml-[35px]"} pb-[16px]  cursor-pointer `}>
                    <div className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}>
                      <h3 className={`lg:hidden font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center ${styles.productTabActive}`}>Product Description <i className='icon-arrow-down text-[12px]'></i></h3>
                      <div className={` ${styles.productDescInner}`}>
                        <p className='text-[#4D4D4D] text-base  mb-6 lg:mb-8'>Introducing our Premium Arabic Coffee Grounds Saudi Blend brand, carefully crafted
                          for coffee lovers who seek a rich and aromatic coffee experience. Our
                          coffee beans are sourced from the finest regions around the world and
                          roasted to perfection, ensuring a bold and flavorful cup every time.
                          Whether you prefer a strong espresso shot or a smooth latte, our
                          coffee is versatile and perfect for any brewing method. With a commitment to quality and
                          sustainability, our brand is the perfect choice for coffee connoisseurs who want to savor
                          the best of the bean. Try our coffee today and indulge in a delicious and satisfying cup
                          that will awaken your senses and brighten your day.</p>
                        <div className={` max-w-[892px] w-full m-[auto] ${styles.productBodyInner}`}>
                          <div className={` text-center ${styles.productOtherBx}`}>
                            <h3 className='lg:block hidden text=[#212121] text-[24px] leading-{28px} font-semibold'>More about the product</h3>
                            <Image
                              src={productImage}
                              alt="productImage"
                              className='m-[auto]'
                            />
                            <p className='text-{#212121} text-base'>Welcome to our premium coffee brand, where we take pride in offering you the finest coffee experience possible. We believe that great coffee starts with exceptional beans, which is why we source ours from the most renowned regions across the world. Our team of experts has carefully selected beans that meet our strict standards of quality, flavor, and sustainability.
                              Once we have selected our beans, we roast them to perfection in small batches to ensure that every cup of coffee is as bold and flavorful as the last. Our artisanal roasting process brings out the natural flavors and aromas of the beans, resulting in a rich and satisfying coffee experience that will leave you craving more.
                              Our coffee is versatile and perfect for any brewing method, whether you prefer a French press, drip coffee, espresso, or any other method. With its rich and bold flavor profile, our coffee can stand up to milk, cream, and sugar, making it perfect for your favorite latte, cappuccino, or other specialty drinks.</p>
                          </div>
                          <div className='flex flex-wrap items-center my-[24px]'>
                            <div className='w-full md:flex-[0_0_289px]'>
                              <Image
                                src={productOtherImage}
                                alt="productOtherImage"
                                className='m-[auto]'
                              />
                            </div>
                            <div className='flex-1'>
                              <h3 className='text=[#212121] text-[24px] leading-{28px} font-semibold mb-[18px]'>Environmentally Friendly Packaging</h3>
                              <p className='text-{#4D4D4D} text-base'>We believe in sustainability and are committed to reducing our carbon footprint.
                                That&apos;s why we use environmentally friendly packaging and work directly with our farmers to
                                they are paid fairly and practice sustainable farming methods. With every cup of our coffee,
                                you are supporting a better future for our planet and the people who cultivate our beans.</p>

                            </div>
                          </div>
                          <div className='flex flex-wrap items-center my-[24px]'>
                            <div className='flex-1'>
                              <h3 className='text=[#212121] text-[24px] leading-{28px} font-semibold mb-[18px]'>Environmentally Friendly Packaging</h3>
                              <p className='text-{#4D4D4D} text-base'>We believe in sustainability and are committed to reducing our carbon footprint.
                                That&apos;s why we use environmentally friendly packaging and work directly with our farmers to
                                they are paid fairly and practice sustainable farming methods. With every cup of our coffee,
                                you are supporting a better future for our planet and the people who cultivate our beans.</p>

                            </div>
                            <div className='w-full md:flex-[0_0_289px]'>
                              <Image
                                src={productOtherImage}
                                alt="productOtherImage"
                                className='m-[auto]'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab title="Delivery and return information" titleClassName={`font-semibold text-2xl text-[#212121] ${lang == "en" ? "mr-[35px]" : "ml-[35px]"} pb-[16px]  cursor-pointer `}>
                    <div className={`product-return ${styles.productTabDelivery} ${styles.borderBottom}`}>
                      <h3 className={`lg:hidden font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center ${styles.productTabActive}`}>Delivery and return information <i className='icon-arrow-down text-[12px]'></i></h3>
                      <div className={` lg:pb[0] pb-[20px] ${styles.productDeliveryInner}`}>
                        <div className='flex items-center mb-5'>
                          <i className={` icon-return text-lg ${lang == "en" ? "mr-4" : "ml-4"} `}></i>
                          <p className='text-base text-[#212121]'>This product is non returnable</p>
                        </div>
                        <div className='flex items-center'>
                          <i className={` icon-deliver text-lg ${lang == "en" ? "mr-4" : "ml-4"} `} ></i>
                          <p className='text-base text-[#212121]'>Delivered on <span className='font-bold'>23rd April</span> if you order </p>
                        </div>
                      </div>

                    </div>
                  </Tab>
                  <Tab title="Reviews" titleClassName={`font-semibold text-2xl text-[#212121] ${lang == "en" ? "mr-[35px]" : "ml-[35px]"} pb-[16px]  cursor-pointer `}>
                    <div className={`product-reviews lg:mt-5 ${styles.productTabReview} ${styles.borderBottom}`}>
                      <h3 className={`lg:hidden font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center ${styles.productTabActive}`}>Reviews <i className='icon-arrow-down text-[12px]'></i></h3>
                      <div className={` flex flex-wrap ${styles.productReview}`}>
                        <div className={`lg:pr-[26px] flex-1 ${styles.productReviewInner}`}>
                          <div className='md:flex mb-4  relative'>
                            <h3 className={` text-[#212121] text-xl  ${lang == "en" ? "mr-[36px]" : "ml-[36px]"} font-bold `}>Abdullah</h3>
                            <div className={` flex flex-wrap lg:block ${styles.productReviewDesc}`}>
                              <div className={` order-2 lg:order-1 flex items-center mb-5 ${styles.reviewStarArea}`}>
                                <span className={` flex gap-x-1 lg:relative absolute top-0  ${lang == "en" ? "right-0" : "left-0"}  `}>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                </span>
                                <span className={` ${lang == "en" ? "lg:ml-4" : "lg:mr-4"}  text-[#4D4D4D] text-[14px] `}>1 month ago</span>
                              </div>
                              <p className='text-[#4D4D4D] text-base lg:my-[0px] my-[16px] md:mt-[24px]'>I absolutely love this coffee! The aroma alone is enough to get me out of bed in the morning.
                                But it&apos;s the flavor that keeps me coming back for more. The beans are roasted to perfection,
                                creating a rich and bold taste that is unlike any other coffee I&apos;ve tried.
                                I appreciate the sustainability practices of the brand, making me feel good about my purchase.
                                I highly recommend this coffee to any
                                coffee lover who wants to start their day off right.</p>
                            </div>
                          </div>
                          <div className='md:flex relative   mb-4'>
                            <h3 className={` text-[#212121] text-xl  ${lang == "en" ? "mr-[36px]" : "ml-[36px]"} font-bold `}>Abdullah</h3>
                            <div className={` flex flex-wrap lg:block ${styles.productReviewDesc}`}>
                              <div className={` order-2 lg:order-1 flex items-center mb-5 ${styles.reviewStarArea}`}>
                                <span className={` flex gap-x-1 lg:relative absolute top-0  ${lang == "en" ? "right-0" : "left-0"}  `}>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                </span>
                                <span className={` ${lang == "en" ? "lg:ml-4" : "lg:mr-4"}  text-[#4D4D4D] text-[14px] `}>1 month ago</span>
                              </div>
                              <p className='text-[#4D4D4D] text-base lg:my-[0px] my-[16px] md:mt-[24px]'>I absolutely love this coffee! The aroma alone is enough to get me out of bed in the morning.
                                But it&apos;s the flavor that keeps me coming back for more. The beans are roasted to perfection,
                                creating a rich and bold taste that is unlike any other coffee I&apos;ve tried.
                                I appreciate the sustainability practices of the brand, making me feel good about my purchase.
                                I highly recommend this coffee to any
                                coffee lover who wants to start their day off right.</p>
                            </div>
                          </div>
                        </div>
                        <div className={` hidden lg:flex lg:flex-col  lg:flex-[0_0_245px] pr-[25px] pl-[16px]  ${styles.reviewProgressBar}`}>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[140px] bg-[#3DB19E] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D ]text-sm ml-[auto]'>5</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[52px] bg-[#DC83FC] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D=]text-sm ml-[auto]'>3</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[36px] bg-[#FFC526] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D] text-sm ml-[auto]'>2</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[35px] bg-[#7CD2EC] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D] text-sm ml-[auto]'>2</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[5px] bg-[#F07A1E] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D] text-sm ml-[auto]'>0</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </Tab>
                </Tabs> */}


              {/*  */}


              <div className={` hidden lg:flex flex-wrap ${styles.productTabMenu}`}>
                <h3 onClick={() => setproTab('proDesc')} className={`font-semibold text-2xl text-[#212121] ${lang == "en" ? "mr-[35px]" : "ml-[35px]"}  pb-[16px] cursor-pointer border-b-[2px] ${proTab == "proDesc" ? "border-b-[#08BFB0]" : "border-b-transparent"}  `}>Product Description</h3>
                <h3 onClick={() => setproTab('proReturn')} className={`font-semibold text-2xl text-[#212121] ${lang == "en" ? "mr-[35px]" : "ml-[35px]"} pb-[16px]  cursor-pointer border-b-[2px] ${proTab == "proReturn" ? "border-b-[#08BFB0]" : "border-b-transparent"} `}>Delivery and return information</h3>
                <h3 onClick={() => setproTab('proReviews')} className={`font-semibold text-2xl text-[#212121] ${lang == "en" ? "mr-[35px]" : "ml-[35px]"} pb-[16px] cursor-pointer border-b-[2px] ${proTab == "proReviews" ? "border-b-[#08BFB0]" : "border-b-transparent"} `}>Reviews</h3>
              </div>
              <div className={` lg:mt-6 ${styles.productTabBody}`}>


                <div>
                  <h3 onClick={() => toggleTab("proDesc")} className={`lg:hidden font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center ${styles.productTabActive}`}>Product Description <i className='icon-arrow-down text-[12px]'></i></h3>
                  {proTab == "proDesc" && proTabShow &&
                    <div className={`product-desc ${styles.productTabDesc} ${styles.borderBottom}`}>

                      <div className={` ${styles.productDescInner}`}>
                        <p className='text-[#4D4D4D] text-base  mb-6 lg:mb-8'>Introducing our Premium Arabic Coffee Grounds Saudi Blend brand, carefully crafted
                          for coffee lovers who seek a rich and aromatic coffee experience. Our
                          coffee beans are sourced from the finest regions around the world and
                          roasted to perfection, ensuring a bold and flavorful cup every time.
                          Whether you prefer a strong espresso shot or a smooth latte, our
                          coffee is versatile and perfect for any brewing method. With a commitment to quality and
                          sustainability, our brand is the perfect choice for coffee connoisseurs who want to savor
                          the best of the bean. Try our coffee today and indulge in a delicious and satisfying cup
                          that will awaken your senses and brighten your day.</p>
                        <div className={` max-w-[892px] w-full m-[auto] ${styles.productBodyInner}`}>
                          <div className={` text-center ${styles.productOtherBx}`}>
                            <h3 className='lg:block hidden text=[#212121] text-[24px] leading-{28px} font-semibold'>More about the product</h3>
                            <Image
                              src={productImage}
                              alt="productImage"
                              className='m-[auto]'
                            />
                            <p className='text-{#212121} text-base'>Welcome to our premium coffee brand, where we take pride in offering you the finest coffee experience possible. We believe that great coffee starts with exceptional beans, which is why we source ours from the most renowned regions across the world. Our team of experts has carefully selected beans that meet our strict standards of quality, flavor, and sustainability.
                              Once we have selected our beans, we roast them to perfection in small batches to ensure that every cup of coffee is as bold and flavorful as the last. Our artisanal roasting process brings out the natural flavors and aromas of the beans, resulting in a rich and satisfying coffee experience that will leave you craving more.
                              Our coffee is versatile and perfect for any brewing method, whether you prefer a French press, drip coffee, espresso, or any other method. With its rich and bold flavor profile, our coffee can stand up to milk, cream, and sugar, making it perfect for your favorite latte, cappuccino, or other specialty drinks.</p>
                          </div>
                          <div className='flex flex-wrap items-center my-[24px]'>
                            <div className='w-full md:flex-[0_0_289px]'>
                              <Image
                                src={productOtherImage}
                                alt="productOtherImage"
                                className='m-[auto]'
                              />
                            </div>
                            <div className='flex-1'>
                              <h3 className='text=[#212121] text-[24px] leading-{28px} font-semibold mb-[18px]'>Environmentally Friendly Packaging</h3>
                              <p className='text-{#4D4D4D} text-base'>We believe in sustainability and are committed to reducing our carbon footprint.
                                That&apos;s why we use environmentally friendly packaging and work directly with our farmers to
                                they are paid fairly and practice sustainable farming methods. With every cup of our coffee,
                                you are supporting a better future for our planet and the people who cultivate our beans.</p>

                            </div>
                          </div>
                          <div className='flex flex-wrap items-center my-[24px]'>
                            <div className='flex-1'>
                              <h3 className='text=[#212121] text-[24px] leading-{28px} font-semibold mb-[18px]'>Environmentally Friendly Packaging</h3>
                              <p className='text-{#4D4D4D} text-base'>We believe in sustainability and are committed to reducing our carbon footprint.
                                That&apos;s why we use environmentally friendly packaging and work directly with our farmers to
                                they are paid fairly and practice sustainable farming methods. With every cup of our coffee,
                                you are supporting a better future for our planet and the people who cultivate our beans.</p>

                            </div>
                            <div className='w-full md:flex-[0_0_289px]'>
                              <Image
                                src={productOtherImage}
                                alt="productOtherImage"
                                className='m-[auto]'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>




                <div>
                  <h3 onClick={() => toggleTab("proReturn")} className={`lg:hidden font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center ${styles.productTabActive}`}>Delivery and return information <i className='icon-arrow-down text-[12px]'></i></h3>
                  {proTab == "proReturn" && proTabShow &&
                    <div className={`product-return ${styles.productTabDelivery} ${styles.borderBottom}`}>
                      <div className={` lg:pb[0] pb-[20px] ${styles.productDeliveryInner}`}>
                        <div className='flex items-center mb-5'>
                          <i className={` icon-return text-lg ${lang == "en" ? "mr-4" : "ml-4"} `}></i>
                          <p className='text-base text-[#212121]'>This product is non returnable</p>
                        </div>
                        <div className='flex items-center'>
                          <i className={` icon-deliver text-lg ${lang == "en" ? "mr-4" : "ml-4"} `} ></i>
                          <p className='text-base text-[#212121]'>Delivered on <span className='font-bold'>23rd April</span> if you order </p>
                        </div>
                      </div>

                    </div>
                  }
                </div>

                <div>
                  <h3 onClick={() => toggleTab("proReviews")} className={`lg:hidden font-semibold text-lg lg:text-2xl text-[#212121] py-[20px] cursor-pointer flex justify-between items-center ${styles.productTabActive}`}>Reviews <i className='icon-arrow-down text-[12px]'></i></h3>
                  {proTab == "proReviews" && proTabShow &&
                    <div className={`product-reviews lg:mt-5 ${styles.productTabReview} ${styles.borderBottom}`}>
                      <div className={` flex flex-wrap ${styles.productReview}`}>
                        <div className={`lg:pr-[26px] flex-1 ${styles.productReviewInner}`}>
                          <div className='md:flex mb-4  relative'>
                            <h3 className={` text-[#212121] text-xl  ${lang == "en" ? "mr-[36px]" : "ml-[36px]"} font-bold `}>Abdullah</h3>
                            <div className={` flex flex-wrap lg:block ${styles.productReviewDesc}`}>
                              <div className={` order-2 lg:order-1 flex items-center mb-5 ${styles.reviewStarArea}`}>
                                <span className={` flex gap-x-1 lg:relative absolute top-0  ${lang == "en" ? "right-0" : "left-0"}  `}>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                </span>
                                <span className={` ${lang == "en" ? "lg:ml-4" : "lg:mr-4"}  text-[#4D4D4D] text-[14px] `}>1 month ago</span>
                              </div>
                              <p className='text-[#4D4D4D] text-base lg:my-[0px] my-[16px] md:mt-[24px]'>I absolutely love this coffee! The aroma alone is enough to get me out of bed in the morning.
                                But it&apos;s the flavor that keeps me coming back for more. The beans are roasted to perfection,
                                creating a rich and bold taste that is unlike any other coffee I&apos;ve tried.
                                I appreciate the sustainability practices of the brand, making me feel good about my purchase.
                                I highly recommend this coffee to any
                                coffee lover who wants to start their day off right.</p>
                            </div>
                          </div>
                          <div className='md:flex relative   mb-4'>
                            <h3 className={` text-[#212121] text-xl  ${lang == "en" ? "mr-[36px]" : "ml-[36px]"} font-bold `}>Abdullah</h3>
                            <div className={` flex flex-wrap lg:block ${styles.productReviewDesc}`}>
                              <div className={` order-2 lg:order-1 flex items-center mb-5 ${styles.reviewStarArea}`}>
                                <span className={` flex gap-x-1 lg:relative absolute top-0  ${lang == "en" ? "right-0" : "left-0"}  `}>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#FFC526]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                  <i className='icon-star text-[#A6A6A6]'></i>
                                </span>
                                <span className={` ${lang == "en" ? "lg:ml-4" : "lg:mr-4"}  text-[#4D4D4D] text-[14px] `}>1 month ago</span>
                              </div>
                              <p className='text-[#4D4D4D] text-base lg:my-[0px] my-[16px] md:mt-[24px]'>I absolutely love this coffee! The aroma alone is enough to get me out of bed in the morning.
                                But it&apos;s the flavor that keeps me coming back for more. The beans are roasted to perfection,
                                creating a rich and bold taste that is unlike any other coffee I&apos;ve tried.
                                I appreciate the sustainability practices of the brand, making me feel good about my purchase.
                                I highly recommend this coffee to any
                                coffee lover who wants to start their day off right.</p>
                            </div>
                          </div>
                        </div>
                        <div className={` hidden lg:flex lg:flex-col  lg:flex-[0_0_245px] pr-[25px] pl-[16px]  ${styles.reviewProgressBar}`}>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[140px] bg-[#3DB19E] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D ]text-sm ml-[auto]'>5</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[52px] bg-[#DC83FC] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D=]text-sm ml-[auto]'>3</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[36px] bg-[#FFC526] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D] text-sm ml-[auto]'>2</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[35px] bg-[#7CD2EC] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D] text-sm ml-[auto]'>2</span>
                          </div>
                          <div className='flex items-center '>
                            <i className='icon-star text-sm text-[#FFC526]'></i>
                            <span className={` ${lang == "en" ? "ml-2" : "mr-2"}  text-[#212121] text-sm `}>5</span>
                            <div className={`mx-3 w-[5px] bg-[#F07A1E] h-[4px] rounded-[3px] ${styles.reviewProgressLine}`}></div>
                            <span className='text-[#4D4D4D] text-sm ml-[auto]'>0</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  }
                </div>
                <div className={`  lg:border-t-[1px] lg:border-[#D5D5D5] lg:text-center lg:mt-6 ${styles.productDetailVideo} ${styles.borderBottom}`}>
                  <h3 className='text-[#212121] text-lg lg:text-2xl font-semibold lg:pt-[54px] lg:pb-[24px] py-[20px] flex justify-between lg:justify-center items-center'>Product Video <i className='icon-arrow-down lg:hidden text-[12px]'></i></h3>
                  <div className={` max-w-[898px] w-[100%] m-[auto] lg:mb[0] mb-[20px!important] ${styles.productVideoBx}`}>
                  {!showIframe && (
                    <div className='flex items-center relative '>
                        <Image
                            src={ProductVideo}
                            alt="ProductVideo"
                            className='m-[auto]'
                          />
                          <Image
                            src={videocircle}
                            alt="videocircle"
                            className='m-[auto] absolute left-0 right-0 cursor-pointer max-h-[46px] md:max-w-[100%] md:h-[auto] '
                            onClick={handlePlayClick}
                          />
                    </div>
                     )}
                     {showIframe && (
                    <div>
                      <iframe className='w-[100%] lg:h-[487px] md:h-[390px] h-[330px]' src="https://www.youtube.com/embed/8Oh71c80O_k" 
                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                      </iframe>
                    </div>
                     )}

                  
                      
                     

                  </div>
                </div>
              </div>
            </div>

            <ProductRelated />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
ProductDetail.Layout = "Default";