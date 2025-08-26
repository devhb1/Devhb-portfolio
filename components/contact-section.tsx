"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, X, Send } from "lucide-react"



export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields")
      return
    }

    // Create email content
    const subject = `Portfolio Contact: Message from ${formData.name}`
    const body = `Hi Harshit,

I'm reaching out through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`

    // Create Telegram message
    const telegramMessage = `Hi! I'm ${formData.name} (${formData.email}). ${formData.message}`

    // Option 1: Open email client (primary option)
    const mailtoLink = `mailto:b4harshit01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Option 2: Telegram link (backup option)
    const telegramLink = `https://t.me/harshitb01?text=${encodeURIComponent(telegramMessage)}`

    // Try to open email client first
    const emailWindow = window.open(mailtoLink, '_self')
    
    // If email doesn't work or user wants alternative, show options
    setTimeout(() => {
      const useAlternative = confirm(
        "Email client opened! If you prefer to message via Telegram instead, click OK."
      )
      
      if (useAlternative) {
        window.open(telegramLink, '_blank')
      }
    }, 1000)

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    })

    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full group" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Preparing..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
                <CardDescription>Follow me on social media for updates and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" asChild>
                    <a href="https://github.com/devhb1 " target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a href="https://x.com/harshitb01" target="_blank" rel="noopener noreferrer">
                      <X className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <p className="font-medium mb-4">b4harshit01@gmail.com</p>
                <p className="text-sm text-muted-foreground mb-2">Location</p>
                <p className="font-medium">India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
