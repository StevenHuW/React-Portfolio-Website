import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [heroInView, setHeroInView] = useState(true);

    // Detect when HERO section leaves viewport
    useEffect(() => {
        const heroSection = document.getElementById("home");
        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHeroInView(entry.isIntersecting);
            },
            {
                threshold: 0.1, // hero must mostly leave before switching
            }
        );

        observer.observe(heroSection);

        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed w-full z-50 ${heroInView
                ? "bg-transparent"
                : "bg-white shadow-lg"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
                <h1
                    className={`text-2xl font-bold ${heroInView ? "text-white" : "text-black"
                        }`}
                >
                    Steven Hu
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={
                                heroInView
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-700 hover:text-black"
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${heroInView ? "text-gray-300" : "text-gray-800"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden bg-white border-t border-gray-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
