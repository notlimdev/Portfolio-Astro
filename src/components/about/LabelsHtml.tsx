import { useEffect, useRef } from "react";
import { useLabelsStore } from "@store/store_Labels_Html";
import type { LabelsDataTypes } from "@data/labeldata";

export default function LabelsHtml({
  id,
  label,
}: {
  id: string;
  label: LabelsDataTypes;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const addLabelRef = useLabelsStore((state) => state.addLabelRef);

  useEffect(() => {
    if (ref.current) {
      addLabelRef(id, ref);
    }
  }, [id, addLabelRef]);

  return (
    <div
      ref={ref}
      className="opacity-0 absolute flex flex-col gap-2 p-6 md:p-8
                 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-3xl
                 shadow-2xl shadow-black/50 max-w-[85vw] sm:max-w-sm md:max-w-md 
                 pointer-events-none"
      style={label.position}
    >
      <p
        className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-cyan-400
                   font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider"
      >
        {label.title}
      </p>
      <p
        className="text-slate-200 font-medium text-sm md:text-base leading-relaxed"
      >
        {label.description}
      </p>
    </div>
  );
}
