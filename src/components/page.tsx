'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Your Name</span>
          <span className="font-bold text-xl">YN</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to My Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I&apos;m a passionate developer creating amazing web experiences.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            I&apos;m a full-stack developer with a passion for creating beautiful, functional, and user-friendly websites. With
              expertise in React, Next.js, and Node.js, I bring ideas to life through code.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Project 1"
                    className="rounded-lg object-cover w-full aspect-video mb-4"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <h3 className="text-xl font-bold mb-2">Project 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 1.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Project 2"
                    className="rounded-lg object-cover w-full aspect-video mb-4"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <h3 className="text-xl font-bold mb-2">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 2.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Project 3"
                    className="rounded-lg object-cover w-full aspect-video mb-4"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <h3 className="text-xl font-bold mb-2">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of Project 3.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon">
                  <Link href="https://github.com/yourusername">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="https://linkedin.com/in/yourusername">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="mailto:your.email@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Your Name. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}