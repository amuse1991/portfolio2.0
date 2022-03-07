import Contact from "@components/contact/Contact";
import Layout from "@components/layout/Layout";
import { NextPage } from "next";

const ContectPage: NextPage = () => {
  return (
    <Layout className="contact">
      <Contact />
    </Layout>
  );
};

export default ContectPage;
