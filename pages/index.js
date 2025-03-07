import React, { useEffect, useState } from "react";

import Layout from "../components/Layout/Layout";
import Title from "../components/MainPage/Title";
import RankingBoxWrap from "../components/MainPage/RankingBoxWrap";
import TodayProblemWrap from "../components/MainPage/TodayProblemWrap";
import EwhaHistoryBoxWrap from "../components/MainPage/EwhaHistoryBoxWrap";
import { mainApi } from "../apis/mainApi";
import { EwhaHistoryApi } from "../apis/EwhaHistoryAPI";
import RankingGraph from "../components/MainPage/RankingGraph"

const Home = () => {
  const [data, setData] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);
      try {
        const [response, historyResponse] = await Promise.all([
          mainApi(),
          EwhaHistoryApi(),
        ]);
        
        if (response && historyResponse) {
          setData(response);
          setHistoryData(historyResponse);
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
      <RankingBoxWrap RankingBoxData={data?.groupInfo} />
      <RankingGraph ewhaHistoryData={historyData} />
      <EwhaHistoryBoxWrap ewhaHistoryBoxData={historyData} />
      <TodayProblemWrap rawData={data?.todayPSList} />
    </Layout>
  );
};

export default Home;