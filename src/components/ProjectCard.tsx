
import React from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
        <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
            <span
                key={index}
                className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
                {tech}
            </span>
            ))}
        </div>
        </div>
        <div className="px-6 pb-4">
        <a
            href={project.link}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
            View Project
            <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
            </svg>
        </a>
        </div>
    </div>
    );
};

export default ProjectCard;

