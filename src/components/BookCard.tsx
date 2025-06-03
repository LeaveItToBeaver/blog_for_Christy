import Link from 'next/link'
import Image from 'next/image'

type Book = {
    id: string
    title: string
    description: string
    coverImage?: string
    publishDate: string
    amazonLink?: string
    goodreadsLink?: string
    genre?: string
    pages?: number
    isbn?: string
}

export default function BookCard({ book }: { book: Book }) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-sm">
            {/* Book Cover */}
            <div className="relative h-80 bg-gray-100">
                {book.coverImage ? (
                    <Image
                        src={book.coverImage}
                        alt={`${book.title} book cover`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        <div className="text-center">
                            <div className="text-4xl mb-2">📚</div>
                            <p className="text-sm">No cover available</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Book Details */}
            <div className="p-6">
                <div className="mb-3">
                    {book.genre && (
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-2">
                            {book.genre}
                        </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {book.title}
                    </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {book.description}
                </p>

                {/* Book Meta */}
                <div className="text-xs text-gray-500 mb-4 space-y-1">
                    <div>Published: {new Date(book.publishDate).toLocaleDateString()}</div>
                    {book.pages && <div>{book.pages} pages</div>}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                    {book.amazonLink && (
                        <a
                            href={book.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-colors"
                        >
                            Buy on Amazon
                        </a>
                    )}
                    {book.goodreadsLink && (
                        <a
                            href={book.goodreadsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-colors"
                        >
                            Goodreads
                        </a>
                    )}
                    {!book.amazonLink && !book.goodreadsLink && (
                        <button
                            className="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded-md text-sm font-medium cursor-not-allowed"
                            disabled
                        >
                            Coming Soon
                        </button>
                    )}
                </div>
            </div>
        </article>
    )
}