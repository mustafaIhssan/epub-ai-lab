import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function SettingsPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Settings</h1>
            <p className="text-gray-600 mb-8">Configure your EPUB AI Lab preferences and settings.</p>

            <div className="max-w-2xl space-y-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Display Name</label>
                            <Input placeholder="Enter your display name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <Input type="email" placeholder="Enter your email" />
                        </div>
                    </div>
                </div>

                <Separator />

                <div>
                    <h2 className="text-xl font-semibold mb-4">AI Model Preferences</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Default Model</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>GPT-4</option>
                                <option>Claude-3</option>
                                <option>Gemini Pro</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">API Key</label>
                            <Input type="password" placeholder="Enter your API key" />
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex justify-end space-x-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                </div>
            </div>
        </div>
    )
}

