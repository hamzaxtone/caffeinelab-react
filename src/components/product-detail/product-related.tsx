import React from 'react'
import ProductCard from '../../components/product/product-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import styles from '../../styles/home/TopProducts.module.scss';

// images
import productImg1 from '../../assets/images/coffeGrounds.png';
import productImg2 from '../../assets/images/blended.png';
import productImg3 from '../../assets/images/espresso.png';
import productImg4 from '../../assets/images/supremo.png';

var data = {
  "products": [
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg1,
      "priceTag": "SAR 200.00",
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg2,
      "priceTag": "SAR 200.00",
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg3,
      "priceTag": "SAR 200.00",
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg4,
      "priceTag": "SAR 200.00",
      "discountedPriceTag": "SAR 80000.00"
    },
    {
      "title": "Premium Arabic Coffee Grounds Saudi Blend",
      "prdCat": "Saudicoffee",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": productImg4,
      "priceTag": "SAR 200.00",
      "discountedPriceTag": "SAR 80000.00"
    },

  ]
}

export default function ProductRelated(props: any) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <>
      <div className="section TopProducts my-[80px]">
        <div className="flex justify-between items-center md:px-0 -px-4 mb-[32px]">
          <h2 className='section_title'>Related Products</h2>
          <Link href="" className='view-all'>
            View All
          </Link>
        </div>
        <div className="-mx-[10px]">
          <Slider {...settings}>
            {data.products.map((product, index) => {
              return (
                <div key={product.title}>
                  <ProductCard productData={product} />
                </div>
              )
            })
            }
          </Slider>
        </div>
      </div>
    </>
  )
}
