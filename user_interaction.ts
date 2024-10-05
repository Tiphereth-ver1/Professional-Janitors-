// src/components/BeaconVisualizer.tsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Define the types for the beacon data
interface BeaconData {
  position: [number, number, number];
  orientation: [number, number, number];
  acceleration: [number, number, number];
}

const Beacon: React.FC<{ beaconData: BeaconData; view: string }> = ({ beaconData, view }) => {
  let position: [number, number, number] = [0, 0, 0];
  let rotation: [number, number, number] = [0, 0, 0];

  // Adjust the position or orientation based on the current view
  if (view === 'position') {
    position = beaconData.position;
  } else if (view === 'orientation') {
    rotation = beaconData.orientation;
  } else if (view === 'acceleration') {
    position = [
      beaconData.acceleration[0] * 0.5,
      beaconData.acceleration[1] * 0.5,
      beaconData.acceleration[2] * 0.5,
    ];
  }

  return (
    <mesh position={position} rotation={rotation as [number, number, number]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const BeaconVisualizer: React.FC = () => {
  const [beaconData, setBeaconData] = useState<BeaconData>({
    position: [0, 0, 0],
    orientation: [0, 0, 0],
    acceleration: [0, 0, 0],
  });

  const [view, setView] = useState<'position' | 'orientation' | 'acceleration'>('position');

  useEffect(() => {
    // Simulate real-time updates with mock data
    const interval = setInterval(() => {
      const newBeaconData: BeaconData = {
        position: [
          Math.random() * 5,
          Math.random() * 5,
          Math.random() * 5,
        ],
        orientation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        acceleration: [
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2,
        ],
      };
      setBeaconData(newBeaconData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* Buttons for switching views */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
        <button onClick={() => setView('position')}>Position View</button>
        <button onClick={() => setView('orientation')}>Orientation View</button>
        <button onClick={() => setView('acceleration')}>Acceleration View</button>
      </div>

      {/* 3D Canvas */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Beacon beaconData={beaconData} view={view} />
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default BeaconVisualizer;
