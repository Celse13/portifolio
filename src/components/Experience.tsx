// import { Card, CardContent } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";

// const experiences = [
//   {
//     title: "Senior Frontend Developer",
//     company: "Tech Innovation Inc.",
//     period: "2022 - Present",
//     description: "Lead frontend development for enterprise applications serving 100k+ users. Implemented design systems and mentored junior developers.",
//     achievements: [
//       "Reduced page load times by 40% through performance optimization",
//       "Led migration from legacy codebase to modern React architecture",
//       "Established code review processes and development standards"
//     ],
//     technologies: ["React", "TypeScript", "Next.js", "GraphQL"]
//   },
//   {
//     title: "Full Stack Developer",
//     company: "Digital Solutions Ltd.",
//     period: "2020 - 2022",
//     description: "Developed and maintained multiple client projects ranging from e-commerce platforms to content management systems.",
//     achievements: [
//       "Built responsive web applications for 15+ clients",
//       "Integrated third-party APIs and payment gateways",
//       "Collaborated with design teams to implement pixel-perfect UIs"
//     ],
//     technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"]
//   },
//   {
//     title: "Junior Developer",
//     company: "StartUp Ventures",
//     period: "2019 - 2020",
//     description: "Started career building features for a fast-growing SaaS platform. Gained experience in agile development and modern web technologies.",
//     achievements: [
//       "Contributed to 50+ feature releases",
//       "Improved application test coverage from 60% to 85%",
//       "Participated in code reviews and pair programming sessions"
//     ],
//     technologies: ["JavaScript", "React", "Express", "PostgreSQL"]
//   }
// ];

// export const Experience = () => {
//   return (
//     <section className="py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-12 text-foreground">
//           Professional Experience
//         </h2>

//         <div className="space-y-8">
//           {experiences.map((exp) => (
//             <div key={exp.title} className="border-b border-border pb-8 last:border-b-0">
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
//                 <div>
//                   <h3 className="text-lg font-semibold text-foreground mb-1">
//                     {exp.title}
//                   </h3>
//                   <p className="text-primary font-medium">{exp.company}</p>
//                 </div>
//                 <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
//                   {exp.period}
//                 </span>
//               </div>

//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 {exp.description}
//               </p>

//               <div className="space-y-3">
//                 <div>
//                   <h4 className="font-medium mb-2 text-foreground text-sm">Key Achievements:</h4>
//                   <ul className="space-y-1">
//                     {exp.achievements.map((achievement, i) => (
//                       <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
//                         <span className="text-primary">•</span>
//                         {achievement}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <span className="font-medium text-foreground text-sm">Technologies: </span>
//                   <span className="text-sm text-muted-foreground">
//                     {exp.technologies.join(", ")}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
