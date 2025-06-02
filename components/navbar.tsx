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
                <Card className="h-25 w-25 bg-white/3 border-white/10">
                    
                </Card>
            </div>
            {/* Menu-Bar Right-Side */}
            <div>
                <Card className="flex items-center gap-5 h-25 p-5 bg-white/3 border-white/10">
                    {items.map((item) => (
                        <Card key={item.title} className="h-20 w-20 bg-white/12 border-white/15">
                            <a href={item.url} className="w-20 h-20 flex justify-center items-center">
                                <item.icon />
                            </a>
                        </Card> 
                    )) }
                </Card>
            </div>
        </nav>
    )
}