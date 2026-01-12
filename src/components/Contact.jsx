export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        const res = await fetch("https://portfolio-backend-three-orpin.vercel.app/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert("Message sent!");
            e.target.reset();
        } else {
            alert("Something went wrong.");
        }
    };

    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto px-4 py-16 text-center"
        >
            <h3 className="text-3xl font-bold mb-4">Contact Me</h3>

            <p className="text-gray-600 mb-10">
                Interested in working together? Feel free to reach out using the form below.
            </p>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-lg mx-auto text-left"
            >
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        placeholder="Your message..."
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
