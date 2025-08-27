import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

const branches = [
  {
    name: "الفرع الرئيسي - وسط البلد",
    address: "شارع طلعت حرب، وسط البلد، القاهرة",
    phone: "02-25749632",
    hours: "السبت - الخميس: 9:00 ص - 9:00 م",
    manager: "أحمد محمد",
  },
  {
    name: "فرع المعادي",
    address: "شارع 9، المعادي، القاهرة",
    phone: "02-25896741",
    hours: "السبت - الخميس: 10:00 ص - 8:00 م",
    manager: "فاطمة علي",
  },
  {
    name: "فرع مدينة نصر",
    address: "شارع عباس العقاد، مدينة نصر، القاهرة",
    phone: "02-24785963",
    hours: "السبت - الخميس: 9:30 ص - 8:30 م",
    manager: "محمود حسن",
  },
  {
    name: "فرع الإسكندرية",
    address: "شارع سعد زغلول، الإسكندرية",
    phone: "03-48596321",
    hours: "السبت - الخميس: 10:00 ص - 7:00 م",
    manager: "نورا سعد",
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: "اتصل بنا",
    info: "16789",
    description: "خط ساخن مجاني على مدار الساعة",
    color: "text-green-600",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    info: "+20 100 123 4567",
    description: "تواصل معنا عبر الواتساب",
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    info: "info@warakawaqalam.com",
    description: "سنرد عليك خلال 24 ساعة",
    color: "text-blue-600",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">اتصل بنا</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك! تواصل معنا بأي طريقة تناسبك وسنكون سعداء بخدمتك
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">{method.info}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-6">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Send className="w-6 h-6" />
                أرسل لنا رسالة
              </CardTitle>
              <p className="text-muted-foreground">املأ النموذج وسنتواصل معك في أقرب وقت</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-right">
                      الاسم الأول *
                    </Label>
                    <Input id="firstName" placeholder="أدخل اسمك الأول" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-right">
                      الاسم الأخير *
                    </Label>
                    <Input id="lastName" placeholder="أدخل اسمك الأخير" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-right">
                    البريد الإلكتروني *
                  </Label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-right">
                    رقم الهاتف
                  </Label>
                  <Input id="phone" type="tel" placeholder="+20 100 123 4567" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-right">
                    الموضوع *
                  </Label>
                  <Input id="subject" placeholder="موضوع رسالتك" required />
                </div>

                <div>
                  <Label htmlFor="message" className="text-right">
                    الرسالة *
                  </Label>
                  <Textarea id="message" placeholder="اكتب رسالتك هنا..." rows={5} required className="resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-4 h-4 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Business Hours & Info */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  ساعات العمل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">السبت - الخميس</span>
                  <span className="font-semibold text-foreground">9:00 ص - 9:00 م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">الجمعة</span>
                  <span className="font-semibold text-foreground">2:00 م - 8:00 م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">الخط الساخن</span>
                  <Badge variant="secondary">24/7</Badge>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">الأسئلة الشائعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">هل يمكنني إرجاع المنتجات؟</h4>
                  <p className="text-sm text-muted-foreground">نعم، يمكنك إرجاع المنتجات خلال 14 يوم من تاريخ الشراء</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">هل تتوفر خدمة التوصيل؟</h4>
                  <p className="text-sm text-muted-foreground">نعم، نوصل لجميع أنحاء القاهرة والجيزة والإسكندرية</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">كيف يمكنني تتبع طلبي؟</h4>
                  <p className="text-sm text-muted-foreground">ستصلك رسالة نصية برقم التتبع فور شحن طلبك</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Branches Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">فروعنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {branch.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-foreground">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{branch.hours}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">مدير الفرع: {branch.manager}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="p-6 mb-16">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-foreground text-center">موقعنا على الخريطة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">خريطة تفاعلية لجميع فروعنا</p>
                <p className="text-sm text-muted-foreground mt-1">قريباً...</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">هل تحتاج مساعدة عاجلة؟</h2>
          <p className="text-muted-foreground mb-6">اتصل بخطنا الساخن المجاني على مدار الساعة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="w-4 h-4 ml-2" />
              16789
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-4 h-4 ml-2" />
              واتساب: +20 100 123 4567
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
