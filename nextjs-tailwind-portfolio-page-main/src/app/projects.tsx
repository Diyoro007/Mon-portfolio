"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/Trellotech.png",
    title: "TrelloTech",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    lien: 'https://github.com/EpitechCodingAcademyPromo2024/C-COD-290-ABJ-2-1-epicture-aristide.adouko'
  },
  {
    img: "/image/Showtime.png",
    title: "ShowTime",
    desc: "Site de réservation de billet réalisé en Nest.js où l'utilisateur doit pouvoir sélectionner les concerts auxquels il souhaite assister. Il peut effectuer une recherche, avoir une liste de souhaits et réserver des billets. La deuxième partie est le panel d'administration, l'administrateur peut programmer les concerts et avoir des retours sur les réservations déjà effectuées.",
    lien: 'https://github.com/EpitechCodingAcademyPromo2024/C-COD-250-ABJ-2-1-showtime-prince.diyoro-bi'
  },
  {
    img: "/image/RottenTomatoes.png",
    title: "My rotten tomato",
    desc: "Développer en Next.js My rotten tomato est site de présentation et de critique de films. Le but est d'offrir une partie permettant aux utilisateurs de voir de nouveaux films avec des descriptions, des notes et l'avis du public. La deuxième partie sera destinée à l'administrateur du site. Afin qu'il ait un visuel sur les critiques et avis donnés aux films, il aura également la possibilité d'ajouter de nouveaux films.",
  },
  {
    img: "/image/Post It.png",
    title: "Post It",
    desc: "Site web de post it réalisé avec vue.js.",
  },
  {
    img: "/image/FreeAds.png",
    title: "FreeAds",
    desc: "Site Web d'annonces de publication gratuite avec Laravel.",
  },
  // {
  //   img: "/image/blog2.svg",
  //   title: "Landing Page Development",
  //   desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  // },
  // {
  //   img: "/image/blog3.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog4.svg",
  //   title: "E-commerce development",
  //   desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  // },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Mes Projets
        </Typography>
        {/* <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
