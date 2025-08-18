// src/components/Layout.jsx
import ParticlesBackground from "./ParticlesBackground";

export default function Layout({ children }) {
    return (
        <div className="relative w-full min-h-screen bg-black text-white">
            {/* Particle background behind everything */}
            <ParticlesBackground />

            {/* Content layered on top */}
            <main className="relative z-10">{children}</main>
        </div>
    );
}
