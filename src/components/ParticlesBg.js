import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="bg-black">
      <div className="ParticlesBg">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#151515",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: {
                  // définit un dégradé linéaire allant du jaune au rouge
                  start: "#ffff00",
                  end: "#ff0000",
                },
              },
              links: {
                color: "#f9dd22",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 7,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "top",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 150,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: ["line"],
                stroke: {
                  width: 0,
                  color: "#ffffff",
                },
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
};

export default ParticlesBg;
