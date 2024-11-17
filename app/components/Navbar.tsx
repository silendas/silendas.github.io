'use client';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm overflow-x-hidden">
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
    );
};

export default Navbar; 