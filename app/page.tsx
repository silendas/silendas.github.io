'use client';
import { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaTiktok, FaEnvelope, FaHome, FaUser, FaCode, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showNotification, setShowNotification] = useState(false);

    const skills = [
        {
            title: "Frontend Development",
            percent: 75,
            technologies: ["React", "Next.js", "Laravel"]
        },
        {
            title: "Mobile Development",
            percent: 75,
            technologies: [, "Flutter", "Ionic"]
        },
        {
            title: "Backend Development", 
            percent: 80,
            technologies: ["Express.js", "Spring Boot", "Laravel", "CodeIgniter"]
        },
        {
            title: "Database Management",
            percent: 80,
            technologies: ["MySQL", "PostgreSQL"]
        }
    ];

    const projects = [
        {
            title: "Audit Services", 
            description: "Internal audit management system for companies",
            technologies: ["Springboot", "Java", "PostgreSQL"],
            link: "https://github.com/silendas/audit-services"
        },
        {
            title: "Helpdesk Services",
            description: "Integrated technical support service platform",
            technologies: ["Springboot", "Java", "PostgreSQL"],
            link: "https://github.com/silendas/helpdesk-services"
        },
        {
            title: "U Room Services",
            description: "Social Media Platform for University Students",
            technologies: ["Express.js", "Node.js", "MySQL"],
            link: "https://github.com/silendas/uroom-services"
        },
        {
            title: "Job Vacancy Portal",
            description: "Job vacancy portal with integrated application features",
            technologies: ["Laravel", "CodeIgniter", "Ionic", "PHP", "Typescript", "MySQL"],
            link: "https://github.com/silendas/APP_Web_Melamar_Pekerjaan"
        },
        {
            title: "GFH Residences",
            description: "Residences Management System",
            technologies: ["Ionic", "CodeIgniter", "Typescript", "PHP", "MySQL"],
            link: "https://github.com/silendas/Aplikasi_GFH"
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Notification */}
            {showNotification && (
                <div className="fixed top-14 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                    Sorry, the email sending feature is not available at this time.
                </div>
            )}

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center py-4">
                        <div className="flex space-x-4 md:space-x-8">
                            <button 
                                onClick={() => scrollToSection('home')}
                                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                            >
                                <FaHome className="text-xl md:hidden" />
                                <span className="hidden md:block">Home</span>
                            </button>
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                            >
                                <FaUser className="text-xl md:hidden" />
                                <span className="hidden md:block">About</span>
                            </button>
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                            >
                                <FaCode className="text-xl md:hidden" />
                                <span className="hidden md:block">Skills</span>
                            </button>
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                            >
                                <FaProjectDiagram className="text-xl md:hidden" />
                                <span className="hidden md:block">Projects</span>
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                            >
                                <FaPhoneAlt className="text-xl md:hidden" />
                                <span className="hidden md:block">Contact</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center relative">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Muhamad Yasmin Nul Hakim
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Full Stack Developer | Software Engineer
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/silendas" target="_blank" rel="noopener noreferrer" 
                           className="text-3xl hover:text-blue-400 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/myasminnh" target="_blank" rel="noopener noreferrer"
                           className="text-3xl hover:text-blue-400 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com/nulhakim213" target="_blank" rel="noopener noreferrer"
                           className="text-3xl hover:text-blue-400 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://tiktok.com/@nulhakim213" target="_blank" rel="noopener noreferrer"
                           className="text-3xl hover:text-blue-400 transition-colors">
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 relative">
                                <Image 
                                    src="assets/images/me.jpg"
                                    alt="Muhamad Yasmin Nul Hakim" 
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="text-lg text-gray-300 mb-6">
                                    I am a Full Stack Developer with 1 year of experience in web and mobile application development.
                                    I have a passion for creating innovative and efficient technology solutions to solve business problems.
                                </p>
                                <p className="text-lg text-gray-300 mb-6">
                                    With a strong background in various modern technologies, I have successfully developed projects
                                    ranging from small-scale applications to complex enterprise systems. I am always eager to learn
                                    new technologies and keep up with the latest developments in the software development industry.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 text-gray-300">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Education</h3>
                                <p>Informatics Engineering Bachelor</p>
                                <p>Binaniaga University</p>
                                <p>2021 - 2025</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
                                <ul className="list-disc list-inside">
                                    <li>Coding - Developing apps & websites</li>
                                    <li>Travelling - Exploring new places</li>
                                    <li>Badminton - Favorite sport</li>
                                    <li>Reading - Expanding knowledge</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4 relative">
                                    <div 
                                        className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" 
                                        style={{ width: `${skill.percent}%` }}
                                    ></div>
                                    <span className="absolute right-0 top-[-25px] text-sm text-gray-300">
                                        {skill.percent}%
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="text-blue-400 hover:text-blue-300">
                                    View Project →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8">
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
                                <a href="mailto:muhammadyasminnulhakim34@gmail.com"
                                   className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                                    <FaEnvelope className="text-2xl" />
                                    <span>muhammadyasminnulhakim34@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
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

            {/* Footer */}
            <footer className="w-full py-6 text-center text-gray-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p>&copy; {new Date().getFullYear()} Muhamad Yasmin Nul Hakim. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}