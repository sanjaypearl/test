// import React from "react";
// import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div>
//         <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
//         <p className="text-center text-gray-600 mb-10">
//           Have questions or want to learn more about CyberNeoGen? We're here to
//           help.
//           <br />
//           Reach out to our team using the form below.
//         </p>
//       </div>
//       <div className=" mx-auto grid grid-cols-[60%_40%] w-full  gap-10">
//         <div>
//           <div className="bg-white p-6 rounded shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John Smith"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="john@example.com"
//                     className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="How can we help you?"
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   placeholder="Please provide details about your inquiry."
//                   rows={4}
//                   className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
//                 ></textarea>
//               </div>
//               <div className="flex items-start space-x-2">
//                 <input type="checkbox" className="mt-1" />
//                 <p className="text-sm text-gray-600">
//                   I agree to the{" "}
//                   <span className="text-blue-600 underline">
//                     privacy policy
//                   </span>{" "}
//                   & being contacted by CyberNeoGen.
//                 </p>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition"
//               >
//                 Submit Message
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Company Information</h3>
//           <p className="font-semibold">CyberNeoGen Headquarters</p>
//           <p className="text-gray-600 text-sm mt-1 mb-4">
//             123 Cyber Supercity Avenue
//             <br />
//             Park, Bangalore 560001
//             <br />
//             Tech Karnataka, India
//           </p>

//           <p className="font-semibold mt-4">Contact Details</p>
//           <p className="text-gray-600 text-sm mt-1 mb-4">
//             contact@cyberneogen.com
//             <br />
//             +91 80 1234 5678
//             <br />
//             Mon-Fri: 9:00 AM - 6:00 PM IST
//           </p>

//           <p className="font-semibold mt-4 mb-2">Connect With Us</p>
//           <div className="flex space-x-4 text-blue-600 text-xl">
//             <a href="#">
//               <FaTwitter />
//             </a>
//             <a href="#">
//               <FaLinkedin />
//             </a>
//             <a href="#">
//               <FaFacebook />
//             </a>
//             <a href="#">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";

import React, { useEffect, useRef } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title and description
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate left (form)
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate right (info)
      gsap.fromTo(
        ".contact-info",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="contact-header">
        <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or want to learn more about CyberNeoGen? We're here to
          help.
          <br />
          Reach out to our team using the form below.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-[60%_40%] w-full gap-10">
        {/* Form */}
        <div className="contact-form">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Please provide details about your inquiry."
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2"
                ></textarea>
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="text-blue-600 underline">
                    privacy policy
                  </span>{" "}
                  & being contacted by CyberNeoGen.
                </p>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        {/* Info */}
        <div className="contact-info bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">Company Information</h3>
          <p className="font-semibold">CyberNeoGen Headquarters</p>
          <p className="text-gray-600 text-sm mt-1 mb-4">
            123 Cyber Supercity Avenue
            <br />
            Park, Bangalore 560001
            <br />
            Tech Karnataka, India
          </p>

          <p className="font-semibold mt-4">Contact Details</p>
          <p className="text-gray-600 text-sm mt-1 mb-4">
            contact@cyberneogen.com
            <br />
            +91 80 1234 5678
            <br />
            Mon-Fri: 9:00 AM - 6:00 PM IST
          </p>

          <p className="font-semibold mt-4 mb-2">Connect With Us</p>
          <div className="flex space-x-4 text-blue-600 text-xl">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
