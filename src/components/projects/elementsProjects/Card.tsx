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

  const previewLabel = project.category
    .split("/")
    .map((item) => item.trim())
    .slice(0, 3)
    .join(" + ")
    .toUpperCase();

  const previewHeadlineRaw =
    project.highlights?.[0] ??
    project.description ??
    "Project system focused on quality, structure and execution.";

  const previewHeadline =
    previewHeadlineRaw.length > 84
      ? `${previewHeadlineRaw.slice(0, 81).trim()}...`
      : previewHeadlineRaw;

  return (
    <div className="panel group w-full max-w-[92vw] shrink-0 overflow-hidden rounded-[28px] border border-slate-200/10 bg-linear-to-b from-slate-800/70  to-slate-400/40 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:w-140 lg:w-155">
      <div className="flex h-full min-h-140 flex-col gap-5 p-5 sm:min-h-150 sm:gap-6 sm:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-200/55 sm:text-xs">
              {project.category}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-slate-200/12 bg-green-400/40 px-3 py-1 font-mono text-[11px] font-medium text-slate-100/85">
                {project.year}
              </span>
              <span
                className={`rounded-full border border-indigo-300/28 ${project.status === "in-progress" ? "bg-cyan-300/60" : "bg-indigo-400/60"} px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-100`}
              >
                {statusLabelMap[project.status]}
              </span>
            </div>
          </div>

          <h2 className="max-w-[16ch] text-2xl font-bold leading-tight text-indigo-300/80 sm:max-w-[20ch] sm:text-3xl">
            {project.title}
          </h2>
        </div>

        <div className="relative flex min-h-47.5 w-full flex-col justify-between overflow-hidden rounded-[22px] border border-slate-200/10 bg-linear-to-b from-slate-700/90 to-indigo-700/10 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-50 sm:px-5 sm:py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-300/14 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-indigo-400/14 via-indigo-200/4 to-transparent"
          />
          <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <span className="font-mono text-[11px] font-medium text-slate-200/70 sm:text-xs">
              {project.slug}
            </span>
            <span className="w-fit self-start rounded-full border border-slate-200/12 bg-slate-100/8 px-3 py-1 font-mono text-[11px] font-medium text-slate-50/90">
              {project.role}
            </span>
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-200">
              {previewLabel}
            </span>
            <p className="max-w-[23ch] text-2xl font-semibold leading-[1.02] text-white sm:max-w-[24ch] sm:text-[2rem]">
              {previewHeadline}
            </p>
          </div>
        </div>

        <p className="max-w-[58ch] text-sm leading-7 text-white sm:text-[15px]">
          {project.excerpt}
        </p>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200/50 sm:text-xs">
            Technologies
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-400/50 bg-slate-100/6 px-3 py-2 font-mono text-[11px] font-medium text-slate-100/88 sm:text-xs"
              >
                {technology}
              </span>
            ))}
            {project.technologies.length > 3 ? (
              <span className="font-mono text-[11px] font-medium text-slate-200/55 sm:text-xs">
                + {project.technologies.length - 3} more
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-slate-200/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] font-medium text-slate-100/80 sm:text-xs">
            Selected project / repository available
          </p>
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-200/20 bg-indigo-300 px-4 py-3 font-mono text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-indigo-200 sm:w-auto"
            >
              {primaryLink.label}
              <ArrowTopRightOnSquareIcon width={18} height={18} className="" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
