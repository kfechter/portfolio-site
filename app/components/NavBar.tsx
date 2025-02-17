'use client'

import Link from "next/link"
import MenuOverlay from "./MenuOverlay"
import NavLink from "./NavLink"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const navLinks = [
    {
        href: "#projects",
        title: "Projects"
    },
    {
        href: "#socials",
        title: "Socials"
    },
]

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href="/" className="text-xl md:text-2xl text-white font-semibold"></Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5"/></button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5"/></button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((item, index) => (
                        <li key={index}><NavLink href={item.href} title={item.title} /></li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay overlayLinks={navLinks} /> : null }
    </nav>
  )
}
