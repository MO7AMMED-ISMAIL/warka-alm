import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, BookOpen, GraduationCap } from "lucide-react"
import Image from "next/image"

const externalBooks = [
  {
    id: 1,
    name: "سلاح التلميذ - رياضيات الصف الثالث الثانوي",
    price: "85 جنيه",
    originalPrice: "100 جنيه",
    image: "/arabic-math-textbook-cover.png",
    rating: 4.9,
    reviews: 456,
    badge: "الأكثر مبيعاً",
    grade: "الثانوية العامة",
    subject: "رياضيات",
  },
  {
    id: 2,
    name: "الأضواء - فيزياء الصف الثاني الثانوي",
    price: "75 جنيه",
    originalPrice: "90 جنيه",
    image: "/arabic-physics-textbook-cover.png",
    rating: 4.8,
    reviews: 324,
    badge: "خصم 17%",
    grade: "الثانوية العامة",
    subject: "فيزياء",
  },
  {
    id: 3,
    name: "المعاصر - كيمياء الصف الثالث الثانوي",
    price: "80 جنيه",
    originalPrice: "95 جنيه",
    image: "/arabic-chemistry-textbook-cover.png",
    rating: 4.7,
    reviews: 289,
    badge: "جودة ممتازة",
    grade: "الثانوية العامة",
    subject: "كيمياء",
  },
  {
    id: 4,
    name: "سلاح التلميذ - لغة عربية الصف الأول الثانوي",
    price: "70 جنيه",
    originalPrice: "85 جنيه",
    image: "/arabic-language-textbook-cover.png",
    rating: 4.6,
    reviews: 198,
    badge: "توفير 15 جنيه",
    grade: "الثانوية العامة",
    subject: "لغة عربية",
  },
  {
    id: 5,
    name: "الامتحان - أحياء الصف الثالث الثانوي",
    price: "78 جنيه",
    originalPrice: "92 جنيه",
    image: "/arabic-biology-textbook-cover.png",
    rating: 4.8,
    reviews: 367,
    badge: "شرح مبسط",
    grade: "الثانوية العامة",
    subject: "أحياء",
  },
  {
    id: 6,
    name: "الأضواء - تاريخ الصف الثاني الثانوي",
    price: "65 جنيه",
    originalPrice: "80 جنيه",
    image: "/arabic-history-textbook-cover.png",
    rating: 4.5,
    reviews: 156,
    badge: "محدث 2024",
    grade: "الثانوية العامة",
    subject: "تاريخ",
  },
  {
    id: 7,
    name: "سلاح التلميذ - رياضيات الصف السادس الابتدائي",
    price: "45 جنيه",
    originalPrice: "55 جنيه",
    image: "/arabic-elementary-math-textbook-cover.png",
    rating: 4.7,
    reviews: 234,
    badge: "للمرحلة الابتدائية",
    grade: "الابتدائية",
    subject: "رياضيات",
  },
  {
    id: 8,
    name: "الأضواء - علوم الصف الثالث الإعدادي",
    price: "60 جنيه",
    originalPrice: "75 جنيه",
    image: "/arabic-science-textbook-cover.png",
    rating: 4.6,
    reviews: 187,
    badge: "تجارب عملية",
    grade: "الإعدادية",
    subject: "علوم",
  },
  {
    id: 9,
    name: "المعاصر - لغة إنجليزية الصف الأول الثانوي",
    price: "68 جنيه",
    originalPrice: "82 جنيه",
    image: "/arabic-english-textbook-cover.png",
    rating: 4.4,
    reviews: 145,
    badge: "قواعد مبسطة",
    grade: "الثانوية العامة",
    subject: "لغة إنجليزية",
  },
]

const grades = ["جميع المراحل", "الابتدائية", "الإعدادية", "الثانوية العامة"]
const subjects = ["جميع المواد", "رياضيات", "فيزياء", "كيمياء", "أحياء", "لغة عربية", "لغة إنجليزية", "تاريخ", "علوم"]

export default function ExternalBooksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">الكتب الخارجية</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة شاملة من أفضل الكتب الخارجية المساعدة لجميع المراحل الدراسية من سلاح التلميذ والأضواء والمعاصر
          </p>
        </div>

        {/* Filters Section */}
        <div className="space-y-6 mb-8">
          {/* Grade Filter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              المرحلة الدراسية
            </h3>
            <div className="flex flex-wrap gap-3">
              {grades.map((grade, index) => (
                <Button
                  key={grade}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-primary text-primary-foreground" : ""}
                >
                  {grade}
                </Button>
              ))}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              المادة الدراسية
            </h3>
            <div className="flex flex-wrap gap-3">
              {subjects.map((subject, index) => (
                <Button
                  key={subject}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-primary text-primary-foreground" : ""}
                >
                  {subject}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Publishers Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">دور النشر المعتمدة</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">سلاح</span>
              </div>
              <p className="text-sm text-muted-foreground">سلاح التلميذ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">أضواء</span>
              </div>
              <p className="text-sm text-muted-foreground">الأضواء</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">معاصر</span>
              </div>
              <p className="text-sm text-muted-foreground">المعاصر</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">امتحان</span>
              </div>
              <p className="text-sm text-muted-foreground">الامتحان</p>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.name}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{book.badge}</Badge>
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <Badge variant="secondary" className="text-xs">
                      {book.grade}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-background">
                      {book.subject}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{book.name}</CardTitle>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({book.reviews} تقييم)</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">{book.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{book.originalPrice}</span>
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
            عرض المزيد من الكتب
          </Button>
        </div>

        {/* Study Tips Section */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">نصائح للاستفادة من الكتب الخارجية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">اقرأ بانتظام</h4>
              <p className="text-sm text-muted-foreground">خصص وقتاً يومياً للمراجعة من الكتب الخارجية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">حل التمارين</h4>
              <p className="text-sm text-muted-foreground">احرص على حل جميع التمارين والأسئلة الموجودة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">ركز على النقاط المهمة</h4>
              <p className="text-sm text-muted-foreground">استخدم الألوان لتمييز المعلومات المهمة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">ادرس مع الأصدقاء</h4>
              <p className="text-sm text-muted-foreground">المذاكرة الجماعية تساعد على فهم أفضل</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
