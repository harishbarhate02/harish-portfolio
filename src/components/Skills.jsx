import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-indigo-600 mb-4 border-b pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium">
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
