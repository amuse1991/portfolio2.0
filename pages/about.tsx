import About from "@components/about/About";
import Layout from "@components/layout/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
