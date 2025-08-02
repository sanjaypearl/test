"use client";

import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    content:
      "CyberNeoGen has transformed how I approach bug hunting. The platform is intuitive, payments are prompt, and I’ve built valuable relationships with top companies.",
    rating: 5,
    name: "Rahul Sharma",
    role: "Security Researcher",
    avatar: "/person.jpg", // Replace with actual public image path
  },
  {
    id: 2,
    content:
      "Implementing a bug bounty program through CyberNeoGen has significantly improved our security posture. The quality of researchers and the platform’s management tools are exceptional.",
    rating: 5,
    name: "Priya Patel",
    role: "CISO at TechCorp",
    avatar: "/person.jpg",
  },
  {
    id: 3,
    content:
      "The community aspect of CyberNeoGen sets it apart. I’ve learned so much from other researchers and improved my skills while earning competitive bounties.",
    rating: 4.5,
    name: "Vikram Singh",
    role: "Security Engineer",
    avatar: "/person.jpg",
  },
  {
    id: 4,
    content:
      "A promising initiative for Indian cybersecurity talent. Found two critical bugs, both were acknowledged within 24 hours.",
    rating: 5,
    name: "Bug Bounty Hunter",
    role: "Delhi NCR",
    avatar: "/person.jpg",
  },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span
      key={index}
      className={`text-yellow-400 text-sm ${
        index < Math.floor(rating) ? "opacity-100" : "opacity-30"
      }`}
    >
      ★
    </span>
  ));
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 mx-4 my-4 min-w-[300px] max-w-[350px]">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-sm text-gray-900">
          {testimonial.name}
        </h4>
        <p className="text-xs text-gray-500">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-sm text-gray-700 mb-3 leading-snug">
      "{testimonial.content}"
    </p>
    <div className="flex">{renderStars(testimonial.rating)}</div>
  </div>
);

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            What Our Users Say
          </h2>
          <p className="text-sm text-gray-600">
            Hear from the researchers and companies who have experienced success
            on our platform.
          </p>
        </div>

        <div className="overflow-hidden">
          <Marquee
            gradient={false}
            speed={30}
            direction="left"
            pauseOnHover={true}
            className="py-2"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
