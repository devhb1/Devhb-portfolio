import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "Saviours",
    eyebrow: "ETHGlobal Online 2026 · Featured",
    description:
      "Public security memory for AI agents and wallets. Investigate onchain threats once, name the verdict with ENS, and let every future agent resolve it for free.",
    tech: ["The Graph", "ENS", "Next.js", "TypeScript", "Web3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    title: "1nsync",
    eyebrow: "DeFi / Product",
    description:
      "Gas-optimized batch swapper built with 1inch APIs, modular DeFi trading hub with MEV protection, perform multiple individual swaps in one atomic tx",
    tech: ["Next.js", "1inch API", "DeFi", "MEV Protection", "TypeScript"],
    liveUrl: "https://1nsync.vercel.app",
    githubUrl: "https://github.com/devhb1/1nsync",
  },
  {
    title: "YieldAgentX",
    eyebrow: "AI / DeFi",
    description:
      "AI-powered DeFi automation platform with GPT-4, Chainlink VRF raffles, risk analysis, autonomous yield optimization.",
    tech: ["AI", "GPT-4", "Chainlink", "DeFi", "Risk Analysis"],
    liveUrl: "https://yield-agentx.vercel.app",
    githubUrl: "https://github.com/devhb1/YieldAgentX--VRF-Raffles-Autonomous-DeFi",
  },
  {
    title: "Token Sender UI",
    eyebrow: "Web3 / DApp",
    description:
      "Bulk token transfer DApp with RainbowKit wallet connect, multi-address support, gas optimization, L2 support (ETH, ZKSync, Optimism, Base).",
    tech: ["Next.js", "RainbowKit", "Solidity", "Ethereum", "ZKSync"],
    liveUrl: "https://ts-sender-ui.vercel.app",
    githubUrl: "https://github.com/devhb1/ts-sender-ui",
  },
  {
    title: "VentureFi",
    eyebrow: "Web3 / Crowdfunding",
    description:
      "Decentralized crowdfunding platform with Ethereum Sepolia testnet, Solidity contracts, Hardhat, React, Tailwind.",
    tech: ["React", "Solidity", "Hardhat", "Ethereum", "Tailwind CSS"],
    liveUrl: "https://venture-fi.vercel.app",
    githubUrl: "https://github.com/devhb1/VentureFi",
  },

  {
    title: "BlockIQ- Base Mini App",
    eyebrow: "Base / Interactive",
    description: "Fun interactive crypto quiz app built for Base ecosystem.",
    tech: ["React", "Base", "Web3", "Interactive UI"],
    liveUrl: "https://blockiq.xyz",
    githubUrl: "https://github.com/devhb1/BlockIQ",
  },
  {
    title: "Inview LMS Platform",
    eyebrow: "Full-stack / SaaS",
    description:
      "Production-grade LMS with Next.js, Node.js, MongoDB, Redis, SMTP, OAuth; features: course modules, admin dashboard, learner tracking, certificates.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "OAuth"],
    liveUrl: "#",
    githubUrl: "https://github.com/devhb1",
  },

]

export function ProjectsSection() {
  return (
    <section className="section-shell py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Selected work / 01—06</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.05em]">Things I&apos;ve shipped.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            A mix of production systems, experimental protocols, and products built around better onchain experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Card key={index} className={`project-card group ${project.featured ? "project-featured md:col-span-2" : ""}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className="eyebrow text-[10px]">{project.eyebrow}</span>
                  {project.featured && <Star className="h-4 w-4 text-accent fill-accent" />}
                </div>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold tracking-tight">{project.title}</span>
                  <div className="flex gap-1">
                    {project.liveUrl !== "#" && (
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && <Button size="icon" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>}
                  </div>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed max-w-2xl">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.featured && <div className="project-arrow"><ArrowUpRight className="h-5 w-5" /></div>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
