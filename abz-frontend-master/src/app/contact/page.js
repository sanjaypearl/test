// import Contact from "@/components/ContactComponents/Contact";
// import FindUs from "@/components/ContactComponents/FindUs";

// const page = () => {
//   return (
//     <div>
//       <Contact />
//       <FindUs />
//     </div>
//   );
// };

// export default page;

"use client";

import React, { useEffect } from "react";
import { useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Contact from "@/components/ContactComponents/Contact";
import FindUs from "@/components/ContactComponents/FindUs";

const page = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Basic animation for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div ref={mainRef} className="overflow-hidden">
      <Contact />
      <FindUs />
    </div>
  );
};

export default page;
