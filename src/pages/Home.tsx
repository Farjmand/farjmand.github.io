// pages/Home.tsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";

const Home: React.FC = () => {
  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
    "Kubernetes",
    "CI/CD",
    "Microservices",
    "System Design",
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Built a scalable e-commerce platform handling 10K+ daily users with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Redis"],
      link: "#",
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description:
        "Developed a real-time analytics dashboard for tracking user behavior and system performance.",
      technologies: ["React", "TypeScript", "WebSockets", "D3.js"],
      link: "#",
    },
    {
      id: 3,
      title: "API Gateway Service",
      description:
        "Designed and implemented an API gateway to manage authentication and route requests across microservices.",
      technologies: ["Node.js", "Express", "Docker", "AWS Lambda"],
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mb-6">
          <img
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Farjmand Zahra</h1>
        <p className="text-xl text-gray-600 mt-2">Senior Software Engineer</p>

        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <span className="sr-only">Email</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            I'm a Senior Software Engineer with 8+ years of experience building
            scalable web applications and distributed systems. My expertise
            spans full-stack development, cloud infrastructure, and leading
            engineering teams to deliver high-quality software solutions.
          </p>
          <p className="text-gray-700">
            Currently focused on designing microservice architectures and
            implementing robust CI/CD pipelines for enterprise applications. I'm
            passionate about clean code, performance optimization, and mentoring
            junior developers.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Skills & Expertise
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Work Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Senior Software Engineer
            </h3>
            <p className="text-gray-600 italic">
              TechCorp Inc. • 2021 - Present
            </p>
            <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
              <li>
                Led a team of 5 engineers to develop and deploy a microservices
                architecture
              </li>
              <li>
                Reduced system response time by 40% through performance
                optimization
              </li>
              <li>
                Implemented CI/CD pipelines resulting in 80% faster deployment
                cycles
              </li>
              <li>
                Mentored junior developers and conducted technical interviews
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Software Engineer
            </h3>
            <p className="text-gray-600 italic">DevSolutions • 2018 - 2021</p>
            <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
              <li>
                Built and maintained RESTful APIs serving 5M+ monthly requests
              </li>
              <li>
                Collaborated with product managers to define technical
                requirements
              </li>
              <li>Implemented authentication and authorization systems</li>
              <li>
                Contributed to open-source projects and company blog posts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center px-5 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
