import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className="container mx-auto py-16 px-4 max-w-md">
      <h1 className="text-3xl font-bold text-sky-700 mb-8 text-center">Đăng nhập</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-8 space-y-4">
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border rounded-md"/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mật khẩu" className="w-full px-3 py-2 border rounded-md"/>
        <button className="w-full bg-sky-600 text-white py-2 rounded-md">Đăng nhập</button>
        <p className="text-sm text-center">Chưa có tài khoản? <Link href="/register" className="text-sky-600 hover:underline">Đăng ký</Link></p>
      </form>
    </div>
  )
}
