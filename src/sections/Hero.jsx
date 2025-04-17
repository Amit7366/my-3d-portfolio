import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";

function Hero() {
  return (
    <section id="hero" className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-32">
        {/* Hero Content */}
        <header className="relative z-20 flex flex-col justify-center  md:px-20 px-5">
          <div className="w-full flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <div className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:pb-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </div>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I am Amit, a developer based in Bangladesh with a passion for
              creating exceptional digital experiences.
            </p>
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
        {/* Hero Image */}
        <figure className="relative min-h-[50vh]">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
