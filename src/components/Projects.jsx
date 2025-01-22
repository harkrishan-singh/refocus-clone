import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import { ProjectDetails } from "../helpers/ProjectData";

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className=" relative my-12  ">
      <div className=" w-full  py-10 ">
        {ProjectDetails.map((project, index) => (
          <Project
            key={index}
            index={index}
            data={project}
            modal={modal}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} setModal={setModal} projects={ProjectDetails} />
    </div>
  );
};

export default Projects;
