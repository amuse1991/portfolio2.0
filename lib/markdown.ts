import { remark } from "remark";
import html from "remark-html";

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getObjectFromS3, getObjectListFromS3 } from "./api/downloadS3";
import { delimiter } from "path/posix";

export type TFrontmatter = {
  title: string;
  category: string;
  date: string;
  slug: string;
};

export async function getMDPost(path: string) {
  try {
    const mdContent = await getObjectFromS3(path);
    return { ...matter(mdContent || "") };
  } catch (error) {
    console.error(error);
  }
}
export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
