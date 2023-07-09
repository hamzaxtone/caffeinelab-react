import Link from 'next/link'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import usflag from '../../assets/usflag.png'
import saFlag from '../../assets/images/saflag.jpg';
import styles from '../../styles/components/header/HeaderTop.module.scss';
import { useRouter } from "next/router";
import GetLang from '@/hooks/getLang';

export default function HeaderTop() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );
  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    const el = document.querySelector("html") as HTMLElement;
    el.setAttribute("dir", dir);
    el.setAttribute("lang", lang);
  }, [router.locale]);

  const lang = GetLang();

  return (
    <div className={`-px-4  ${styles.headerTop}`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Menu as="div" className="relative inline-block text-left ">
          <Menu.Button className="flex items-center w-full justify-center gap-x-1.5 font-semibold text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9.00016 10.0726C10.2925 10.0726 11.3402 9.02492 11.3402 7.73258C11.3402 6.44023 10.2925 5.39258 9.00016 5.39258C7.70781 5.39258 6.66016 6.44023 6.66016 7.73258C6.66016 9.02492 7.70781 10.0726 9.00016 10.0726Z" stroke="#212121" />
              <path d="M2.71478 6.3675C4.19228 -0.127498 13.8148 -0.119998 15.2848 6.375C16.1473 10.185 13.7773 13.41 11.6998 15.405C10.1923 16.86 7.80728 16.86 6.29228 15.405C4.22228 13.41 1.85228 10.1775 2.71478 6.3675Z" stroke="#212121" />
            </svg>
            United Arab Emirates
            <i className="icon-arrow-down text-[#212121] text-[7px]" aria-hidden="true" ></i>
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
            <Menu.Items className={`absolute px-2  z-10 mt-4 w-40 pt-4 pb-1.5  rounded-b-lg bg-white  ${styles.customDropdown1}  ${styles.leftArrow}`}>
              <Menu.Item>
                <Link href="" className='flex items-center text-xs mb-2.5'>
                  United Arab Emirates
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="" className='flex items-center text-xs mb-2.5'>
                  Saudia Arabia
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="" className='flex items-center text-xs mb-2.5'>
                  Kuwaite
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          {otherLocales?.map((locale) => {
            const { pathname, query, asPath } = router;
            return (
              <Menu.Button key={"locale-" + locale} className="flex items-center w-full justify-center gap-x-1.5  text-xs font-semibold text-gray-900 ">
                <Image
                  src={locale === "ar" ? usflag : saFlag}
                  alt="us-flag"
                />
                {/* <Link href={{ pathname, query }} as={asPath} locale={locale}>sasa</Link> */}
                {locale === "en" ? "عربى" : locale === "ar" ? "English" : null}
                <i className="icon-arrow-down text-[#212121] text-[7px]" aria-hidden="true" ></i>
              </Menu.Button>
            );
          })}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={`absolute px-2 right-0  z-10 mt-4 w-24 pt-4 pb-1  rounded-b-lg bg-white  ${styles.customDropdown1}  ${styles.rightArrow}`}>
              <Menu.Item>

                <Link href="" locale="en" className='flex items-center text-xs mb-3.5'>
                  <Image
                    src={usflag}
                    alt="us-flag"
                    className={`flex items-center ${lang == "en" ? "mr-2" : "ml-2"} `}
                  />
                  English
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="" locale="ar" className='flex items-center text-xs mb-3.5'>
                  <Image
                    src={saFlag}
                    alt="saFlag"
                    className={`flex items-center ${lang == "en" ? "mr-2" : "ml-2"} `}
                  />
                  Arabic
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}