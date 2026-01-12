const projects = [
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with React, Tailwind, and Vite.",
        tech: ["React", "Tailwind", "Vite"],
        image: "/projects/portfolio.png",
    },
    {
        title: "Discord Virtual Assistant Bot",
        description: "Automated Discord assistant for server tasks and commands.",
        tech: ["Python", "Discord API"],
        image: "/projects/discord-bot.png",
    },
    {
        title: "Cafe Finder",
        description: "Find nearby cafes using map-based search.",
        tech: ["HTML", "Node.JS", "Google Maps API"],
        image: "/projects/cafe-finder.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold text-center mb-12">
                Projects
            </h3>

            <div className="grid gap-8 md:grid-cols-3">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-xl shadow-lg"
                    >
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-center px-6">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h4>

                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
