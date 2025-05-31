import { Card } from "@/components/ui/card"
import { Home, FolderOpen, Mail, User } from "lucide-react"

export function NavBar() {
    const items = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        {
            title: "Project",
            url: "/",
            icon: FolderOpen,
        },
        {
            title: "Email",
            url: "/",
            icon: Mail,
        },
        {
            title: "Contact",
            url: "/",
            icon: User,
        },
    ]

    return (
        <nav className="w-screen p-4 flex item-center justify-between">
            {/* Logo Left-Side */}
            <div>
                <Card className="h-32 w-32">
                    
                </Card>
            </div>
            {/* Menu-Bar Right-Side */}
            <div>
                <Card className="h-32 w-[600px]">
                    {items.map((item) => (
                        <Card key={item.title}>
                            <a href={item.url}>
                                <item.icon />
                            </a>
                        </Card> 
                    )) }
                </Card>
            </div>
        </nav>
    )
}