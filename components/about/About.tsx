import palette from "@styles/palette";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import styled, { css } from "styled-components";
import Introduce from "./Introduce";
import Attitude from "./Attitude";
import Resume from "./resume/Resume";
import Skills from "./Skills";
import viewports from "../../lib/viewports";
import useModal from "@hooks/store/modal/useModal";
import { useInView } from "react-intersection-observer";
import { useGesture, useWheel } from "react-use-gesture";
import { nanoid } from "@reduxjs/toolkit";
import useMeasure from "react-use-measure";
import { useSpring, animated, to } from "@react-spring/web";

const SpringContainer = styled(animated.div)`
  /* display: flex; */
  background: ${palette.black_denim};
`;

const SpringSection = styled(animated.div)`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;

  @media only screen and (max-width: ${viewports.tablet.width}) {
    &.sub {
      display: none;
    }
    width: 100%;
  }
`;

const Divider = styled.div`
  height: 3px;
  background: white;
  margin-top: auto;
`;

type TAboutProps = {};

const About: React.FC<TAboutProps> = () => {
  const { openModal } = useModal();
  const [isScrollable, setIsScrollable] = useState(false);
  const toggleChangeSection = () => {
    openModal({ type: "about/Career", options: { withHeader: true } });
  };

  const { ref: d1Ref, inView: d1InView } = useInView({
    threshold: 0
  });
  const { ref: d2Ref, inView: d2InView } = useInView({
    threshold: 0
  });
  const [measureRef, { width, height }] = useMeasure();
  const domTarget = useRef(null);
  const [{ x, y }, wheelApi] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    d1InView && setIsScrollable(true);
  }, [d1InView, d2InView]);

  // useGesture(
  //   {
  //     onWheel: ({ event, offset: [, offsetY], movement, down }) => {
  //       console.log(down);
  //       if (offsetY === width) {
  //         setIsScrollable(false);
  //       }
  //       return wheelApi.start({
  //         x: -offsetY
  //       });
  //     }
  //   },
  //   {
  //     domTarget,
  //     eventOptions: { passive: false },
  //     wheel: {
  //       bounds: { top: 0, bottom: width },
  //       enabled: isScrollable,
  //       axis: "y"
  //     }
  //   }
  // );

  return (
    <SpringContainer role={"about"} ref={domTarget} style={{ x, y }}>
      <SpringSection>
        <Introduce onClickToggleSection={toggleChangeSection} />
        {/* <Attitude /> */}
        <Skills />
      </SpringSection>
      <SpringSection ref={measureRef} className="sub">
        <Resume />
      </SpringSection>
    </SpringContainer>
  );
};

export default About;
