import { personalInfo } from "@data/personal-info";
import {
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

// Íconos SVG de redes sociales (inline — no requieren dependencias extra)
const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Tagline */}
      <div className="flex flex-col gap-2">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300/70">
          Available for work
        </p>
        <p className="max-w-[42ch] text-sm leading-7 text-slate-300/80">
          ¿Tenés un proyecto en mente o querés charlar sobre tecnología?{" "}
          <span className="text-white">Escribime sin problema.</span>
        </p>
      </div>

      {/* Email */}
      <a
        href={`mailto:${personalInfo.email}`}
        className="group inline-flex w-fit items-center gap-3 rounded-xl border border-slate-200/10 bg-slate-800/60 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-indigo-300/40 hover:bg-slate-700/60 hover:text-white"
      >
        <EnvelopeIcon className="size-4 shrink-0 text-indigo-300" />
        <span>{personalInfo.email}</span>
        <ArrowTopRightOnSquareIcon className="size-3.5 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      {/* Redes sociales */}
      <div className="flex items-center gap-3">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub de Milton Vergara"
          className="flex items-center gap-2 rounded-lg border border-slate-200/10 bg-slate-800/50 px-4 py-2.5 font-mono text-xs font-medium text-slate-300 transition-all duration-200 hover:border-slate-200/25 hover:text-white"
        >
          <GitHubIcon />
          notlimdev
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn de Milton Vergara"
          className="flex items-center gap-2 rounded-lg border border-slate-200/10 bg-slate-800/50 px-4 py-2.5 font-mono text-xs font-medium text-slate-300 transition-all duration-200 hover:border-blue-400/30 hover:text-white"
        >
          <LinkedInIcon />
          notlimdev
        </a>
      </div>
    </div>
  );
}
