import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

const officeSupplies = [
  {
    id: 1,
    name: "أقلام جل ملونة - عبوة 12 قلم",
    price: "45 جنيه",
    originalPrice: "60 جنيه",
    image: "/office-supplies-pens-rulers-staplers.png",
    rating: 4.8,
    reviews: 156,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 2,
    name: "مجموعة مساطر هندسية",
    price: "35 جنيه",
    originalPrice: "45 جنيه",
    image: "/office-supplies-pens-rulers-staplers.png",
    rating: 4.6,
    reviews: 89,
    badge: "خصم 22%",
  },
  {
    id: 3,
    name: "دباسة معدنية قوية",
    price: "85 جنيه",
    originalPrice: "100 جنيه",
    image: "/office-supplies-pens-rulers-staplers.png",
    rating: 4.9,
    reviews: 234,
    badge: "جودة عالية",
  },
  {
    id: 4,
    name: "أقلام رصاص - عبوة 24 قلم",
    price: "25 جنيه",
    originalPrice: "35 جنيه",
    image: "/office-supplies-pens-rulers-staplers.png",
    rating: 4.7,
    reviews: 178,
    badge: "عرض خاص",
  },
  {
    id: 5,
    name: "مقص مكتبي احترافي",
    price: "55 جنيه",
    originalPrice: "70 جنيه",
    image: "/office-supplies-pens-rulers-staplers.png",
    rating: 4.5,
    reviews: 92,
    badge: "توفير 15 جنيه",
  },
  {
    id: 6,
    name: "مجموعة أقلام تحديد فلوماستر",
    price: "65 جنيه",
    originalPrice: "80 جنيه",
    image: "/office-supplies-pens-rulers-staplers.png",
    rating: 4.8,
    reviews: 145,
    badge: "ألوان زاهية",
  },
]

export default function OfficeSuppliesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">أدوات مكتبية</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعتنا الواسعة من الأدوات المكتبية عالية الجودة لجميع احتياجاتك المكتبية والدراسية
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button variant="default" className="bg-primary text-primary-foreground">
            جميع المنتجات
          </Button>
          <Button variant="outline">أقلام</Button>
          <Button variant="outline">مساطر</Button>
          <Button variant="outline">دباسات</Button>
          <Button variant="outline">مقصات</Button>
          <Button variant="outline">أدوات تحديد</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeSupplies.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{product.badge}</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </CardTitle>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} تقييم)</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="w-4 h-4 ml-2" />
                  أضف للسلة
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            عرض المزيد من المنتجات
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
