'use client';
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './config/firebase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Skill, Project, FormData } from './types';
import toast from 'react-hot-toast';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [skills, setSkills] = useState<Skill[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillsSnapshot = await getDocs(collection(db, 'skills'));
                const skillsData = skillsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Skill[];
                setSkills(skillsData);

                const projectsSnapshot = await getDocs(collection(db, 'projects'));
                const projectsData = projectsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Project[];
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                createdAt: new Date()
            });
            
            toast.success('Pesan berhasil dikirim!');
            
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            toast.error('Maaf, terjadi kesalahan saat mengirim pesan.');
            console.error('Error sending message:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection skills={skills} />
            <ProjectsSection projects={projects} />
            <ContactSection 
                formData={formData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <Footer />
        </div>
    );
}