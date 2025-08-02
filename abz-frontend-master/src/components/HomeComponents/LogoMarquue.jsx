"use client";

import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { gsap } from "gsap";

export default function LogoMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(marqueeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 90%",
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    {
      id: 1,
      src: "/logo1.png",
      alt: "Client Logo 1",
    },
    {
      id: 2,
      src: "/logo2.jpg",
      alt: "Client Logo 2",
    },
    {
      id: 3,
      src: "/logo3.jpg",
      alt: "Client Logo 3",
    },
    {
      id: 4,
      src: "/logo4.png",
      alt: "Client Logo 4",
    },
    {
      id: 5,
      src: "/logo5.jpg",
      alt: "Client Logo 5",
    },
    {
      id: 6,
      src: "/logo6.jpg",
      alt: "Client Logo 6",
    },
    {
      id: 7,
      src: "/logo7.png",
      alt: "Client Logo 7",
    },
  ];

  return (
    <section
      ref={marqueeRef}
      className="py-12 bg-white border-t border-b border-gray-200"
    >
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-gray-600 text-4xl mb-8">
          Trusted by leading organizations
        </h3>
      </div>

      <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
        <div className="flex items-center gap-16 mx-8">
          {logos.map((logo) => (
            <div key={logo.id} className="relative h-16 w-32">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
