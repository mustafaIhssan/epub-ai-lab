import { Home, LayoutDashboard, FolderOpen, Settings, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/theme-toggle'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar'

// Menu items
const items = [
    {
        title: 'Home',
        url: '/',
        icon: Home,
    },
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: FolderOpen,
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-2">
                    <BookOpen className="size-6 text-blue-600" />
                    <h1 className="text-lg font-semibold">EPUB AI Lab</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="p-2 space-y-2">
                    <ThemeToggle />
                    <p className="text-xs text-muted-foreground">AI-powered EPUB processing</p>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
