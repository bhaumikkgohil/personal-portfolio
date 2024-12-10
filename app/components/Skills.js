// components/Skill.js
"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Skill({ category, skills, colors }) {
  // Create a string array of skills
  const skillWords = skills;

  return (
    <div className="mb-12 text-center">
      <h3 className="text-4xl font-semibold mb-4 text-rose-300">{category}</h3>

      {/* Typewriter effect for skills */}
      <div className="space-y-2">
        <h4 className="text-2xl text-teal-300">
          <Typewriter
            words={skillWords} // Pass plain words as strings
            loop={Infinity} // Make the loop infinite
            cursor
            cursorStyle="|"
            typeSpeed={100} // Speed of typing
            deleteSpeed={50} // Speed of deleting
            delaySpeed={2000} // Delay before starting typing
            onTyping={(index) => {
              // Dynamically set color for each word
              const colorClass = colors[index % colors.length];
              return (
                <span className={`text-${colorClass}`}>
                  {skillWords[index]}
                </span>
              );
            }}
          />
        </h4>
      </div>
    </div>
  );
}
