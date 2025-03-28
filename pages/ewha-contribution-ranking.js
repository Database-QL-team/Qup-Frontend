import React from "react";
import Layout from "../components/Layout/Layout";
import Title from "../components/ui/Title";
import EwhaContributionRankingTable from "../components/EwhaContributionRankingPage/EwhaContributionRankingTable";
import EwhaContributionRankingButton from "../components/EwhaContributionRankingPage/EwhaContributionRankingButton";


const EwhaContributionRanking = () => {
  const mockRankingData = [
    { rank: 1, handle: "celina324", score: 120 },
    { rank: 2, handle: "sunnism03", score: 110 },
    { rank: 3, handle: "hamster", score: 95 },
    { rank: 4, handle: "아직 mock data입니다", score: 80 },
    { rank: 5, handle: "아직 mock data입니다", score: 75 },
  ];

  return (
    <Layout>
      <Title sentence={"- 이화랭킹 -"} />
      <div style={{ width: "70%" }}>
      <EwhaContributionRankingButton />
      </div>
      <EwhaContributionRankingTable rankingData={mockRankingData} />
    </Layout>
  );
};

export default EwhaContributionRanking;