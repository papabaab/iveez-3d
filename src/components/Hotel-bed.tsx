/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 hotel-bed.gltf 
Author: lugher3d.com (https://sketchfab.com/Luca.Malviz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/queen-bed-39d113d5868d473caf71e928d1d313a6
Title: Queen-bed
*/

import { useGLTF } from '@react-three/drei'

export function HotelBed({...props}) {
  const { nodes, materials } = useGLTF('/assets/models/hotel-bed.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-14.678, 13.933, 30.623]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.033}>
        <mesh castShadow geometry={nodes.queen_bed_Curtins1_0.geometry} material={materials.Curtins1} position={[928.277, -448.134, -436.417]} />
        <mesh castShadow geometry={nodes.queen_bed4_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} position={[928.277, -448.134, -436.417]} />
        <mesh castShadow geometry={nodes.queen_bed5_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} position={[928.277, -448.134, -436.417]} />
        <mesh castShadow geometry={nodes.queen_bed6_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} position={[928.277, -448.134, -436.417]} />
        <mesh castShadow geometry={nodes.queen_bed7_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} position={[928.277, -448.134, -436.417]} />
        <mesh castShadow geometry={nodes.pCube42143476_fabric_brown_0.geometry} material={materials.fabric_brown} position={[929.095, -445.003, -395.42]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh castShadow geometry={nodes.pCube42143475_fabric_brown_0.geometry} material={materials.fabric_brown} position={[929.095, -450.143, -409.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
        <mesh castShadow geometry={nodes.polySurface285047_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} position={[928.277, -448.134, -436.417]} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/hotel-bed.gltf')
