import { useEffect, useState } from "react";
import Stripe from "./Stripe";
import { StripeData } from "../helpers/StripeData";

const StripeSection = () => {
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
      {StripeData.map((data, index) => (
        <Stripe key={index} data={data} />
      ))}
      {innerWidth > 640
        ? StripeData.map((data, index) => <Stripe key={index} data={data} />)
        : null}
    </div>
  );
};

export default StripeSection;
