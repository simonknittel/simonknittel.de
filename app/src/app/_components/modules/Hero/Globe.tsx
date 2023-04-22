"use client";

// @refresh reset

import clsx from "clsx";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const Globe = ({ className, width = 0, height = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const animationIsRunning = useRef(false);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 5);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.y = 4;
    camera.position.z = 5;

    const geometry = new THREE.SphereGeometry(5, 64, 64);

    const texture = new THREE.TextureLoader().load("./assets/earth.png");

    // TODO: Add inner glow
    // TODO: Fix texture stretching

    const material = new THREE.MeshBasicMaterial({
      map: texture,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.rotation.y = 4;
    scene.add(sphere);

    canvas.appendChild(renderer.domElement);

    function animate() {
      if (!animationIsRunning.current) return;

      sphere.rotation.y += 0.0001;

      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    }

    animationIsRunning.current = true;
    requestAnimationFrame(animate);

    return () => {
      animationIsRunning.current = false;
      canvas.removeChild(renderer.domElement);
    };
  }, [ref, width, height]);

  return (
    <div className={clsx(className)}>
      <div className="absolute inset-0" ref={ref} />
      <div className="bg-gradient-to-t from-black to-black/0 absolute inset-0" />
    </div>
  );
};

export default Globe;
