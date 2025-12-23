import React from 'react';
import projectsData from '../data/projects.json';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0a0a16]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Featured <span className="text-[#fbbf24]">Projects</span>
                    <div className="h-1 w-20 bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-[#11112b] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#fbbf24]/10 transition-all duration-300 border border-gray-800 hover:border-[#fbbf24]/30 flex flex-col">
                            {/* Placeholder for Project Image */}
                            <div className="h-48 bg-[#161635] flex items-center justify-center border-b border-gray-800 overflow-hidden">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                                ) : (
                                    <span className="text-[#fbbf24] font-medium">{project.title} Preview</span>
                                )}
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-[#0a0a16] border border-gray-700 text-gray-300 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 bg-[#fbbf24] text-[#0a0a16] font-bold rounded-lg hover:bg-yellow-400 transition-colors"
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
