export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 pt-28 pb-20">
            {/* Text */}
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hello, I'm <span className="text-blue-600">Steven</span>
                    <br />
                    A Computer Science Student
                </h2>

                <div className="space-x-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-72 h-72 object-cover rounded-full shadow-lg"
                />
            </div>
        </div>
    );
}
