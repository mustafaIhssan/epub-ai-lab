import { Button } from '@/components/ui/button'

export function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Home Page</h1>
            <p className="text-gray-600 mb-6">Welcome to the EPUB AI Lab. This is the home page of your application.</p>
            <Button>Get Started</Button>
        </div>
    )
}

