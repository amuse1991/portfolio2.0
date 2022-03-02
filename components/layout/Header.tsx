import palette from "@styles/palette";
import styled from "styled-components";

type THeaderProps = {
  title: string;
  overline?: string;
};

const Header: React.FC<THeaderProps> = ({ title, overline }) => {
  return (
    <Container>
      <Inner>
        {/* {overline && (
          <Overline>
            <span>{overline}</span>
            <Line />
          </Overline>
        )} */}
        <Title>{title}</Title>
      </Inner>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${palette.black_denim};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: ${palette.white_snow};
  margin-top: 0.3rem;
  margin-bottom: 5.4rem;
`;
const Overline = styled.span`
  display: flex;
  align-items: center;
  & > span {
    color: ${palette.blue_azure};
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.9rem;
    margin-right: 7px;
  }
`;
const Line = styled.div`
  display: inline-block;
  width: 5rem;
  height: 0.3rem;
  background: ${palette.blue_azure};
  border-radius: 5px;
`;

export default Header;
