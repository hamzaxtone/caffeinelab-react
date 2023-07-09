import React from 'react'
import Image from 'next/image'
import styles from './pagination.module.scss';
import GetLang from '@/hooks/getLang';

export default function Pagination() {
    const lang = GetLang();
    return(
        <div className={`${styles.paginationWrapper} w-full`}>
            <div className="flex items-center justify-between md:border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a href="" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                    <a href="" className={` relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${lang == "en" ? " ml-3" : " mr-3"}`}>Next</a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div className={styles.prevbtn}>
                       <a href="" className="relative inline-flex items-center rounded-md border-0 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                             <path d="M12.8334 7.00002H1.16669M1.16669 7.00002L7.00002 12.8334M1.16669 7.00002L7.00002 1.16669" stroke="#4D4D4D" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                         <span className='px-2.5'>Previous</span> 
                         </a> 
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md  border-0" aria-label="Pagination">
                            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                            <a href="" aria-current="page" className={`${styles.active} relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 border-0`}>1</a>
                            <a href="" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 border-0">2</a>
                            <a href="" className="relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex border-0">3</a>
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:outline-offset-0 border-0">...</span>
                            <a href="" className="relative hidden items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 md:inline-flex border-0">8</a>
                            <a href="" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 border-0">9</a>
                            <a href="" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 border-0">10</a>
                        </nav>
                    </div>
                    <div className={styles.nextbtn}>
                         <a href=""className={` relative  inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 border-0 ${lang == "en" ? " ml-3" : " mr-3"}`}>
                          <span className='px-2.5'> Next</span> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334" stroke="#4D4D4D" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                    </div>
                </div>
            </div>
    </div>
    )
}{}