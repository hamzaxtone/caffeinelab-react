import Head from 'next/head';
import BannerSlider from '../components/common/banner/banner-slider';
import TopProducts from '../components/home/top-products';
import ShopByCategory from '../components/home/shop-by-category';
import FindBestDeal from '../components/home/find-best-deal';
import FlashDeal from '../components/home/flash-deal';
import GridSectionDeal from '../components/home/grid-section-deal';
import DealsOnCofe from '@/components/home/deals-on-cofe';
import ShopByBrands from '@/components/home/shop-by-brands';
import { MyPage } from '@/components/layouts/types';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: MyPage = () => {
  const { t } = useTranslation("common");
  const metaTitle = t("home.title");
  return (
    <>
      <Head>
        <title>{`Cofeapp | ${metaTitle}` }</title>
      </Head>
      <div
        className={`-flex -min-h-screen -flex-col -items-center -justify-between`}
      >
        <BannerSlider />
        <ShopByCategory sectionTitle={t("home.categorySecHeading")} />
        <TopProducts sectionTitle={t("home.firstProductSecHeading")} />
        <FindBestDeal />
        <FlashDeal />
        <GridSectionDeal />
        <DealsOnCofe />
        <TopProducts sectionTitle={t("home.secondProductSecHeading")} />
        <ShopByBrands sectionTitle={t("home.brandsSecHeading")} />
      </div>
    </>
  );
};
export async function getStaticProps( context:any ) {
  const {locale} = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
export default Home;
Home.Layout = "Default";
