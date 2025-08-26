import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [

    {
    title: "1nsync",
    description:
      "Gas-optimized batch swapper built with 1inch APIs, modular DeFi trading hub with MEV protection, perform multiple individual swaps in one atomic tx",
    tech: ["Next.js", "1inch API", "DeFi", "MEV Protection", "TypeScript"],
    liveUrl: "https://1nsync.vercel.app",
    githubUrl: "https://github.com/devhb1/1nsync",
  },
   {
    title: "YieldAgentX",
    description:
      "AI-powered DeFi automation platform with GPT-4, Chainlink VRF raffles, risk analysis, autonomous yield optimization.",
    tech: ["AI", "GPT-4", "Chainlink", "DeFi", "Risk Analysis"],
    liveUrl: "https://yield-agentx.vercel.app",
    githubUrl: "https://github.com/devhb1/YieldAgentX--VRF-Raffles-Autonomous-DeFi",
  },
  {
    title: "Token Sender UI",
    description:
      "Bulk token transfer DApp with RainbowKit wallet connect, multi-address support, gas optimization, L2 support (ETH, ZKSync, Optimism, Base).",
    tech: ["Next.js", "RainbowKit", "Solidity", "Ethereum", "ZKSync"],
    liveUrl: "https://ts-sender-ui.vercel.app",
    githubUrl: "https://github.com/devhb1/ts-sender-ui",
  },
  {
    title: "VentureFi",
    description:
      "Decentralized crowdfunding platform with Ethereum Sepolia testnet, Solidity contracts, Hardhat, React, Tailwind.",
    tech: ["React", "Solidity", "Hardhat", "Ethereum", "Tailwind CSS"],
    liveUrl: "https://venture-fi.vercel.app",
    githubUrl: "https://github.com/devhb1/VentureFi",
  },

  {
    title: "BlockIQ- Base Mini App",
    description: "Fun interactive crypto quiz app built for Base ecosystem.",
    tech: ["React", "Base", "Web3", "Interactive UI"],
    liveUrl: "https://blockiq.xyz",
    githubUrl: "https://github.com/devhb1/BlockIQ",
  },
  {
    title: "Inview LMS Platform",
    description:
      "Production-grade LMS with Next.js, Node.js, MongoDB, Redis, SMTP, OAuth; features: course modules, admin dashboard, learner tracking, certificates.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "OAuth"],
    liveUrl: "#",
    githubUrl: "https://github.com/devhb1",
  },
 
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in Web3, DeFi, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{project.title}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.liveUrl !== "#" && (
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button size="icon" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
