const projects = [
    {
        title: "Portfolio Website",
        description: "A personal website to showcase my work, built with React and Tailwind CSS.",
        link: "#",
    },
    {
        title: "Todo App",
        description: "A task manager app with local storage support.",
        link: "#",
    },
    {
        title: "Project",
        description: "A project.",
        link: "#",
    },
];

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <a href={project.link} className="text-blue-600 hover:underline">
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
