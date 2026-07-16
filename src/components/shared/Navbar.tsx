"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const menuItems = [
  { name: "WORK", path: "/work" },
  { name: "SERVICE", path: "/service" },
  { name: "ABOUT US", path: "/about-us" },
  { name: "CAREER", path: "/career" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useGSAP(() => {
    if (!overlayRef.current || !linksRef.current) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (isMenuOpen) {
      gsap.set(overlayRef.current, { display: "flex" })

      if (prefersReduced) {
        gsap.set(linksRef.current.children, { opacity: 1, y: 0 })
        return
      }

      const tl = gsap.timeline()
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
      tl.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
        "-=0.1"
      )
    } else {
      if (prefersReduced) {
        gsap.set(overlayRef.current, { display: "none" })
        return
      }

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current!, { display: "none" })
        },
      })
      tl.to(linksRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.25,
        stagger: 0.03,
      })
      tl.to(overlayRef.current, { opacity: 0, duration: 0.25 }, "-=0.1")
    }
  }, { dependencies: [isMenuOpen] })

  return (
    <nav className="bg-[#010101] border-b border-zinc-900">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center py-3">
          <Image
            src="/logo.jpg"
            alt="Da Vinci Media"
            width={76}
            height={48}
            priority
            className="h-[48px] w-[76px] object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-[51px]">
          {menuItems.map((item) => {
            const active = isActive(item.path)
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`font-proxima font-semibold text-lg hover:text-recording-red transition-colors ${
                    active ? "text-recording-red" : "text-white-color"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-4">
            <span
              className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0 rotate-0"
              }`}
            />
          </div>
        </button>

        <div
          ref={overlayRef}
          style={{ display: "none" }}
          className="fixed inset-0 z-40 bg-[#010101] lg:hidden flex-col items-center justify-center"
        >
          <div ref={linksRef} className="flex flex-col items-center gap-8">
            {menuItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-proxima font-semibold text-3xl hover:text-recording-red transition-colors ${
                    active ? "text-recording-red" : "text-white-color"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {mounted &&
        createPortal(
          <div
            ref={overlayRef}
            style={{ display: "none" }}
            className="fixed inset-0 z-40 bg-[#010101] flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <span className="absolute w-6 h-[2px] bg-white rotate-45" />
              <span className="absolute w-6 h-[2px] bg-white -rotate-45" />
            </button>
            <div ref={linksRef} className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white-color font-proxima font-semibold text-3xl hover:text-recording-red transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>,
          document.getElementById("mobile-menu-root")!
        )}
    </nav>
  )
}
