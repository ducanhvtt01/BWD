export default function Footer() {
  return (
    <footer className="bg-sky-50 mt-20">
      <div className="container mx-auto p-8 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Liên hệ</h3>
          <p>Email: hello@softskill4all.org</p>
          <p>Hotline: 0123 456 789</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Theo dõi</h3>
          <p>Facebook • YouTube • Tiktok</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Nhận thông tin</h3>
          <form className="flex">
            <input type="email" className="flex-grow px-3 py-2 rounded-l-md border" placeholder="Email của bạn"/>
            <button className="bg-sky-600 text-white px-4 rounded-r-md">Gửi</button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 bg-sky-100">&copy; 2025 SoftSkill4All. All rights reserved.</div>
    </footer>
  )
}
