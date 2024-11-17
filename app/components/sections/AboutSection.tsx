import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-12 px-2 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 relative">
                            <Image 
                                src="/assets/images/me.jpg"
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
                                <li>Coding</li>
                                <li>Travelling</li>
                                <li>Badminton</li>
                                <li>Reading</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}