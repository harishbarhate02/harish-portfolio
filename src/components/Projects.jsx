import React from 'react';
import projectsData from '../data/projects.json';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
                            {/* Placeholder for Project Image */}
                            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-400 font-medium">{project.title} Preview</span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    <FaGithub /> View Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
