"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-primary">Harshit Bainsla;</span> 
        </h1>

        {/* Short tagline */}
        <p className="mt-3 text-lg md:text-xl text-muted-foreground font-medium">
          Full-Stack Developer <span className="mx-1">|</span> Web3 &amp; DeFi Builder
        </p>

        {/* Body */}
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Passionate about building products, breaking things, fixing them, and learning faster each time.  
          From full-stack systems to DeFi automation, I love exploring how tech can scale ideas into impact.  
          My focus: shipping real products, experimenting with new stacks, and pushing myself to mastery.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="px-6"
            variant="default"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6"
            onClick={scrollToFooter}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
