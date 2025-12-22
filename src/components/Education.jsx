import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech, Computer Science",
            institution: "Shri Sant Gajanan Maharaj College of Engineering",
            year: "2024",
            grade: "6.49 CGPA"
        },
        {
            degree: "HSC (12th)",
            institution: "Major Hemant Jakate Institute of Science",
            year: "2020",
            grade: "72%"
        },
        {
            degree: "SSC (10th)",
            institution: "South Point School",
            year: "2018",
            grade: "85%"
        }
    ];

    const certifications = [
        "Google Data Analytics | Coursera",
        "Machine Learning (IBM) | Coursera",
        "Python Training | DataFlair",
        "Blockchain Workshop | CSESA, SSGMCE"
    ];

    return (
        <section id="education" className="py-20 bg-[#0a0a16] border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-[#fbbf24] w-2 h-8 mr-4 rounded"></span>
                            Education
                        </h2>
                        <div className="space-y-8">
                            {educationData.map((edu, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-gray-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#fbbf24] ring-4 ring-[#0a0a16]"></div>
                                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                    <p className="text-[#fbbf24] font-medium">{edu.institution}</p>
                                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                                        <span>{edu.year}</span>
                                        <span className="font-semibold text-gray-300">Grade: {edu.grade}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-[#fbbf24] w-2 h-8 mr-4 rounded"></span>
                            Certifications
                        </h2>
                        <div className="bg-[#11112b] rounded-xl shadow-sm p-6 border border-gray-800 hover:border-[#fbbf24]/30 transition-colors">
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-[#fbbf24] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span className="text-gray-300 font-medium">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
