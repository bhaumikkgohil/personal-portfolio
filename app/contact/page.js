"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send the message.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 flex flex-col items-center justify-center p-4">
      <Navbar />
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-8 text-white dark:text-gray-900">
        Contact Me
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-lg font-medium text-gray-200 dark:text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-2 border border-gray-300 dark:border-teal-500 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-gray-900  dark:bg-transparent"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-medium text-gray-200  dark:text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-2 border dark:border-teal-500 border-gray-300 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-gray-900  dark:bg-transparent"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-lg font-medium text-gray-200 dark:text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full p-3 mt-2 border dark:border-teal-500 border-gray-300 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-gray-900  dark:bg-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 py-3 px-6 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 dark:bg-teal-700 dark:hover:bg-teal-600"
          >
            Submit
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="mt-6 text-center text-green-500">
          Thank you! Your message has been sent.
        </div>
      )}
    </div>
  );
}
