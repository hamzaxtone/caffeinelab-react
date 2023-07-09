import React from 'react'
import CategoryIconGrid from '../category/category-icon-grid';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/home/ShopByBrands.module.scss';

// images static
import brand1 from '../../assets/images/svg/brand1.svg';
import brand2 from '../../assets/images/svg/brand2.svg';
import brand3 from '../../assets/images/svg/brand3.svg';
import brand4 from '../../assets/images/svg/brand4.svg';
import brand5 from '../../assets/images/svg/brand5.svg';
import brand6 from '../../assets/images/svg/b6.svg';
import brand7 from '../../assets/images/svg/b7.svg';

var data = {
  "brands": [
  {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand1,
      "catColor" : " #F7F7F7"
  },
	{
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand2,
      "catColor" : " #F7F7F7"
   },
	{
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand3,
      "catColor" : " #F7F7F7"
    },
	{
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand4,
      "catColor" : " #F7F7F7"
    },
	{
      "title": "Youph",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand5,
      "catColor" : " #F7F7F7"
    },
	{
      "title": "Moo Milk Bar",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand6,
      "catColor" : " #F7F7F7"
    },
	{
      "title": "Seattle’s Best",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand7,
      "catColor" : " #F7F7F7"
    },
    {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand1,
      "catColor" : " #F7F7F7"
  },
	]
};

export default function ShopByBrands(props : any) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };
  return (
    <div className="ShopByCategory section -px-4 ">
		<div className="container mx-auto">
      <div className="flex justify-between w-full items-center head-sec">
        <h2 className='section_title'>{props.sectionTitle}</h2>
        <Link href="" className="view-all">
          View All
        </Link>
      </div>
			<div className={`${styles.carouselSec}`}>
      <Slider {...settings}>
			  {data.brands.map((brand, index) => {
					return (
            <div key={index}>
						<CategoryIconGrid categoryData={brand} />
            </div>
					)
				})
				}
        </Slider>
			</div>
		</div>
	</div>
  )
}
