"use client";
import React, { useState } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaFileAlt,
  FaClock,
  FaChartPie,
} from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

const feedbackData = {
  summary: {
    avgResponseTime: 4.2,
    satisfaction: 87,
    disputes: 14,
    trends: {
      response: 12,
      satisfaction: 6,
      disputes: -3,
    },
  },
  charts: {
    bar: {
      labels: [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5",
        "Day 6",
        "Day 7",
        "Day 8",
        "Day 9",
        "Day 10",
      ],
      datasets: [
        {
          label: "Disputes",
          backgroundColor: "#3b82f6",
          data: [5, 7, 4, 6, 3, 4, 5, 6, 8, 9],
        },
        {
          label: "Previous Month",
          backgroundColor: "#fb923c",
          data: [3, 5, 2, 4, 1, 2, 3, 4, 4, 6],
        },
      ],
    },
    pie: {
      labels: ["Positive", "Neutral", "Negative"],
      datasets: [
        {
          data: [70, 15, 15],
          backgroundColor: ["#10b981", "#fbbf24", "#ef4444"],
        },
      ],
    },
  },
  categories: {
    "Triage Accuracy": {
      thumbsUp: 38,
      thumbsDown: 4,
      feedbacks: [
        {
          name: "Alex Mercer",
          comment:
            "Perfect severity assessment on CVE-2023-4281. Exactly matched vendor’s rating.",
          report: "#82924 - SQL Injection in Admin Panel",
          daysAgo: 2,
          type: "positive",
        },
        {
          name: "Sophia Rodriguez",
          comment:
            "Great job identifying the root cause in my report. Saved me additional testing time.",
          report: "#81056 - Authentication Bypass in API",
          daysAgo: 3,
          type: "positive",
        },
        {
          name: "Marcus Chen",
          comment:
            "Severity was downgraded without proper testing. Exploit is much easier than assessed.",
          report: "#8102 - Remote Code Execution in File Upload",
          daysAgo: 5,
          type: "negative",
        },
      ],
    },
    "Communication Quality": {
      thumbsUp: 31,
      thumbsDown: 5,
      feedbacks: [
        {
          name: "Priya Sharma",
          comment:
            "Clear explanation of why my XSS was marked as duplicate. Appreciated the references.",
          report: "#8312 - Stored XSS in User Profile",
          daysAgo: 1,
          type: "positive",
        },
        {
          name: "James Wilson",
          comment:
            "Took 3 days to respond to my clarification questions. Too slow for critical issue.",
          report: "#8187 - SSRF in Image Processing",
          daysAgo: 4,
          type: "negative",
        },
        {
          name: "Elena Volkov",
          comment:
            "Excellent follow-up questions that helped clarify the impact of my finding.",
          report: "#8079 - Insecure Direct Object Reference",
          daysAgo: 6,
          type: "positive",
        },
      ],
    },
  },
};

export default function ResearcherFeedback() {
  const [selectedCategory, setSelectedCategory] = useState("Triage Accuracy");

  const renderSummaryCard = (icon, title, value, trend, footer, color) => (
    <div className="bg-white shadow rounded-xl p-4 w-full md:w-1/3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
          {icon}
          {title}
        </div>
        <div className="text-lg font-bold">{value}</div>
      </div>
      <div className="text-sm mt-2 text-green-600">{footer}</div>
    </div>
  );

  const categories = Object.keys(feedbackData.categories);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Researcher Feedback Analysis</h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {renderSummaryCard(
          <FaClock className="text-blue-500" />,
          "Average Response Time",
          `${feedbackData.summary.avgResponseTime} hours`,
          feedbackData.summary.trends.response,
          `↑${feedbackData.summary.trends.response}% improvement from last month`
        )}
        {renderSummaryCard(
          <FaChartPie className="text-green-500" />,
          "Satisfaction Score",
          `${feedbackData.summary.satisfaction}% positive`,
          feedbackData.summary.trends.satisfaction,
          `↑${feedbackData.summary.trends.satisfaction}% increase from last month`
        )}
        {renderSummaryCard(
          <FaFileAlt className="text-red-500" />,
          "Disputed Reports Count",
          `${feedbackData.summary.disputes} reports`,
          feedbackData.summary.trends.disputes,
          `↓more than last month`
        )}
      </div>

      {/* Chart Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-white p-4 rounded-xl shadow w-full md:w-2/3">
          <Bar data={feedbackData.charts.bar} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow w-full md:w-1/3">
          <Pie data={feedbackData.charts.pie} />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="text-sm text-blue-500 font-medium">
          Sort by Date
        </button>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const data = feedbackData.categories[category];
          return (
            <div key={category} className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="flex gap-3 text-sm items-center">
                  <span className="text-green-600 flex items-center gap-1">
                    <FaThumbsUp /> {data.thumbsUp}
                  </span>
                  <span className="text-red-600 flex items-center gap-1">
                    <FaThumbsDown /> {data.thumbsDown}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {data.feedbacks.map((fb, i) => (
                  <div
                    key={i}
                    className="border-l-4 pl-3 text-sm space-y-1"
                    style={{
                      borderColor:
                        fb.type === "positive" ? "#10b981" : "#ef4444",
                    }}
                  >
                    <p className="font-semibold">{fb.name}</p>
                    <p className="text-gray-700">"{fb.comment}"</p>
                    <p className="text-blue-600">{fb.report}</p>
                    <p className="text-gray-400 text-xs">
                      {fb.daysAgo} days ago
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
