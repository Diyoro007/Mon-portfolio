"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Backend & Frontend Web Development:",
    children:
    "Conception et développement d'applications web sur mesure pour les entreprises et les services"
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
    "Création d'applications mobiles pour les plateformes Android et iOS, adaptées aux besoins spécifiques des utilisateurs."
  },
  // {
  //   icon: SwatchIcon,
  //   title: "Technology Stack",
  //   children:
  //     "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  // },
  // {
  //   icon: HashtagIcon,
  //   title: " Web Optimization",
  //   children:
  //     "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  // },
  // {
  //   icon: EyeIcon,
  //   title: "User-Centric Design",
  //   children:
  //     "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  // },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  // },
];

export function Skills() {
  return (
    <section className="px-8 pt-5">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Mes compétences
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-2">
          Ce que je fais
        </Typography>
        {/* <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
