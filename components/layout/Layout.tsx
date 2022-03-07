import palette from "@styles/palette";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

type TLayoutProps = {
  children: React.ReactNode;
  className?: string;
  pageTitle?: string;
  overline?: string;
};

const Main = styled.main`
  background: ${palette.black_denim};
  color: ${palette.white_snow};
  min-height: 70vh;
  width: 100vw;
`;

const Layout: React.FC<TLayoutProps> = ({
  children,
  pageTitle,
  className,
  overline
}) => {
  return (
    <div className={className || ""}>
      {pageTitle && <Header title={pageTitle} overline={overline} />}
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
