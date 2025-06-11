import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CourseCard from '../components/CourseCard'


const featuredCourses = [
  {
    id: 'communication-basics',
    title: 'Giao tiếp hiệu quả',
    description: 'Học cách lắng nghe & truyền đạt thông điệp rõ ràng.',
    thumbnail: 'https://source.unsplash.com/featured/400x260?communication'
  },
  {
    id: 'teamwork-kids',
    title: 'Làm việc nhóm cho trẻ',
    description: 'Hoạt động tương tác giúp trẻ hiểu về hợp tác.',
    thumbnail: 'https://source.unsplash.com/featured/400x260?teamwork'
  },
  {
    id: 'critical-thinking',
    title: 'Tư duy phản biện',
    description: 'Rèn luyện kỹ năng phân tích & đánh giá logic.',
    thumbnail: 'https://source.unsplash.com/featured/400x260?criticalthinking'
  }
]

const testimonials = [
  { quote: 'Khoá học giúp em tự tin phát biểu trước lớp!', name: 'Thuỷ – Nghệ An' },
  { quote: 'Nội dung sinh động, dễ hiểu và miễn phí!', name: 'Long – Hà Giang' },
  { quote: 'Giá trị cho cả học sinh & phụ huynh.', name: 'Cô An – Tình nguyện viên' }
]

const partners = [
  { name: "Quỹ ABC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Microsoft_logo.svg" },
  { name: "Đồng hành XYZ", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Sở GD-ĐT Hà Giang", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>ACESKILLS | Trang chủ</title>
        <meta
          name="description"
          content="Nền tảng khóa học & tài nguyên kỹ năng mềm cho mọi người – đặc biệt trẻ em vùng sâu vùng xa."
        />
      </Head>
      <div className="overflow-x-hidden">
        {/* HERO */}
        <section id="hero" className="pt-32 pb-24 relative z-10 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-sky-700 mb-6 leading-tight"
          >
            Chìa khóa kỹ năng <br className="hidden md:block" /> – Bệ phóng thành công
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto mb-10"
          >
            Nơi tổng hợp kiến thức, khóa học & tài nguyên rèn luyện kỹ năng mềm, kỹ năng sống và tư duy hiện đại cho mọi người.
          </motion.p>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <Link href="/courses" className="bg-sky-600 text-white px-10 py-3 rounded-full shadow-lg hover:opacity-90">
              Khám phá khoá học
            </Link>
          </motion.div>
        </section>

        {/* MỤC TIÊU */}
        <section id="mission" className="bg-white py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="https://source.unsplash.com/featured/500x400?education,kid"
              alt="Mission"
              width={500}
              height={400}
              className="rounded-xl shadow w-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Mục tiêu của ACESKILLS</h2>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• Cung cấp khóa học kỹ năng mềm miễn phí, chất lượng.</li>
                <li>• Trao cơ hội học tập cho trẻ em vùng sâu vùng xa & hoàn cảnh khó khăn.</li>
                <li>• Xây dựng cộng đồng tình nguyện viên lan tỏa tri thức khắp Việt Nam.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KHÓA HỌC NỔI BẬT */}
        <section id="featured" className="container mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-sky-700 mb-12 text-center">Khóa học nổi bật</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((c, i) => (
              <CourseCard key={c.id} {...c} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="text-sky-600 font-medium hover:underline">
              Xem tất cả khoá học &rarr;
            </Link>
          </div>
        </section>

        {/* PHẢN HỒI */}
        <section id="testimonials" className="bg-sky-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sky-700 mb-12 text-center">Phản hồi từ cộng đồng</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-white rounded-xl shadow p-8"
                >
                  <p className="italic mb-4">“{t.quote}”</p>
                  <p className="font-semibold text-sky-700">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NHÀ TÀI TRỢ/ĐỒNG HÀNH/ĐỊA PHƯƠNG */}
        <section id="partners" className="py-14 bg-white border-y">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Các nhà tài trợ & đồng hành</h2>
            <div className="flex justify-center gap-12 flex-wrap items-center">
              {partners.map(p => (
                <div key={p.name} className="flex flex-col items-center">
                  <Image src={p.logo} alt={p.name} width={70} height={70} className="mb-1 rounded" />
                  <span className="text-xs font-medium text-gray-700">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LỜI KÊU GỌI THAM GIA */}
        <section id="join" className="py-24 bg-gradient-to-tr from-sky-100 to-sky-50 text-center">
          <h2 className="text-3xl font-bold text-sky-700 mb-6">
            Tham gia cộng đồng tình nguyện viên
          </h2>
          <p className="mb-10 max-w-xl mx-auto">
            Cùng chúng tôi mang tri thức đến mọi miền Tổ quốc – đăng ký để nhận thông tin hoạt động & khoá đào tạo tình nguyện viên.
          </p>
          <a
            href="/register"
            className="bg-sky-600 text-white px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Tham gia ngay
          </a>
        </section>

        {/* FOOTER */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="mb-2 text-lg font-semibold">Liên hệ</h4>
              <p>Email: hello@aceskills.vn</p>
              <p>SĐT: 0123 456 789</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Mạng xã hội</h4>
              <p>Facebook · Zalo · LinkedIn</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Nhận tin mới</h4>
              <input type="email" placeholder="Email của bạn" className="w-full rounded-lg border p-2" />
              <button className="mt-2 w-full rounded-lg bg-sky-500 py-2 font-medium text-white">
                Đăng ký
              </button>
            </div>
          </div>
          <p className="py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ACESKILLS · Powered by tình nguyện viên
          </p>
        </footer>
      </div>
    </>
  )
}
