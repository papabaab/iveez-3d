import { useScroll, Image } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { IphoneModel } from './IphoneModel';
import { SamsungEdited } from './Samsung-edited';
import { GooglePixelModel } from './Google-pixel';
import { Emarket } from './Emarket';
import { RestaurantFood } from './Restaurant-food';
import { HotelBed } from './Hotel-bed';
import { Group } from 'three';
import gsap from 'gsap';

const Scene = () => {
  const [androidHovered, setAndroidHovered] = useState(false);
  const [appleHovered, setAppleHovered] = useState(false);
  const [samsungSoloHovered, setSamsungSoloHovered] = useState(false);
  const [iphoneSoloHovered, setIphoneSoloHovered] = useState(false);
  const [pixelSoloHovered, setPixelSoloHovered] = useState(false);

  const iphoneSoloRef = useRef<Group>(null);
  const samsungSoloRef = useRef<Group>(null);
  const pixelSoloRef = useRef<Group>(null);
  const scroll = useScroll();

  useFrame((state) => {
    const scrollProgress = scroll.offset;
    state.camera.position.z = 2 - (scrollProgress * 12);
  });

  const handleModelHover = (ref: React.RefObject<Group>, isHovered: boolean) => {
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        y: isHovered ? Math.PI/10 : 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  useEffect(() => {
    handleModelHover(iphoneSoloRef, iphoneSoloHovered);
  }, [iphoneSoloHovered]);

  useEffect(() => {
    handleModelHover(samsungSoloRef, samsungSoloHovered);
  }, [samsungSoloHovered]);

  useEffect(() => {
    handleModelHover(pixelSoloRef, pixelSoloHovered);
  }, [pixelSoloHovered]);

  return (
    <>
      {/* Ground plane */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1, 0]} 
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#F29900"
        />
      </mesh>

      {/* First group */}
      <group position={[0, 0, 0]}>
        <Image 
          url="/assets/imgs/iveez-landing-fr.jpeg"
          position={[-1.1, 0, 0]}
          radius={0.1}
          scale={[2, 1]}
          transparent
        />
        <Image 
          url="/assets/imgs/download-android.png"
          position={[-1.4, -.6, 0]}
          radius={0.01}
          scale={androidHovered ? [.6, .25] : [.5, .2]}
          transparent
          onPointerOver={() => setAndroidHovered(true)}
          onPointerOut={() => setAndroidHovered(false)}
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.iveez.app', '_blank')}
        />
        <Image 
          url="/assets/imgs/download-apple.png"
          position={[-.8, -.6, 0]}
          radius={0.01}
          scale={appleHovered ? [.6, .25] : [.5, .2]}
          onClick={() => window.open('https://apps.apple.com/us/app/iveez/id1638195131?itsct=apps_box_link&itscg=30200', '_blank')}
          transparent
          onPointerOver={() => setAppleHovered(true)}
          onPointerOut={() => setAppleHovered(false)}
        />
        <group>
          <IphoneModel 
            scale={.0017} 
            position={[.2, -.5, 0]} 
            rotation={[0, Math.PI-Math.PI/10, 0]}
            castShadow 
            receiveShadow
          />
        </group>
        <group>
          <GooglePixelModel 
            scale={7} 
            position={[.8, -.5, -.2]} 
            rotation={[0, -Math.PI/10, 0]}
            castShadow 
            receiveShadow
            />
        </group>
        <group>
          <SamsungEdited 
            scale={.17} 
            position={[1, -.5, -.4]} 
            castShadow 
            rotation={[0, -Math.PI/10, 0]}
            receiveShadow
            />
        </group>
      </group>

      {/* Second group */}
      <group position={[0, 0, -4]}>
        <group ref={samsungSoloRef}>
          <SamsungEdited 
            scale={.17} 
            position={[-.6, -.5, 0]} 
            castShadow 
            rotation={[0,0, 0]}
            receiveShadow 
            onPointerEnter={() => setSamsungSoloHovered(true)}
            onPointerLeave={() => setSamsungSoloHovered(false)}
          />
        </group>
        <Emarket scale={.04} rotation={[Math.PI/10, Math.PI/4, 0]} position={[-1.0, -.6, 0]} castShadow receiveShadow />
        <Image 
          url="/assets/imgs/emarket-img.png"
          position={[.5, 0, -.2]}
          scale={[1.8, 1.5]}
          transparent
        />
        <pointLight position={[-1, 0, .5]} intensity={5.5} />
      </group>

      {/* Third group */}
      <group position={[0, 0, -8]}>
        <Image 
          url="/assets/imgs/restaurant-img.png"
          position={[-1, 0, -.3]}
          scale={[1.8, 1.57]}
          transparent
        />

        <group ref={iphoneSoloRef}>
        <IphoneModel  
        scale={.0017} 
        rotation={[0, Math.PI, 0]} 
        position={[.3, -.6, 0]} 
        onPointerEnter={() => setIphoneSoloHovered(true)}
        onPointerLeave={() => setIphoneSoloHovered(false)}
        castShadow receiveShadow />
        </group>
        <RestaurantFood position={[.6, .84, .4]} rotation={[Math.PI/8, 0, Math.PI/8]} scale={.03} castShadow receiveShadow />
        <pointLight position={[-1, 1, .5]} intensity={5.5} />
        </group>

      {/* Fourth group */}
      <group position={[0, 0, -12]}>
        <Image 
          url="/assets/imgs/hotel-img.png"
          position={[.8, 0, -0.2]}
          scale={[1.76, 1.5]}
          transparent
        />
        <group ref={pixelSoloRef}>
        <GooglePixelModel 
        onPointerEnter={() => setPixelSoloHovered(true)}
        onPointerLeave={() => setPixelSoloHovered(false)}
        scale={7} 
        position={[-.07, -.7, 0]} 
        castShadow receiveShadow />
        </group>
        <HotelBed position={[-1, -.6, 0]} rotation={[Math.PI/10, -Math.PI/2, 0]} scale={.12} castShadow receiveShadow />
        <pointLight position={[-1, 1, .5]} intensity={5.5} />
        </group>
    </>
  );
};

export default Scene;
