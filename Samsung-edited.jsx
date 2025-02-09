/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/assets/models/samsung/samsung-edited.gltf 
Author: Imagigoo (https://sketchfab.com/Imagigoo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/samsung-s23-ultra-free-f559464bf0f8453d95a0cd273de3ff0b
Title: Samsung S23 Ultra (Free)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/samsung-edited.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Rearcase} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Bezel} />
        <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Cam_lens} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Flash} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Sensor} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.SAMSUNG_LOGO} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Antenna_Plastic} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Black_hole} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Flash_Glass} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Cam_Body} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Rearcase_hole} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Zoom_Cam} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Usb_1} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Usb_2} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Cam_Bezel} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.BackCamDeco} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Back_Cover_Glass} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.BackCover_Glass_hole} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Cam_Glass} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Gray} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Grey2} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.SpeakerMic} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.Pen_Body} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Pen_Button} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Pen_Top} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Rearcase} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Pen_Ball} />
      </group>
    </group>
  )
}

useGLTF.preload('/samsung-edited.gltf')
