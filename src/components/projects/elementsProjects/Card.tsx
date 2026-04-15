import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { ProjectType } from "@data/projects";

type CardProps = {
  project: ProjectType;
};

const Card = ({ project }: CardProps) => {
  const primaryLink =
    project.links?.[0] ??
    (project.liveUrl
      ? {
          label: "Go To Project",
          href: project.liveUrl,
        }
      : undefined);

  const statusLabelMap: Record<ProjectType["status"], string> = {
    draft: "Draft",
    "in-progress": "In Progress",
    completed: "Completed",
    archived: "Archived",
  };

  const previewHeadline =
    project.highlights?.[0] ??
    project.description ??
    "Project system focused on quality, structure and execution.";

  return (
    <div
      className="panel group w-[620px] max-w-[92vw] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#121212] text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1 sm:w-[560px] lg:w-[620px]"
    >
      <div className="flex h-full flex-col gap-5 p-5 sm:gap-6 sm:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-white/45 sm:text-xs">
              {project.category}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 font-mono text-[11px] font-medium text-white/80">
                {project.year}
              </span>
              <span className="rounded-full border border-orange-400/35 bg-orange-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-300">
                {statusLabelMap[project.status]}
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold leading-none text-white sm:text-4xl">
            {project.title}
          </h2>
        </div>

        <div
          className="relative flex min-h-[190px] w-full flex-col justify-between overflow-hidden rounded-[22px] border border-white/8 bg-linear-to-br from-[#171717] via-[#1c1c1c] to-[#121212] px-4 py-4 sm:min-h-[200px] sm:px-5 sm:py-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-orange-500/24 via-orange-500/8 to-transparent"
          />
          <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <span className="font-mono text-[11px] font-medium text-white/65 sm:text-xs">
              {project.slug}
            </span>
            <span className="w-fit rounded-full border border-white/12 bg-white/6 px-3 py-1 font-mono text-[11px] font-medium text-white/85">
              {project.role}
            </span>
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              Scene + Motion + Product
            </span>
            <p className="max-w-[24ch] text-2xl font-semibold leading-[1.02] text-white sm:text-[2rem]">
              {previewHeadline}
            </p>
          </div>
        </div>

        <p className="text-sm leading-7 text-white/68 sm:text-[15px]">
          {project.excerpt}
        </p>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-xs">
            Technologies
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] font-medium text-white/86 sm:text-xs"
              >
                {technology}
              </span>
            ))}
            {project.technologies.length > 3 ? (
              <span className="font-mono text-[11px] font-medium text-white/55 sm:text-xs">
                + {project.technologies.length - 3} more
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] font-medium text-white/42 sm:text-xs">
            Selected project / repository available
          </p>
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff8400] px-4 py-3 font-mono text-xs font-semibold text-black transition-all duration-300 hover:bg-[#ff9b2f] sm:w-auto"
            >
              {primaryLink.label}
              <ArrowTopRightOnSquareIcon
                width={18}
                height={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
