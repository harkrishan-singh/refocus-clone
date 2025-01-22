import { motion } from "framer-motion";

const Modal = ({ modal, setModal, projects }) => {
  const { active, index } = modal;

  const handleMouseEnter = () => {
    setModal({ active: true, index: index });
  };
  const handleMouseLeave = () => {
    setModal({ active: false, index: index });
  };

  const scaleAnimation = {
    initial: { scale: 0 },
    open: { scale: 1, transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] } },
    close: {
      scale: 0,
      transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "close"}
      style={{
        top: `${index * 18.5}%`,
        transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      className={` absolute h-[320px] w-[425px] flex flex-col justify-center items-center left-[32%] overflow-hidden `}
    >
      <div
        style={{
          transform: `translateY(-${index * 100}%)`,
          transition: " 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
        className={` absolute h-full w-full `}
      >
        {projects.map((project, index) => {
          const videoSrc = project.videoSrc;
          {
            /* const imageSrc = project.imageSrc; */
          }
          const color = project.hoverBgColor.split(":")[1];
          return (
            <div
              key={index}
              className={` relative h-full flex justify-center items-center ${color} `}
            >
              <video
                className=" h-full w-full object-cover "
                autoPlay
                muted
                loop
              >
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              {/* <img src={src} height="auto" width={350} alt="image" /> */}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
