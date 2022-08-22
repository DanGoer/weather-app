// Socialicon component for Impressum

import { socialIconsList } from "../../../assets/data";

function ImpressumIcons() {
  return (
    <span className="flex flex-row gap-6">
      {socialIconsList.map((icon) => {
        return (
          <a
            key={icon.name}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`link to ${icon.name}`}
          >
            <svg
              className="w-10 h-10 hover:cursor-pointer group"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox}
            >
              <g
                className="transition-all duration-300 group-hover:fill-white"
                fill="#1e293b"
              >
                <path d={icon.svg} />
              </g>
            </svg>
          </a>
        );
      })}
    </span>
  );
}

export default ImpressumIcons;
