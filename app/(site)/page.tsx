import { getProjects } from "@/sanity/sanity-utils";
// import project from "@/sanity/schemas/project-schema";
// import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  // const pages = await getPages();
  // console.log("get1", projects[0]?.image, "get2", projects[0]?.image2);
  // console.log("get2", projects[1]);

  return (
    <div className="h-[100%] w-[650px]">
      <div className="mt-5 ml-[120px] grid grid-row-3 gap-8">
        <h1 className="text-center bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
          my projects
        </h1>
        {projects.map((project) => (
          <>
            <Link
              href={`/projects/${project.slug}`}
              className="border border-gray-500 rounded-lg hover:scale-105"
              key={project._id}
            >
              <div className=" text-center mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent ">
                {project.title}
              </div>
              <div className="text-center mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent ">
                {project.title2}
              </div>
              {project.image && (
                <Image
                  className="object-cover rounded-lg mt-5 pl-[60px]"
                  src={project.image}
                  alt={project.title}
                  width={450}
                  height={300}
                />
              )}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
