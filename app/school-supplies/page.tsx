import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

const schoolSupplies = [
  {
    id: 1,
    name: "كراسة 100 ورقة مسطرة",
    price: "15 جنيه",
    originalPrice: "20 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.9,
    reviews: 324,
    badge: "الأكثر طلباً",
  },
  {
    id: 2,
    name: "حقيبة مدرسية بعجلات",
    price: "450 جنيه",
    originalPrice: "550 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.7,
    reviews: 189,
    badge: "خصم 18%",
  },
  {
    id: 3,
    name: "مجموعة أدوات هندسية كاملة",
    price: "75 جنيه",
    originalPrice: "95 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.8,
    reviews: 267,
    badge: "جودة ممتازة",
  },
  {
    id: 4,
    name: "كراسة رسم A4 - 50 ورقة",
    price: "25 جنيه",
    originalPrice: "30 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.6,
    reviews: 145,
    badge: "ورق عالي الجودة",
  },
  {
    id: 5,
    name: "علبة ألوان خشبية 48 لون",
    price: "120 جنيه",
    originalPrice: "150 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.9,
    reviews: 298,
    badge: "ألوان زاهية",
  },
  {
    id: 6,
    name: "مقلمة مدرسية بأقسام",
    price: "35 جنيه",
    originalPrice: "45 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.5,
    reviews: 156,
    badge: "تصميم عملي",
  },
  {
    id: 7,
    name: "كراسة ملاحظات صغيرة",
    price: "8 جنيه",
    originalPrice: "12 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.4,
    reviews: 89,
    badge: "سعر اقتصادي",
  },
  {
    id: 8,
    name: "مجموعة مساطر ملونة",
    price: "18 جنيه",
    originalPrice: "25 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.7,
    reviews: 134,
    badge: "مقاومة للكسر",
  },
  {
    id: 9,
    name: "ممحاة بيضاء كبيرة",
    price: "5 جنيه",
    originalPrice: "8 جنيه",
    image: "/arabic-stationery-and-school-supplies-arranged-bea.png",
    rating: 4.3,
    reviews: 67,
    badge: "لا تترك أثر",
  },
]

const categories = ["جميع المنتجات", "كراسات", "حقائب مدرسية", "أدوات هندسية", "ألوان", "مقالم", "مساطر"]

export default function SchoolSuppliesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">مستلزمات المدارس</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            كل ما يحتاجه طفلك للعام الدراسي الجديد من كراسات وحقائب وأدوات مدرسية عالية الجودة
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Special Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">عرض خاص للعام الدراسي الجديد</h2>
          <p className="text-muted-foreground mb-4">خصم يصل إلى 25% على جميع مستلزمات المدارس</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">تسوق الآن</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolSupplies.map((product) => (
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

        {/* Back to School Tips */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">نصائح للعام الدراسي الجديد</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">تنظيم الأدوات</h4>
              <p className="text-sm text-muted-foreground">رتب أدوات طفلك في مقلمة منظمة لسهولة الوصول إليها</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎒</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">اختيار الحقيبة المناسبة</h4>
              <p className="text-sm text-muted-foreground">احرص على اختيار حقيبة مريحة ومناسبة لعمر طفلك</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">جودة الأدوات</h4>
              <p className="text-sm text-muted-foreground">استثمر في أدوات عالية الجودة تدوم طوال العام الدراسي</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
