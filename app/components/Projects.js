// components/Project.js
export default function Project({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-teal-500 dark:bg-gray-200 rounded-lg shadow-lg p-8 flex items-center justify-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-z-2">
        <div className="text-lg text-white dark:text-teal-500">
          <h3 className="font-semibold text-xl mb-4">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}
