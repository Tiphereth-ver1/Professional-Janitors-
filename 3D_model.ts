// 3D_model.ts

import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'; 
import { refreshData } from './location_data';  // Import the refresh function

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new STLLoader();
let loadedObject: THREE.Mesh;  // Variable to store the loaded object

loader.load('Beacon RevE V5 (de-featured).stl', (object) => {
    loadedObject = object;  // Store the loaded object in a variable
    scene.add(loadedObject);  // Add it to the scene

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);  // Continuously call this function

        // Refresh the data in each frame
        const data = refreshData();  // Get updated data

        // Use the imported data to update the object's position and rotation
        if (loadedObject && data.location && data.rotation) {
            loadedObject.position.set(data.location[0], data.location[1], data.location[2]);
            loadedObject.rotation.set(
                THREE.MathUtils.degToRad(data.rotation[0]),  // Convert to radians
                THREE.MathUtils.degToRad(data.rotation[1]),  // Convert to radians
                THREE.MathUtils.degToRad(data.rotation[2])   // Convert to radians
            );
        }

        renderer.render(scene, camera);  // Render the scene
    }
    animate();
});
