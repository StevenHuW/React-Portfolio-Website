import Particles from "./Particles";

export default function Hero() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">
            {/* Particles background */}
            <div className="absolute inset-0">
                <Particles
                    particleColors={["#ffffff", "#cccccc", "#888888"]} // White & grey tones
                    particleCount={200}
                    particleSpread={8}
                    speed={0.15}
                    particleBaseSize={80}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Steven</h1>
                <p className="text-lg text-gray-300">
                    A computer science student.
                </p>
            </div>
        </div>
    );
}
