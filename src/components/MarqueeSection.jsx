import { motion } from "framer-motion";
import Marquee from "./Marquee";
import GradientMask from "./GradientMask";

const MarqueeSection = () => {
  const images = [
    [
      "src/assets/marquee-img-1.svg",
      "src/assets/marquee-img-2.svg",
      "src/assets/marquee-img-3.svg",
      "src/assets/marquee-img-4.svg",
      "src/assets/marquee-img-5.svg",
      "src/assets/marquee-img-6.svg",
      "src/assets/marquee-img-7.svg",
      "src/assets/marquee-img-8.svg",
      "src/assets/marquee-img-9.svg",
    ],
    [
      "src/assets/marquee-img-1.1.svg",
      "src/assets/marquee-img-1.2.svg",
      "src/assets/marquee-img-1.3.svg",
      "src/assets/marquee-img-1.4.svg",
      "src/assets/marquee-img-1.5.svg",
      "src/assets/marquee-img-1.6.svg",
      "src/assets/marquee-img-1.7.svg",
      "src/assets/marquee-img-1.8.svg",
      "src/assets/marquee-img-1.9.svg",
      "src/assets/marquee-img-1.10.svg",
    ],
  ];

  motion;

  return (
    <div className=" relative w-full py-20 flex flex-col gap-8 overflow-hidden ">
      {images.map((imageSet, index) => (
        <Marquee key={index} imageSet={imageSet} />
      ))}
      <GradientMask />
    </div>
  );
};

export default MarqueeSection;
