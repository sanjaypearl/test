import Image from "next/image";
import React from "react";

const Security = () => {
  return (
    <div>
      <div className="bg-white px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your <span className="text-blue-500">Security</span>.
            <br />
            Empower Your <span className="text-blue-400">Future</span>.
          </h2>
          <p className="text-gray-700 mb-6">
            CyberNeoGen helps you stay ahead of evolving threats with advanced,
            future-ready security solutions—built to protect, scale, and empower
            your digital growth.
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
  );
};

export default Security;
