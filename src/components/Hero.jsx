import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8">
                        {/* Placeholder for Profile Photo */}
                        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-indigo-200 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                            <span className="text-indigo-500 text-4xl">HB</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Hi, I'm <span className="text-indigo-600">Harish Barhate</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
                        Results-driven Computer Science graduate with strong foundations in Data Science, Machine Learning, and Python. Passionate about leveraging data to solve real-world problems.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
                        <span className="flex items-center gap-2">📍 Nagpur, Maharashtra</span>
                        <span className="flex items-center gap-2">📱 9637948416</span>
                        <span className="flex items-center gap-2">✉️ harishbarhate29@gmail.com</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                            View Projects
                        </a>
                        <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition-colors">
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
