// components/IntegrationsSection.js
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const IntegrationsSection = () => {
  return (
    <section className=" w-full bg-gradient-to-b from-[#f4fbf6] to-white py-16">
      <Image
        src="/mockups.png"
        alt="Integrations Diagram"
        width={1184}
        height={453}
        className="mx-auto max-w-full h-auto object-contain"
      />
    </section>
  );
};

export default IntegrationsSection;
