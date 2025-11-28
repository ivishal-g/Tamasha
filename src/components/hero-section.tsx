"use client";
import { useEffect, useState } from "react";

export function Hero() {
  const words = ["TRASH?", "CRINGE?", "A JOKE?", "GARBAGE?", "TAMASHA?"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 max-w-6xl w-full text-center mx-auto mt-20 px-4">
      
      {/* Warning Ribbon */}
      <div className="inline-block bg-yellow-400 text-black font-sans px-4 py-1 font-extrabold text-sm mb-6 transform -rotate-2 border-2 border-black">
        ⚠️ WARNING: HIGH VOLTAGE ROASTS
      </div>

      {/* Heading */}
      <h1
        className="text-6xl font-extrabold md:text-9xl uppercase leading-none tracking-tighter text-black"
      >
        IS YOUR 
        <p
          className="relative ml-4 inline-block px-2"
          style={{
            backgroundImage: "url('/highlighter.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            display: "inline-block"
          }}
        >
          RESUME
        </p>
        <br />
        <span
          className="text-transparent bg-clip-text bg-linear-to-r from-black to-blue-500"
        >
          {words[currentWord]}
        </span>
      </h1>
        

      <div className=" ">
        <p className="text-lg md:text-xl text-gray-700 p-6 font-semibold font- max-w-2xl mx-auto text-center">
          Our AI doesn’t sugarcoat. We roast your CV harder than your relatives at a wedding.
          <br className="hidden md:block" />
          <span className="text-gray-800 mt-10 font-extrabold">
            Gali milne ke liye ready ho?
          </span>
        </p>
      </div>

    </section>
  );
}


