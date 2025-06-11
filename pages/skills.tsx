import Image from 'next/image'

const skills = [
  {id:'communication',title:'Giao tiếp',img:'https://source.unsplash.com/featured/400x280?talk',desc:'Trao đổi thông tin hiệu quả.'},
  {id:'critical',title:'Tư duy phản biện',img:'https://source.unsplash.com/featured/400x280?brain',desc:'Phân tích & đánh giá logic.'},
  {id:'team',title:'Làm việc nhóm',img:'https://source.unsplash.com/featured/400x280?team',desc:'Hợp tác hướng tới mục tiêu.'},
]

export default function Skills() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-8 text-center">Danh sách kỹ năng</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map(s=>(
          <div key={s.id} className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <Image src={s.img} alt={s.title} width={400} height={280} className="object-cover"/>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
