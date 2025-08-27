import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground text-balance">مرحباً بك في مكتبة ورقة وقلم</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              وجهتك الأولى للحصول على أفضل الأدوات المكتبية ومستلزمات المدارس والكتب الخارجية بأسعار منافسة وجودة عالية
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                تسوق الآن
              </Button>
              <Button variant="outline" size="lg">
                عرض المنتجات
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="p-8 bg-card">
              <img
                src="/arabic-stationery-and-school-supplies-arranged-bea.png"
                alt="أدوات مكتبية ومستلزمات مدارس"
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
