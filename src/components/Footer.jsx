import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                <div className="flex justify-center space-x-8 mb-8">
                    <a href="https://github.com/harishbarhate02" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/harish-barhate-435647205/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="mailto:harishbarhate29@gmail.com" className="hover:text-indigo-400 transition-colors">
                        <FaEnvelope size={30} />
                    </a>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Harish Barhate. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
