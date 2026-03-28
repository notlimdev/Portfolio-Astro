export const sceneConfig = {
  lights: {
    ambient: {
      intensity: 1.7,
      color: "#9288FF",
      position: [0, 6, 5] as [number, number, number],
    },
    directional: {
      intensity: 3,
      color: "#9288FF",
      position: [1, 6, 10] as [number, number, number],
    },
  },
  orbitControls: {
    enableZoom: false,
    enablePan: false,
    enableRotate: false,
    minAzimuthAngle: -Math.PI / 12,
    maxAzimuthAngle: Math.PI / 12,
    minPolarAngle: Math.PI * 0.3,
    maxPolarAngle: Math.PI * 0.35,
  },
  camera: {
    position: [0, 0, 2] as [number, number, number],
  },
};
