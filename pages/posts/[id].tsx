import PostBody from "@components/blog/PostBody";
import PostHeader from "@components/blog/PostHeader";
import ProjectPost from "@components/project/ProjectPost";
import { getMDPost, markdownToHtml, TFrontmatter } from "@lib/markdown";
import { TPost } from "@store/modules/post/post.types";
import { wrapper } from "@store/store";
import palette from "@styles/palette";
import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  padding: 2rem;
`;

const dummyData = {
  title: "TEST TITLE"
};

type TPostPageProps = {
  content: string;
  frontMatter?: TFrontmatter;
};

const PostPage: React.FC<TPostPageProps> = ({ content, frontMatter }) => {
  console.log("frontMatter", frontMatter);
  return (
    <Container>
      <Head>
        {frontMatter && frontMatter.title && <title>{frontMatter.title}</title>}
      </Head>
      <article>
        <PostHeader title={frontMatter?.title} dateString={frontMatter?.date} />
        <PostBody content={content} />
      </article>
    </Container>
  );
};

export default PostPage;

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req, res, query, ...etc }) => {
      try {
        const { documentPath } = query;
        const filePath = typeof documentPath === "string" ? documentPath : "";
        const realPath = filePath.replaceAll("%2F", "/");

        const mdPost = await getMDPost(realPath);
        const content = await markdownToHtml(mdPost?.content || "");
        const frontMatter = mdPost?.data;
        return {
          props: {
            content,
            frontMatter
          }
        };
      } catch (err) {
        console.error(err);
        return {
          props: { content: "", frontMatter: {} }
        };
      }
    }
);
