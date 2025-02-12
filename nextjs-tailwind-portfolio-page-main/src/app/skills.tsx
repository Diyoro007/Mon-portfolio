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
];

export function Skills() {
  return (
    <section className="px-8 pt-5">
      <div className="container mx-auto mb-20 text-center">
        <h2 color="blue-gray" className="mb-2 font-bold uppercase text-xl">
          Mes compétences
        </h2>
        <h1 color="blue-gray" className="mb-2 text-lg">
          Ce que je fais
        </h1>
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
