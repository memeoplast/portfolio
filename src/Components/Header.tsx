import React, { useEffect } from "react";
import * as THREE from "three";

const Header: React.FC = () => {
  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
      //   alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    // scene.background = null;

    // // Torus
    const geometry = new THREE.TorusGeometry(10, 3, 10, 10);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const NicoTexture = new THREE.TextureLoader().load("src/assets/Nico.jpeg");

    const Nico = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: NicoTexture })
    );

    scene.add(Nico);
    Nico.position.z = -5;
    Nico.position.x = 2;

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      Nico.rotation.y += 0.01;
      Nico.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      Nico.rotation.y += 0.005;
      Nico.rotation.z += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas id="bg"></canvas>;
};

export default Header;
