import { Badge } from "@/components/ui/badge"

const skills = [
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React.js",
  "Node.js",
  "Express",
  "Solidity",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "viem",
  "Wagmi",
  "Docker",
  "Git",
  "Vercel",
  "Infura",
  "OAuth 2.0",
  "JWT",
  "REST APIs",
  "SMTP",
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground text-lg mb-12">Technologies I work with to build modern applications</p>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
