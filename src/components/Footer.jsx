export default function Footer() {
    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Steven Hu. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
