import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap } from "lucide-react"

const hackathons = [
  ["ETHGlobal Online 2026", "Saviours - Security memory for AI agents"],
  ["ETHGlobal New Delhi 2026", "HackerRep - Zero-knowledge reputation"],
  ["ETHGlobal Hackathon", "1nsync - Gas-optimized batch swapper"],
  ["Chromion: Chainlink Hackathon", "YieldAgentX - Autonomous AI DeFi agents"],
]

export function ExperienceSection() {
  return (
    <section className="section-shell py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow justify-center mb-4">Background / 01—02</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.05em] mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">A timeline of building, learning, and competing onchain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Featured Hackathons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {hackathons.map(([event, project]) => (
                <div key={event} className="experience-entry">
                  <span className="experience-dot" />
                  <div>
                    <h4 className="font-semibold leading-tight">{event}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{project}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold">B.Tech Computer Science Engineering</h4>
                <p className="text-sm text-muted-foreground">Lloyd Institute of Engineering & Technology</p>
                <p className="text-sm text-muted-foreground">2021 - 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
