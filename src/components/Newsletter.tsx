'use client'

import { useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Here you'll integrate with Supabase to store the email
        console.log('Newsletter signup:', email)
        setIsSubmitted(true)
        setEmail('')
    }

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-gray-600 mb-8">
                    Get notified about new blog posts and book releases
                </p>

                {isSubmitted ? (
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg max-w-md mx-auto">
                        Thanks for subscribing! You'll hear from us soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                        >
                            Subscribe
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}