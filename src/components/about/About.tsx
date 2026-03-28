import { Canvas } from "@react-three/fiber";
import { ModelGamerRoom } from "../models3D/Scene001";
import { Suspense, useEffect, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { AnimationModel } from "@components/animations/AnimationModel";
import { useDivRefsStore } from "@store/store-sections";
import { labelsData } from "@data/labeldata";
import { sceneConfig } from "@data/scene-config";
import LabelsHtml from "@components/about/LabelsHtml";

const About = () => {
  const sectionHeadRef = useRef<HTMLDivElement>(null);
  const divrefheight = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ThreeOrbitControls | null>(null);
  const setDivRef = useDivRefsStore((state) => state.setDivRef);

  useEffect(() => {
    if (sectionHeadRef.current) setDivRef("About-Me", sectionHeadRef);
    if (divrefheight.current) setDivRef("divrefheight", divrefheight);
  }, [setDivRef]);

  return (
    <div
      id="About-Me"
      className="w-full h-screen overflow-x-hidden"
      ref={sectionHeadRef}
    >
      <div
        ref={divrefheight}
        className="w-full h-screen flex flex-col justify-around items-center"
      >
        <div className="w-full flex flex-row justify-center items-center">
          <h1
            className="w-[90%] text-white text-4xl font-bold text-center
                         border-b-2 border-t-2 border-dashed"
          >
            About
          </h1>
        </div>

        {/* Canvas 3D */}
        <div className="w-full h-full">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              position={sceneConfig.camera.position}
            />

            <ambientLight
              intensity={sceneConfig.lights.ambient.intensity}
              color={sceneConfig.lights.ambient.color}
              position={sceneConfig.lights.ambient.position}
            />
            <directionalLight
              intensity={sceneConfig.lights.directional.intensity}
              color={sceneConfig.lights.directional.color}
              position={sceneConfig.lights.directional.position}
            />

            <Suspense fallback={null}>
              <AnimationModel controlsRef={controlsRef}>
                <ModelGamerRoom
                  position={[0, 0, 0]}
                  rotation={[1.25, 0, 0]}
                  scale={[10, 10, 10]}
                />
              </AnimationModel>
            </Suspense>

            <OrbitControls ref={controlsRef} {...sceneConfig.orbitControls} />
          </Canvas>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
        {labelsData.map((label) => (
          <LabelsHtml id={label.id} label={label} key={label.id} />
        ))}
      </div>
    </div>
  );
};

export default About;
