import { useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

const CTOCard = ({
  width,
  bgcolor,
  hoverbgcolor,
  subHeading,
  heading,
  mainHeading,
  subPara,
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseExit = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      className={` ${width} p-4 flex flex-col justify-between gap-20 rounded-xl ${bgcolor} ${
        hoverbgcolor || "hover:bg-none"
      } transition-all `}
    >
      <div className=" flex flex-col gap-4 ">
        <div className=" flex justify-between items-center ">
          <p
            className={` text-xs font-extralight leading-relaxed ${hover ? "px-1" : "px-0"} transition-all `}
          >
            {subHeading}
          </p>
          <TbArrowNarrowRight />
        </div>
        <h3 className={` w-1/3 text-left font-normal text-xl ${hover ? "px-1" : "px-0"} transition-all `}>{heading}</h3>
      </div>
      <div>
        {mainHeading && (
          <div className=" flex flex-col items-start gap-4 ">
            <h1 className=" text-6xl font-medium ">Start a Project</h1>
            <button className=" px-4 py-[.4rem] text-xs font-light tracking-wide rounded-full border border-[1px] ">
              Contact us
            </button>
          </div>
        )}
        {subPara && (
          <p className=" text-xs font-extralight text-zinc-400 ">{subPara}</p>
        )}
      </div>
    </div>
  );
};

export default CTOCard;
