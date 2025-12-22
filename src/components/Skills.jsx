import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[#0a0a16] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Technical <span className="text-[#fbbf24]">Skills</span>
                    <div className="h-1 w-20 bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <div key={index} className="bg-[#11112b] rounded-xl p-8 hover:bg-[#161635] transition-colors duration-300 border border-gray-800 hover:border-[#fbbf24]/30">
                            <h3 className="text-xl font-bold mb-6 text-[#fbbf24] border-b border-gray-700 pb-3">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="flex items-center px-3 py-1 bg-[#0a0a16] border border-gray-700 text-gray-300 rounded-full text-sm hover:border-[#fbbf24] hover:text-[#fbbf24] transition-colors">
                                        <span className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full mr-2"></span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
