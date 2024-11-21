import { FormData } from '@/app/types';
import { FaInstagram, FaGithub, FaLinkedin, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

interface ContactSectionProps {
    formData: FormData;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactSection({ formData, handleSubmit, handleChange }: ContactSectionProps) {
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const validateForm = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: {[key: string]: string} = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Nama harus diisi';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email harus diisi';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Format email tidak valid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Pesan harus diisi';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            handleSubmit(e);
        }
    };

    return (
        <section id="contact" className="py-12 px-2 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Let&apos;s Connect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <a href="https://instagram.com/nulhakim213" 
                               className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                                <FaInstagram className="text-2xl" />
                                <span>@nulhakim213</span>
                            </a>
                            <a href="https://tiktok.com/@nulhakim213" 
                               className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                                <FaTiktok className="text-2xl" />
                                <span>@nulhakim213</span>
                            </a>
                            <a href="https://linkedin.com/in/myasminnh" 
                               className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                                <FaLinkedin className="text-2xl" />
                                <span>myasminnh</span>
                            </a>
                            <a href="https://github.com/silendas" 
                               className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                                <FaGithub className="text-2xl" />
                                <span>silendas</span>
                            </a>
                            <a href="mailto:muhammadyasminnulhakim34@gmail.com"
                               className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                                <FaEnvelope className="text-2xl" />
                                <span>muhammadyasminnulhakim34@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    
                    <form onSubmit={validateForm} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                    errors.name ? 'border-red-500 border' : ''
                                }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                    errors.email ? 'border-red-500 border' : ''
                                }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                    errors.message ? 'border-red-500 border' : ''
                                }`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}