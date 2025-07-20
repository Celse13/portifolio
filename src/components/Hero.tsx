import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/profile-picture.jpg";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-primary h-48 w-36 rounded-2xl p-1 md:h-56 md:w-40">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={profileImage}
                  alt="Celse Honore RUGIRA - Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-1xl mb-2 font-bold text-foreground md:text-2xl">
              Celse Honore RUGIRA
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Passionate about building exceptional digital experiences and
              delivering innovative solutions for businesses and individuals. I
              specialize in full-stack development, blockchain applications, and
              custom software solutions that drive growth and solve real-world
              problems. Whether you need a modern website, mobile app, or
              blockchain integration, I&apos;m here to turn your vision into
              reality.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Link
                  href="https://github.com/celse13"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Link
                  href="https://www.linkedin.com/in/celse-honore-rugira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="mailto:rugiracelse13@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
