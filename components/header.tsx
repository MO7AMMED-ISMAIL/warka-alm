import { ShoppingCart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">و</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ورقة وقلم</h1>
              <p className="text-xs text-muted-foreground">مكتبة شاملة</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="ابحث عن المنتجات..." className="pr-10" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 mt-4 pt-4 border-t border-border">
          <Link href="/">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              الرئيسية
            </Button>
          </Link>
          <Link href="/office-supplies">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              أدوات مكتبية
            </Button>
          </Link>
          <Link href="/school-supplies">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              مستلزمات مدارس
            </Button>
          </Link>
          <Link href="/external-books">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              كتب خارجية
            </Button>
          </Link>
          <Link href="/special-offers">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              عروض خاصة
            </Button>
          </Link>
          {/* New Navigation Item */}
          <Link href="/new-category">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              فئة جديدة
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
