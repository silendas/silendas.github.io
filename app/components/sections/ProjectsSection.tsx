import { Project } from '@/app/types';

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-12 px-2 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project: Project) => (
                        <div key={project.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
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
    );
}