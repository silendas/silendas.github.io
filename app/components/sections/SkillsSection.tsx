import { Skill } from '@/app/types';

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <section id="skills" className="py-12 px-2 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill: Skill) => (
                        <div 
                            key={skill.id} 
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6
                            transition-transform duration-300 hover:scale-105"
                        >
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
    );
}