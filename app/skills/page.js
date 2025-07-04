// pages/skills.js
import Navbar from "../components/Navbar";
import Skill from "../components/Skills"; // Importing the Skill component

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 flex flex-col items-center justify-start p-4 pt-24">
      <Navbar />

      {/* Skills Grid */}
      <div className="w-full max-w-4xl mt-24">
        <Skill
          category="Languages"
          skills={["Python", "Java", "C#"]} // Array of skills
          colors={["emerald-400", "rose-400", "rose-200"]} // Array of colors
        />
        <Skill
          category="Frontend"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
            "Tailwind CSS",
            "React",
            "React Native",
          ]} // Array of skills
          colors={[
            "indigo-400",
            "purple-400",
            "yellow-400",
            "blue-400",
            "teal-400",
            "pink-400",
            "green-400",
          ]} // Array of colors
        />
        <Skill
          category="Databases"
          skills={["Oracle SQL, NOSQL, Firestore Database"]} // Single skill as an array
          colors={["red-400"]} // Single color
        />
      </div>
    </div>
  );
}
