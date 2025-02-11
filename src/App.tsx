import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './components/Scene';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

const CameraController = () => {
  const { camera } = useThree();
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0.5, y: 0.5, z: 2 }); // Default camera position

  useEffect(() => {
    console.log('WINDOW WIDTH --> ', window.innerWidth)
    const updateMousePosition = (e: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useFrame(() => {
    // Smoothly interpolate camera position
    targetPosition.current.x = 0.5 + mousePosition.current.x * 0.1;
    targetPosition.current.y = 0.3 + mousePosition.current.y * 0.1;

    camera.position.x += (targetPosition.current.x - camera.position.x) * 0.5;
    camera.position.y += (targetPosition.current.y - camera.position.y) * 0.5;
    camera.position.z += (targetPosition.current.x - camera.position.z) * 0.5;
  });

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [didScroll, setDidScroll] = useState(false);

  const handleScroll = (scrollOffset: number) => {
    if (scrollOffset > 0 && !didScroll) {
      setDidScroll(true);
    } else if (scrollOffset === 0 && didScroll) {
      setDidScroll(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header isLoading={isLoading} />
      <div className="h-screen w-screen bg-gradient-radial from-[#330099] via-[#250070] to-[#1a004d]">
        {!isLoading &&(
          <Canvas 
            shadows 
            camera={{ position: [0.5, 0.3, 2], fov: window.innerWidth < 480? 120: window.innerWidth < 768? 110: window.innerWidth < 1024? 100:55 }}
          >
            <CameraController />
            <directionalLight
              castShadow
              position={[-2, 1, 2]}
              intensity={1}
              shadow-mapSize={[1024, 1024]}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-1, 0, 1]} intensity={5.5} />
            <ambientLight intensity={.1} />
            <ScrollControls pages={3} damping={.2}>
              <Scene onScroll={handleScroll} />
            </ScrollControls>
          </Canvas>
        )}
      </div>
      {!isLoading && <Footer didScroll={didScroll} />}
    </>
  );
};

export default App;
