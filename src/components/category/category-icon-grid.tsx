import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/CategoryIconGrid.module.scss';

export default function CategoryIconGrid({categoryData}:any) {
  
  return (
    <div className={`${styles.categoryIconGridItem} text-center categoryIconGridItem`}>
      <div className={`${styles.cat_circle} cat_circle`} style={{backgroundColor:categoryData.catColor}}>
        <span>
          <Image
            src={categoryData.imageUrl}
            alt="CofeBeans"
          />
        </span>
      </div>
		  <span className={`${styles.cat_title} cat_title`}>{categoryData.title}</span>
	</div>
  )
}
