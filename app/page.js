"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [theme, setTheme] = useState("dark");

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

  return (
    <div className="h-screen bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Navbar */}
      <nav className="w-full p-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex justify-between items-center fixed top-0">
        <div className="text-xl font-semibold hover:text-teal-400 hover:cursor-pointer transition duration-200">
          Portfolio
        </div>
        <div className="flex space-x-6">
          <Link
            href="/education"
            className="hover:text-teal-400 transition duration-200"
          >
            Education
          </Link>
          <Link
            href="/projects"
            className="hover:text-teal-400 transition duration-200"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="hover:text-teal-400 transition duration-200"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="hover:text-teal-400 transition duration-200"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center  text-white rounded-full hover:text-teal-500 dark:text-teal-500 dark:hover:text-black transition duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FiSun size={20} /> // Sun icon for light theme
            ) : (
              <FiMoon size={20} /> // Moon icon for dark theme
            )}
          </button>
          <Link
            href="/resume"
            className="px-4 py-2 bg-teal-500 dark:bg-teal-700 text-white rounded hover:bg-teal-600 dark:hover:bg-teal-800 transition duration-200"
          >
            Resume
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24">
        {/* Name Section */}
        <div className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
          Bhaumik Kalpesh Gohil
        </div>

        {/* Typewriter Section */}
        <div className="text-2xl text-teal-400 mb-8">
          <Typewriter
            words={["Full Stack Developer", "Student"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        {/* About Me Section */}
        <div className="text-lg max-w-xl text-gray-400 dark:text-gray-600">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
      </div>
    </div>
  );
}
