import { useRouter } from 'next/router'
import Image from 'next/image'

const allCourses = [
  {id:'communication-basics',title:'Giao tiếp hiệu quả',tag:'communication',teacher:'Nguyễn Thị A',video:'https://www.youtube.com/embed/r9lcwI5iErE',participants:247,rating:4.8,desc:'Khóa học giúp bạn xây dựng kỹ năng giao tiếp...'},
  {id:'teamwork-kids',title:'Làm việc nhóm cho trẻ',tag:'team',teacher:'Trần Văn B',video:'https://www.youtube.com/embed/BGsP73d36A0',participants:180,rating:4.9,desc:'Khoá học xây dựng qua trò chơi và hoạt động nhóm...'}
]

export default function Courses() {
  const router = useRouter()
  const { id, tag } = router.query

  const list = id ? allCourses.filter(c=>c.id===id)
        : tag ? allCourses.filter(c=>c.tag===tag)
        : allCourses

  if(id && list.length===1){
    const c = list[0]
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-sky-700 mb-4">{c.title}</h1>
        <div className="aspect-video mb-6">
          <iframe src={c.video} className="w-full h-full rounded-lg" allowFullScreen/>
        </div>
        <p className="mb-2"><strong>Giảng viên:</strong> {c.teacher}</p>
        <p className="mb-2"><strong>Số học viên:</strong> {c.participants}</p>
        <p className="mb-2"><strong>Đánh giá:</strong> {c.rating} ⭐</p>
        <p className="mt-4">{c.desc}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-8 text-center">Tất cả khoá học</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map(c=>(
          <a key={c.id} href={`/courses?id=${c.id}`} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
