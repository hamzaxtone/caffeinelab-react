import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import ProductCard from '../../components/product/product-card';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '../../styles/category/Category.module.scss';

// images
import productImg1 from '../../assets/images/coffeGrounds.png';
import productImg2 from '../../assets/images/blended.png';
import productImg3 from '../../assets/images/espresso.png';
import productImg4 from '../../assets/images/supremo.png';
import Link from 'next/link';
import Pagination from '@/components/common/pagination/pagination';
import PillItem from '@/components/common/pills/PillItem';
import RadioItem from '@/components/common/radio/Radio-Item';
import Logo from '../../assets/images/svg/Logo.svg';

import MultiRangeSlider from "@/components/common/form/multiRangeSlider";
import { isClassDeclaration } from 'typescript';



var data = {
  "products": [
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg1,
      "price":200,
      "priceTag": "SAR 200.00",
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg2,
      "priceTag": "SAR 300.00",
      "price":300,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg3,
      "priceTag": "SAR 400.00",
      "price":400,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg4,
      "priceTag": "SAR 200.00",
      "price":200,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg1,
      "priceTag": "SAR 600.00",
      "price":600,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg2,
      "priceTag": "SAR 500.00",
      "price":500,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg3,
      "priceTag": "SAR 500.00",
      "price": 500,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg4,
      "priceTag": "SAR 600.00",
      "price": 600,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg1,
      "priceTag": "SAR 800.00",
      "price":800,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg2,
      "priceTag": "SAR 900.00",
      "price":900,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg3,
      "priceTag": "SAR 100.00",
      "price":100,
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg4,
      "priceTag": "SAR 400.00",
      "price":400,
      "discountedPriceTag": "SAR 80000.00"
    },


  ],
  "taxonomies": [
    {
      "title": "Category",
      "slug": "category",
      "toggle": true,
      "parentCategories": [
        {
          "title": "Coffee",
          "slug": "coffee",
          "childCategories": [
            {
              "title": "Blends",
              "slug": "blends",
            },
            {
              "title": "Specialty Coffee",
              "slug": "specialty-coffee"
            },
            {
              "title": "Drip Bags",
              "slug": "drip-bags"
            }
          ]
        },
        {
          "title": "Capsules",
          "slug": "capsules",
          "childCategories": [
            {
              "title": "Blends",
              "slug": "blends"
            }

          ]
        }
      ]
    },
    {
      "title": "Brands",
      "slug": "Brands",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Asif Al Gahwa",
              "slug": "Asif Al Gahwa",
            },
            {
              "title": "Black Coffee by cafe younes",
              "slug": "Black Coffee by cafe younes"
            },
            {
              "title": "Bondie Coffee",
              "slug": "Bondie Coffee"
            },
            {
              "title": "Cosmic Garden",
              "slug": "Cosmic Garden"
            },
            {
              "title": "Mexico Coffee",
              "slug": "Mexico Coffee"
            },
            {
              "title": "Earth Roastery",
              "slug": "Earth Roastery"
            },
            {
              "title": "Brewing Tools",
              "slug": "Brewing Tools"
            }
          ]
        },
      ]
    },
    {
      "title": "Price",
      "slug": "Price",
      "toggle": true,
      "component": "price",
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Price",
              "slug": "Price",
            }
          ]
        },
      ]
    },
    {
      "title": "Process",
      "slug": "Process",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Proces",
              "slug": "Proces",
            },
            {
              "title": "Processs",
              "slug": "Processs"
            }
          ]
        },
      ]
    },
    {
      "title": "Color",
      "slug": "Color",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Black",
              "slug": "Black",
            },
            {
              "title": "White",
              "slug": "White"
            }
          ]
        },
      ]
    },
    {
      "title": "Country of Origins",
      "slug": "Country of Origins",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Country of Origin",
              "slug": "Country of Origin",
            },
            {
              "title": "Country of Origi",
              "slug": "Country of Origi"
            }
          ]
        },
      ]
    },
    {
      "title": "Roast Levels",
      "slug": "Roast Levels",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Roast Level",
              "slug": "Roast Level",
            },
            {
              "title": "Roast Leve",
              "slug": "Roast Leve"
            }
          ]
        },
      ]
    },
    {
      "title": "Best for",
      "slug": "Best for",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "Best fo",
              "slug": "Best fo",
            },
            {
              "title": "Best forr",
              "slug": "Best forr"
            }
          ]
        },
      ]
    },
    {
      "title": "Weight",
      "slug": "Weight",
      "toggle": true,
      "parentCategories": [
        {
          "title": "",
          "childCategories": [
            {
              "title": "1000 KG",
              "slug": "1000 KG",
            },
            {
              "title": "500 KG",
              "slug": "500 KG"
            }
          ]
        },
      ]
    },
  ]
};



