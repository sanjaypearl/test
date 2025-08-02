import React from "react";
// import BlogImage from "../assets/blog-image.jpg"; // Save the blog image here
import Image from "next/image";
import BlogGridPage from "./BlogGridPage";

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          {/* Search */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="text-blue-600 font-medium cursor-pointer">
                • Bug Hunting
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                • Tips & Tricks
              </li>
              <li className="cursor-pointer hover:text-blue-600">• News</li>
              <li className="cursor-pointer hover:text-blue-600">
                • Security Basics
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                • Tutorials
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Popular Tags</h3>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600">
              {["#XSS", "#SQLi", "#CSRF", "#OWASP", "#Recon", "#BugBounty"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 rounded-full cursor-pointer hover:bg-blue-200 transition"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-2">
              Get the latest cybersecurity insights directly to your inbox
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:ring focus:border-blue-400"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </aside>

        {/* Blog Content */}
        <section className="w-full lg:w-3/4">
          <h1 className="text-3xl font-bold mb-4">CyberNeoGen Blog</h1>
          <p className="text-gray-600 mb-6">
            Latest insights, tutorials, and news from the cybersecurity world
          </p>

          {/* Blog Post Card */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <Image
              width={2000}
              height={2000}
              src="/hero-bg.jpg"
              alt="Blog"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span className="text-blue-600 font-medium">Bug Hunting</span>
                <span>•</span>
                <span>May 15, 2024</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced XSS Techniques for Bug Bounty Hunters in 2024
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                Cross-site scripting vulnerabilities continue to plague web
                applications despite increased awareness. This comprehensive
                guide explores the latest XSS vectors, bypass techniques, and
                detection methods that every security researcher should know.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Arjun Patel
                    </p>
                    <p className="text-xs text-gray-500">Security Researcher</p>
                  </div>
                </div>
                <button className="text-blue-600 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <BlogGridPage />
        </section>
      </div>
    </div>
  );
};

export default Blog;
