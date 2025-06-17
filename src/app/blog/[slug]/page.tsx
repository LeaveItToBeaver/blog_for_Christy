import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest posts',
}

const mockPosts = [
    {
        id: '1',
        title: 'My First Blog Post',
        excerpt: 'This is a sample blog post excerpt...',
        publishedAt: '2024-01-15',
        slug: 'my-first-blog-post',
        coverImage: '/images/placeholder.jpg'
    },
    // More posts...
]

export default function BlogPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}
