import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    // Use relative path - works with Vercel deployment
    const API_URL = '/api/contact';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear status when user starts typing
        if (submitStatus.message) {
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for your message! I\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try emailing me directly at harishbarhate02@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
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
                        {/* Status Message */}
                        {submitStatus.message && (
                            <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                ? 'bg-green-900/30 border border-green-500 text-green-400'
                                : 'bg-red-900/30 border border-red-500 text-red-400'
                                }`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-[#0a0a16] bg-[#fbbf24] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbbf24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0a0a16]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
