import CTOCard from "./CTOCard";

const CTOSection = () => {
  return (
    <div className=" max-w-screen-lg mx-auto px-6 py-16 flex gap-2">
      <CTOCard
        width="w-[40%]"
        bgcolor="bg-zinc-800"
        hoverbgcolor="hover:bg-zinc-700"
        subHeading="Up Next: Culture"
        heading="Who we are"
        subPara="Explore what drives our team."
      />
      <CTOCard
        width="w-[60%]"
        bgcolor="bg-zinc-700"
        hoverbgcolor="hover:bg-violet-700"
        subHeading="Get in touch"
        heading="Let's get to it, together."
        mainHeading="Start a Project"
      />
    </div>
  );
};

export default CTOSection;
