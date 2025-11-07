import { Button } from '@/components/ui/button'

export function ProjectsPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-gray-600 mb-6">Manage your EPUB AI projects and experiments.</p>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Projects</h2>
                <Button>New Project</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">Novel Analysis</h3>
                    <p className="text-sm text-gray-600 mb-4">AI-powered analysis of classic literature</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                        <Button variant="outline" size="sm">View</Button>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">Content Enhancement</h3>
                    <p className="text-sm text-gray-600 mb-4">Enhance EPUB content with AI insights</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">In Progress</span>
                        <Button variant="outline" size="sm">View</Button>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">Metadata Extraction</h3>
                    <p className="text-sm text-gray-600 mb-4">Extract metadata using machine learning</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">Completed</span>
                        <Button variant="outline" size="sm">View</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

