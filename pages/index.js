import React, { useEffect, useState } from "react";

import Layout from "../components/Layout/Layout";
import Title from "../components/MainPage/Title";
import RankingBoxWrap from "../components/MainPage/RankingBoxWrap";
import TodayProblemWrap from "../components/MainPage/TodayProblemWrap";
import { mainApi } from "../apis/mainApi";

const Home = () => {
  const [data, setData] = useState(null); // 초기값을 null로 설정
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await mainApi();
        if (response) {
          setData(response);
        } else {
          throw new Error("데이터가 비어 있습니다.");
        }
      } catch (error) {
        setError(error.message || "데이터를 불러오는 중 에러가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <Title />
      <RankingBoxWrap RankingBoxData={data.groupInfo} />
      <TodayProblemWrap rawData={data} />
    </Layout>
  );
};

export default Home;
