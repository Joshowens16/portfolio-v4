import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    anime({
      targets: "#animated",
      translateY: -400,
      duration: 2000,
    });
    anime({
      targets: "#line",
      width: "100%",
      easing: "easeInOutQuad",
      delay: 200,
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-screen h-screen grid">
      <div id="animated" className="flex justify-self-center flex-col self-end">
        <span
          id="line"
          className="border-2 border-black h-[1px] w-0 bg-black mb-4"
        >
          {" "}
        </span>
        <h1
          id="name"
          className="flex justify-center content-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Josh Owens
        </h1>
        <p>I am a full stack software engineer from California</p>
        <span
          id="line"
          className="flex justify-self-end self-end border-2 border-black h-[1px] w-0 bg-black mt-4"
        >
          {" "}
        </span>
      </div>
    </div>
  );
}
