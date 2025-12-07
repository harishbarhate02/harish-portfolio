import React from 'react';

const Experience = () => {
    // Placeholder data - move to JSON if preferred later
    const experiences = [
        {
            company: "Cuvette Tech",
            role: "Software Developer Intern",
            period: "Jan 2024 - Present", // Modify as needed
            description: "Working on full-stack web development projects."
        },
        {
            company: "Estro Pvt. Ltd.",
            role: "Data Science Intern",
            period: "Jun 2023 - Dec 2023", // Modify as needed
            description: "Developed machine learning models for predictive analysis."
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Professional Experience
                </h2>
                <div className="space-y-8 max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="md:w-1/3">
                                <h3 className="text-xl font-bold text-indigo-600">{exp.company}</h3>
                                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                            </div>
                            <div className="md:w-2/3">
                                <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                                <p className="text-gray-600 mt-2">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
