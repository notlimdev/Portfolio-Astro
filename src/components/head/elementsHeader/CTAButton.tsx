import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type CTAButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "gradient-border" | "gradient-fill";
  className?: string;
  target?: string;
};
export default function CTAButton({
  label,
  href,
  onClick,
  variant = "gradient-fill",
  className,
  target,
}: CTAButtonProps) {
  if (variant === "gradient-border") {
    const isLink = Boolean(href);
    return (
      <div className={`flex w-full justify-center items-center ${className}`}>
        {isLink ? (
          <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            onClick={onClick}
            className="bg-linear-to-r from-sky-500 to-indigo-500 rounded-full p-0.5
                          h-14 w-full
                          sm:h-8
                          lg:h-2/3
                          cursor-pointer hover:scale-90 hover:shadow-lg transition-all duration-300 block"
          >
            <div
              className="w-full h-full px-4
                         bg-slate-800 rounded-full
                         text-white font-bold uppercase
                         text-[10px] sm:text-[10px] lg:text-lg
                         flex justify-center items-center cursor-pointer"
            >
              {label}
            </div>
          </a>
        ) : (
          <button
            onClick={onClick}
            className="bg-linear-to-r from-sky-500 to-indigo-500 rounded-full p-0.5
                          h-14 w-full
                          sm:h-8
                          lg:h-2/3
                          cursor-pointer hover:scale-90 hover:shadow-lg transition-all duration-300 block"
          >
            <div
              className="w-full h-full px-4
                         bg-slate-800 rounded-full
                         text-white font-bold uppercase
                         text-[10px] sm:text-[10px] lg:text-lg
                         flex justify-center items-center cursor-pointer"
            >
              {label}
            </div>
          </button>
        )}
      </div>
    );
  }
  return (
    <a
      href={href ?? "#contact"}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group flex flex-row justify-center gap-2 items-center
                     rounded-2xl absolute
                     bg-linear-to-r from-cyan-500 to-green-600
                     w-1/2 h-20 bottom-0
                     max-sm:w-1/2 max-sm:h-11
                     sm:h-16
                     md:w-1/4 md:left-26.5
                     lg:h-20 lg:left-29
                     xl:h-22.5 xl:left-38.75
                     2xl:left-46 2xl:h-23
                     cursor-pointer hover:scale-90 hover:shadow-2xl hover:shadow-cyan-500/40
                     transition-all duration-300 ease-in-out
                     ${className}`}
    >
      <span className="text-black font-bold text-xl max-sm:text-sm">
        {label}
      </span>
      <ArrowTopRightOnSquareIcon className="text-black size-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
    </a>
  );
}
