import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    ["Earth_Material_#50_0"]: THREE.Mesh;
    ["EarthClouds_Material_#62_0"]: THREE.Mesh;
  };
  materials: {
    Material_50: THREE.MeshStandardMaterial;
    Material_62: THREE.MeshStandardMaterial;
  };
};

export function ModelEarth(props: ThreeElements["group"]) {
  const group = React.useRef<THREE.Group | null>(null);

  const { nodes, materials } = useGLTF(
    "/earth/model_earth-transformed.glb",
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["Earth_Material_#50_0"].geometry}
          material={materials.Material_50}
        />
      </group>
      <group rotation={[-Math.PI / 2, -Math.PI / 9, 0]} scale={1.01}>
        <mesh
          geometry={nodes["EarthClouds_Material_#62_0"].geometry}
          material={materials.Material_62}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/earth/model_earth-transformed.glb");
