import React from "react";
import blogImage1 from "../../../public/Partners-banner.jpg";
import blogImage2 from "../../../public/hero-bg.jpg";
import blogImage3 from "../../../public/hero-bg.jpg";
import blogImage4 from "../../../public/alas.jpg";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    category: "News",
    date: "May 10, 2024",
    title: "Major Tech Company Pays Record $250,000 Bug Bounty",
    summary:
      "A critical vulnerability in authentication systems led to the largest payout in the company’s bug bounty program history...",
    author: "Riya Sharma",
    image: blogImage1,
  },
  {
    id: 2,
    category: "Tips & Tricks",
    date: "May 8, 2024",
    title: "5 Reconnaissance Tools Every Bug Hunter Should Master",
    summary:
      "Effective reconnaissance is the foundation of successful bug hunting. Discover the essential tools...",
    author: "Raj Mehta",
    image: blogImage2,
  },
  {
    id: 3,
    category: "Security Basics",
    date: "May 5, 2024",
    title: "Understanding the OWASP Top 10: A Beginner’s Guide",
    summary:
      "The OWASP Top 10 is essential knowledge for anyone in cybersecurity. This article breaks down each vulnerability...",
    author: "Neha Gupta",
    image: blogImage3,
  },
  {
    id: 4,
    category: "Tutorial",
    date: "May 3, 2024",
    title: "SQL Injection: From Detection to Exploitation",
    summary:
      "This step-by-step tutorial walks through the process of identifying, testing, and responsibly reporting SQL injection...",
    author: "Vikram Singh",
    image: blogImage4,
  },
];

const BlogGridPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <Image
                width={2000}
                height={2000}
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="text-blue-600 font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                      {post.author.split(" ")[0][0]}
                    </div>
                    <p className="text-sm font-medium text-gray-800">
                      {post.author}
                    </p>
                  </div>
                  <button className="text-blue-600 font-medium text-sm hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <button className="text-sm text-gray-600 hover:text-blue-600">
            &larr; Previous
          </button>
          <div className="flex items-center gap-2 text-sm">
            <button className="w-8 h-8 rounded-full bg-blue-600 text-white">
              1
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-200">
              2
            </button>
            <span className="text-gray-500">...</span>
            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-200">
              8
            </button>
          </div>
          <button className="text-sm text-gray-600 hover:text-blue-600">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogGridPage;
