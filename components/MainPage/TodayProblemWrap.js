import styled from "styled-components";
import TodayProblem from "./TodayProblem";
import React, { useEffect, useState } from "react";

const WrapContainer = styled.div`
  width: 600px;
  padding: 20px 40px 40px 40px;
  margin: 30px;
  background: rgba(47, 129, 65, 0.1);
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  text-align: center;

  @media (max-width: 700px) {
    width: 300px;
    padding: 20px;
    margin: 10px;
  }
`;

const MainTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 20px;
  margin-top: 20px;
  color: green;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const TodayProblemWrap = ({ rawData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 데이터가 유효한지
  if (!rawData || rawData.length === 0) {
    return <h3>No data available</h3>;
  }

  const groupByTier = (data) => {
    const groups = {
      플래티넘: [],
      골드: [],
      실버: [],
      브론즈: [],
    };

    data.forEach((problem) => {
      if (problem.tier >= 1 && problem.tier <= 5) {
        groups["브론즈"].push(problem);
      } else if (problem.tier >= 6 && problem.tier <= 10) {
        groups["실버"].push(problem);
      } else if (problem.tier >= 11 && problem.tier <= 15) {
        groups["골드"].push(problem);
      } else if (problem.tier >= 16 && problem.tier <= 20) {
        groups["플래티넘"].push(problem);
      }
    });

    Object.keys(groups).forEach((key) => {
      groups[key] = groups[key].slice(0, 5);
    });

    return groups;
  };

  const groupedData = groupByTier(rawData);

  return (
    <div
      className={isVisible ? "slide-up" : ""}
      style={{
        marginTop: "30px",
        minWidth: "30%",
        alignItems: "center",

        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "visibility 0s, opacity 0.5s linear",
      }}
    >
      <MainTitle>- 오늘의 문제 -</MainTitle>
      <WrapContainer>
        {Object.entries(groupedData).map(([group, problems]) => (
          <TodayProblem key={group} title={group} problems={problems} />
        ))}
      </WrapContainer>
    </div>
  );
};

export default TodayProblemWrap;