const Category: MyPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [rangeMinvalue, rangeMinsetValue] = useState(0);
  const [rangeMaxvalue, rangeMaxsetValue] = useState(0);
  const handleChange = (event: any) => {
    rangeMaxsetValue(event[1]);
    rangeMinsetValue(event[0]);
    //console.log(event[0]);
  };

  
  const [filterStarted, set_filterStarted] = useState(true);
  const [minValue, set_minValue] = useState(50);
  const [maxValue, set_maxValue] = useState(75);
  // const handleInput = (e: any) => {
  //   set_minValue(e.minValue);
  //   set_maxValue(e.maxValue);
  //   console.log(e.maxValue);
  // };
  // const handleChangeMin = (e: any) => {
  //   set_minValue(e.minValue);
  //   //console.log(e.maxValue);
  // };
  // const handleChangeMax = (e: any) => {
  //   set_maxValue(e.maxValue);
  //   //console.log(e.maxValue);
  // };


  const [isBodyClassAdded, setIsBodyClassAdded] = useState(false);

  // const [filterValue, set_filterValue] = useState(50);
  
  useEffect(() => {
    if (isBodyClassAdded) {
      document.body.classList.add(styles.sidebarListingOpen);
    } else {
      document.body.classList.remove(styles.sidebarListingOpen);
    }
  }, [isBodyClassAdded]);

  const handleButtonClick = () => {
    setIsBodyClassAdded(true);
  };

  const handleCloseClick = () => {
    setIsBodyClassAdded(false);
  };
  const lang = GetLang();


   const [proTab, setproTab] = useState("all");
  // const [proTabShow, setProTabShow] = useState(true);

  // const [isActive, setIsActive] = useState(true);


  // const toggleTab = (tab: any) => {
  //   setproTab(tab);
  //   setProTabShow(!proTabShow);
  // };

  return (
    <>
      <Head>
        <title>Cofeapp | Category</title>
      </Head>
      <div className='px-4'>
        <div className="container category-page-sec mx-auto flex flex-wrap">
          <div className='w-full mb-5 lg:mt-0 mt-3.5'>
            <nav aria-label="breadcrumb">
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
            <div className={`cursor-pointer text-center rounded-lg lg:hidden pb-1.5 pt-1.5  my-5 px-5 ${styles.filterOnMobile}`} onClick={handleButtonClick}>
              <Link href="" className='text-sm'>Filter (3)</Link>
            </div>
          </div>
          <div className={`w-full  lg:w-1/4 ${styles.categoryListingLeft}`}>
            <div className={`flex justify-between items-center lg:hidden ${styles.sidebarTopListing}`}>
              <Link href="/" className={`flex items-center  md:mr-9 ${styles.logo}`}>
                <Image
                  src={Logo}
                  alt="CofeApp"
                />
              </Link>
              <Link href="" className={`${styles.closeSidebar}`} onClick={handleCloseClick}>X</Link>
            </div>
            <div className={`lg:hidden   ${styles.mobileFilterWrp}`}>
              <div className={`${styles.sortingMobile}`}>
                <h3 className={`text-2xl font-semibold mb-10  ${styles.filterTitle}`}>Sorting</h3>
                <RadioItem />
              </div>
              <div className={`flex items-center justify-between mb-5 pt-2`}>
                <h3 className={`text-2xl font-semibold   ${styles.filterTitle}`}>Filters</h3>
                <button className={`font-medium ${styles.clearBtn} `}>
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap items-center">
                <PillItem />
                <PillItem />
                <PillItem />
              </div>
              <div className={`fixed bottom-0 w-full py-2.5  px-5 bg-white z-20 ${styles.footerSidebarButton}`}>
                <button type='button' className={`w-full text-base text-white pt-2 pb-2.5 rounded-lg ${styles.btn} ${styles.btnPrimary}`}>
                  Show All Items
                </button>

              </div>

            </div>
            <div className={`w-full ${styles.taxonomiesList}`}>
              {data.taxonomies.map((taxonomy, index) => {
                return (
                  <div key={index} className={`${styles.taxonomyItem} ${styles.taxonomyItemActive}`}>
                     
                    <h4
                    onClick={() => {
                      setproTab(taxonomy.title);
                      taxonomy.toggle = !taxonomy.toggle;
                      //(taxonomy.toggle ? false : true )
                       console.log(taxonomy.toggle + " - " + taxonomy.title);
                       setproTab(taxonomy.title);
                    }}
                    className={`text-2xl font-semibold flex items-center justify-between mb-3.5 ${styles.taxtTitle}`}>{taxonomy.title}
                     <i className='icon-arrow-down text-[10px] text-[#212121]'></i>
                      
                    </h4>
                    {taxonomy.toggle && proTab  && 
                    <ul className={`${styles.taxonomyParentItems}`}>
                      {taxonomy.component && taxonomy.component == "price" ?
                        <>
                          <li key="price" className={`${styles.taxonomyParentChildren}`}>
                            <div className="Price mt-5 mb-3">
                              {/* <div className={`flex  justify-between gap-x-6 mb-6  ${styles.rangeValueBx}`}>
                                <span className={`text-base rounded-xl flex items-center  ${styles.rangeValueInner}`}><span>SAR</span> <input className="w-full" onChange={handleChangeMin} onInput={handleChangeMin} value={minValue} /></span>
                                <span className={`text-base rounded-xl flex items-center   ${styles.rangeValueInner}`}><span>SAR</span> <input className="w-full"onChange={handleChangeMax}  onInput={handleChangeMax} value={maxValue} /></span>
                              </div> */}
                              <div className="mb-6 h-[80px]">
                                <MultiRangeSlider

                                  min={0}
                                  max={1000}
                                  onChange={({ min, max }: { min: number; max: number }) => {
                                    set_minValue(min);
                                    set_maxValue(max);
                                    //console.log(`min = ${min}, max = ${max}`)
                                    
                                  }

                                  }
                                />
                              </div>
                            </div>
                          </li>
                        </>
                        :
                        <>
                          {taxonomy.parentCategories.map((taxonomyParent, index2) => {
                            return (
                              <li key={index2} className={`${styles.taxonomyParentChildren}`}>
                                {taxonomyParent.title != "" && 
                                  <span className={`text-xl mt-3.5 mb-3.5 block ${styles.taxonomyParentTitle}`}>{taxonomyParent.title}</span>
                                }
                                <ul className={`${styles.taxonomyItemsInner}`}>
                                  {taxonomyParent.childCategories.map((childCategory, index3) => {
                                    return (
                                      <li key={childCategory.title}>
                                        <label className='flex items-center custom-checkbox1 mb-2.5'>
                                          <input type="checkbox" name={taxonomy.slug} />
                                          <span className='checkbox-custom flex items-center justify-center'>
                                            <svg width="10" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M10.1313 0L4.14556 5.67979L1.85151 3.54347L0.666687 4.71957L4.11022 8H4.12501L11.3334 1.15211L10.1313 0Z" fill="white" />
                                            </svg>
                                          </span>
                                          <span className='text-base'>{childCategory.title}</span>
                                        </label>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </li>
                            )
                          })}
                        </>
                      }

                    </ul>
                    }
                  </div>
                )
              })}
            </div>

          </div>
          <div className={`w-full  lg:w-9/12 ${styles.categorylistingRight}`}>
            <div className={`hidden lg:grid grid-cols-2 mb-7 mt-2 ${styles.categoryFilterWrp}`}>
              <div className={`${styles.categoryFilterLeft}`}>
                <h3 className='text-3xl font-semibold'>{slug} <span className='text-base ml-4 font-medium'>( 7 items )</span></h3>
              </div>
              <div className={`flex items-center justify-end ${styles.categoryFilterRight}`}>
                <span className='text-sm'>Sort by</span>

                <Menu as="div" className={` relative inline-block text-left ${lang == "en" ? "ml-2" : "mr-2"}  custom-dropdown2 `}>
                  <Menu.Button className="flex items-start z-20 relative w-full justify-between gap-x-1.5 font-semibold text-base items-center">
                    Recomended
                    <i className='icon-arrow-down text-gray-400 -mr-1 text-[8px]'></i>
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
                    <Menu.Items className="absolute  right-0 z-10 rounded-md bg-white custom-menu-item2">
                      <div className="menu-item-inner2">
                        <Menu.Item>
                          <span className={` block ${lang == "en" ? "text-left" : "text-right"}`}>Recomended</span>

                        </Menu.Item>
                        <Menu.Item>
                          <span className={` block ${lang == "en" ? "text-left" : "text-right"}`}>Recomended</span>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

              </div>
            </div>
            <div className="hidden lg:grid grid-col-1">
              <div className="flex flex-wrap items-center">
                <PillItem />
                <PillItem />
                <PillItem />
                <button className={`${styles.clearBtn} mb-4`}>
                  Clear All
                </button>
              </div>

            </div>
            <div className="TopProducts gutters-grid-view">
              <div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2">
                {data.products.map((product, index) => {
                  return (
                    <>
                    { (product.price <= maxValue && product.price >= minValue)  && 
                    
                      <div key={product.title + index}>
                        <ProductCard productData={product} />
                      </div>
                      }
                    </>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.paginationSec} md:mt-28 md:mb-16 my-10`}>
          <Pagination />
        </div>
      </div>

    </>
  );
};
export default Category;
Category.Layout = "Default";