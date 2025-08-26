import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap } from "lucide-react"

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">My journey in technology and continuous learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
              Featured Hackathons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">ETHGlobal Hackathon</h4>
                <p className="text-sm text-muted-foreground">1nsync - Gas-optimized batch swapper</p>
              </div>
              <div>
                <h4 className="font-semibold">Chromion: Chainlink Hackathon </h4>
                <p className="text-sm text-muted-foreground">YieldAgentX:Autonomous AI Defi Agents</p>
              </div>
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
