"use client";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./components/Navbar";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize isMenuOpen

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
      <Navbar />
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24">
        <div className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
          Bhaumik Kalpesh Gohil
        </div>
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
