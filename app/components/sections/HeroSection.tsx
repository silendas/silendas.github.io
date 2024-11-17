import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import Stars from '../Stars';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-2 sm:px-6 lg:px-8 relative overflow-hidden">
            <Stars />
            <div className="text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animated-border">
                    Muhamad Yasmin Nul Hakim
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Full Stack Developer | Content Creator
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
    );
}