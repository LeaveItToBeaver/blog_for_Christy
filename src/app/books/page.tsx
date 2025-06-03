import type { Metadata } from 'next'
import BookCard from '@/components/BookCard'

export const metadata: Metadata = {
    title: 'Books',
    description: 'Explore published books',
}

const mockBooks = [
    {
        id: '1',
        title: 'My First Novel',
        description: 'A captivating story about...',
        coverImage: '/images/book-cover.jpg',
        publishDate: '2024-01-01',
        amazonLink: 'https://amazon.com/...',
    }
]

export default function BooksPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">My Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}