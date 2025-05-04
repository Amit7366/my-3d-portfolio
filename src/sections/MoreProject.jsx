// HorizontalCarousel.jsx
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SlideContent from "./SlideContent";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const MoreProject = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.to(trackRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  ); // Ensures cleanup when component unmounts

  return (
    <section>
      <div className="mt-8">
        <TitleHeader
          title="Projects You would Love to See"
          sub="The projects that got client's attention"
        />
      </div>
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex space-x-6 h-full items-center px-10"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="min-w-[80vw] h-[80%] bg-emerald-600 text-white text-4xl flex items-center justify-center rounded-xl shadow-lg"
            >
              <SlideContent />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProject;
