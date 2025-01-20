import { motion } from "framer-motion";

const Marquee = ({ imageSet }) => {
  return (
    <div className=" flex  ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className=" w-full flex justify-between items-center pr-20 flex-shrink-0 "
      >
        {imageSet.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className=" h-[2vw] w-auto shrink-0 "
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className=" w-full flex justify-between items-center pr-20 flex-shrink-0 "
      >
        {imageSet.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className=" h-[2vw] w-auto shrink-0 "
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
