"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const FeaturedBlogs = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.from(imageRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12 px-6 py-12 max-w-7xl mx-auto">
      {/* Left: Custom Absolute Layout (40%) */}
      <div className="basis-[40%] min-w-0">
        <div className="relative w-[280px] h-[400px] mx-auto">
          {/* 1 - Top left semi-circle */}
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="absolute top-0 left-0 w-[90px] h-[90px] rounded-tr-[100%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img1.jpg"
              alt="img1"
              fill
              className="object-cover"
            />
          </div>

          {/* 2 - Top right semi-circle */}
          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="absolute top-0 left-[100px] w-[90px] h-[90px] rounded-tl-[100%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img2.jpg"
              alt="img2"
              fill
              className="object-cover"
            />
          </div>

          {/* 3 - Middle left bottom curve */}
          <div
            ref={(el) => (imageRefs.current[2] = el)}
            className="absolute top-[90px] left-0 w-[90px] h-[90px] rounded-br-[100%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img3.jpg"
              alt="img3"
              fill
              className="object-cover"
            />
          </div>

          {/* 4 - Middle right top curve */}
          <div
            ref={(el) => (imageRefs.current[3] = el)}
            className="absolute top-[90px] left-[100px] w-[90px] h-[90px] rounded-bl-[100%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img4.jpg"
              alt="img4"
              fill
              className="object-cover"
            />
          </div>

          {/* 5 - Middle bottom left curve */}
          <div
            ref={(el) => (imageRefs.current[4] = el)}
            className="absolute top-[180px] left-0 w-[90px] h-[90px] rounded-tr-[100%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img5.jpg"
              alt="img5"
              fill
              className="object-cover"
            />
          </div>

          {/* 6 - Center circle */}
          <div
            ref={(el) => (imageRefs.current[5] = el)}
            className="absolute top-[185px] left-[95px] w-[70px] h-[70px] rounded-full overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img6.jpg"
              alt="img6"
              fill
              className="object-cover"
            />
          </div>

          {/* 7 - Middle bottom right curve */}
          <div
            ref={(el) => (imageRefs.current[6] = el)}
            className="absolute top-[180px] left-[170px] w-[90px] h-[90px] rounded-bl-[100%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img7.jpg"
              alt="img7"
              fill
              className="object-cover"
            />
          </div>

          {/* 8 - Bottom bar */}
          <div
            ref={(el) => (imageRefs.current[7] = el)}
            className="absolute top-[280px] left-[50px] w-[140px] h-[60px] rounded-tl-[60%] rounded-tr-[60%] overflow-hidden shadow-md"
          >
            <Image
              src="/resources/blog/img8.png"
              alt="img8"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right: Featured Blogs (60%) */}
      <div className="basis-[60%] min-w-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Featured Blogs
        </h2>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="border rounded-md p-4 mb-4 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-gray-900">
              Top 10 Ways to Bypass a WAF
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              In today’s evolving cybersecurity landscape, attackers are
              constantly looking fo...
            </p>
            <div className="mt-2 flex gap-3 text-xs text-gray-500">
              <span className="bg-gray-200 px-2 py-1 rounded-full">WAF</span>
              <span className="bg-gray-200 px-2 py-1 rounded-full">
                Exploit
              </span>
              <span className="bg-gray-200 px-2 py-1 rounded-full">
                Vulnerability
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
