'use client'

import { useAuth } from '@/hooks/useHooks'
import Link from 'next/link'

interface ProtectedRouteProps {
    children: React.ReactNode
    fallback?: React.ReactNode
}

export default function ProtectedRoute({
    children,
    fallback
}: ProtectedRouteProps) {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        )
    }

    if (!user) {
        if (fallback) {
            return <>{fallback}</>
        }

        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Access Denied
                    </h1>
                    <p className="text-gray-600 mb-6">
                        You need to be logged in to access this content.
                    </p>
                    <Link
                        href="/secret-garden-gate"
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        )
    }

    return <>{children}</>
}