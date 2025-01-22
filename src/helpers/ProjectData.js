import projectImg1 from "../assets/project-img-arqitel.webp";
import projectImg2 from "../assets/project-img-cula.webp";
import projectImg3 from "../assets/project-img-sevdesk.webp";
import projectImg4 from "../assets/project-img-maniv.webp";
import projectImg5 from "../assets/project-img-umault.webp";

import projectVid1 from "../assets/project-video-arqitel.webm";
import projectVid2 from "../assets/project-video-cula.webm";
import projectVid3 from "../assets/project-video-sevdesk.webm";
import projectVid4 from "../assets/project-video-maniv.webm";
import projectVid5 from "../assets/project-video-umault.webm";

export const ProjectDetails = [
  {
    name: "Arqitel",
    description:
      "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
    videoSrc: projectVid1,
    imageSrc: projectImg1,
    hoverBgColor: "hover:bg-[#5255ED]",
    live: true,
    case: true,
  },
  {
    name: "Cula",
    description:
      "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    videoSrc: projectVid2,
    imageSrc: projectImg2,
    hoverBgColor: "hover:bg-[#4A576B]",
    live: true,
    case: true,
  },
  {
    name: "Sevdesk",
    description:
      "We partnered with sevdesk, Germany and Austria's top accounting software, to design and develop their new SEO-optimized website in Webflow, spanning over 2,000 pages.",
    videoSrc: projectVid3,
    imageSrc: projectImg3,
    hoverBgColor: "hover:bg-[#FB523B]",
    live: false,
    case: true,
  },
  {
    name: "Maniv",
    description:
      "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    videoSrc: projectVid4,
    imageSrc: projectImg4,
    hoverBgColor: "hover:bg-[#2A9C6C]",
    live: true,
    case: true,
  },
  {
    name: "Umault",
    description:
      "Bold visuals, a new typeface, iconography, and custom motion graphics were at the core of our collaboration with Umault, building a website that matches their excellence in B2B video production.",
    videoSrc: projectVid5,
    imageSrc: projectImg5,
    hoverBgColor: "hover:bg-[#0E6E24]",
    live: true,
    case: false,
  },
];
