import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import OrderInformation from "@components/order/order-information";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
// Import the package
import { useCallback } from "react";

import useRazorpay from "react-razorpay";
import PrimaryButton from "@components/ui/button";
import { toast } from "react-toastify";

export default function Order() {
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
      //   const order = await createOrder(params);

      const options: any = {
          key: "rzp_test_oQByQXLDQXLDDf",

          amount: "3000",
          currency: "INR",
          name: "Desicover.com",
          description: "Order fullfilment",
          image: "",
          //   order_id: "demoOrder",
          handler: (res: any) => {
              toast.success(res);
          },
          prefill: {
              name: "Desicovers",
              email: "email@example.com",
              contact: "9999999999",
          },
          notes: {
              address: "Razorpay Corporate Office",
          },
          theme: {
              color: "#000000",
          },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
  }, [Razorpay]);

  return (
      <>
          <PageHeader pageHeader="text-page-order" />
          <Container>
              <OrderInformation />
              <PrimaryButton onClick={() => handlePayment()}>
                  Confirm order
              </PrimaryButton>
              <Subscription />
          </Container>
      </>
  );
}

Order.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
      props: {
          ...(await serverSideTranslations(locale!, [
              "common",
              "forms",
              "menu",
              "footer",
          ])),
      },
  };
};
