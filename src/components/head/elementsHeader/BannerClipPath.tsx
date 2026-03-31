import { useState, useEffect } from "react";
import { clipPaths } from "@data/clip-paths";

const MOBILE_BREAKPOINT = 768;

function useClipPath() {
  const [clipPath, setClipPath] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setClipPath(
          window.innerWidth < MOBILE_BREAKPOINT
            ? clipPaths.mobile
            : clipPaths.desktop,
        );
      }, 150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return clipPath;
}

export default function BannerClipPath() {
  const clipPath = useClipPath();

  if (!clipPath) return null;

  return (
    <svg className="svg">
      <clipPath id="my-clip-path-desktop" clipPathUnits="objectBoundingBox">
        <path d={clipPath} />
      </clipPath>
    </svg>
  );
}
