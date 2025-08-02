"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinMission() {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Join Our Mission
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Whether you’re a security researcher, a company looking to secure your
          assets, or someone passionate about cybersecurity, there’s a place for
          you in our community.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold py-2.5 px-6 rounded-full transition"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="border border-blue-400 text-blue-500 hover:bg-blue-50 text-sm md:text-base font-semibold py-2.5 px-6 rounded-full transition"
          >
            Read Our Blog
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
