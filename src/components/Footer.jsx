import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#0a0a16] text-white py-12 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-6 text-[#fbbf24]">Let's Connect</h2>
                <div className="flex justify-center space-x-8 mb-8">
                    <a href="https://github.com/harishbarhate02" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbbf24] transition-colors text-gray-400">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/harish-barhate-435647205/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbbf24] transition-colors text-gray-400">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="mailto:harishbarhate29@gmail.com" className="hover:text-[#fbbf24] transition-colors text-gray-400">
                        <FaEnvelope size={30} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Harish Barhate. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
