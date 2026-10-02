'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerformanceMonitor } from '@react-three/drei';
import { Component, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import CoreFallback from './CoreFallback';
import { useReducedMotion } from '@/hooks/use-motion';
function Core({reduced,onRendered}:{reduced:boolean;onRendered:()=>void}){
 const assembly=useRef<THREE.Group>(null);const inner=useRef<THREE.Mesh>(null);
 const points=useMemo(()=>{const p=new Float32Array(480*3);for(let i=0;i<480;i++){const y=1-(i/479)*2;const r=Math.sqrt(1-y*y);const a=i*2.399963;const s=2.7+(i%7)*.11;p.set([Math.cos(a)*r*s,y*s,Math.sin(a)*r*s],i*3);}return p;},[]);
 useFrame(({clock,pointer},delta)=>{if(!assembly.current||reduced)return;assembly.current.rotation.y+=Math.min(delta,.04)*.09;assembly.current.rotation.x=THREE.MathUtils.lerp(assembly.current.rotation.x,pointer.y*.1,.035);assembly.current.rotation.z=THREE.MathUtils.lerp(assembly.current.rotation.z,pointer.x*.1-.18,.035);if(inner.current)inner.current.rotation.z=clock.elapsedTime*.065;});
 return <group ref={assembly} rotation={[.25,0,-.18]}><Float speed={reduced?0:1.1} rotationIntensity={.1} floatIntensity={.2}>
 <mesh onAfterRender={onRendered}><sphereGeometry args={[1.61,48,32]}/><meshPhysicalMaterial color="#1d123f" metalness={.7} roughness={.25} transparent opacity={.68}/></mesh>
 <mesh ref={inner}><torusKnotGeometry args={[1.04,.36,192,20,2,3]}/><meshStandardMaterial color="#c6a1ff" emissive="#8146d8" emissiveIntensity={1.3} metalness={.5} roughness={.32} wireframe/></mesh>
 <mesh rotation={[.6,.4,0]}><icosahedronGeometry args={[1.7,2]}/><meshBasicMaterial wireframe color="#8857d3" transparent opacity={.30}/></mesh>
 <mesh><sphereGeometry args={[1.74,40,24]}/><meshBasicMaterial wireframe color="#9b76df" transparent opacity={.11}/></mesh>
 {[0,1,2].map(i=><group key={i} rotation={[[1.2,.35,.25],[.2,1.3,.6],[.8,-.7,1.1]][i] as [number,number,number]}><mesh><torusGeometry args={[2.22+i*.15,.009,8,160]}/><meshBasicMaterial color={i===1?'#a995e8':'#64418f'} transparent opacity={.7}/></mesh><mesh position={[2.22+i*.15,0,0]}><sphereGeometry args={[.047,12,12]}/><meshBasicMaterial color="#ddd1ff"/></mesh></group>)}
 <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[points,3]}/></bufferGeometry><pointsMaterial color="#d4b9ff" size={.018} transparent opacity={.65} sizeAttenuation/></points>
 </Float></group>;
}
class Boundary extends Component<{children:ReactNode;fallback:ReactNode},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return {failed:true};}render(){return this.state.failed?this.props.fallback:this.props.children;}}
function RenderHealth({onLost}:{onLost:()=>void}){
 const gl=useThree(state=>state.gl);
 useEffect(()=>{
  const canvas=gl.domElement;
  canvas.addEventListener('webglcontextlost',onLost);
  return()=>canvas.removeEventListener('webglcontextlost',onLost);
 },[gl,onLost]);
 return null;
}
export default function NeuralCore(){
 const reduced=useReducedMotion();
 const [dpr,setDpr]=useState(1.3);
 const [supported,setSupported]=useState(false);
 const [ready,setReady]=useState(false);
 const [active,setActive]=useState(true);
 const container=useRef<HTMLDivElement>(null);
 const rendered=useRef(false);
 const onRendered=useCallback(()=>{
  if(rendered.current)return;
  rendered.current=true;
  // React updates must happen after Three finishes rendering this frame.
  queueMicrotask(()=>setReady(true));
 },[]);
 const onLost=useCallback(()=>{setReady(false);setSupported(false);},[]);
 useEffect(()=>{
  const canvas=document.createElement('canvas');
  try{
   const gl=canvas.getContext('webgl2');
   setSupported(!!gl);
   gl?.getExtension('WEBGL_lose_context')?.loseContext();
  }catch{setSupported(false);}
  setDpr(innerWidth<768?1:Math.min(devicePixelRatio,1.5));
  let inView=true;
  const update=()=>setActive(inView&&!document.hidden);
  const obs=new IntersectionObserver(([e])=>{inView=e.isIntersecting;update();});
  if(container.current)obs.observe(container.current);
  document.addEventListener('visibilitychange',update);
  return()=>{obs.disconnect();document.removeEventListener('visibilitychange',update);};
 },[]);
 return <div ref={container} className="neural-canvas" aria-hidden="true">
  {!ready&&<CoreFallback/>}
  {supported&&<div style={{position:'absolute',inset:0,opacity:ready?1:0}}>
   <Boundary fallback={<CoreFallback/>}>
    <Canvas camera={{position:[0,0,8.3],fov:43}} dpr={dpr} frameloop={reduced||!active?'demand':'always'} gl={{antialias:dpr<1.5,alpha:true,powerPreference:'low-power'}}>
     <RenderHealth onLost={onLost}/>
     <ambientLight intensity={1.3}/>
     <pointLight position={[4,3,5]} color="#bca5ff" intensity={30}/>
     <pointLight position={[-4,-2,2]} color="#5367ff" intensity={15}/>
     <PerformanceMonitor onDecline={()=>setDpr(1)}><Core reduced={reduced} onRendered={onRendered}/></PerformanceMonitor>
    </Canvas>
   </Boundary>
  </div>}
 </div>;
}
