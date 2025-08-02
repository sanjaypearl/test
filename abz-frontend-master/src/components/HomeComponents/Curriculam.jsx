"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Curriculum() {
  const sectionRef = useRef(null);

  // const weeks = [
  //   {
  //     phase: "Phase",
  //     number: "01",
  //     title:
  //       "50+ Linux and Shell Scripting Scenario-Based Questions Frequently Asked in Product-Based Company Interviews",
  //     content: [],
  //   },
  //   {
  //     phase: "",
  //     number: "02",
  //     title: "PYTHON FOR DEVOPS + DATA STRUCTURES & ALGORITHMS",
  //     content: [
  //       "Introduction to python with a focus on automation.",
  //       "Implement real-world use cases for devops automation.",
  //       "Begin dsa (data structures & algorithms) tailored for devops roles.",
  //     ],
  //   },
  //   {
  //     phase: "",
  //     number: "03",
  //     title: "PYTHON FOR DEVOPS + DATA STRUCTURES & ALGORITHMS",
  //     content: [
  //       "Introduction to python with a focus on automation.",
  //       "Implement real-world use cases for devops automation.",
  //       "Begin dsa (data structures & algorithms) tailored for devops roles.",
  //     ],
  //   },
  //   {
  //     phase: "",
  //     number: "04",
  //     title: "PYTHON FOR DEVOPS + DATA STRUCTURES & ALGORITHMS",
  //     content: [
  //       "Introduction to python with a focus on automation.",
  //       "Implement real-world use cases for devops automation.",
  //       "Begin dsa (data structures & algorithms) tailored for devops roles.",
  //     ],
  //   },
  //   {
  //     phase: "",
  //     number: "05",
  //     title: "PYTHON FOR DEVOPS + DATA STRUCTURES & ALGORITHMS",
  //     content: [
  //       "Introduction to python with a focus on automation.",
  //       "Implement real-world use cases for devops automation.",
  //       "Begin dsa (data structures & algorithms) tailored for devops roles.",
  //     ],
  //   },
  // ];

  const weeks = [
    {
      phase: "Phase",
      number: "01",
      title:
        "50+ Linux and Shell Scripting Scenario-Based Questions Frequently Asked in Product-Based Company Interviews",
      content: [
        "Linux file system structure and essential commands.",
        "Shell scripting basics: variables, loops, conditions.",
        "Automate routine tasks using bash scripts.",
        "Real-world Linux troubleshooting and interview questions.",
      ],
    },
    {
      phase: "",
      number: "02",
      title: "PYTHON FOR DEVOPS + DATA STRUCTURES & ALGORITHMS",
      content: [
        "Introduction to Python syntax and scripting.",
        "Write automation scripts for system operations.",
        "Learn lists, dictionaries, sets, and tuples in depth.",
        "Start with basic DSA: arrays, strings, and linked lists.",
      ],
    },
    {
      phase: "",
      number: "03",
      title: "PYTHON FOR DEVOPS + DATA STRUCTURES & ALGORITHMS",
      content: [
        "Intermediate Python: functions, modules, and error handling.",
        "File handling, JSON parsing, and API calls.",
        "Data structures: stacks, queues, and hashmaps.",
        "DevOps use cases using Python scripts (e.g., log analysis).",
      ],
    },
    {
      phase: "",
      number: "04",
      title: "DEVOPS TOOLS & AUTOMATION WITH PYTHON",
      content: [
        "Automate Git workflows using Python.",
        "Work with Docker SDK for Python.",
        "Integrate monitoring with Python scripts (e.g., Prometheus API).",
        "Hands-on automation of daily DevOps tasks.",
      ],
    },
    {
      phase: "",
      number: "05",
      title: "CI/CD PIPELINES & INFRASTRUCTURE AUTOMATION",
      content: [
        "Set up Jenkins pipelines and integrate with GitHub.",
        "Automate build and test processes using Python and shell scripts.",
        "Introduction to Infrastructure as Code (IaC) with Terraform basics.",
        "CI/CD best practices and debugging common issues.",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {weeks.map((week, index) => (
          <motion.div
            key={index}
            className="week-item mb-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex flex-col items-center md:items-start">
                {week.phase && (
                  <span className="text-xl font-medium text-gray-800 mb-2">
                    {week.phase}
                  </span>
                )}
                <div className="relative">
                  <div className="text-8xl font-thin text-gray-200">
                    {week.number}
                  </div>
                  <div className="absolute bottom-0 left-0 text-sm font-medium text-gray-600">
                    Week
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {week.number === "01" ? (
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                    {week.title}
                  </h3>
                ) : (
                  <h3 className="text-xl md:text-2xl font-medium mb-4">
                    <span className="text-blue-600">
                      PYTHON FOR DEVOPS + DATA STRUCTURES
                    </span>
                    <br />
                    <span className="text-blue-600">& ALGORITHMS</span>
                  </h3>
                )}

                {week.content.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2">
                    {week.content.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
