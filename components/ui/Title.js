import styled from "styled-components";
import React, { useEffect, useState } from "react";

const TitleSectionContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 61%;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.slide-up {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 700px) {
    width: 90%;
    padding: 10px;
    margin-top: 30px;
  }
`;

const CenterText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  flex-grow: 1;
  font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Nanum Gothic", "Arial";
  color: #156827;

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

const Title = ({ sentence }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TitleSectionContainer className={isVisible ? "slide-up" : ""}>
      <CenterText>{sentence}</CenterText>
    </TitleSectionContainer>
  );
};

export default Title;
