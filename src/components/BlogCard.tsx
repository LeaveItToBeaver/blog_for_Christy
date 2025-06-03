import Link from 'next/link'
import Image from 'next/image'

type BlogPost = {
    id: string
    title: string
    excerpt: string
    publishedAt: string
    slug: string
    coverImage?: string
}

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {post.coverImage && (
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-purple-600">
                        {post.title}
                    </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                </div>
            </div>
        </article>
    )
}