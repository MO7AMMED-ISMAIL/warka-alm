import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "سلاح التلميذ - رياضيات الصف الثالث الثانوي",
    price: 85,
    originalPrice: 100,
    rating: 4.8,
    reviews: 124,
    image: "/arabic-mathematics-textbook-selah-el-telmeez.png",
    badge: "الأكثر مبيعاً",
    category: "كتب خارجية",
  },
  {
    id: 2,
    name: "حقيبة مدرسية عالية الجودة",
    price: 120,
    originalPrice: 150,
    rating: 4.6,
    reviews: 89,
    image: "/high-quality-school-backpack.png",
    badge: "عرض خاص",
    category: "مستلزمات مدارس",
  },
  {
    id: 3,
    name: "مجموعة أقلام ملونة - 24 لون",
    price: 35,
    originalPrice: 45,
    rating: 4.7,
    reviews: 156,
    image: "/colored-pencils-set-24-colors.png",
    badge: "جديد",
    category: "أدوات مكتبية",
  },
  {
    id: 4,
    name: "كتاب الأضواء - فيزياء الصف الثاني الثانوي",
    price: 75,
    originalPrice: 90,
    rating: 4.9,
    reviews: 203,
    image: "/arabic-physics-textbook-al-adwaa.png",
    badge: "مميز",
    category: "كتب خارجية",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">المنتجات المميزة</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف أفضل منتجاتنا الأكثر طلباً والحاصلة على أعلى التقييمات من عملائنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">{product.name}</h3>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">{product.price} جنيه</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice} جنيه</span>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <ShoppingCart className="w-4 h-4 ml-2" />
                    أضف للسلة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  )
}
