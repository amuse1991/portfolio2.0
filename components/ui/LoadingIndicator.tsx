import { spin } from "@styles/keyframes";
import styled from "styled-components";

const LoadingSpineCircle = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const LoadingIndicator: React.FC = () => <LoadingSpineCircle />;

export default LoadingIndicator;
