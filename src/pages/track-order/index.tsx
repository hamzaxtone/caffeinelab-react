import { MyPage } from "@/components/layouts/types";
import Head from "next/head";
import React, { useState, useEffect, Component, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from '@/components/common/icons/icomoon';
import GetLang from '@/hooks/getLang';
import ProductRelated from "../../components/product-detail/product-related";
import styles from "../../styles/trackOrder/trackOrder.module.scss";

// components
import OrderDelivered from '../../components/track-order/order-delivered';
import OrderPlaced from '../../components/track-order/order-placed';
import OutForDelivery from '../../components/track-order/out-for-delivery';
import ProcessingOrder from '../../components/track-order/processing-order';

import productImage from "../../assets/images/productImage.png";
import paidWith from "../../assets/paidWith.svg";
import productOtherImage from "../../assets/images/productOtherImage.jpg";
import delivery from "../../assets/images/svg/delivery.svg";

const TrackOrder: MyPage = () => {
	const lang = GetLang();
  return (
    <>
      <Head>
        <title>Cofeapp | Order Tracking</title>
      </Head>
      <div className={`${styles.orderTrackingMainWrapper} bg-[#ffffff] lg:bg-[#FAFBFB] md:bg-[#ffffff]`}>
        <div className="container">
          <OrderPlaced />
          <ProcessingOrder />
          <OutForDelivery />
          <OrderDelivered />
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
TrackOrder.Layout = "Default";
