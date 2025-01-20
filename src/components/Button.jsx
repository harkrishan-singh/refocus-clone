import { PiArrowBendDownRight } from "react-icons/pi";

const Button = ({ value }) => {
  return (
    <button className=" px-3 py-[0.38rem] flex justify-center items-center gap-3 text-xs font-extralight tracking-tight text-black rounded-full bg-white ">
      {value}
      <PiArrowBendDownRight />
    </button>
  );
};

export default Button;
