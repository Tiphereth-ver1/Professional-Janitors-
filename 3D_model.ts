import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
from 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new STLLoader();
loader.load('Beacon RevE V5 (de-featured).stl', (object) => {
  scene.add(object);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);  // Continuously call this function
  
  // Any transformations or updates will happen here
  import extractedData from './location_data.ts'
  object.position.set(location);
  object.rotation.set(rotation);
  // Rotate 45 degrees around X axis

  renderer.render(scene, camera);  // Render the scene
}
animate();
