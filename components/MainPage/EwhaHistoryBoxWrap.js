import styled from "@emotion/styled";
import RankingBox from "./RankingBox";
import React, { useEffect, useState } from "react";

const RankingBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  transition: visibility 0s, opacity 0.5s linear;
`;

const EwhaHistoryBoxWrap = ({ ewhaHistoryBoxData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // 어제의 데이터 가져오기
  const yesterdayData = ewhaHistoryBoxData?.[ewhaHistoryBoxData.length - 2];
  const todayData = ewhaHistoryBoxData?.[ewhaHistoryBoxData.length - 1];

  // 어제 순위와 어제 푼 문제 계산
  const YesterdayrankingNum = yesterdayData?.rating ?? "데이터 없음";
  const YesterdaySolvedNum =
    todayData && yesterdayData
      ? todayData.solvedNum - yesterdayData.solvedNum
      : "데이터 없음";

  console.log(YesterdaySolvedNum);

  return (
    <RankingBoxContainer
      className={isVisible ? "slide-up" : ""}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <RankingBox
        title="어제 순위"
        rankingNum={`${YesterdayrankingNum}위`}
      />
      <RankingBox
        title="어제 푼 문제"
        rankingNum={`${YesterdaySolvedNum}개`}
      />
    </RankingBoxContainer>
  );
};

export default EwhaHistoryBoxWrap;