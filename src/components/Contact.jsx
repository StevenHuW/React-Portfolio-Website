export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
            <p className="text-gray-600 mb-8">
                Interested in working together? Fill out the form below or send me an email.
            </p>
            <form className="space-y-4 max-w-lg mx-auto">
                <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" />
                <textarea placeholder="Your Message" className="w-full border p-3 rounded-lg" rows="5"></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </div>
    );
}
