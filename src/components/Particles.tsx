import Particles from "react-tsparticles";

export const ParticlesComponent = () => {
  const particlesInit = () => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = () => {};
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
        },
        particles: {
          bounce: {
            horizontal: {
              value: 0,
            },
            vertical: {
              value: 0,
            },
          },
          color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
            animation: {
              h: {
                enable: true,
                speed: 30,
              },
            },
          },
          move: {
            decay: 0.12,
            direction: "top",
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 200,
            },
            outModes: {
              default: "destroy",
              bottom: "bounce",
              left: "destroy",
              right: "destroy",
              top: "none",
            },
            speed: {
              min: 50,
              max: 150,
            },
          },
          number: {
            limit: 300,
            value: 0,
          },
          opacity: {
            animation: {
              speed: 0.3,
              sync: true,
              destroy: "min",
              startValue: "max",
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 30,
            },
            enable: true,
            enlighten: {
              enable: true,
              value: 30,
            },
            speed: {
              min: 15,
              max: 25,
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 60,
            },
            direction: "random",
          },
          shape: {
            options: {
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
              ],
              character: [
                {
                  value: ["💩", "🤡", "🍀", "🍙"],
                },
              ],
            },
            type: [
              "circle",
              "square",
              "polygon",
              "character",
              "character",
              "character",
            ],
          },
          tilt: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 30,
            },
            direction: "random",
            enable: true,
          },
          wobble: {
            distance: 10,
            enable: true,
            speed: {
              min: -5,
              max: 5,
            },
          },
        },
        emitters: {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 10,
            delay: 0.1,
          },
          shape: "square",
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 0,
          },
          position: {
            x: 50,
            y: 100,
          },
        },
      }}
    />
  );
};
