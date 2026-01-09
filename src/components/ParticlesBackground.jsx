import { BackgroundParticles } from "reactbits";

export default function ParticlesBackground({ children }) {
    return (
        <div className="relative w-full h-full min-h-screen bg-black text-white">
            <BackgroundParticles
                density={50}
                color="#ffffff"
                interactive={true}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
