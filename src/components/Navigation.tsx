'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="font-bold text-xl text-gray-900">
                        Christy's Blog
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
                        <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</Link>
                        <Link href="/books" className="text-gray-700 hover:text-purple-600 transition-colors">Books</Link>
                        <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open menu</span>
                        {/* Hamburger icon */}
                        <div className="w-6 h-6 flex flex-col justify-center">
                            <span className="block h-0.5 w-6 bg-gray-700 mb-1"></span>
                            <span className="block h-0.5 w-6 bg-gray-700 mb-1"></span>
                            <span className="block h-0.5 w-6 bg-gray-700"></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <Link href="/" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
                        <Link href="/blog" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Blog</Link>
                        <Link href="/books" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Books</Link>
                        <Link href="/about" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">About</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}