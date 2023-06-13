import Link from "next/link";
import "../globals.css";
// import { Inter } from "next/font/google";
import { getHome, getPages } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my personal site",
  description: "Generated by next + sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // all our pages here
  const pages = await getPages();
  const Home = await getHome();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 bg-slate-50">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            N_K
          </Link>
          <div className="flex items-center gap-5 text-sm">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <div className="mt-[50px]">
          {Home.map((home) => (
            <>
              <div className=" text-center mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent ">
                {home.title}
              </div>
              <div className="text-center mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent ">
                {home.title2}
              </div>
              {home.image && (
                <Image
                  className="object-cover rounded-lg mt-5 ml-[200px] hover:scale-105"
                  src={home.image}
                  alt={home.title}
                  width={350}
                  height={300}
                />
              )}
              <div className="text-[20px] mt-8 text-blue-400">
                <PortableText value={home.content} />
              </div>
            </>
          ))}
        </div>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
