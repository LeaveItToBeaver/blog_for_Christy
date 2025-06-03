import Link from 'next/link'

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Welcome to My World of Words
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Discover captivating stories, insightful thoughts, and the latest
                    updates from my literary journey.
                </p>
                <div className="space-x-4">
                    <Link
                        href="/blog"
                        className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
                    >
                        Read Latest Posts
                    </Link>
                    <Link
                        href="/books"
                        className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 inline-block"
                    >
                        Explore My Books
                    </Link>
                </div>
            </div>
        </section>
    )
}