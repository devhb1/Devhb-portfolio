"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer")
    if (footer) footer.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    const projects = document.getElementById("projects")
    if (projects) projects.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-section relative min-h-screen flex items-center px-6 pt-28 pb-20">
      <div className="hero-grid" />
      <div className="relative max-w-7xl w-full mx-auto grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
        <div className="max-w-3xl">
          <div className="eyebrow mb-7"><Sparkles className="h-4 w-4" /> Full-stack developer · Web3 · AI systems</div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[.95]">
            I build intelligent products for the <span className="text-gradient">onchain internet.</span><span className="headline-cursor" aria-hidden="true">|</span>
          </h1>

          {/* Short tagline */}
          <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I&apos;m Harshit Bainsla, a software developer who turns ambitious ideas into reliable full-stack systems, AI-powered tools, DeFi experiments, and useful blockchain products.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="px-6 rounded-full"
              variant="default"
              onClick={scrollToProjects}
            >
              Explore my work <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 rounded-full"
              onClick={scrollToFooter}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="status-dot" /> Currently shipping from India · available for ambitious builds
          </div>
        </div>
        <div className="hero-signal hidden lg:block">
          <div className="signal-orbit orbit-one" />
          <div className="signal-orbit orbit-two" />
          <div className="signal-core"><span className="signal-monogram">HB</span><small>BUILD / SHIP / REPEAT</small></div>
          <div className="signal-label label-top">01 / FULL-STACK</div>
          <div className="signal-label label-right">02 / WEB3</div>
          <div className="signal-label label-bottom">03 / DEFI</div>
          <div className="signal-label label-left">04 / AI</div>
        </div>
      </div>
      <button onClick={scrollToProjects} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Scroll to projects"><ArrowDown className="h-5 w-5" /></button>
    </section>
  )
}
