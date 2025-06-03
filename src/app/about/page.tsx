import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about the author',
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <div className="prose prose-lg">
                        <p>
                            Welcome to my corner of the internet! I'm passionate about
                            writing and sharing stories that resonate with readers.
                        </p>
                        <p>
                            When I'm not writing, you can find me reading, exploring
                            new places, or spending time with my family.
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/author-photo.jpg"
                        alt="Author photo"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}