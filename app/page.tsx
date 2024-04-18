import BentoSkills from "@/components/bento-skills";
import { ModeToggle } from "@/components/mode-toggle";
import ProjectCarousel from "@/components/project-carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-48 px-4 sm:px-12 md:px-20 lg:px-28 2xl:px-80 flex flex-col gap-48">
      <section>
        <div className="">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-700 via-green-300 to-indigo-300 inline-block text-transparent bg-clip-text">
                Thibaud
              </span>
            </h1>
            <h2 className="italic text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl mt-2">
              Developer and{" "}
              <span className="text-blue-700 font-normal">Typescript</span>{" "}
              Enthutiast
            </h2>
            <p className="mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m a passionate Developer with a love for beautifully
              designed user interfaces, projects architecture and Typescript.
              I&apos;m trying to have every minutes of my days to learn new
              technologies and to improve my skills
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="sm:text-3xl md:text-4xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Here are some of the projects I&apos;ve worked on.
        </p>
        <div className="py-10 flex flex-col items-center">
          <ProjectCarousel />
        </div>
      </section>
      <section className="">
        <h1 className="sm:text-3xl md:text-4xl font-bold">
          How can I help you ?
        </h1>
        <p className="mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Here is the list of all the technologies and tools I&apos;m using
          everyday
        </p>
        <BentoSkills className="py-10" />
      </section>
      <section>
        <h1 className="sm:text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          You can reach me at{" "}
          <a className="text-blue-700 font-medium" href="mailto:">
            thibaud.gippet@gmail.com
          </a>{" "}
          or on my Linkedin
        </p>
      </section>
    </main>
  );
}
