"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
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
    <nav className="w-full p-4 bg-gray-900 dark:bg-gray-100 text-teal-300 dark:text-gray-900 flex justify-between items-center fixed top-0 z-50">
      <div className="text-xl font-semibold hover:text-white transition duration-200">
        <Link href="/">Portfolio</Link>
      </div>
      <div className="hidden sm:flex space-x-6">
        <Link href="/education" className="hover:text-white transition">
          Education
        </Link>
        <Link href="/projects" className="hover:text-white transition">
          Projects
        </Link>
        <Link href="/skills" className="hover:text-white transition">
          Skills
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact Me
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center text-white dark:text-teal-500 hover:text-teal-400 transition duration-200"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}
