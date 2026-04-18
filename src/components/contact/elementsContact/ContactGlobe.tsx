import { ModelEarth } from "@components/models3D/Model_earth";
import { sceneConfig } from "@data/scene-config";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function ContactGlobe() {
  return (
    <div className="relative h-full w-full">
      {/* Glow ambiental detrás del globo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <Canvas>
        <PerspectiveCamera makeDefault position={sceneConfig.camera.position} />
        <ambientLight intensity={5} color={"#ffffff"} position={[0, 3, 0]} />
        <directionalLight
          intensity={3}
          color={"#7ab4ff"}
          position={[0, 1, 0]}
        />
        <Suspense fallback={null}>
          <ModelEarth
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.14, 0.14, 0.14]}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
