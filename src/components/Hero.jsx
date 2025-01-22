import { useState } from "react";
import { useScroll } from "framer-motion";
import { HeroImageDetails } from "../helpers/HeroData";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const [images, setImages] = useState(HeroImageDetails);

  scrollYProgress.on("change", (data) => {
    imageActivation(Math.floor(data * 100));
  });

  function updateIsActive(arrIndex) {
    // console.log(`${arr} to be shown`);
    setImages((prev) =>
      prev.map((item, index) =>
        arrIndex.indexOf(index) === -1
          ? { ...item, isActive: false }
          : { ...item, isActive: true }
      )
    );
  }

  // updateIsActive logic example

  // Arr => [0,1,2]
  // Map => img1,0 img2,1 img3,2 img4,3
  //  ---> img1,0
  // [0,1,2].indexOf(0) === 0 != -1 => true
  //  ---> img2,1
  // [0,1,2].indexOf(1) === 1 != -1 => true
  //  ---> img3,2
  // [0,1,2].indexOf(2) === 2 != -1 => true
  //  ---> img4,3
  // [0,1,2].indexOf(3) === -1 === -1 => false
  //  ---> img5,4
  // [0,1,2].indexOf(4) === -1 === -1 => false

  function imageActivation(scrollValue) {
    switch (scrollValue) {
      case 0:
        updateIsActive([]);
        break;
      case 2:
        updateIsActive([0]);
        break;
      case 4:
        updateIsActive([0, 1]);
        break;
      case 6:
        updateIsActive([0, 1, 2]);
        break;
      case 8:
        updateIsActive([0, 1, 2, 3]);
        break;
      case 10:
        updateIsActive([0, 1, 2, 3, 4]);
        break;
      case 12:
        updateIsActive([0, 1, 2, 3, 4, 5]);
        break;
    }
  }

  return (
    <div className=" relative max-w-screen-lg mx-auto px-6 py-8  ">
      <h1 className=" text-[33vw] font-medium font-medium text-center leading-none select-none ">
        work
      </h1>
      {images.map(
        (image, index) =>
          image.isActive && (
            <img
              key={index}
              style={{ top: image.top, left: image.left }}
              className={` absolute h-52 w-52 rounded-lg -translate-x-1/2 -translate-y-1/2 `}
              src={image.url}
            />
          )
      )}
    </div>
  );
};

export default Hero;
