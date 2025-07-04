"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the import path as needed

export default function Education() {
  const [theme, setTheme] = useState("dark");

  // Theme toggle functionality
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const educationData = [
    {
      title: "Diploma in Software Development",
      institution: "Southern Alberta Institute of Technology, Calgary",
      duration: "2024 - 2025",
      description:
        "Focused on software development, algorithms, data structures, and web development.",
    },
    {
      title: "High School",
      institution: "Bhagwan Mahavir International High School, Surat",
      duration: "2020 - 2022",
      description: "Specialized in mathematics, computer, and physics.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex flex-col items-center relative overflow-hidden">
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Main Content */}
      <div className="pt-24 w-full flex flex-col items-center p-8 relative">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold">Education</h1>
          <p className="mt-4 text-lg text-gray-400 dark:text-gray-600 max-w-2xl mx-auto">
            A summary of my academic journey and certifications.
          </p>
        </header>

        {/* Education Cards */}
        <div className="flex flex-col gap-8 w-full max-w-8xl relative group">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-teal-500 dark:bg-white dark:shadow-none shadow-md rounded-lg p-6 mx-[15%] flex flex-col space-y-4 relative z-10 transition-all duration-300 transform  hover:scale-110 hover:shadow-2xl hover:z-30"
            >
              <h2 className="text-xl font-semibold text-black dark:text-gray-900">
                {item.title}
              </h2>
              <h3 className="text-white dark:text-teal-500">
                {item.institution}
              </h3>
              <p className="text-sm text-teal-900 dark:text-gray-600">
                {item.duration}
              </p>
              <p className="text-black dark:text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
