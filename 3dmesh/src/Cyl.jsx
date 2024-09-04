import React, { useRef } from 'react'
import * as THREE from "three"
import {useTexture} from "@react-three/drei"
import { useFrame } from '@react-three/fiber'

function Cyl() {
    
    let txt = useTexture("./img.svg")
    let cylRef = useRef(null)

    useFrame((state , delta) => {
      cylRef.current.rotation.y += delta
    })

  return (
      <group rotation={[0,1,0.3]} > 
          <mesh ref={cylRef}>
            <cylinderGeometry args={[1,1,1.5,60,60,true]}/>
            <meshStandardMaterial map={txt} 
                              transparent
                              side={THREE.DoubleSide} 
            />
          </mesh>
      </group>
  )
}

export default Cyl