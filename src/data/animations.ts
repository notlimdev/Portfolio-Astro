import * as THREE from "three";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";

type AnimationData = {
  objectToAnimate: GSAPTweenTarget;
  properties: GSAPTweenVars;
  position?: string | number; // ✅ SOPORTE PARA POSITION PARAMETER DE GSAP
};

type TimelineProps = {
  modelRef: THREE.Group | null;
  timeline: GSAPTimeline;
  camera: THREE.PerspectiveCamera;
  labelsrefs: { [key: string]: React.RefObject<HTMLElement | null> };
  animatedTarget: THREE.Vector3;
  controlsRef: ThreeOrbitControls | null;
};

// ✅ Cada escena es una función separada y descriptiva
function sceneIntro(
  modelRef: THREE.Group,
  camera: THREE.PerspectiveCamera,
): AnimationData[] {
  return [
    {
      objectToAnimate: modelRef.rotation as THREE.Euler,
      properties: {
        x: Math.PI * -0.001,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: "power3.inOut",
      },
    },
    {
      objectToAnimate: camera,
      properties: {
        zoom: 4.3,
        duration: 1.5,
        ease: "power3.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      position: "<", // Se sincroniza con la rotación inicial
    },
  ];
}

function sceneLabel(
  labelRef: HTMLElement,
  extraAnimations: AnimationData[] = [],
): AnimationData[] {
  return [
    // 1. Aparecer suavemente
    {
      objectToAnimate: labelRef,
      properties: { opacity: 1, duration: 1, y: 30, ease: "power3.out" },
    },
    // 2. Animaciones extra (cámara, modelo) SINCRONIZADAS con la aparición
    ...extraAnimations.map((anim) => ({ ...anim, position: "<" })),
    // 3. Dwell time: Tiempo de lectura mientras el usuario scrollea
    {
      objectToAnimate: labelRef,
      properties: { opacity: 1, duration: 2 },
    },
    // 4. Desaparecer suavemente hacia arriba
    {
      objectToAnimate: labelRef,
      properties: { opacity: 0, duration: 1, y: 0, ease: "power3.in" },
    },
  ];
}

function sceneCamera(
  camera: THREE.PerspectiveCamera,
  zoom: number,
): AnimationData {
  return {
    objectToAnimate: camera,
    properties: {
      zoom,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => camera.updateProjectionMatrix(),
    },
  };
}

function sceneModelRotation(
  modelRef: THREE.Group,
  x: number,
  y: number,
  z: number,
): AnimationData {
  return {
    objectToAnimate: modelRef.rotation as THREE.Euler,
    properties: { x, y, z, duration: 1.5, ease: "power3.inOut" },
  };
}

export function ArrayAnimations({
  modelRef,
  timeline,
  camera,
  labelsrefs,
  animatedTarget,
  controlsRef,
}: TimelineProps) {
  if (!modelRef) return;

  const animations: AnimationData[] = [
    // — Escena 1: intro —
    ...sceneIntro(modelRef, camera),
    ...sceneLabel(labelsrefs["label_01"].current!, [
      {
        objectToAnimate: animatedTarget,
        properties: {
          x: 0.1,
          y: 0.6,
          z: 0,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            controlsRef?.target.copy(animatedTarget);
            controlsRef?.update();
          },
        },
      },
    ]),

    // — Escena 2: zoom al escritorio —
    sceneCamera(camera, 9),
    ...sceneLabel(labelsrefs["label_02"].current!, [sceneCamera(camera, 7)]),

    // — Escena 3: giro lateral —
    sceneModelRotation(modelRef, 0, Math.PI * 0.55, 0),
    {
      objectToAnimate: modelRef.position as THREE.Vector3,
      properties: { x: 0, y: 0.3, z: 0, duration: 1.5, ease: "power3.inOut" },
      position: "<",
    },
    ...sceneLabel(labelsrefs["label_03"].current!, [
      sceneCamera(camera, 4),
      sceneModelRotation(modelRef, 0, Math.PI * 0.1, 0),
    ]),

    // — Escena 4: vista frontal —
    ...sceneLabel(labelsrefs["label_04"].current!, [
      sceneCamera(camera, 2),
      sceneModelRotation(modelRef, 0, Math.PI * 0.4, 0),
    ]),

    // — Escena 5: cierre —
    ...sceneLabel(labelsrefs["label_05"].current!, [
      sceneModelRotation(modelRef, 0, Math.PI * 0.4, 0),
      sceneModelRotation(modelRef, Math.PI * 0.3, 0, 0),
      sceneCamera(camera, 0.5),
    ]),
  ];

  // ✅ AQUÍ ESTÁ LA MAGIA: ahora procesamos el "position" parameter de GSAP
  animations.forEach(({ objectToAnimate, properties, position }) => {
    timeline.to(objectToAnimate, properties, position);
  });
}
