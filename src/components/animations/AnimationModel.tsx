import React from "react";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { useModelScrollTrigger } from "@hooks/useModelScrollTrigger";
import { useModelAnimations } from "@hooks/useModelAnimations";

interface AnimationWrapperProps {
  children: React.ReactNode;
  controlsRef: React.RefObject<ThreeOrbitControls | null>;
}

export const AnimationModel = ({
  children,
  controlsRef,
}: AnimationWrapperProps) => {
  useModelScrollTrigger();
  useModelAnimations(controlsRef);

  return <>{children}</>;
};
