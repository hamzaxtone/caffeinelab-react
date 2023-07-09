import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../../styles/components/header/HeaderBottom.module.scss';
import Image from 'next/image';

// images
import moomilk from '../../assets/images/moomilk.png'
import twGrams from '../../assets/images/20Grams.png'
import kiaora from '../../assets/images/kiaora.png'
import jumo from '../../assets/images/Jumo.png'
import gloriaJeans from '../../assets/images/gloria-jeans.png'
import dunkin from '../../assets/images/dunkin.png'
import walls from '../../assets/images/walls.png'
import cbtl from '../../assets/images/CBTL.png'
import caribou from '../../assets/images/caribou.png'
import coffeBeans from '../../assets/images/coffee2x.png'
import bestDeal from '../../assets/images/best-deal.png'
import mblIcon from '../../assets/images/svg/menuback.svg'
import mblbestDeal from '../../assets/images/mblbestdeal.png'
import mblcoffeBeans from '../../assets/images/mblcoffebeans.png'

var data = {
  "categories": [
    {
      "title": "Coffee",
      "slug": "Coffee",
      "link": "Coffee",
      "imageUrl": "",
    },
    {
      "title": "Capsules",
      "slug": "Capsules",
      "link": "Capsules",
      "imageUrl": "",
    },
    {
      "title": "Espresso Machine",
      "slug": "Espresso Machine",
      "link": "Espresso Machine",
      "imageUrl": "",
    },
    {
      "title": "Barista Tools",
      "slug": "Barista Tools",
      "link": "Barista Tools",
      "imageUrl": "",
    },
    {
      "title": "Grinders",
      "slug": "Grinders",
      "link": "Grinders",
      "imageUrl": "",
    },
    {
      "title": "Sweets",
      "slug": "Sweets",
      "link": "Sweets",
      "imageUrl": "",
    },
    {
      "title": "Brewing Tools",
      "slug": "Brewing Tools",
      "link": "Brewing Tools",
      "imageUrl": "",
    },
    {
      "title": "Bundles",
      "slug": "Bundles",
      "link": "Bundles",
      "imageUrl": "",
    },
    {
      "title": "Tea",
      "slug": "Tea",
      "link": "Tea",
      "imageUrl": "",
    },
    {
      "title": "Discounted Offers",
      "slug": "Discounted Offers",
      "link": "Discounted Offers",
      "imageUrl": "",
    },
  ]
};

export default function MobileMenu() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMenuHover = () => {
    setIsHovered(!isHovered);
  };
  const handleLinkHover = () => {
    setIsHovered(false);
  };
  const [isOpen, updateIsOpen] = useState('');

  return (
    <div className={`${styles.mobileMenu} mb-10 px-4`}>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {!isOpen &&
            <div className={`${styles.navbarWrapper} w-full  navbar`} id="navbar-default">
              <ul className="lg:flex flex-wrap">

                {data.categories.map((category, index) => {
                  const currentMenu = category.title;
                  return (
                    <li key={index} className={`${styles.catItem} lg:block flex justify-between`}
                      onClick={() => updateIsOpen(currentMenu)}
                      onBlur={() => updateIsOpen('')}
                    >
                      <div className="block text-base">{category.title}</div>
                      <Image className='lg:hidden' src={mblIcon} alt="" />

                    </li>

                  )
                })
                }
                {/* href={`/blog/${encodeURIComponent(post.slug)}`} */}
              </ul>

            </div>
          }
          {/* subCategory */}
          {isOpen != '' &&
            <div
              className={`${isHovered ? "active" : ""} ${styles.subcategoryWrapper} w-full}`}
            // {`${styles.subcategoryWrapper} w-full`}  
            >
              <div className="flex flex-wrap">
                <div className="lg:w-3/12 w-full">
                  <h6 className={styles.catHead}>{isOpen}</h6>
                  <ul className={styles.subCatList}>
                    <li>
                      <Link href="#!">
                        Blends
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        Specialty Coffee
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        Drip Bags
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.shopByBrandsWrapper} lg:w-9/12 w-full`}>
                  <div className="flex flex-wrap ">
                    <div className="lg:w-5/12 w-full">
                      <h6 className={`${styles.shopByBrands} mb-5`}>Shop By Brands</h6>
                      <div className="flex flex-wrap justify-around">
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={moomilk}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={twGrams}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={kiaora}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={jumo}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={gloriaJeans}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={dunkin}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={walls}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={cbtl}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="lg:w-2/6 w mb-4">
                          <Link href="#!">
                            <Image
                              src={caribou}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-7/12 grid sm:grid-cols-2 lg:gap-12 gap-2 lg:items-center lg:px-6">
                      <Link href="">
                        <div className="sm:block hidden">
                          <Image
                            src={coffeBeans}
                            alt=""
                          ></Image>
                        </div>
                        <div className="sm:hidden block">
                          <Image
                            src={mblbestDeal}
                            alt=""
                          ></Image>
                        </div>
                      </Link>
                      <Link href="">
                        <div className="sm:block hidden">
                          <Image
                            src={bestDeal}
                            alt=""
                          ></Image>
                        </div>
                        <div className="sm:hidden block">
                          <Image
                            src={mblcoffeBeans}
                            alt=""
                          ></Image>
                        </div>

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          }


        </div>
      </nav>
    </div>
  )
}