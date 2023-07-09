import React, { useEffect, useState } from "react";
import Image from 'next/image'
import heart from '../../assets/images/svg/heart.svg';
import styles from '../../styles/components/product/ProductCard.module.scss';
import ProductSkeleton from '../product/product-skeleton';
import Icon from '@/components/common/icons/icomoon';
import Link from "next/link";

export default function ProductCard({ productData }:any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (productData) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [productData]);

  return (
    <div>
      
      {loading ? (
        <ProductSkeleton />
      ) : (
      <div className={`${styles.prdCard} ${styles.hasDiscount} block rounded-lg bg-white  dark:bg-neutral-700`}>
        <Link href="/product-detail">
          <div className={styles.productThumb}>
            <Image
              className="rounded-t-lg text-center"
              src={productData.imageUrl}
              alt={productData.title} />
            <div className={styles.tagSec}>
              {/* New Arrival Tag */}
              <div className='new-arrival'>
                <span>New Arrival </span>
              </div>
              <div className={styles.heartIcon}>
                <Icon icon="icon-heart" className="iconHeartCustomClass" />
                  {/* <Image
                    src={heart}
                    alt="heart Icon"
                    width={20}
                    height={18}
                  /> */}
              </div>
            </div>
          </div>
          <div className={styles.prdDetails}>
            <h5
              className={styles.prdTitle}>
              {productData.title}
            </h5>
            <p className={styles.prdCategory}>
              {productData.prdCat}
            </p>
            <p className={`${styles.priceTag} flex items-center flex-wrap`}>
              <s className={styles.oldPrice}> {productData.discountedPriceTag}</s>
             <span className={styles.newPrice}>{productData.priceTag}</span> 
            </p>
          </div>
        </Link>
      </div>
      )}
    </div>
  )
}
