import Particles from "./Particles";

export default function About() {
    const techStack = [
        { name: "HTML5", icon: "/icons/html5.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "C", icon: "/icons/c.svg" },
        { name: "SQLite3", icon: "/icons/sqlite.svg" },
        { name: "Flask", icon: "/icons/flask.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-16 text-center ">
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-gray-600 leading-relaxed mb-10">
                I’m Steven Hu, a computer science student passionate about software engineering and web development.
                I enjoy solving complex problems, and outside of school I like exploring cars, playing guitar, and playing games.
            </p>

            {/* Tech Scroller */}
            <div className="overflow-hidden relative w-full">
                <div className="flex animate-scroll space-x-12">
                    {techStack.concat(techStack).map((tech, index) => (
                        <div key={index} className="flex flex-col items-center min-w-[80px]">
                            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                            <span className="mt-2 text-sm">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
