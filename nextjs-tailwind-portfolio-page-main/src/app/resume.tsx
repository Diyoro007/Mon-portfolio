"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faFigma, faJs, faLaravel, faLinux, faNodeJs, faPhp, faPython, faReact, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons'
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const icons = [
  { icon: faLinux },
  { icon: faReact },
  { icon: faPhp },
  { icon: faVuejs },
  { icon: faJs },
  { icon: faLaravel },
  { icon: faDatabase },
  { icon: faDocker },
  { icon: faPython },
  { icon: faWordpress },
  { icon: faFigma },
  { icon: faNodeJs },
];

export function Resume() {

  const handleClick = () => {
    window.open('/Ingénieur des matériaux éco-responsables.pdf')
  }
  return (
    <section className="bg-[#F9F9F9] px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h2 color="blue-gray">
            A propos de moi
          </h2>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
          Passionné par le développement web et mobile, je suis un développeur full-stack avec une solide formation en technologies front-end et back-end. Diplômé en [mentionne ton parcours ou ta formation], j’ai acquis des compétences variées, allant de la création d’interfaces utilisateurs réactives en React et Vue.js à la conception de systèmes backend robustes avec Node.js et NestJS.
          </Typography>
          <Button
            onClick={handleClick}
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            Télécharger le cv
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>

        <div className="col-span-1 grid grid-cols-4 gap-4 gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
      {icons.map(({ icon }, index) => (
        <div
          key={index}
          className="h-12 w-12 bg-[#212121] shrink-0 flex items-center justify-center shadow-lg rounded-lg transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={icon} size="2x" color="white" />
        </div>
      ))}
    </div>

      </div>
    </section>
  );
}

export default Resume;
