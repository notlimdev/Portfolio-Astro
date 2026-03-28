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
      className="opacity-0 absolute flex flex-col items-center"
      style={label.position}
    >
      <h1
        className="text-white font-extrabold underline
                     text-[2rem] sm:text-[5rem] lg:text-[8rem] xl:text-[10rem]"
      >
        {label.title}
      </h1>
      <p
        className="text-white font-bold
                    text-[8px] sm:text-base lg:text-lg xl:text-xl"
      >
        {label.description}
      </p>
    </div>
  );
}
