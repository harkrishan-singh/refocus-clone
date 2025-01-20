const Stripe = ({ data }) => {
  return (
    <div className=" w-full flex ">
      <div className=" h-10 sm:h-12 md:h-16 w-full px-4 lg:px-6 flex justify-between items-center gap-2 border-[1px] border-zinc-700 ">
        <img className=" h-auto w-[15vw] sm:w-[10vw] sm  " src={data.url} />
        <p className=" text-[.75rem] sm:text-sm font-normal text-center ">
          {data.number}
        </p>
      </div>{" "}
    </div>
  );
};

export default Stripe;
