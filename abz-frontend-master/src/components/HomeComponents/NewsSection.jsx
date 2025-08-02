"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

export default function NewsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-content > *", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    {
      id: 1,
      src: "/logo1.png",
      alt: "Partner Logo 1",
    },
    {
      id: 2,
      src: "/logo2.jpg",
      alt: "Partner Logo 2",
    },
    {
      id: 3,
      src: "/logo3.jpg",
      alt: "Partner Logo 3",
    },
    {
      id: 4,
      src: "/logo4.png",
      alt: "Partner Logo 4",
    },
    {
      id: 5,
      src: "/logo5.jpg",
      alt: "Partner Logo 5",
    },
    {
      id: 6,
      src: "/logo6.jpg",
      alt: "Partner Logo 6",
    },
    {
      id: 7,
      src: "/logo7.png",
      alt: "Partner Logo 7",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-content text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-blue-500">CyberNeoGen</span> in the News
          </h2>
          <p className="text-gray-600">
            We've been featured in top news outlets around the world
          </p>
        </div>

        {/* <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          className="py-4"
        >
          <div className="flex items-center gap-16">
            {logos.map((logo) => (
              <div key={logo.id} className="relative h-20 w-20">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee> */}

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="py-4"
        >
          <div className="flex items-center gap-16 mx-8">
            {logos.map((logo) => (
              <div key={logo.id} className="relative h-24 w-32">
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Elevate Your <span className="text-blue-500">Security</span>.
              <br />
              Empower Your <span className="text-blue-400">Future</span>.
            </h2>
            <p className="text-gray-700 mb-6">
              CyberNeoGen helps you stay ahead of evolving threats with
              advanced, future-ready security solutions—built to protect, scale,
              and empower your digital growth.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          <div className="relative h-[300px]">
            <Image
              src="/Lock.png"
              alt="Security illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
