"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Profile from "../../public/Profile_picture.png";
import Git_Link_Profile from "../../public/Git-link.jpeg";
import AirBnB_Profile from "../../public/Airbnb-Logo.wine.svg";
import Schedulr_Profile from "../../public/Schedulr_profile.png";
import logo from "../../public/FB_IMG_16542860915609624.jpg";

import { useState } from "react";

export default function Page() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="2xl:w-xl xl:w-lg bg-light sticky top-0 z-40 mx-auto h-16 w-full flex-row items-center justify-between border px-5 md:flex md:w-[93%] md:rounded-b-lg md:px-8 md:py-3">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-6">
          <Link className="flex items-center" href="#">
            <span className="sr-only">Celse Honore RUGIRA</span>
            <span className="text-xl font-bold text-blue-600">
              Celse Honore RUGIRA
            </span>
          </Link>

          <button
            className="text-gray-800 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!IsMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <nav
            className={`${
              IsMenuOpen ? "block" : "hidden"
            } items-center gap-8 md:flex`}
          >
            <Link
              className="text-sm font-medium text-gray-800 hover:text-blue-600"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-gray-800 hover:text-blue-600"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm font-medium text-gray-800 hover:text-blue-600"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              <div className="flex flex-col items-center space-y-4 text-center md:w-1/2 md:items-start md:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    The Business-code maestro in software development
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                    I'm Celse, a passionate software developer with a knack for
                    turning ideas into impactful solutions. I specialize in
                    building websites, crafting mobile apps, and creating
                    seamless software systems.
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
              <div className="flex justify-center md:w-1/2">
                <div className="relative h-80 w-64 overflow-hidden rounded-full border-primary shadow-lg">
                  <Image
                    src={Profile}
                    alt="Your Name"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  I'm a full-stack developer with a passion for creating
                  beautiful, functional, and user-friendly websites. With
                  expertise in React, Next.js, and Node.js, I bring ideas to
                  life through code.
                </p>
              </div>
              <div className="flex justify-center md:w-1/2">
                <Card className="w-full max-w-md">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-2xl font-bold">Skills</h3>
                    <ul className="list-inside list-disc space-y-2 text-gray-500 dark:text-gray-400">
                      <li>React & Next.js</li>
                      <li>Node.js & Express</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>RESTful APIs</li>
                      <li>Database Design</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="https://github.com/Celse13/git-link"
                passHref
                legacyBehavior
              >
                <a
                  target="_blank"
                  className="flex transform flex-col transition-transform hover:scale-105"
                >
                  <Card className="flex flex-grow flex-col">
                    <CardContent className="flex flex-grow flex-col p-4">
                      <Image
                        alt="Project 1"
                        className="mb-4 aspect-video w-full rounded-lg object-cover"
                        height="225"
                        src={Git_Link_Profile}
                        width="400"
                      />
                      <h3 className="mb-2 text-xl font-bold">Git-Link</h3>
                      <p className="flex-grow text-gray-500 dark:text-gray-400">
                        Provide users GitHub Statistics and information about
                        their repositories.
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Link>
              <Link
                href="https://github.com/DruSadeMumba/AirBnB_clone_v4"
                passHref
                legacyBehavior
              >
                <a
                  target="_blank"
                  className="flex transform flex-col transition-transform hover:scale-105"
                >
                  <Card className="flex flex-grow flex-col">
                    <CardContent className="flex flex-grow flex-col p-4">
                      <Image
                        alt="Project 2"
                        className="mb-4 aspect-video w-full rounded-lg object-cover"
                        height="225"
                        src={AirBnB_Profile}
                        width="400"
                      />
                      <h3 className="mb-2 text-xl font-bold">AirBnB Clone</h3>
                      <p className="flex-grow text-gray-500 dark:text-gray-400">
                        This is a clone of the AirBnb website. It allows users
                        to create account, login, and book a place to stay.
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Link>
              <Link
                href="https://github.com/Celse13/Online-Appointment-Booking-System"
                passHref
                legacyBehavior
              >
                <a
                  target="_blank"
                  className="flex transform flex-col transition-transform hover:scale-105"
                >
                  <Card className="flex flex-grow flex-col">
                    <CardContent className="flex flex-grow flex-col p-4">
                      <Image
                        alt="Project 3"
                        className="mb-4 aspect-video w-full rounded-lg object-cover"
                        height="225"
                        src={Schedulr_Profile}
                        width="400"
                      />
                      <h3 className="mb-2 text-xl font-bold">Schedulr</h3>
                      <p className="flex-grow text-gray-500 dark:text-gray-400">
                        Schedulr is a platform that connects users with various
                        service providers. Users can book appointments, view
                        service details, and manage their bookings. Service
                        providers can list their services and manage bookings.
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon">
                  <Link href="https://github.com/celse13">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="https://www.linkedin.com/in/celse-honore-rugira/">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="mailto:rugiracelse13@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6 lg:px-8">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Celse Honore RUGIRA. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
