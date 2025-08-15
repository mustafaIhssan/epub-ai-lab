import { Button } from '@/components/ui/button'

export function DashboardPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600 mb-6">View your analytics and manage your EPUB projects here.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <p className="text-3xl font-bold text-blue-600">12</p>
                    <Button>View Projects</Button>

                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">AI Models</h3>
                    <p className="text-3xl font-bold text-green-600">5</p>
                    <Button>View AI Models</Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">Processing</h3>
                    <p className="text-3xl font-bold text-orange-600">3</p>
                    <Button>View Processing</Button>
                </div>
            </div>
        </div>
    )
}
