import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { useCheckoutMutation } from "@framework/checkout/use-checkout";
import { CheckBox } from "@components/ui/checkbox";
import PrimaryButton from "@components/ui/button";
import Router from "next/router";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import uuid from "react-uuid";

interface CheckoutInputType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  deliveryAddress: string;
  city: string;
  postcode: string;
  save: boolean;
  orderNotes: string;
}

const CheckoutForm: React.FC = () => {
  const { t } = useTranslation();
  const { mutate: updateUser, isLoading } = useCheckoutMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(input: CheckoutInputType) {
    await placeOrder(input);
    updateUser(input);
  }

  const placeOrder = (input: CheckoutInputType) => {
    // toast.info("Placing order");
    console.info(input);

    axios
      .post(
        "https://desicover-node.herokuapp.com/create-new-order",
        { id: uuid(), ...input }
      )
      .then(() => {
        toast.success("created order successfully");
        Router.push(ROUTES.ORDER);
      })
      .catch((err) => {
        toast.error("Order Not created" + err);
      });
  };

  return (
    <>
      <ToastContainer />

      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("text-shipping-address")}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center "
        noValidate
      >
        <div className="flex flex-col space-y-4 lg:space-y-5">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-first-name"
              {...register("firstName", {
                required: "forms:first-name-required",
              })}
              errorKey={errors.firstName?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            />
            <Input
              labelKey="forms:label-last-name"
              {...register("lastName", {
                required: "forms:last-name-required",
              })}
              errorKey={errors.lastName?.message}
              variant="solid"
              className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            />
          </div>
          <Input
            labelKey="forms:label-address"
            {...register("deliveryAddress", {
              required: "forms:address-required",
            })}
            errorKey={errors.deliveryAddress?.message}
            variant="solid"
          />
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              type="tel"
              labelKey="forms:label-phone"
              {...register("phone", {
                required: "forms:phone-required",
              })}
              errorKey={errors.phone?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            />

            <Input
              type="email"
              labelKey="forms:label-email-star"
              {...register("email", {
                required: "forms:email-required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "forms:email-error",
                },
              })}
              errorKey={errors.email?.message}
              variant="solid"
              className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            />
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-city"
              {...register("city")}
              variant="solid"
              className="w-full lg:w-1/2 "
            />

            <Input
              labelKey="forms:label-postcode"
              {...register("postcode")}
              variant="solid"
              className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            />
          </div>
          <div className="relative flex flex-col items-start">
            <CheckBox labelKey="forms:label-save-information" />
            <div className="py-2"></div>
            <CheckBox labelKey="forms:label-agree-delivery-terms" />
          </div>
          <TextArea
            labelKey="forms:label-order-notes"
            {...register("orderNotes")}
            placeholderKey="forms:placeholder-order-notes"
            className="relative pt-3 xl:pt-6"
          />
          <div className="flex w-full">
            <PrimaryButton
              className="w-full sm:w-auto"
              loading={isLoading}
              disabled={isLoading}
            >
              {t("common:button-place-order")}
            </PrimaryButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
