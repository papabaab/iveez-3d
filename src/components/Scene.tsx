import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, RoundedBox } from '@react-three/drei';
import { IphoneModel } from './IphoneModel';
import { SamsungEdited } from './Samsung-edited';
import { GooglePixelModel } from './Google-pixel';
import { Emarket } from './Emarket';
import { RestaurantFood } from './Restaurant-food';
import { HotelBed } from './Hotel-bed';

const Scene = () => {
  const scroll = useScroll();
  const boxRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  // const initialPositions = [[0, 0, 0], [0, 0, -2], [0, 0, -4], [0, 0, -6]];

  useFrame((state) => {
    const scrollProgress = scroll.offset;
    state.camera.position.z = 2 - (scrollProgress * 12);

    // Update RoundedBox positions
    // boxRefs.forEach((ref, index) => {
    //   if (ref.current) {
    //     ref.current.position.z = initialPositions[index][2] + (scrollProgress * 8);
    //   }
    // });
  });

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
          color="#ffffff"
        />
      </mesh>

      {/* First group */}
      <group position={[0, 0, 0]}>
        <IphoneModel scale={.0017} rotation={[0, Math.PI-Math.PI/10, 0]} position={[.2, -.5, 0]} castShadow receiveShadow />
        <GooglePixelModel scale={7} rotation={[0, -Math.PI/10, 0]} position={[.8, -.5, 0]} castShadow receiveShadow />
        <SamsungEdited scale={.17} rotation={[0, -Math.PI/10, 0]} position={[1, -.5, -.1]} castShadow receiveShadow />
        <RoundedBox ref={boxRefs[0]} args={[1.5, 1, 0]} position={[-1, 0, 0]}>
          <meshStandardMaterial attach="material" color="black" />
          <Text position={[0, .35, 0.1001]} color="white" fontWeight={900} fontSize={.05}>
            Featured Phones
          </Text>
          <Text
            position={[0, 0, 0.1001]}
            fontSize={0.05}
            maxWidth={1}
            color="white"
          >
            Experience the latest in mobile technology with our premium selection of smartphones.
          </Text>
        </RoundedBox>
      </group>

      {/* Second group */}
      <group position={[0, 0, -4]}>
        <IphoneModel scale={.0017} rotation={[0, Math.PI, 0]} position={[-1, -.4, 0]} castShadow receiveShadow />
        <RoundedBox ref={boxRefs[1]} args={[1.5, 1, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="black" />
          <Text position={[0, .35, 0.1001]} color="white" fontWeight={900} fontSize={.05}>
            iPhone 14 Pro
          </Text>
          <Text
            position={[0, 0, 0.1001]}
            fontSize={0.05}
            maxWidth={1}
            color="white"
          >
            Discover the power of innovation with the latest iPhone 14 Pro.
          </Text>
        </RoundedBox>
        <Emarket scale={.04} rotation={[0, 0, 0]} position={[1, -.2, 0]} castShadow receiveShadow />
      </group>

      {/* Third group */}
      <group position={[0, 0, -8]}>
        <GooglePixelModel scale={7} position={[-.6, -.5, 0]} castShadow receiveShadow />
        <RoundedBox ref={boxRefs[2]} args={[1.5, 1, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="black" />
          <Text position={[0, .35, 0.1001]} color="white" fontWeight={900} fontSize={.05}>
            Samsung Galaxy S23
          </Text>
          <Text
            position={[0, 0, 0.1001]}
            fontSize={0.05}
            maxWidth={1}
            color="white"
          >
            Experience the next level of Android with the Samsung Galaxy S23.
          </Text>
        </RoundedBox>
        <RestaurantFood position={[1, .84, 0]} scale={.03} castShadow receiveShadow />
      </group>

      {/* Fourth group */}
      <group position={[0, 0, -12]}>
        <SamsungEdited scale={.17} rotation={[0, 0, 0]} position={[-1, -.5, 0]} castShadow receiveShadow />
        <RoundedBox ref={boxRefs[3]} args={[1.5, 1, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="black" />
          <Text position={[0, .35, 0.1001]} color="white" fontWeight={900} fontSize={.05}>
            iPhone 13
          </Text>
          <Text
            position={[0, 0, 0.1001]}
            fontSize={0.05}
            maxWidth={1}
            color="white"
          >
            The perfect balance of power and value in the iPhone 13.
          </Text>
        </RoundedBox>
        <HotelBed position={[1, -.1, 0]} scale={.12} castShadow receiveShadow />
      </group>
    </>
  );
};

export default Scene;
