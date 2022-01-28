import Header from "@components/layout/Header";
import palette from "@styles/palette";
import styled from "styled-components";
import Footer from "./Footer";

type TLayoutProps = {
  children: React.ReactNode;
};

const Main = styled.main`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  min-height: 100vh;
`;

const Layout: React.FC<TLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
