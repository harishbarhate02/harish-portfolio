import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., mailto or API)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <section id="contact" className="py-20 bg-[#0a0a16] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Contact <span className="text-[#fbbf24]">Me</span>
                    <div className="h-1 w-20 bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
                </h2>
                <div className="max-w-lg mx-auto bg-[#11112b] p-8 rounded-xl shadow-md border border-gray-800 hover:border-[#fbbf24]/30 transition-colors">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 bg-[#0a0a16] border border-gray-700 rounded-lg text-white focus:ring-[#fbbf24] focus:border-[#fbbf24] placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 bg-[#0a0a16] border border-gray-700 rounded-lg text-white focus:ring-[#fbbf24] focus:border-[#fbbf24] placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="mt-1 block w-full px-4 py-2 bg-[#0a0a16] border border-gray-700 rounded-lg text-white focus:ring-[#fbbf24] focus:border-[#fbbf24] placeholder-gray-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-[#0a0a16] bg-[#fbbf24] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbbf24] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
