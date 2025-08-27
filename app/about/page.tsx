import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Award, Clock, MapPin } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "أحمد محمد",
    role: "المدير العام",
    experience: "15 سنة خبرة",
    image: "/professional-egyptian-man-manager.png",
  },
  {
    name: "فاطمة علي",
    role: "مديرة المبيعات",
    experience: "10 سنوات خبرة",
    image: "/professional-egyptian-woman-sales.png",
  },
  {
    name: "محمود حسن",
    role: "مسؤول المخزون",
    experience: "8 سنوات خبرة",
    image: "/professional-egyptian-man-warehouse.png",
  },
  {
    name: "نورا سعد",
    role: "خدمة العملاء",
    experience: "5 سنوات خبرة",
    image: "/professional-egyptian-woman-customer-service.png",
  },
]

const achievements = [
  {
    icon: Users,
    title: "أكثر من 50,000 عميل",
    description: "نخدم آلاف العائلات المصرية",
  },
  {
    icon: Award,
    title: "15 سنة من التميز",
    description: "خبرة طويلة في مجال الأدوات المكتبية",
  },
  {
    icon: MapPin,
    title: "10 فروع في مصر",
    description: "نتوسع لنصل إليك في كل مكان",
  },
  {
    icon: Clock,
    title: "خدمة 24/7",
    description: "دعم فني ومساعدة على مدار الساعة",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">من نحن</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مكتبة ورقة وقلم - شريكك الموثوق في رحلة التعلم والإبداع منذ عام 2009
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">قصتنا</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                بدأت مكتبة "ورقة وقلم" كحلم صغير في قلب القاهرة عام 2009، عندما قرر مؤسسها أحمد محمد أن يفتح مكتبة صغيرة
                تخدم طلاب الحي وتوفر لهم كل ما يحتاجونه من أدوات مكتبية وكتب خارجية بأسعار مناسبة.
              </p>
              <p>
                مع مرور السنوات، نمت المكتبة وتوسعت لتصبح سلسلة من المكتبات المنتشرة في أنحاء مصر، ولكن رؤيتنا بقيت كما
                هي: أن نكون الشريك الموثوق لكل طالب وطالبة في رحلتهم التعليمية.
              </p>
              <p>
                اليوم، نفخر بخدمة أكثر من 50,000 عميل، ونقدم أكثر من 10,000 منتج مختلف، من الأدوات المكتبية البسيطة إلى
                أحدث الكتب الخارجية والمراجع التعليمية.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/modern-egyptian-bookstore-interior.png"
              alt="مكتبة ورقة وقلم"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                أن نكون المكتبة الرائدة في مصر والشرق الأوسط، ونساهم في بناء جيل متعلم ومبدع من خلال توفير أفضل الأدوات
                التعليمية والمكتبية بأسعار مناسبة للجميع.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                نلتزم بتقديم منتجات عالية الجودة وخدمة عملاء متميزة، ونسعى لدعم العملية التعليمية في مصر من خلال توفير
                كل ما يحتاجه الطلاب والمعلمون لتحقيق النجاح.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">إنجازاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">فريق العمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">الجودة</h3>
              <p className="text-muted-foreground">نختار منتجاتنا بعناية فائقة لضمان حصولك على أفضل جودة بأفضل سعر</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">الثقة</h3>
              <p className="text-muted-foreground">نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">الابتكار</h3>
              <p className="text-muted-foreground">نسعى دائماً لتطوير خدماتنا وإيجاد حلول مبتكرة لاحتياجات عملائنا</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">هل تريد معرفة المزيد؟</h2>
          <p className="text-muted-foreground mb-6">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في العثور على ما تحتاجه
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              تواصل معنا
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              تصفح المنتجات
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
