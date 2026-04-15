import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { ProjectType } from "@data/projects";

type CardProps = {
  project: ProjectType;
};

const Card = ({ project }: CardProps) => {
  const primaryLink = project.links[0];

  return (
    <div
      className="
          w-150 max-sm:w-87.5 max-sm:h-150 h-125 shrink-0
          rounded-3xl panel bg-white/10 backdrop-blur-sm border border-opacity-20 border-[#dbdbdb]
          flex flex-col justify-center items-center"
    >
      <div className="w-[90%] h-[95%] flex flex-col justify-start gap-4 text-white">
        <h1 className="uppercase text-sm font-bold">{project.category}</h1>
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <div
          className=" 
              bg-cover bg-center h-1/3 rounded-3xl flex 
              flex-col justify-center items-center relative w-full
              md:h-1/2
              "
        >
          <h1 className="absolute z-10 px-4 text-center text-4xl text-white font-bold">
            {project.title}
          </h1>
          <div
            className="absolute w-3/4 h-3/4 backdrop-blur-[5px] border rounded-3xl
                hover:backdrop-blur-none hover:transition"
          ></div>
        </div>
        <p>{project.summary}</p>
        <ul className="space-y-5">
          <h2 className="text-sm font-bold uppercase">technologies: </h2>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="bg-opacity-40 bg-slate-300 px-4 rounded-xl text-white border border-slate-500"
              >
                {technology}
              </span>
            ))}
          </div>
        </ul>
        <div className="w-full flex flex-row justify-end">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              className="hover:border-b border-b-white flex flex-row items-center gap-2"
            >
              {primaryLink.label}
              <ArrowTopRightOnSquareIcon
                width={24}
                height={24}
                className="hover:text-slate-400"
              />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
