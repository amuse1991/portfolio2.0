import Post from "@components/blog/Post";
import ProjectPost from "@components/project/ProjectPost";
import { getMDPost, markdownToHtml } from "@lib/markdown";
import { TPost } from "@store/modules/post/post.types";
import { wrapper } from "@store/store";
import palette from "@styles/palette";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
`;

const dummyData = {
  title: "TEST TITLE"
};

type TPostPageProps = {
  content: string;
};

const PostPage: React.FC<TPostPageProps> = ({ content }) => {
  return (
    <Container>
      <article>
        <Head>
          <title>{dummyData.title}</title>
        </Head>
        <div dangerouslySetInnerHTML={{ __html: content }} />
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
        return {
          props: {
            content
          }
        };
      } catch (err) {
        console.error(err);
        return {
          props: { content: "" }
        };
      }
    }
);
