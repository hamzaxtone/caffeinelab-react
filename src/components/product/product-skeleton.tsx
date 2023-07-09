import styles from '../../styles/components/product/ProductCard.module.scss';

export default function ProductSkeleton() {

  return (
        <div className={`${styles.prdCard} ${styles.hasDiscount} block rounded-lg bg-white  dark:bg-neutral-700`}>
        <div className="w-full animate-pulse flex-row items-center justify-center">
          <div className="flex flex-col space-y-2">
            <div className={styles.productThumb}></div> 
            <div className={`${styles.prdDetails} pt-5`}>
              <div className="h-4 w-full rounded-md bg-gray-300 mb-3"></div>
              <div className="h-3 w-7/12 rounded-md bg-gray-300 mb-3"></div>
              <div className="h-3 w-5/12 rounded-md bg-gray-300 "></div>
            </div> 
          </div>
        </div>
      </div>
  )
};