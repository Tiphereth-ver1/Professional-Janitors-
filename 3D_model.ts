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
  import data from './location_data.ts'
  object.position.set(data.location[0], data.location[1], data.location[2]);
  object.rotation.set(data.rotation[1],data.rotation[0], data.rotation[2]);

  renderer.render(scene, camera);  // Render the scene
}
animate();
