import React, { useState } from "react";
import Button from "./Button";

const Project = ({ data, index, modal, setModal }) => {
  const handleMouseEnter = () => {
    setModal({ active: true, index: index });
  };
  const handleMouseLeave = () => {
    setModal({ active: false, index: index });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` w-full ${
        modal.active && index == modal.index ? "py-14" : "py-12"
      }  ${data.hoverBgColor} transition-all duration-75 `}
    >
      <div className=" max-w-screen-lg mx-auto px-6 flex justify-between items-center transition-all duration-75  ">
        <h1 className=" text-5xl text-center font-normal ">{data.name}</h1>
        <div className=" details w-[28%] flex flex-col gap-4 ">
          <p className=" text-sm font-extralight tracking-wide ">
            {data.description}
          </p>
          <div
            className={` flex justify-start items-center gap-4 transition-opacity duration-[500ms] ease-in-out ${
              modal.active && index == modal.index ? "opacity-100" : "opacity-0"
            } `}
          >
            {data.live && <Button value="Live Website" />}
            {data.case && <Button value="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
