import React from 'react'
import "./App.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Cyl from './Cyl'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

function App() {
  return (
    <Canvas flat camera={{fov:45}} > 
      <OrbitControls />
      <ambientLight />
      <Cyl />

      <EffectComposer>
          <Bloom 
            mipmapBlur
            intensity={4}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
      </EffectComposer>

    </Canvas>
  )
}

export default App