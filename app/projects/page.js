import Navbar from "../components/Navbar";
import Project from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 flex flex-col items-center justify-center p-4">
      <Navbar />
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-8 text-white dark:text-teal-500">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        <Project
          title="Portfolio Website"
          description="A personal portfolio website built with Next.js and Tailwind CSS."
          link="https://bhaumik-gohil-portfolio.vercel.app/"
        />
        <Project
          title="No Project"
          description="Will Update Soon. Till then have a look at my skills and my education."
        />
        <Project
          title="No Project"
          description="Will Update Soon. Till then have a look at my skills and my education."
        />
        <Project
          title="No Project"
          description="Will Update Soon. Till then have a look at my skills and my education."
        />
      </div>
    </div>
  );
}
