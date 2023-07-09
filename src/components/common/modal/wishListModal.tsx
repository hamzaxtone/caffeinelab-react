import Link from "next/link";
import React from "react";
import Icon from '@/components/common/icons/icomoon';
import styles from './wishlistmodal.module.scss'
import GetLang from '@/hooks/getLang';

export default function wishListModal({ isOpen, closeModal}:any) {
  const showHideClassName = isOpen ? "block" : "hidden"
	const lang = GetLang();
  
  return (
    <>
        <div
            className={`${showHideClassName} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div className="relative w-[610.55px] my-6 mx-auto max-[610.55px]">
              {/*content*/}
              <div className="py-[33px] px-[28px] border-0 rounded-[24px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5  rounded-t">
                  <h3 className="text-[24px] font-semibold">
                  Share this Product
                  </h3>
                  <button
                    className={`${lang == "en" ? " ml-auto" : "mr-auto"}  bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none`}
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-[#000] opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className={`${styles.socialLinks} mb-[25px] justify-between flex text-[14px] items-center leading-[14px]`}>
                    <Link href="#" className='w-[70px] h-[70px] rounded-[50px] flex flex-col justify-center items-center border border-[#08BFB099]'>
                      <Icon icon="icon-twitter"  className="text-[20px] text-[#4D4D4D]"/>
                    </Link>
                    <Link href="#" className='w-[70px] h-[70px] rounded-[50px] flex flex-col justify-center items-center border border-[#08BFB099]'>
                      <Icon icon="icon-facebook" className="text-[20px] text-[#4D4D4D]" />
                    </Link>
                    <Link href="#" className='w-[70px] h-[70px] rounded-[50px] flex flex-col justify-center items-center border border-[#08BFB099]'>
                      <Icon icon="icon-instagram" className="text-[20px] text-[#4D4D4D]" />
                    </Link>
                    <Link href="#" className='w-[70px] h-[70px] rounded-[50px] flex flex-col justify-center items-center border border-[#08BFB099]'>
                      <Icon icon="icon-linkedin" className="text-[20px] text-[#4D4D4D]" />
                    </Link>
                    <Link href="#" className='w-[70px] h-[70px] rounded-[50px] flex flex-col justify-center items-center border border-[#08BFB099]'>
                      <Icon icon="icon-youtube"  className="text-[20px] text-[#4D4D4D]"/>
                    </Link>
                </div>
                <div className="">
                   <label htmlFor="or Copy Link">or Copy Link</label>
                  <div className="relative mt-2 rounded-md shadow-sm">
										<input type="text" id="or Copy Link" className={`${lang == "en" ? " pr-20" : "pl-20 pr-5"} block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} placeholder="https://fake+link+generator&rlz=1C5CHFA_enPK999PK999" required />
										<div className={`${lang == "en" ? " right-10" : "left-10"} absolute inset-y-0  flex items-center  text-[16px]`}>
											<span className="text-[#08BFB0] text-[16px]">Copy</span>
										</div>
									</div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${showHideClassName} opacity-25 fixed inset-0 z-40 bg-[#4D4D4D]`}></div>
    </>
  );
}