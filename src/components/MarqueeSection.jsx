import { motion } from "framer-motion";
import Marquee from "./Marquee";
import GradientMask from "./GradientMask";
import { MarqueeImageDetails } from "../helpers/MarqueeData";

const MarqueeSection = () => {
  return (
    <div className=" relative w-full py-20 flex flex-col gap-8 overflow-hidden ">
      {MarqueeImageDetails.map((imageSet, index) => (
        <Marquee key={index} imageSet={imageSet} />
      ))}
      <GradientMask />
    </div>
  );
};

export default MarqueeSection;
