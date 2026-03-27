import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type CTAButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "gradient-border" | "gradient-fill";
  className?: string;
};
export default function CTAButton({
  label,
  href,
  onClick,
  variant = "gradient-fill",
  className,
}: CTAButtonProps) {
  if (variant === "gradient-border") {
    return (
      <div className={`flex w-full justify-center items-center ${className}`}>
        <div
          className="bg-linear-to-r from-sky-500 to-indigo-500 rounded-full p-0.5
                        h-14 w-full
                        sm:h-8
                        lg:h-2/3"
        >
          <button
            onClick={onClick}
            className="w-full h-full px-4
                       bg-slate-800 rounded-full
                       text-white font-bold uppercase
                       text-[10px] sm:text-[10px] lg:text-lg
                       flex justify-center items-center"
          >
            {label}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex flex-row justify-center gap-2 items-center
                     rounded-2xl absolute
                     bg-linear-to-r from-cyan-500 to-green-600
                     w-1/2 h-20 bottom-0
                     max-sm:w-1/2 max-sm:h-11
                     sm:h-16
                     md:w-1/4 md:left-26.5
                     lg:h-20 lg:left-29
                     xl:h-22.5 xl:left-38.75
                     2xl:left-46 2xl:h-23
                     ${className}`}
    >
      <a href={href ?? "#contact"}>
        <button className="text-black font-bold text-xl max-sm:text-sm">
          {label}
        </button>
      </a>
      <ArrowTopRightOnSquareIcon className="text-black size-8" />
    </div>
  );
}
