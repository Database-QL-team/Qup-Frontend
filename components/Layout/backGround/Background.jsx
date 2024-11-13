/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Circle, BackgroundContainer } from "./Background.styled";

function Background() {
  const circles = [
    { x: -20, y: -10, duration: 4 }, // 왼쪽 위
    { x: 80, y: 30, duration: 11 }, // 오른쪽 가운데
    { x: 0, y: 70, duration: 8 }, // 왼쪽 아래
  ];

  return (
    <BackgroundContainer>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          x={circle.x}
          y={circle.y}
          duration={circle.duration}
        />
      ))}
    </BackgroundContainer>
  );
}

export default Background;
