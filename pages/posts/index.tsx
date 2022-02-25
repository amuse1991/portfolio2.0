import Blog from "@components/blog/Blog";
import Layout from "@components/layout/Layout";
import { NextPage } from "next";

const PostsPage: NextPage = () => {
  return (
    <Layout className="blog" pageTitle="blog">
      <Blog />
    </Layout>
  );
};

export default PostsPage;
