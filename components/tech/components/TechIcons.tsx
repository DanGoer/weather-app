import Image from "next/image";
import { techIcons } from "../../../assets/data";

function TechIcons() {
  return (
    <section className="flex flex-wrap justify-center">
      {techIcons.map((icon) => {
        return (
          <div key={icon.name} className="flex flex-col m-4">
            <Image
              src={`/tech-icons/${icon.svg}`}
              alt="tech-icon"
              width="100"
              height="100"
            />
            <h3 className="color-hover text-xl font-semibold mt-2">
              {icon.name}
            </h3>
          </div>
        );
      })}
    </section>
  );
}

export default TechIcons;
