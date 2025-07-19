import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import NFTMarketplaceProfile from "../../public/nft-marketplace.png";
import GitLinkProfile from "../../public/Git-link.jpeg";
import AirBnBProfile from "../../public/Airbnb-Logo.wine.png";
import SchedulrProfile from "../../public/Schedulr_profile.png";

const projects = [
  {
    title: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace built on Chromia blockchain technology. This platform allows users to mint, buy, and sell NFTs using TCHR tokens and Chromia test tokens. Features include user authentication, wallet integration, and secure smart contract interactions for seamless NFT trading.",
    tech: "Rell (Backend), Next.js, React, TypeScript, Chromia Blockchain, TCHR Tokens, and Tailwind CSS",
    image: NFTMarketplaceProfile,
    url: "https://nft-marketplace-lib.vercel.app/",
  },
  {
    title: "Schedulr",
    description:
      "Schedulr is a platform that connects users with various service providers. Users can book appointments, view service details, and manage their bookings. Service providers can list their services and manage bookings.",
    tech: "React, Node.js, Express.js, MongoDB, Socket.io, and integrated payment processing",
    image: SchedulrProfile,
    url: "https://github.com/Celse13/Online-Appointment-Booking-System",
  },

  {
    title: "Git-Link",
    description:
      "Provide users GitHub Statistics and information about their repositories. A comprehensive tool that helps developers track their GitHub activity, repository insights, and contribution patterns.",
    tech: "React, Node.js, GitHub API, Chart.js, and Tailwind CSS",
    image: GitLinkProfile,
    url: "https://github.com/Celse13/git-link",
  },
  {
    title: "AirBnB Clone",
    description:
      "This is a clone of the AirBnb website. It allows users to create account, login, and book a place to stay. Full-featured accommodation booking platform with user authentication and booking management.",
    tech: "Python, Flask, MySQL, HTML/CSS, JavaScript, and RESTful APIs",
    image: AirBnBProfile,
    url: "https://github.com/DruSadeMumba/AirBnB_clone_v4",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-2xl font-bold text-foreground">
          Notable Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Project Image */}
                <div className="flex-shrink-0">
                  <div className="relative h-32 w-48 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="mb-3 flex cursor-pointer items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                      <ExternalLink className="h-4 w-4" />
                    </h3>
                  </Link>

                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Tech stack:</span>{" "}
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
