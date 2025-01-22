import webFlowEnterpriseImg from "../assets/webflow-enterprise-img.png";

const Footer = () => {
  const socials = ["Instagram", "Twitter (X?)", "LinkedIn"];
  const sitemap = ["Home", "Work", "Careers", "Contact"];
  const extraPages = ["Privacy Policy", "Cookie Policy", "Impressum", "Terms"];

  return (
    <div className=" max-w-screen-lg mx-auto px-6 py-10 flex flex-col ">
      <div className=" py-10 flex justify-center items-center gap-4  ">
        <h1 className=" w-[60%] text-9xl font-semibold ">refokus.</h1>
        <div className=" w-[40%] flex justify-between gap-4 ">
          <div className=" w-[50%] flex justify-around capitalize text-[.65rem] tracking-wider font-extralight text-zinc-500 ">
            <div className=" flex flex-col gap-6 ">
              <p>Socials</p>
              <div className=" flex flex-col gap-2 ">
                {socials.map((element, index) => (
                  <a className=" hover:text-white transition " key={index}>
                    {element}
                  </a>
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-6  ">
              <p>Sitemap</p>
              <div className=" flex flex-col gap-2  text-white ">
                {sitemap.map((element, index) => (
                  <a className=" hover:text-zinc-400 transition " key={index}>
                    {element}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-[50%] self-end flex items-end flex-col gap-6  ">
            <p className=" text-[.65rem] text-right font-semibold leading-snug text-white ">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className=" h-auto w-36 rounded-lg "
              src={webFlowEnterpriseImg}
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-6 capitalize text-[.65rem] tracking-wider font-extralight text-zinc-500  ">
        {extraPages.map((element, index) => (
          <a className=" hover:text-white transition " key={index}>
            {element}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
