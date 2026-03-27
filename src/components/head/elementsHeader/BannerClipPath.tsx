import { useState, useEffect } from "react";
import { clipPaths } from "@data/clip-paths";

const MOBILE_BREAKPOINT = 768;

function useClipPath() {
  const [clipPath, setClipPath] = useState(clipPaths.desktop);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleRisize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setClipPath(
          window.innerWidth < MOBILE_BREAKPOINT
            ? clipPaths.mobile
            : clipPaths.desktop,
        );
      }, 150);
    };

    //Ejecutar al montar
    handleRisize();
    window.addEventListener("resize", handleRisize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleRisize);
    };
  }, []);

  return clipPath;
}
export default function BannerClipPath() {
  const clipPath = useClipPath();

  return (
    <svg className="svg">
      <clipPath id="my-clip-path-desktop" clipPathUnits="objectBoundingBox">
        <path d={clipPath} />
      </clipPath>
    </svg>
  );
}
