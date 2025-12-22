import React from 'react';

const Experience = () => {
    // Placeholder data - move to JSON if preferred later
    const experiences = [
        {
            company: "Cuvette Tech Pvt. Ltd.",
            role: "Data Science Intern",
            period: "Feb 2025 - Aug 2025",
            description: [
                "Successfully completed a rigorous 6-month internship program focused on SQL, Excel, Tableau, Python and Machine Learning.",
                "Trained under top alumni from IIT Kharagpur, gaining practical proficiency in data analysis and predictive modeling."
            ]
        },
        {
            company: "Estro Pvt. Ltd, Nashik",
            role: "AI/ML Intern",
            period: "Apr 2022",
            description: [
                "Built and deployed an image detection system utilizing Python and OpenCV.",
                "Performed hyperparameter tuning to optimize model performance, successfully increasing accuracy by 15%."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-[#0a0a16]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Professional <span className="text-[#fbbf24]">Experience</span>
                    <div className="h-1 w-20 bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
                </h2>
                <div className="space-y-8 max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-[#11112b] border border-gray-800 rounded-xl hover:border-[#fbbf24]/30 transition-colors">
                            <div className="md:w-1/3">
                                <h3 className="text-xl font-bold text-[#fbbf24]">{exp.company}</h3>
                                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                            </div>
                            <div className="md:w-2/3">
                                <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                                {Array.isArray(exp.description) ? (
                                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="marker:text-[#fbbf24]">{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-300 mt-2">{exp.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
