import { useGLTF } from '@react-three/drei'

export function IphoneModel({...props}) {
  const { nodes, materials } = useGLTF('/assets/models/iphone/iphone.gltf')
  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
      <mesh castShadow geometry={nodes.IPHONE13_Frame1_0.geometry} material={materials.Frame1} />
      <mesh castShadow geometry={nodes.IPHONE13_SpeakerAndMic1_0.geometry} material={materials.SpeakerAndMic1} />
      <mesh castShadow geometry={nodes.IPHONE13_gray2_0.geometry} material={materials.gray2} />
      <mesh castShadow geometry={nodes.IPHONE13_AntennaStrip_0.geometry} material={materials.AntennaStrip} />
      <mesh castShadow geometry={nodes.Body_Back1_0.geometry} material={materials.Back1} />
      <mesh castShadow geometry={nodes.Body_Bezel1_0.geometry} material={materials.Bezel1} />
      <mesh castShadow geometry={nodes.Body_SpeakerAndMic1_0.geometry} material={materials.SpeakerAndMic1} />
      <mesh castShadow geometry={nodes.Body_CameraGlass1_0.geometry} material={materials.CameraGlass1} />
      <mesh castShadow geometry={nodes.Body_Logo1_0.geometry} material={materials.Logo1} />
      <mesh castShadow geometry={nodes.FrontCamLens_Lens1_0.geometry} material={materials.Lens1} />
      <mesh castShadow geometry={nodes.Screen_Screen1_0.geometry} material={nodes.Screen_Screen1_0.material} />
      <mesh castShadow geometry={nodes.CamModule_CameraModule1_0.geometry} material={materials.CameraModule1} />
      <mesh castShadow geometry={nodes.CamModule_CameraMGlass1_0.geometry} material={materials['CameraM.Glass1']} />
      <mesh castShadow geometry={nodes['Camera_Camera(1)_0'].geometry} material={materials.Camera1} />
      <mesh castShadow geometry={nodes.Camera_Chrome1_0.geometry} material={materials.Chrome1} />
      <mesh castShadow geometry={nodes.Camera_CameraBlack1_0.geometry} material={materials.CameraBlack1} />
      <mesh castShadow geometry={nodes.Camera_CameraGray1_0.geometry} material={materials.CameraGray1} />
      <mesh castShadow geometry={nodes.Camera_CameraGlass1_0.geometry} material={materials.CameraGlass1} />
      <mesh castShadow geometry={nodes.Flash_Chrome2_0.geometry} material={materials.Chrome2} />
      <mesh castShadow geometry={nodes.Flash_Flash1_0.geometry} material={materials.Flash1} />
      <mesh castShadow geometry={nodes.Mic_Chrome2_0.geometry} material={materials.Chrome2} />
      <mesh castShadow geometry={nodes.Mic_SpeakerAndMic1_0.geometry} material={materials.SpeakerAndMic1} />
      <mesh castShadow geometry={nodes.Lens1_Lens1_0.geometry} material={materials.Lens1} />
      <mesh castShadow geometry={nodes.Lens2_Lens1_0.geometry} material={materials.Lens1} />
      <mesh castShadow geometry={nodes.PowerButton_Frame1_0.geometry} material={materials.Frame1} />
      <mesh castShadow geometry={nodes.VolumeButton_Frame1_0.geometry} material={materials.Frame1} />
      <mesh castShadow geometry={nodes.MuteButton_Frame1_0.geometry} material={materials.Frame1} />
      <mesh castShadow geometry={nodes.SIMTray_Frame1_0.geometry} material={materials.Frame1} />
      <mesh castShadow geometry={nodes.SIMTray_Chrome1_0.geometry} material={materials.Chrome1} />
      <mesh castShadow geometry={nodes.Port_LPort_0.geometry} material={materials['L.Port']} />
      <mesh castShadow geometry={nodes.Port_Frame1_0.geometry} material={materials.Frame1} />
    </group>
  </group>
  )
}

useGLTF.preload('/assets/models/iphone/iphone.gltf')
