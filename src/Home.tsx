import anime from "animejs/lib/anime.es.js";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    anime({
      targets: "#animated",
      translateY: -(window.innerHeight / 2),
      duration: 2000,
    });
    anime({
      targets: "#line",
      width: "100%",
      easing: "easeInOutQuad",
      delay: 200,
      duration: 1000,
    });
    anime({
      targets: "#background",
      backgroundColor: "rgba(0, 0, 0, 0)",
      easing: "linear",
      delay: 1500,
      duration: 1000,
    });
  }, [windowHeight]);
  return (
    <div
      id="background"
      className="w-screen h-screen grid bg-[rgb(52,54,65)] font-display"
    >
      <div
        id="animated"
        className="flex justify-center content-center flex-wrap justify-self-center flex-col self-end text-white"
      >
        <span id="line" className="h-[1px] w-0 bg-white mb-4">
          {" "}
        </span>
        <h1
          id="name"
          className="flex justify-self-center self-center mb-4 text-4xl font-bold leading-none tracking-wide md:text-5xl lg:text-6xl dark:text-white"
        >
          Josh Owens
        </h1>
        <p className="flex justify-center content-center tracking-wide sm:text-sm text-md md:text-l lg:text-xl">
          Full stack software engineer from California.
        </p>
        <span
          id="line"
          className="flex justify-self-end self-end h-[1px] w-0 bg-white mt-4"
        >
          {" "}
        </span>
      </div>
    </div>
  );
}
