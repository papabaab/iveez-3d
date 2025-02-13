/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 restaurant-food.gltf 
Author: AERO3D (https://sketchfab.com/aero3d.ua)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mcdonalds-lunch-1b0eeaab628740baae7ee2d19a4b8d2e
Title: McDonald's lunch
*/

import { useGLTF } from '@react-three/drei'

export function RestaurantFood({...props}) {
  const { nodes } = useGLTF('/assets/models/restaurant-food.gltf')
  return (
    <group {...props} dispose={null}>
      <group  rotation={[-Math.PI, -Math.PI / 2, 0]}>
        <mesh castShadow geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh castShadow geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/restaurant-food.gltf')
