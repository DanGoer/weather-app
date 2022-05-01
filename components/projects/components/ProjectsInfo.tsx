import { ProjectsI } from "../../../types/interfaces";

function ProjectsInfo({ text }: ProjectsI) {
  return <p className="py-2 px-2 text-lg">{text}</p>;
}

export default ProjectsInfo;
