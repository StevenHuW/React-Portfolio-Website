import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
    return (
        <div className="flex justify-center gap-6 mt-10">
            <a
                href="https://github.com/StevenHuW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
                aria-label="GitHub"
            >
                <Github size={28} />
            </a>

            <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
                aria-label="LinkedIn"
            >
                <Linkedin size={28} />
            </a>

            <a
                href="mailto:your@email.com"
                className="text-gray-600 hover:text-black transition"
                aria-label="Email"
            >
                <Mail size={28} />
            </a>
        </div>
    );
}
