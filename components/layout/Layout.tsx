import palette from "@styles/palette";
import styled from "styled-components";
import Footer from "./Footer";

type TLayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Main = styled.main`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  min-height: 100vh;
  width: 100vw;
`;

const PageTitle = styled.h1`
  width: 100%;
  padding: 6rem 0;
  height: 2rem;
  text-align: center;
  font-size: 1.5rem;
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  text-transform: uppercase;
`;

const Layout: React.FC<TLayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
