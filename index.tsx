import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const projects = [
    {
      title: "E-Panchayat Management System",
      desc: "Digital governance platform for rural public services.",
      details:
        "This project digitizes multiple village-level services such as certificate requests, grievance redressal, data management, and public announcements.",
      tech: "HTML, CSS, JavaScript, Python, SQL",
    },
    {
      title: "Virtual Jewellery Try-On System",
      desc: "AI-powered AR-based try-on tool.",
      details:
        "Uses OpenCV and Flask to detect facial landmarks and overlay jewellery in real time.",
      tech: "OpenCV, Flask, Python, JavaScript",
    },
    {
      title: "Call Log Management System",
      desc: "Complete CRM call logging solution.",
      details:
        "Includes call entry forms, customer issue tracking, CSV export, search filters, admin login, and analytics.",
      tech: "PHP, MySQL, HTML, CSS",
    },
    {
      title: "Movie Recommendation System",
      desc: "ML-based content recommendation engine.",
      details:
        "Uses cosine similarity on movie metadata to compute top recommended movies.",
      tech: "Python, pandas, NumPy, sklearn",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-indigo-100 text-3xl font-bold animate-pulse">
        Loading Portfolio...
      </div>
    );
  }

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-gray-900"
      }
    >
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 backdrop-blur-lg z-40">
        <h1 className="text-2xl font-bold">Smruti Portfolio</h1>
        <div className="flex gap-6 text-xl">
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#internships" className="hover:text-indigo-600">Experience</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          Smruti Dadasaheb Parkale
        </motion.h1>

        <p className="text-lg">Web Developer • Computer Engineer</p>

        <div className="flex gap-6 justify-center text-3xl mt-5">
          <a href="#" className="hover:text-indigo-600"><FaLinkedin /></a>
          <a href="#" className="hover:text-indigo-600"><FaGithub /></a>
          <a href="#" className="hover:text-indigo-600"><FaEnvelope /></a>
        </div>

        <a
          href="/Smruti_Resume.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 text-lg flex items-center gap-2 mx-auto"
        >
          <FaDownload /> Download Resume
        </a>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-8">
          Passionate Computer Engineering student with full-stack development, ML, APIs, and system design skills.
        </p>

        <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Social Contribution</h3>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Active NSS Volunteer contributing to social awareness campaigns.</li>
            <li>Worked as Discipline Coordinator in college events.</li>
          </ul>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section id="internships" className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Internship & Experience</h2>

        <div className="space-y-6">

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold">Web Developer Intern — Microcare Computer Systems</h3>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Developed Call Log Management System with filtering & CSV export.</li>
              <li>Improved backend functionality using PHP & MySQL.</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold">Frontend Intern — SkillBit Technologies</h3>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Improved dashboards UI and responsiveness.</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold">AI/ML Intern — Edunet Foundation</h3>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Built ML models with Python, NumPy, pandas, sklearn.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl hover:bg-indigo-50 cursor-pointer transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.details}</p>
            <p className="font-semibold">Tech Stack: {selectedProject.tech}</p>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ACHIEVEMENTS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border-l-4 border-indigo-600">
            <h3 className="font-bold text-xl">🏆 State-Level Paper Presentation Winner</h3>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border-l-4 border-purple-600">
            <h3 className="font-bold text-xl">🎓 Lila Poonawalla Foundation Scholar</h3>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border-l-4 border-pink-600">
            <h3 className="font-bold text-xl">🥇 Project Competition Winner</h3>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border-l-4 border-green-600">
            <h3 className="font-bold text-xl">📜 Completed 6-week Industrial Training at Microcare</h3>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-16">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-lg mb-4">Feel free to reach out to me:</p>

        <div className="flex justify-center gap-8 text-4xl">
          <a href="mailto:smruti@example.com" className="hover:text-indigo-600"><FaEnvelope /></a>
          <a href="#" className="hover:text-indigo-600"><FaLinkedin /></a>
          <a href="#" className="hover:text-indigo-600"><FaGithub /></a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm opacity-70">
        © 2025 Smruti Parkale. All Rights Reserved.
      </footer>
    </div>
  );
}
