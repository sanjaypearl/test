// "use client";

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";

// export default function Footer() {
//   const footerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".footer-column", {
//         y: 30,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: footerRef.current,
//           start: "top 90%",
//         },
//       });
//     }, footerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer ref={footerRef} className="bg-[#000518] text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
//           <div className="footer-column">
//             <div className="mb-4">
//               <Image
//                 src="/logo.png"
//                 alt="CyberNeoGen Logo"
//                 width={150}
//                 height={50}
//                 className="object-contain"
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Dehradun, Uttarakhand</span>
//               </div>
//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//                 <span>info@usergmail.com</span>
//               </div>
//             </div>
//           </div>

//           <div className="footer-column">
//             <h3 className="text-lg font-semibold mb-4">About</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Programs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   For Companies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   For Researchers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Partner with us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   CyberNeoGen Apollo
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Programs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   For Companies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   For Researchers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Partner with us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   CyberNeoGen Apollo
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h3 className="text-lg font-semibold mb-4">Privacy</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Programs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   For Companies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   For Researchers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Partner with us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   CyberNeoGen Apollo
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h3 className="text-lg font-semibold mb-4">Social Media</h3>
//             <div className="flex space-x-4 mb-4">
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//                 </svg>
//               </a>
//               <a href="#" className="hover:text-blue-400 transition-colors">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                 </svg>
//               </a>
//             </div>
//             <p>Give us your feedback!</p>

//             <div className="flex justify-center mt-6">
//               <a
//                 href="#"
//                 className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 10l7-7m0 0l7 7m-7-7v18"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-700 text-center">
//           <p>Copyright © 2025 CyberNeoGen All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-column", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0c0c0c] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1 - Logo & Description */}
        <div className="footer-column">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="Logo" width={28} height={28} />
            <span className="font-bold text-lg">CyberNeoGen</span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            India’s premier bug bounty platform connecting ethical hackers with
            companies to build a more secure digital world.
          </p>
          <div className="footer-column">
            {/* <h3 className="text-lg font-semibold mb-4">Social Media</h3> */}
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>

            {/* <div className="flex justify-center mt-6">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div> */}
          </div>
        </div>

        {/* Column 2 - Navigation */}
        <div className="footer-column">
          <h3 className="text-base font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Home",
              "About Us",
              "Blog",
              "Contact",
              "Explore Programs",
              "FAQ",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div className="footer-column">
          <h3 className="text-base font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Terms of Service",
              "Privacy Policy",
              "Responsible Disclosure",
              "Cookie Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-column">
          <h3 className="text-base font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter for the latest security insights and
            platform updates.
          </p>
          <form className="flex flex-col  items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full   sm:flex-1 px-4 py-2 rounded-md bg-[#2e2e2e] text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white w-full px-6 py-2 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 flex justify-between text-sm text-gray-400">
        <p>© 2024 CyberNeoGen. All rights reserved.</p>
        <p className="mt-1">Made with in India</p>
      </div>
    </footer>
  );
}
