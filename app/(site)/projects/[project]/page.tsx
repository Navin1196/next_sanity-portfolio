import { getProject } from "@/sanity/sanity-utils";
// import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type props = {
  params: { project: string };
};

export default async function Project({ params }: props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <Link href="/" title="view project" target="_blank">
          view projects
        </Link>
      </header>

      {/* content is here */}
      <div className=" mt-[50px]">
        <div className="text-center gap-4">{project.title2}</div>
        {/* images is here */}
        <Image
          className="mt-5 ml-40"
          src={project.image}
          alt={project.title}
          width={420}
          height={400}
        />
      </div>
    </div>
  );
}
