import { motion } from 'framer-motion'
import Link from 'next/link'
import Blob from '../components/Blob'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Blob className="-top-32 -left-32" />
      <Blob className="top-1/2 -right-40" />

      <section className="pt-32 pb-24 relative z-10 text-center container mx-auto px-4">
        <motion.h1
          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-sky-700 mb-6"
        >
          Chìa khóa kỹ năng - Bệ phóng thành công
        </motion.h1>
        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.3 }}
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-10"
        >
        Nơi tổng hợp kiến thức, khóa học & tài nguyên rèn luyện kỹ năng mềm, kỹ năng sống và tư duy hiện đại cho mọi người
        </motion.p>
        <motion.div
          initial={{ y:30, opacity:0 }}
          animate={{ y:0, opacity:1 }}
          transition={{ delay:0.6 }}
        >
          <Link href="/courses" className="bg-sky-600 text-white px-10 py-3 rounded-full shadow-lg hover:opacity-90">
            Xem khoá học
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
