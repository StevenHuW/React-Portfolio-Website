import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white shadow z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <h1 className="text-2xl font-bold text-blue-600">Steven Hu</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2 hover:bg-blue-50"
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
