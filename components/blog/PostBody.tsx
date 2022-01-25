import palette from "@styles/palette";
import styled from "styled-components";

const Container = styled.div`
  & > * {
    line-height: 1.7;
  }

  & > h1 {
    font-size: 1.7em;
    margin: 30px 0 15px;
    font-weight: bold;
  }

  & > p > img {
    max-width: 100% !important;
    margin: 20px auto;
  }

  & > p > a {
    color: ${palette.blue_azure};
  }

  & > blockquote {
    padding: 2em;
    border: 1px solid ${palette.white_snow};
    margin: 20px auto;
  }
`;

const PostBody: React.FC<{ content: string }> = ({ content }) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostBody;
