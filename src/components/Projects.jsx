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
      videoSrc: "src/assets/project-video-cula.webm",
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

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className=" relative my-12  ">
      <div className=" w-full  py-10 ">
        {projectDetails.map((project, index) => (
          <Project
            key={index}
            index={index}
            data={project}
            modal={modal}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} setModal={setModal} projects={projectDetails} />
    </div>
  );
};

export default Projects;
