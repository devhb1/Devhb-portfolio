"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowUpRight, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/70" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3" aria-label="Back to top">
            <span className="brand-mark">HB</span>
            <span className="hidden sm:block text-sm font-semibold tracking-tight">Harshit Bainsla</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="nav-link"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button size="sm" className="hidden lg:flex rounded-full px-4" onClick={() => scrollToSection("contact")}>
              Let&apos;s talk <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/60">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="nav-link text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
