"use client";
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen relative bg-[#0e0e0e] text-white px-6 py-20 md:px-20 overflow-hidden">
      {/* Background lines (simulated as decoration) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* You can add your SVG or canvas lines here */}
        <div className="absolute w-full h-full bg-[url('/lines.svg')] bg-cover opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-14">
        {/* Top Section */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-white">CyberNeoGen</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Discover our journey, mission, and the team behind India’s premier
            bug bounty platform.
          </p>
        </div>

        {/* Mission Statement */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Mission Statement
          </h3>
          <p className="text-blue-400 text-lg font-semibold italic">
            "We empower ethical hackers to secure the digital world."
          </p>
        </div>

        {/* Description Box */}
        <div className="bg-gray-800 px-6 py-6 pb-12 rounded-md text-sm md:text-base text-gray-300">
          <p>
            At CyberNeoGen, we believe in creating a safer digital ecosystem by
            bridging the gap between ethical hackers and organizations. Our
            platform provides the infrastructure, tools, and community support
            needed to identify and remediate security vulnerabilities before
            they can be exploited by malicious actors.
          </p>
        </div>
      </div>
    </section>
  );
}
