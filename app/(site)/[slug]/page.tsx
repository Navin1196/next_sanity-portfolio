import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type props = {
  params: { slug: "string" };
};

export default async function page({ params }: props) {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-center">
        {page.title}
      </h1>
      <h3 className="text-center">{page.title2}</h3>
      <div className="flex ml-[50px]">
        <div className="text-lg text-blue-300 mt-10">
          <PortableText value={page.content} />
        </div>
        {page.image && (
          <Image
            className="object-cover rounded-lg pl-[30px] mt-5"
            src={page.image}
            alt={page.title}
            width={350}
            height={150}
          />
        )}
        <div className="text-lg text-blue-300 mt-10 ml-[250px]">
          <PortableText value={page.content2} />
        </div>
      </div>
    </div>
  );
}
