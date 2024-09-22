import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  lien: string;
}

export function ProjectCard({ img, title, desc, lien }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false} className="">
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          <span className="line-clamp-3">{desc}</span>
        </Typography>
        {/* <Link href={lien} target="_blank"> */}
        <a href={lien} target="_blank">
          <Button color="gray" size="sm">
            see details
          </Button></a>
        {/* </Link> */}
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
