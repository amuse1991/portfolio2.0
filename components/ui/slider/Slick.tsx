import React, { useMemo } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TSlickProps {
  children: React.ReactNode;
  className?: string;
  settings?: Settings;
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Slick: React.FC<TSlickProps> = ({ children, className, settings }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const slickSettings = { ...defaultSettings, ...settings };
  return (
    <Container>
      <Slider {...slickSettings}>{children}</Slider>
    </Container>
  );
};

export default Slick;
