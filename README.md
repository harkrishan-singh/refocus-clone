# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


_________________


1. install locomotive for smooth scroll
2. use Framer motion for other sets of animations 
    - for Hero section 


//Projects.jsx
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

const Projects = () => {
  const projectDetails = [
    {
      name: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      videoSrc: "src/assets/project-video-arqitel.webm",
      imageSrc: "src/assets/project-img-arqitel.webp",
      hoverBgColor: "hover:bg-[#5255ED]",
      live: true,
      case: true,
    },
    {
      name: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      videoSrc: "src/assets/project-video-cula.webm",ge
      imageSrc: "src/assets/project-img-cula.webp",
      hoverBgColor: "hover:bg-[#4A576B]",
      live: true,
      case: true,
    },
    {
      name: "Sevdesk",
      description:
        "We partnered with sevdesk, Germany and Austria's top accounting software, to design and develop their new SEO-optimized website in Webflow, spanning over 2,000 pages.",
      videoSrc: "src/assets/project-video-sevdesk.webm",
      imageSrc: "src/assets/project-img-sevdesk.webp",
      hoverBgColor: "hover:bg-[#FB523B]",
      live: false,
      case: true,
    },
    {
      name: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      videoSrc: "src/assets/project-video-maniv.webm",
      imageSrc: "src/assets/project-img-maniv.webp",
      hoverBgColor: "hover:bg-[#2A9C6C]",
      live: true,
      case: true,
    },
    {
      name: "Umault",
      description:
        "Bold visuals, a new typeface, iconography, and custom motion graphics were at the core of our collaboration with Umault, building a website that matches their excellence in B2B video production.",
      videoSrc: "src/assets/project-video-umault.webm",
      imageSrc: "src/assets/project-img-umault.webp",
      hoverBgColor: "hover:bg-[#0E6E24]",
      live: true,
      case: false,
    },
  ];

  const [hover, setHover] = useState({ active: false, index: -1 });

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className=" relative my-12  ">
      <div className=" w-full  py-10 ">
        {projectDetails.map((project, index) => (
          <Project
            key={index}
            index={index}
            data={project}
            setModal={setModal}
            hover={hover}
            setHover={setHover}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projectDetails} />
    </div>
  );
};

export default Projects;





// Project.jsx
import React, { useState } from "react";
import Button from "./Button";

const Project = ({ data, index, setModal, hover, setHover }) => {
  const handleMouseEnter = () => {
    setHover({ active: true, index: index });
    setModal({ active: true, index: index });
  };
  const handleMouseLeave = () => {
    setHover({ active: false, index: index });
    setModal({ active: false, index: index });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` w-full ${
        hover.active && index == hover.index ? "py-14" : "py-12"
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
              hover.active && index == hover.index ? "opacity-100" : "opacity-0"
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
