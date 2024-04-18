import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNextdotjs, SiPostgresql, SiNestjs } from "react-icons/si";

interface BentoSkillsProps {
  className?: string;
}

const BentoSkills: React.FC<BentoSkillsProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 md:grid-row-2 md:gap-8 grid-cols-1 gap-6",
        className
      )}
    >
      <Card>
        <CardHeader className=" flex justify-center items-center">
          <FaReact size={100} className="text-cyan-400" />
        </CardHeader>
        <CardContent className="py-6">
          <CardTitle className="text-xl mb-4 text-center">React</CardTitle>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex justify-center items-center">
          <BiLogoTypescript size={100} className="text-blue-600" />
        </CardHeader>
        <CardContent className="py-6">
          <CardTitle className="text-xl mb-4 text-center">Typescript</CardTitle>
        </CardContent>
      </Card>
      <Card className="row-span-2">
        <CardHeader className="flex justify-center items-center">
          <SiNextdotjs size={100} className="" />
        </CardHeader>
        <CardContent className="py-6">
          <CardTitle className="text-xl mb-4 text-center">NextJS</CardTitle>
        </CardContent>
        <CardHeader className="flex justify-center items-center">
          <SiNestjs size={100} className="" />
        </CardHeader>
        <CardContent className="py-6">
          <CardTitle className="text-xl mb-4 text-center">NestJS</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex justify-center items-center">
          <SiTailwindcss size={100} className="text-cyan-500" />
        </CardHeader>
        <CardContent className="py-6">
          <CardTitle className="text-xl mb-4 text-center">
            TailwindCSS
          </CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex justify-center items-center flex-row gap-10">
          <SiMysql size={100} className="text-blue-500 inline" />
          <BiLogoMongodb size={100} className="text-green-500 inline" />
          <SiPostgresql size={100} className=" inline" />
        </CardHeader>
        <CardContent className="py-6">
          <CardTitle className="text-xl mb-4 text-center">
            MySQL | MongoDB | PostgreSQL
          </CardTitle>
        </CardContent>
      </Card>
    </div>
  );
};

export default BentoSkills;
