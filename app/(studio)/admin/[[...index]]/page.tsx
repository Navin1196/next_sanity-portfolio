"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

const Adminpage = () => {
  return <NextStudio config={config} />;
};
export default Adminpage;
