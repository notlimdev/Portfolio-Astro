import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { useModelStore } from "@store/store";
import { useLabelsStore } from "@store/store_Labels_Html";
import { useTimelineStore } from "@store/store-timeline-scrollTrigger";
import { ArrayAnimations } from "@data/animations";
import { useRef } from "react";

export function useModelAnimations(
  controlsRef: React.RefObject<ThreeOrbitControls | null>,
) {
  const { camera } = useThree<{ camera: THREE.PerspectiveCamera }>();
  const modelRef = useModelStore((state) => state.modelRef);
  const labelsrefs = useLabelsStore((state) => state.labelsRef);
  const timelineScene = useTimelineStore((state) => state.timelineAboutSection);
  const animatedTarget = useRef(new THREE.Vector3(0, 0, 0));

  useGSAP(
    () => {
      if (!modelRef || !timelineScene) return;

      // Inicializar controles
      controlsRef.current?.target.set(0, 0, 0);
      controlsRef.current?.update();

      ArrayAnimations({
        modelRef,
        timeline: timelineScene,
        camera,
        labelsrefs,
        animatedTarget: animatedTarget.current,
        controlsRef: controlsRef.current,
      });
    },
    { dependencies: [modelRef, timelineScene] },
  );
}
