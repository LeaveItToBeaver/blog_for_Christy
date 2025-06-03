import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest posts and stories',
}

type BlogPost = {
    id: string
    title: string
    excerpt: string
    publishedAt: string
    slug: string
    coverImage?: string
}

// Mock data - replace this with Supabase data later
const mockPosts = [
    {
        id: '1',
        title: 'My Writing Journey Begins',
        excerpt: 'Embarking on a new adventure in storytelling, I wanted to share what inspired me to start writing and what you can expect from this blog...',
        publishedAt: '2024-01-15',
        slug: 'my-writing-journey-begins',
        coverImage: '/images/blog/writing-journey.jpg'
    },
    {
        id: '2',
        title: 'Character Development Tips',
        excerpt: 'Creating compelling characters is one of the most important aspects of storytelling. Here are my top techniques for bringing characters to life...',
        publishedAt: '2024-01-10',
        slug: 'character-development-tips',
        coverImage: '/images/blog/character-development.jpg'
    },
    {
        id: '3',
        title: 'Finding Inspiration in Everyday Life',
        excerpt: 'Sometimes the best stories come from the most ordinary moments. Let me share how I find inspiration in daily life and transform it into compelling narratives...',
        publishedAt: '2024-01-05',
        slug: 'finding-inspiration-everyday-life',
        coverImage: '/images/blog/inspiration.jpg'
    },
    {
        id: '4',
        title: 'The Art of World Building',
        excerpt: 'Whether you\'re writing fantasy, sci-fi, or contemporary fiction, creating a believable world is crucial. Here\'s my approach to crafting immersive settings...',
        publishedAt: '2023-12-28',
        slug: 'art-of-world-building',
        coverImage: '/images/blog/world-building.jpg'
    }
]

export default function BlogPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Latest Posts</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Welcome to my blog! Here you'll find thoughts on writing, storytelling,
                    and the creative process, along with updates on my latest projects.
                </p>
            </div>

            {/* Featured Post */}
            {mockPosts.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg overflow-hidden text-white">
                        <div className="p-8">
                            <h3 className="text-3xl font-bold mb-4">{mockPosts[0].title}</h3>
                            <p className="text-lg mb-6 opacity-90">{mockPosts[0].excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm opacity-75">
                                    {new Date(mockPosts[0].publishedAt).toLocaleDateString()}
                                </span>
                                <a
                                    href={`/blog/${mockPosts[0].slug}`}
                                    className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* All Posts Grid */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">All Posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Load More Button (for future pagination) */}
            <div className="text-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Load More Posts
                </button>
            </div>
        </div>
    )
}