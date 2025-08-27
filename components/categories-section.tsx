import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "أدوات مكتبية",
    description: "أقلام، مساطر، دباسات وكل ما تحتاجه للمكتب",
    image: "/office-supplies-pens-rulers-staplers.png",
    itemCount: "150+ منتج",
  },
  {
    title: "مستلزمات مدارس",
    description: "حقائب، كراسات، أدوات هندسية وكل مستلزمات الطلاب",
    image: "/school-supplies-backpacks-notebooks-geometry-tools.png",
    itemCount: "200+ منتج",
  },
  {
    title: "كتب خارجية",
    description: "سلاح التلميذ، الأضواء، المعاصر وأفضل الكتب التعليمية",
    image: "/arabic-educational-books-textbooks-study-materials.png",
    itemCount: "100+ كتاب",
  },
  {
    title: "عروض خاصة",
    description: "خصومات وعروض حصرية على مجموعة مختارة من المنتجات",
    image: "/special-offers-discount-sale-products.png",
    itemCount: "خصم حتى 30%",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">تصفح أقسامنا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا الواسعة من المنتجات المختارة بعناية لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
                    {category.itemCount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    عرض المنتجات
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
