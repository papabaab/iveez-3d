import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './components/Scene';
import Footer from './components/Footer';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <>
      <Header />
      {/* <div className="h-screen w-screen bg-[#F29900]"> */}
      <div className="h-screen w-screen bg-[#fff]">
      <Canvas 
        shadows 
        camera={{ position: [.5, 0, 2], fov: 45 }}
      >
        <directionalLight
          castShadow
          position={[1, 2, 3]}
          intensity={2}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <ambientLight intensity={0.5} />
        <ScrollControls pages={3} damping={1}>
          <Scene />
        </ScrollControls>
      </Canvas>
      </div>
      <Footer />
    </>
  );
};

export default App;
