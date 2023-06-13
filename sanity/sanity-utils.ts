import { project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { page } from "@/types/page";
import { home } from "@/types/home";

export async function getProjects(): Promise<project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
         _id,
         _createdAt,
         title,
         title2,
         "slug":slug.current,
         "image":image.asset->url,
         url,   
         content
    }`
  );
}

export async function getProject(slug: string): Promise<project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current==$slug][0]{
         _id,
         _createdAt,
           title,
           title2,
         "slug":slug.current,
         "image":image.asset->url,
         url,   
         content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
         _id,
         _createdAt,
         "slug":slug.current,
         title,
         title2,
         "image":image.asset->url,
          url,
          content,
          content2
    }`
  );
}

export async function getPage(slug: string): Promise<page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current==$slug][0]{
         _id,
         _createdAt,
         title,
         title2,
         "slug":slug.current,
          "image":image.asset->url,
          url,
         content,
         content2
           
         
    }`,
    { slug }
  );
}

export async function getHome(): Promise<home[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"]{
         _id,
         _createdAt,
         title,
         title2,
         "slug":slug.current,
         "image":image.asset->url,
         url,   
         content
    }`
  );
}
