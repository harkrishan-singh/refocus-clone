const GradientMask = () => {
  return (
    <div className=" absolute top-0 h-full w-full z-10 ">
      {/* <div className=" absolute top-0 h-full w-full bg-gradient-to-r from-0% from-zinc-900 via-transparent to-[99%] to-100% to-100% to-zinc-900 "></div> */}
      <GradientBox />
      <GradientBox />
      <GradientBox />
    </div>
  );
};

const GradientBox = () => {
  return (
    <div className=" absolute top-0 h-full w-full flex justify-between items-center ">
      <div className=" h-full w-60 bg-gradient-to-r  from-zinc-900 to-100% "></div>
      <div className=" h-full w-60 bg-gradient-to-l  from-zinc-900 to-100% "></div>
    </div>
  );
};

export default GradientMask;
