import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./project-card";
import { supabaseClient } from "@/lib/supabase-client";

const ProjectCarousel = async () => {
  let { data: Project, error } = await supabaseClient
    .from("Project")
    .select("*");

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  console.log(Project);
  return (
    <Carousel opts={{ loop: true }} className="w-full mx-auto">
      <CarouselContent className="flex gap-4">
        {Project!.map((project) => (
          <CarouselItem key={project.id} className="lg:basis-1/3">
            <ProjectCard
              title={project.name}
              description={project.description}
              image={project.imageUrl}
              link={project.url}
              WIP={project.isWorkInProgress}
              stack={project.stack}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
