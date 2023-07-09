import React from 'react'
import styles from './Radio.module.scss'

export default function RadioItem() {
    return (
        <div>
            <label className={`${styles.radioCustomWrp} flex items-center mb-8`}>
                <input type="radio" name="radio1"/>
                <span className={`flex items-center justify-center ${styles.radioCustom}`}></span>
                <span className={`text-base ${styles.radioText}`}>Recommended <span>(Default)</span></span>
            </label>
            <label className={`${styles.radioCustomWrp} flex items-center mb-8`}>
                <input type="radio" name="radio2"/>
                <span className={`flex items-center justify-center ${styles.radioCustom}`}></span>
                <span className={`text-base ${styles.radioText}`}>Newest</span>
            </label>
            <label className={`${styles.radioCustomWrp} flex items-center mb-8`}>
                <input type="radio" name="radio2" />
                <span className={`flex items-center justify-center ${styles.radioCustom}`}></span>
                <span className={`text-base ${styles.radioText}`}>Price High to Low</span>
            </label>
            <label className={`${styles.radioCustomWrp} flex items-center mb-8`}>
                <input type="radio" name="radio2"/>
                <span className={`flex items-center justify-center ${styles.radioCustom}`}></span>
                <span className={`text-base ${styles.radioText}`}>Price High to Low</span>
            </label>
        </div>
        
    
       
       

    )
  }

