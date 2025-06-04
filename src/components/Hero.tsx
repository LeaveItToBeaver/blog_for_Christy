'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="relative min-h-[70vh] overflow-hidden" style={{
            background: `linear-gradient(135deg, var(--color-lavender-400), var(--color-sage-400), var(--color-peach-300))`
        }}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Shapes */}
                <div
                    className="absolute w-64 h-64 rounded-full opacity-20 animate-pulse"
                    style={{
                        background: 'var(--color-lavender-200)',
                        top: '10%',
                        left: '10%',
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />
                <div
                    className="absolute w-48 h-48 rounded-full opacity-20 animate-bounce"
                    style={{
                        background: 'var(--color-sage-200)',
                        top: '20%',
                        right: '15%',
                        animationDelay: '1s',
                        transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />
                <div
                    className="absolute w-32 h-32 rounded-full opacity-25 animate-pulse"
                    style={{
                        background: 'var(--color-peach-200)',
                        bottom: '20%',
                        left: '20%',
                        animationDelay: '0.5s',
                        transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -10}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />
                <div
                    className="absolute w-40 h-40 rounded-full opacity-20"
                    style={{
                        background: 'var(--color-blush-200)',
                        bottom: '10%',
                        right: '25%',
                        transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * 8}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />
            </div>

            {/* Sparkle Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-white opacity-60 animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    >
                        ✨
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                        Welcome to My
                        <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent animate-pulse">
                            World of Words
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 drop-shadow-md animate-fade-in-up animation-delay-300">
                        Discover captivating stories, insightful thoughts, and the latest
                        updates from my literary journey through worlds of imagination.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                        <Link
                            href="/blog"
                            className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            style={{
                                background: 'var(--color-warm-white)',
                                color: 'var(--color-lavender-600)'
                            }}
                        >
                            <span className="relative z-10">📖 Read Latest Posts</span>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/books"
                            className="group relative px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <span className="relative z-10">📚 Explore My Books</span>
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'var(--color-warm-white)' }}
                            />
                            <span
                                className="absolute inset-0 flex items-center justify-center font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ color: 'var(--color-lavender-600)' }}
                            >
                                📚 Explore My Books
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                    opacity: 0;
                }
                
                .animation-delay-600 {
                    animation-delay: 0.6s;
                    opacity: 0;
                }
            `}</style>
        </section>
    )
}