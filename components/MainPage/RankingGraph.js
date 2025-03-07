import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";



const RankingGraph = ({ ewhaHistoryData = [] }) => {
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 400);
        return () => clearTimeout(timer);
      }, []);

  // 데이터가 없는 경우 안전하게 처리
  if (!ewhaHistoryData || ewhaHistoryData.length === 0) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  // 데이터 가공: 날짜 형식을 짧게 변경
  const formattedData = ewhaHistoryData.map((item) => ({
    ...item,
    date: item.date.slice(5), // 날짜 형식을 "MM-DD"로 변경
  }));

  // 최대 20개로 샘플링
  const maxDataPoints = 20;
  const samplingInterval = Math.max(
    1,
    Math.floor(formattedData.length / maxDataPoints)
  );

  const sampledData = formattedData.filter(
    (_, index) => index % samplingInterval === 0
  );


  return (

    <ResponsiveContainer 
     className={isVisible ? "slide-up" : ""}
     style={{
       visibility: isVisible ? "visible" : "hidden",
       opacity: isVisible ? 1 : 0,
     }}
     width="70%" height={300}>
      <LineChart
        data={sampledData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"  />
        <YAxis
          reversed
          allowDecimals={false} // 정수만 표시
          domain={["auto", "auto"]}
        />
        <Tooltip
          formatter={(value, name, props) => {
            if (name === "rating") return [`${value}위`, "순위"];
            if (name === "solvedNum") return [`${value}문제`, "푼 문제 수"];
            return [value, name];
          }}
          labelFormatter={(label, payload) => {
            const solvedNum = payload?.[0]?.payload?.solvedNum || "정보 없음";
            return  <>
                날짜: {label} <br />
                푼 문제 수: {solvedNum}개
            </>;
          }}
        />
        <Line
          type="monotone"
          dataKey="rating"
          stroke="#4caf50" // 초록색
          activeDot={{ r: 8 }}
        />
        <Brush dataKey="date" height={30} stroke="#4caf50" />
      </LineChart>
    </ResponsiveContainer>

  );
};

export default RankingGraph;