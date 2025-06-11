export default function Testimonials() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-8 text-center">Phản hồi</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {quote:'Khoá học giúp em tự tin phát biểu trước lớp!',name:'Thuỷ, học sinh Nghệ An'},
          {quote:'Nội dung sinh động, dễ hiểu và miễn phí!',name:'Long, sinh viên Hà Giang'},
        ].map(t=>(
          <div key={t.name} className="bg-white rounded-xl shadow p-8">
            <p className="italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-sky-700">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
