import { useEffect, useState } from "react";
import Stripe from "./Stripe";

const StripeSection = () => {
  const stripeData = [
    {
      url: "src/assets/stripe-img-1.svg",
      number: 48,
    },
    {
      url: "src/assets/stripe-img-2.svg",
      number: 2,
    },
    {
      url: "src/assets/stripe-img-3.svg",
      number: 12,
    },
  ];

  const [innerWidth, setInnerWIdth] = useState(window.innerWidth);

  useEffect(() => {
    const handleInnerWidth = () => {
      setInnerWIdth(window.innerWidth);
    };
    window.addEventListener("resize", handleInnerWidth);

    return () => window.removeEventListener("resize", handleInnerWidth);
  }, []);

  return (
    <div className=" w-full py-10 flex justify-between items-center ">
      {stripeData.map((data, index) => (
        <Stripe key={index} data={data} />
      ))}
      {innerWidth > 640
        ? stripeData.map((data, index) => <Stripe key={index} data={data} />)
        : null}
    </div>
  );
};

export default StripeSection;
