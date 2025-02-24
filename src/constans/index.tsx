import { BarChart2, DollarSign, LucideIcon, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";

interface SidebarItem {
    name: string;
    icon: LucideIcon; 
    color: string;
    href: string; 
  }

export const sidebarItems: SidebarItem[] = [
    {name:  "overview", icon:BarChart2, color: "#6366f1", href:"/"},
    { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
    { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
    { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
    { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
    { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
]