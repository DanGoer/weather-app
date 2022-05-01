import { ProjectsI } from "../../../types/interfaces";

function ProjectsLinks({ livelink, github }: ProjectsI) {
  return (
    <span className="flex flex-row justify-center pb-4">
      <a
        href={livelink}
        type="button"
        className="text-white bg-gray-800 hover:bg-white hover:text-black font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
      >
        Live
      </a>
      <a
        href={github}
        type="button"
        className="text-white bg-gray-800 hover:bg-white hover:text-black font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
      >
        Code
      </a>
    </span>
  );
}

export default ProjectsLinks;
