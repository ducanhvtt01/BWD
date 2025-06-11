import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Kỹ năng', href: '/skills' },
    { label: 'Khoá học', href: '/courses' },
    { label: 'Trẻ em', href: '/children' },
    { label: 'Donate', href: '/donate' },
  ]
  return (
    <header className="bg-white shadow-md fixed w-full z-30">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-sky-600">ACESKILLS</Link>
        <nav className="hidden md:flex space-x-6 text-sm">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="hover:text-sky-600">{l.label}</Link>
          ))}
          <Link href="/login" className="bg-sky-600 text-white px-4 py-1 rounded-md hover:opacity-90">Đăng nhập / Đăng ký</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="block px-4 py-2 hover:bg-sky-50">{l.label}</Link>
          ))}
          <Link href="/login" className="block px-4 py-2 hover:bg-sky-50">Đăng nhập / Đăng ký</Link>
        </div>
      )}
    </header>
  )
}
