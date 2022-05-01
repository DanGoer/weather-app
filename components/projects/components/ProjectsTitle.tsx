import { ProjectsI } from "../../../types/interfaces";

function ProjectsTitle({ title, livelink }: ProjectsI) {
  return (
    <a href={livelink}>
      <h3 className="color-hover text-4xl hover:cursor-pointer font-semibold">
        {title}
      </h3>
    </a>
  );
}

export default ProjectsTitle;
