import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import Instagram from "@components/common/instagram";

import CollectionBlock from "@containers/collection-block";
import BannerCarouselBlock from "@containers/banner-carousel-block";
import Divider from "@components/ui/divider";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import Subscription from "@components/common/subscription";
import HeroBlock from "@containers/hero-block";
// import BrandBlock from "@containers/brand-block";
// import CategoryBlock from "@containers/category-block";
import FeatureBlock from "@containers/feature-block";
import Layout from "@components/layout/layout";
import FlashSaleBlock from "@components/product/feeds/flash-sale-product-feed";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import { homeOneBanner as banner } from "@framework/static/banner";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { fetchBestSellerProducts } from "@framework/product/get-all-best-seller-products";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import CategoryBlock from "@containers/category-block";
import BannerBlock from "@containers/banner-block";
import BannerWithProducts from "@containers/banner-with-products";
import BannerSliderBlock from "@containers/banner-slider-block";

export default function Home() {
  // const { openModal, setModalView } = useUI();
  const { setModalView } = useUI();
  useEffect(() => {
    setModalView("NEWSLETTER_VIEW");
    setTimeout(() => {
      // openModal();
    }, 2000);
  }, []);
  return (
    <>
      <HeroBlock />
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" />
        <Divider />
        <BannerCarouselBlock />
        <Divider />

        {/* <BestSellerProductFeed /> */}
        {/* <BannerCard
          key={`banner--key${banner.id}`}
          banner={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="h-28 sm:h-auto"
        /> */}
        {/* on Selling products */}
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/#"
        />
        <NewArrivalsProductFeed />
        <FlashSaleBlock />

        <BannerSliderBlock />
        <Divider />
        {/* <CollectionBlock /> */}
        <FeatureBlock />
        <DownloadApps className="bg-linen" />
        <Support />
        <Instagram />
        <Subscription className="bg-linen px-5 sm:px-8 md:px-16 2xl:px-24" />
      </Container>
    </>
  );
}

{
  /* <BrandBlock sectionHeading="text-top-brands" /> */
}
Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }],
    fetchFlashSaleProducts
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: 10 }],
    fetchCategories
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.BEST_SELLER_PRODUCTS, { limit: 10 }],
    fetchBestSellerProducts
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }],
    fetchNewArrivalProducts
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.BRANDS, { limit: 0 }],
    fetchBrands
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
    revalidate: 60,
  };
};
