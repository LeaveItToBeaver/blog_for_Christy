// src/app/admin/page.tsx
import Link from 'next/link'

export default function AdminDashboard() {
    // In the future, this will show real stats from Supabase
    const stats = {
        totalPosts: 4,
        totalBooks: 1,
        newsletterSubscribers: 0,
        recentActivity: [
            { action: 'New blog post draft created', time: '2 hours ago' },
            { action: 'Newsletter subscriber joined', time: '1 day ago' },
            { action: 'Blog post published', time: '3 days ago' },
        ]
    }

    const quickActions = [
        {
            title: 'Write New Post',
            description: 'Create a new blog post with rich text editing',
            href: '/admin/posts/new',
            icon: '✍️',
            color: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            title: 'Manage Posts',
            description: 'Edit, delete, or publish existing blog posts',
            href: '/admin/posts',
            icon: '📝',
            color: 'bg-green-500 hover:bg-green-600'
        },
        {
            title: 'Add New Book',
            description: 'Add a new book to your collection',
            href: '/admin/books/new',
            icon: '📚',
            color: 'bg-purple-500 hover:bg-purple-600'
        },
        {
            title: 'Newsletter Subscribers',
            description: 'View and manage newsletter subscribers',
            href: '/admin/newsletter',
            icon: '📧',
            color: 'bg-orange-500 hover:bg-orange-600'
        }
    ]

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard! 🌸</h1>
                <p className="text-purple-100">
                    Everything you need to manage your blog and books in one place.
                </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <div className="flex items-center">
                        <div className="text-2xl mr-3">📝</div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Posts</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalPosts}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <div className="flex items-center">
                        <div className="text-2xl mr-3">📚</div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Books Published</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.totalBooks}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <div className="flex items-center">
                        <div className="text-2xl mr-3">📧</div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Newsletter Subscribers</p>
                            <p className="text-2xl font-bold text-gray-900">{stats.newsletterSubscribers}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            href={action.href}
                            className="block bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="text-2xl mr-3">{action.icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {action.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-4">{action.description}</p>
                                <div className={`inline-flex items-center px-4 py-2 rounded-md text-white text-sm font-medium ${action.color} transition-colors`}>
                                    Get Started →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {stats.recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center py-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                                <div className="flex-1">
                                    <p className="text-gray-900">{activity.action}</p>
                                    <p className="text-sm text-gray-500">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Help Section */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
                <p className="text-blue-700 mb-4">
                    Getting started with your new admin dashboard? Here are some helpful tips:
                </p>
                <ul className="space-y-2 text-blue-700">
                    <li>• Start by creating your first blog post with the rich text editor</li>
                    <li>• Add your published books to showcase your work</li>
                    <li>• Monitor your newsletter subscribers to grow your audience</li>
                    <li>• Remember: only you and your husband know about the secret login! 🤫</li>
                </ul>
            </div>
        </div>
    )
}