export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Christy's Blog</h3>
                        <p className="text-gray-400">
                            Sharing stories and insights from my writing journey.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/blog" className="hover:text-white">Blog</a></li>
                            <li><a href="/books" className="hover:text-white">Books</a></li>
                            <li><a href="/about" className="hover:text-white">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">Goodreads</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Christy Beaver. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
