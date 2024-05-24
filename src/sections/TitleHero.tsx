import { useEffect, useRef, useState } from "react";

function TitleHero() {
  const totalImages = 14;
  const heroRef = useRef<HTMLElement>(null);
  const [heroImage, setHeroImage] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroImage === totalImages) {
        setHeroImage(1);
      } else {
        setHeroImage(heroImage + 1);
      }
    }, 3500);

    heroRef.current?.style.setProperty(
      "background-image",
      `url(/heroImages/${heroImage}.webp)`
    );

    return () => clearInterval(interval);
  }, [heroImage]);

  return (
    <section
      ref={heroRef}
      className={`bg-fixed bg-center bg-cover w-screen h-[200dvh] bg-black transition-all duration-1000`}
    >
      <div className="relative flex flex-col h-full">
        <div className="absolute inset-0 w-full h-full bg-black/50">
          <p className="text-5xl text-white text-center px-4 z-[1] mt-[50dvh]">
            Aqui empieza tu viaje...
          </p>
          <p className="text-5xl text-white text-center px-4 z-[1] mt-[75dvh]">
            Selecciona un destino para comenzar...
          </p>
        </div>
      </div>
      <svg
        id="Vector"
        width="281"
        height="1260"
        viewBox="0 0 281 1260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 h-[200dvh] opacity-50"
      >
        <path
          d="M467.593 0.71931C370.519 31.6173 -176.407 133.219 71.5929 232.719C319.593 332.219 307.093 310.219 140.093 408.219C-26.9071 506.219 167.093 560.219 167.093 560.219C167.093 560.219 393.592 641.219 196.593 735.219C-0.407082 829.219 180.574 937.719 180.574 937.719C224.604 976.281 306.857 1014.72 214.725 1073.22C122.593 1131.72 206.856 1169.13 214.725 1189.72C222.593 1210.31 214.725 1248.68 214.725 1248.68M214.725 1248.68L180.574 1219.18M214.725 1248.68L247.074 1219.18"
          stroke="white"
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray="0,0,0,2223.829833984375"
        >
          <animate
            attributeType="XML"
            attributeName="stroke-dasharray"
            repeatCount="1"
            dur="5s"
            values="0,0,0,2223.829833984375; 
          0,1111.9149169921875,1111.9149169921875,0; 
          2223.829833984375,0,0,0"
            keyTimes="0; 0.5; 1"
            fill="freeze"
          ></animate>
        </path>
      </svg>
    </section>
  );
}

export default TitleHero;
