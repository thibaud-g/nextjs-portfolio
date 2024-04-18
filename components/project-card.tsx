"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

interface ProjectCardProps {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  WIP?: boolean;
  stack?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
  WIP,
  stack,
}) => {
  return (
    <Card className="backdrop-blur-xl ">
      <div className="aspect-card overflow-hidden rounded-lg relative">
        {WIP && (
          <div className="absolute h-8 w-full z-50 bg-black opacity-40 bottom-10 flex items-center justify-center">
            <p className="text-white text-lg font-semibold text-center font-mono">
              Work In Progress
            </p>
          </div>
        )}
        <CldImage
          alt="Project thumbnail"
          className="aspect object-top hover:scale-105 transition-transform z-10"
          height={250}
          src={image ? image : "/image.png"}
          style={{
            aspectRatio: "400/250",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <CardContent className="p-4">
        <div>
          {stack && (
            <div className="flex flex-wrap gap-2 mb-4 flex-row-reverse">
              {stack.map((tech) => (
                <Badge variant={"secondary"} key={tech} className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm/relaxed">
          {description
            ? description
            : "A CMS for e-commerce make completly with NextJS and using PlanetScale as database."}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex justify-center">
        <Link
          className="text-sm font-medium inline-flex items-center"
          href={link ? link : "#"}
          target="_blank"
        >
          <Button>
            View Project <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
export default ProjectCard;
