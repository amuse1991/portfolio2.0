import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import styled from "styled-components";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <TrailsText key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </TrailsText>
      ))}
    </div>
  );
};

const TrailsText = styled(a.div)`
  position: relative;
  width: 100%;
  height: 130px;
  line-height: 130px;
  color: black;
  font-size: 6em;
  font-weight: 800;
  letter-spacing: -0.05em;
  will-change: transform, opacity;
  overflow: hidden;
  & > div {
    padding-right: 0.05em;
    overflow: hidden;
  }
`;

export default Trail;
